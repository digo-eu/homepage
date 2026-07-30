import { cookies } from 'next/headers'

const WEB_TARGET = 'https://digo-eu.com/fibula/'
// Manter em sincronia com PORTS em Scripts/BackendCalls/google_auth_desktop.gd
const DESKTOP_PORTS = ['38460', '38461', '38462', '38463', '38464']
// Manter em sincronia com KEY_PREFIX em Scripts/BackendCalls/google_auth_web.gd
const KEY_PREFIX = 'fibula_auth.'

function targetFor(desktopPort?: string): string {
  return desktopPort ? `http://127.0.0.1:${desktopPort}/` : WEB_TARGET
}

// Página servida à popup: grava o resultado no localStorage da origem (que o
// jogo compartilha mesmo isolado) e tenta se fechar. Nada de window.opener.
function popupResponse(state: string, payload: Record<string, string>) {
  const key = JSON.stringify(KEY_PREFIX + state)
  const value = JSON.stringify(JSON.stringify(payload))
  const html = `<!doctype html><html lang="pt-BR"><meta charset="utf-8">
<title>Fibula</title>
<body style="font-family:sans-serif;text-align:center;padding-top:4em">
<h2>Login concluído!</h2>
<p>Você já pode fechar esta aba e voltar ao jogo.</p>
<script>
  try { window.localStorage.setItem(${key}, ${value}); } catch (e) {}
  // Pode ser no-op: depois da troca de browsing context group causada pelo
  // COOP a janela deixa de ser "script-closable". Daí o texto acima.
  window.close();
</script>
</body></html>`
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'Set-Cookie': 'pkce_verifier=; path=/; Max-Age=0; SameSite=Lax; Secure',
    },
  })
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  // state = "<verifier>" | "<verifier>.<porta>" | "<verifier>.popup"
  const state = searchParams.get('state') ?? ''
  const [stateVerifier, suffix] = state.split('.')
  const isPopup = suffix === 'popup'
  const desktopPort = typeof suffix === 'string' && DESKTOP_PORTS.includes(suffix)
    ? suffix
    : undefined

  const cookieStore = cookies()
  const codeVerifier = stateVerifier || cookieStore.get('pkce_verifier')?.value

  const fail = (reason: string) =>
    isPopup
      ? popupResponse(state, { auth_error: reason })
      : Response.redirect(targetFor(desktopPort) + '?auth_error=' + reason)

  if (!code || !codeVerifier) return fail('missing_params')

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.REDIRECT_URI!,
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      code_verifier: codeVerifier,
    })
  })

  const tokens = await tokenRes.json()

  if (!tokens.id_token) {
    console.error('Google token exchange failed:', JSON.stringify(tokens))
    return fail('token_failed')
  }

  if (isPopup) return popupResponse(state, { id_token: tokens.id_token })

  return new Response(null, {
    status: 302,
    headers: {
      'Location': targetFor(desktopPort) + '?id_token=' + tokens.id_token,
      'Set-Cookie': 'pkce_verifier=; path=/; Max-Age=0; SameSite=Lax; Secure',
    }
  })
}
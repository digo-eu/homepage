import { cookies } from 'next/headers'

const WEB_TARGET = 'https://digo-eu.com/fibula/'
// Faixa de loopback do cliente desktop (google_auth_desktop.gd)
const DESKTOP_PORTS = ['38460', '38461', '38462', '38463', '38464']

function targetFor(desktopPort?: string): string {
  return desktopPort ? `http://127.0.0.1:${desktopPort}/` : WEB_TARGET
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  // state = "<verifier>" (web) ou "<verifier>.<porta>" (desktop)
  const [stateVerifier, portCandidate] = (searchParams.get('state') ?? '').split('.')
  const desktopPort = typeof portCandidate === 'string' && DESKTOP_PORTS.includes(portCandidate)
    ? portCandidate
    : undefined

  // Desktop não tem o cookie (navegador do sistema): o verifier vem do state.
  const cookieStore = cookies()
  const codeVerifier = stateVerifier || cookieStore.get('pkce_verifier')?.value

  if (!code || !codeVerifier) {
    return Response.redirect(targetFor(desktopPort) + '?auth_error=missing_params')
  }

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
    return Response.redirect(targetFor(desktopPort) + '?auth_error=token_failed')
  }

  return new Response(null, {
    status: 302,
    headers: {
      'Location': targetFor(desktopPort) + '?id_token=' + tokens.id_token,
      'Set-Cookie': 'pkce_verifier=; path=/; Max-Age=0; SameSite=Lax; Secure',
    }
  })
}
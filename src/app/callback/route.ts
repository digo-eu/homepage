export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const codeVerifier = searchParams.get('code_verifier') // we'll send this from Godot
    
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code!,
      redirect_uri: process.env.REDIRECT_URI!,
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      code_verifier: codeVerifier!,
    })
  })

    const tokens = await tokenRes.json()

    if (!tokens.id_token) {
        return Response.redirect(`https://digo-eu.com/fibula/?auth_error=token_failed`)
    }

    return Response.redirect(`https://digo-eu.com/fibula/?id_token=${tokens.id_token}`)
}
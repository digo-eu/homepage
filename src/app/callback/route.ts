export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  // Redirect back into the Godot app, passing the code along
  return Response.redirect(`https://digo-eu.com/fibula?auth_code=${code}`)
}
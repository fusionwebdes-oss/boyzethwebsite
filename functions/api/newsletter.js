export async function onRequest(context) {
  const headers = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" }
  if (context.request.method === "OPTIONS") return new Response(null, { status: 204, headers })
  if (context.request.method !== "POST") return new Response("Method not allowed", { status: 405, headers })

  try {
    const { email } = await context.request.json()
    if (!email) return new Response(JSON.stringify({ error: "Email is required" }), { status: 400, headers: { ...headers, "Content-Type": "application/json" } })

    const body = { from: "Boyzeth Website <onboarding@resend.dev>", to: ["hello@boyzethsolutions.com"], subject: "New Newsletter Subscriber", html: `<h2>New Newsletter Subscriber</h2><p>A new user has subscribed to the newsletter:</p><p><strong>Email:</strong> ${email}</p>` }
    await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${context.env.RESEND_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify(body) })
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { ...headers, "Content-Type": "application/json" } })
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to subscribe" }), { status: 500, headers: { ...headers, "Content-Type": "application/json" } })
  }
}

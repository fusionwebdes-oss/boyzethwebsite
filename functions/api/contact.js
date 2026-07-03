export async function onRequest(context) {
  const headers = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" }
  if (context.request.method === "OPTIONS") return new Response(null, { status: 204, headers })
  if (context.request.method !== "POST") return new Response("Method not allowed", { status: 405, headers })

  try {
    const { name, email, phone, service, message } = await context.request.json()
    if (!name || !email || !service || !message) return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400, headers: { ...headers, "Content-Type": "application/json" } })

    const body = { from: "Boyzeth Website <onboarding@resend.dev>", to: ["hello@boyzethsolutions.com"], subject: `New Contact Enquiry from ${name}`, html: `<h2>New Contact Form Submission</h2><table style="border-collapse:collapse;width:100%;max-width:600px"><tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Name</td><td style="padding:8px;border-bottom:1px solid #eee">${name}</td></tr><tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Email</td><td style="padding:8px;border-bottom:1px solid #eee">${email}</td></tr><tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Phone</td><td style="padding:8px;border-bottom:1px solid #eee">${phone || "Not provided"}</td></tr><tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Service</td><td style="padding:8px;border-bottom:1px solid #eee">${service}</td></tr><tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Message</td><td style="padding:8px;border-bottom:1px solid #eee">${message}</td></tr></table>` }
    await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${context.env.RESEND_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify(body) })
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { ...headers, "Content-Type": "application/json" } })
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send message" }), { status: 500, headers: { ...headers, "Content-Type": "application/json" } })
  }
}

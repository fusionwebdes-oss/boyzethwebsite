import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(request: Request) {
  try {
    const { name, email, phone, business, url } = await request.json()

    if (!name || !email || !phone || !business || !url) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    await resend.emails.send({
      from: "Boyzeth Website <onboarding@resend.dev>",
      to: "hello@boyzethsolutions.com",
      subject: `New Free Audit Report Request from ${name}`,
      html: `
        <h2>New Free Audit Report Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Name</td><td style="padding:8px;border-bottom:1px solid #eee">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Email</td><td style="padding:8px;border-bottom:1px solid #eee">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Phone</td><td style="padding:8px;border-bottom:1px solid #eee">${phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Business</td><td style="padding:8px;border-bottom:1px solid #eee">${business}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Scanned URL</td><td style="padding:8px;border-bottom:1px solid #eee">${url}</td></tr>
        </table>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error("Audit report form error:", error)
    return Response.json({ error: "Failed to request audit report" }, { status: 500 })
  }
}

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json()

    if (!name || !email || !service || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    await resend.emails.send({
      from: "Boyzeth Website <onboarding@resend.dev>",
      to: "hello@boyzethsolutions.com",
      subject: `New Contact Enquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Name</td><td style="padding:8px;border-bottom:1px solid #eee">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Email</td><td style="padding:8px;border-bottom:1px solid #eee">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Phone</td><td style="padding:8px;border-bottom:1px solid #eee">${phone || "Not provided"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Service</td><td style="padding:8px;border-bottom:1px solid #eee">${service}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Message</td><td style="padding:8px;border-bottom:1px solid #eee">${message}</td></tr>
        </table>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return Response.json({ error: "Failed to send message" }, { status: 500 })
  }
}

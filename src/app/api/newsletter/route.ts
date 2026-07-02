import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 })
    }

    await resend.emails.send({
      from: "Boyzeth Website <onboarding@resend.dev>",
      to: "hello@boyzethsolutions.com",
      subject: "New Newsletter Subscriber",
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p>A new user has subscribed to the newsletter:</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error("Newsletter form error:", error)
    return Response.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}

import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Missing fields.' }, { status: 400 })
  }

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      sender: { name: 'Islands Tourister Contact', email: 'islandstourister@gmail.com' },
      to: [{ email: 'islandstourister@gmail.com', name: 'Islands Tourister' }],
      replyTo: { email, name },
      subject: `New enquiry from ${name}`,
      textContent: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      htmlContent: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#264d52">
          <h2 style="margin:0 0 20px;font-size:20px">New Enquiry — Islands Tourister</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 12px;background:#f7f4ec;font-weight:600;width:80px">Name</td>
              <td style="padding:8px 12px;border-left:3px solid #70ac90">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;background:#f7f4ec;font-weight:600">Email</td>
              <td style="padding:8px 12px;border-left:3px solid #70ac90">${email}</td>
            </tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#f7f4ec;border-left:3px solid #70ac90;white-space:pre-wrap">${message}</div>
          <p style="margin-top:20px;font-size:12px;color:#999">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    }),
  })

  if (!res.ok) {
    const err = await res.json()
    console.error('Brevo error:', err)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

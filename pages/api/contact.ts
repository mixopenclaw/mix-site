import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { ok: boolean; message?: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, message: 'Method not allowed' })
  try {
    const { name, email, message } = req.body || {}
    if (!name || !email || !message) return res.status(400).json({ ok: false, message: 'Missing fields' })

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
    const SENDGRID_FROM = process.env.SENDGRID_FROM || 'no-reply@mix-site.local'
    const SENDGRID_TO = process.env.CONTACT_TO_EMAIL || SENDGRID_FROM

    if (!SENDGRID_API_KEY) {
      // No provider configured — return a clear error so the front-end can show a friendly message
      return res.status(501).json({ ok: false, message: 'No email provider configured. Set SENDGRID_API_KEY in your Vercel project env vars.' })
    }

    const payload = {
      personalizations: [{ to: [{ email: SENDGRID_TO }], subject: `New contact from ${name}` }],
      from: { email: SENDGRID_FROM },
      content: [{ type: 'text/plain', value: `Name: ${name}\nEmail: ${email}\n\n${message}` }]
    }

    const r = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (!r.ok) {
      const text = await r.text()
      return res.status(502).json({ ok: false, message: `SendGrid error: ${r.status} ${text}` })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('contact api error', err)
    return res.status(500).json({ ok: false, message: 'Server error' })
  }
}

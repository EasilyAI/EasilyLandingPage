// Minimal Vercel serverless function to forward contact form submissions via email.
// Uses Resend's HTTP API (no extra dependencies required).
export const config = {
  api: {
    bodyParser: true,
  },
};

const missing = (value) => !value || !String(value).trim();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, company, interest, website } = req.body || {};

  // Honeypot bot check – align with the front-end field name.
  if (website) {
    return res.status(204).end();
  }

  if (missing(name) || missing(email)) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO; // Where you want to receive notifications
  const from = process.env.CONTACT_FROM; // Must be a verified Resend domain/sender

  if (!apiKey || !to || !from) {
    return res
      .status(500)
      .json({ error: 'Email not configured (check env vars)' });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || '-'}`,
    `Company: ${company || '-'}`,
    `Interest: ${interest || '-'}`,
  ].join('\n');

  const payload = {
    from,
    to: [to],
    reply_to: email,
    subject: `New contact form submission from ${name}`,
    text,
  };

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error('Resend API error', detail);
      return res.status(502).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend send error', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}


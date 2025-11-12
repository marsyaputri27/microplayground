// api/gemini.js
// Serverless function untuk Vercel: proxy aman ke Gemini
import "dotenv/config";

export default async function handler(req, res) {
  // Hanya izinkan POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server misconfigured: GEMINI_API_KEY not set' });
  }

  try {
    const { prompt } = req.body || {};
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Missing prompt' });
    }

    const payload = {
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }]
        }
      ]
    };

    const upstream = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
    );

    const txt = await upstream.text();
    let data;
    try { data = JSON.parse(txt); } catch { data = { raw: txt }; }

    return res.status(upstream.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Upstream request failed', detail: String(err?.message || err) });
  }
}

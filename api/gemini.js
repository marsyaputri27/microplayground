// api/gemini.js
export default async function handler(req, res) {
  // Preflight CORS (kalau kamu akses beda origin; kalau same-origin, ini aman juga)
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  // kalau file HTMLnya dilayani dari domain yang sama, kamu bisa set ke origin spesifik juga
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');

  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const { prompt } = req.body || {};
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Missing prompt' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'Server misconfigured: API key not set' });

    const upstream = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await upstream.json();
    return res.status(upstream.ok ? 200 : upstream.status).json(data);
  } catch (err) {
    return res.status(502).json({ error: 'Upstream call failed', detail: String(err) });
  }
}

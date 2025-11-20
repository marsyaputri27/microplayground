// api/gemini.js
const DEFAULT_MODELS = [
  process.env.GEMINI_MODEL || 'gemini-2.5-flash',
  process.env.GEMINI_MODEL_FALLBACK || 'gemini-2.0-flash'
].filter(Boolean);
const REQUEST_TIMEOUT = Number(process.env.GEMINI_TIMEOUT_MS) || 20000;

async function callGemini(model, prompt, apiKey) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);
  try {
    const upstream = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }]
        }),
        signal: controller.signal
      }
    );

    let data;
    try {
      data = await upstream.json();
    } catch {
      data = null;
    }

    return { upstream, data, model };
  } finally {
    clearTimeout(timeoutId);
  }
}

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

    const errors = [];
    for (const model of DEFAULT_MODELS) {
      try {
        const { upstream, data } = await callGemini(model, prompt, apiKey);
        if (upstream.ok) {
          return res.status(200).json({ ...data, modelUsed: model });
        }

        const errPayload = {
          model,
          status: upstream.status,
          detail: data?.error || data || null
        };
        errors.push(errPayload);

        // Jika error 4xx selain 429, tidak ada gunanya mencoba model lain.
        if (upstream.status < 500 && upstream.status !== 429) {
          return res.status(upstream.status).json({
            error: 'Gemini API error',
            detail: errPayload
          });
        }
        // Untuk 5xx/429 coba model berikutnya.
      } catch (err) {
        errors.push({ model, error: String(err) });
      }
    }

    return res.status(502).json({
      error: 'Semua model Gemini gagal dipanggil',
      attempts: errors
    });
  } catch (err) {
    return res.status(502).json({ error: 'Upstream call failed', detail: String(err) });
  }
}

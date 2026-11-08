// Receives { subject, text, replyTo } from the website's contact function
// (via a Cloudflare service binding) and emails it to the church office
// using Resend. The recipient is fixed in wrangler.jsonc, so this can't
// email anyone else.

interface Env {
  RESEND_API_KEY?: string;
  FROM_ADDRESS: string;
  TO_ADDRESS: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== 'POST') return new Response('Not found', { status: 404 });
    if (!env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY secret is not set');
      return Response.json({ ok: false, error: 'not-set-up' }, { status: 503 });
    }

    let msg: { subject?: unknown; text?: unknown; replyTo?: unknown };
    try {
      msg = await request.json();
    } catch {
      return Response.json({ ok: false, error: 'bad-request' }, { status: 400 });
    }

    const subject = String(msg.subject ?? '').replace(/[\r\n]/g, ' ').slice(0, 200);
    const text = String(msg.text ?? '').slice(0, 10000);
    const replyTo = String(msg.replyTo ?? '').replace(/[\r\n]/g, '').slice(0, 320);
    if (!subject || !text) return Response.json({ ok: false, error: 'bad-request' }, { status: 400 });

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env.FROM_ADDRESS,
        to: [env.TO_ADDRESS],
        subject,
        text,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });

    if (!res.ok) {
      console.error('Resend send failed:', res.status, (await res.text()).slice(0, 500));
      return Response.json({ ok: false, error: 'send-failed' }, { status: 502 });
    }
    return Response.json({ ok: true });
  },
};

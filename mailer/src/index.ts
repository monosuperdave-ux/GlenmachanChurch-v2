// Receives { subject, text, replyTo } from the website's contact function
// (via a Cloudflare service binding) and emails it to the church office.
// The recipient is fixed in wrangler.jsonc, so this can't email anyone else.

interface Env {
  EMAIL: { send: (msg: Record<string, unknown>) => Promise<unknown> };
  FROM_ADDRESS: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== 'POST') return new Response('Not found', { status: 404 });

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

    try {
      await env.EMAIL.send({
        from: env.FROM_ADDRESS,
        subject,
        text,
        ...(replyTo ? { replyTo } : {}),
      });
      return Response.json({ ok: true });
    } catch (err) {
      console.error('Email send failed:', err instanceof Error ? err.message : err);
      return Response.json({ ok: false, error: 'send-failed' }, { status: 502 });
    }
  },
};

// ─────────────────────────────────────────────────────────────
// Cloudflare Pages Function: POST /api/contact
//
// Takes a message from the website's contact form and emails it to the
// church office. It does NOT save anything: no database, no files, no logs
// of the message content. Once the email is sent, the website forgets it.
//
// Needs setting up once in Cloudflare (we'll do this together):
//   CONTACT_EMAIL  – an email-sending binding whose destination is the
//                    church office inbox (a verified address)
//   FROM_ADDRESS   – e.g. website@glenmachanchurch.org
// Until then it replies "not set up", and the form offers the visitor
// an "open in my email" button instead.
// ─────────────────────────────────────────────────────────────

interface Env {
  CONTACT_EMAIL?: { send: (msg: Record<string, unknown>) => Promise<unknown> };
  FROM_ADDRESS?: string;
}

const REASONS = [
  'Prayer request',
  'I’d like to talk to a pastor',
  'Planning a visit',
  'Information about a group or event',
  'Getting involved or volunteering',
  'Something else',
];

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

const clean = (v: unknown, max: number) => String(v ?? '').replace(/\r/g, '').trim().slice(0, max);
const oneLine = (v: string) => v.replace(/\n/g, ' ');

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'bad-request' }, 400);
  }

  // Spam checks: hidden field filled in, or form sent impossibly fast.
  // Pretend it worked so bots learn nothing.
  if (clean(data.website, 200) || Number(data.elapsed) < 3000) return json({ ok: true });

  const name = oneLine(clean(data.name, 120));
  const email = oneLine(clean(data.email, 320));
  const phone = oneLine(clean(data.phone, 30));
  const reason = REASONS.includes(String(data.reason)) ? String(data.reason) : '';
  const sharing = oneLine(clean(data.sharing, 60));
  const message = clean(data.message, 5000);

  if (!name || !reason || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: 'missing-fields' }, 400);
  }

  if (!env.CONTACT_EMAIL || !env.FROM_ADDRESS) return json({ ok: false, error: 'not-set-up' }, 503);

  const isPrayer = reason === 'Prayer request';
  const text = [
    `New message from the Glenmachan website`,
    ``,
    `About:  ${reason}`,
    `Name:   ${name}`,
    `Email:  ${email}`,
    phone ? `Phone:  ${phone}` : '',
    isPrayer ? `Who can know about this request: ${sharing || 'Pastors only'}` : '',
    ``,
    `Message:`,
    message,
    ``,
    `—`,
    `Reply to this email to answer ${name} directly.`,
    `This message is not stored on the website. Please delete it once it has been dealt with,`,
    `in line with the church privacy notice.`,
  ]
    .filter((line, i, all) => line !== '' || all[i - 1] !== '')
    .join('\n');

  try {
    await env.CONTACT_EMAIL.send({
      from: env.FROM_ADDRESS,
      subject: `Website: ${reason} – ${name}`,
      text,
      replyTo: email,
    });
    return json({ ok: true });
  } catch {
    return json({ ok: false, error: 'send-failed' }, 502);
  }
};

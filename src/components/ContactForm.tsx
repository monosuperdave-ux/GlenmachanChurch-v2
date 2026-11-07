import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Mail } from 'lucide-react';
import { church } from '@/data/church';

// ─────────────────────────────────────────────────────────────
// CONTACT & PRAYER FORM
// The form sends the message to /api/contact (functions/api/contact.ts),
// which emails it straight to the church office and stores nothing.
// If that isn't set up or fails, the visitor is offered a button that
// opens their own email app with the message already filled in.
// ─────────────────────────────────────────────────────────────

export const reasons = [
  'Prayer request',
  'I’d like to talk to a pastor',
  'Planning a visit',
  'Information about a group or event',
  'Getting involved or volunteering',
  'Something else',
];

type Status = 'idle' | 'sending' | 'sent' | 'fallback';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [reason, setReason] = useState('');
  const [mailto, setMailto] = useState('');
  const [startedAt] = useState(Date.now());

  const isPrayer = reason === 'Prayer request';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formEl = event.currentTarget;
    const form = new FormData(formEl);
    const data = {
      name: String(form.get('name') ?? '').trim(),
      email: String(form.get('email') ?? '').trim(),
      phone: String(form.get('phone') ?? '').trim(),
      reason: String(form.get('reason') ?? ''),
      sharing: String(form.get('sharing') ?? ''),
      message: String(form.get('message') ?? '').trim(),
      website: String(form.get('website') ?? ''), // hidden spam trap
      elapsed: Date.now() - startedAt,
    };

    // Ready-made email in case the website can't send it
    const lines = [`Name: ${data.name}`];
    if (data.phone) lines.push(`Phone: ${data.phone}`);
    lines.push(`About: ${data.reason}`);
    if (data.sharing) lines.push(`Who can know: ${data.sharing}`);
    lines.push('', data.message);
    const body = lines.join('\n');
    setMailto(`mailto:${church.email}?subject=${encodeURIComponent(`Website: ${data.reason}`)}&body=${encodeURIComponent(body)}`);

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => null);
      if (res.ok && result?.ok) {
        setStatus('sent');
        formEl.reset();
        setReason('');
        return;
      }
    } catch {
      // fall through to the email option
    }
    setStatus('fallback');
  };

  if (status === 'sent') {
    return (
      <div className="success-state" role="status">
        <div className="success-icon"><Check size={25} /></div>
        <h3>Thank you for getting in touch.</h3>
        <p>Your message has been sent to the church office, and we’ll get back to you as soon as we can.</p>
        <p>If it’s urgent, please call us on <a href={church.phoneLink}>{church.phone}</a>.</p>
        <button className="text-link" onClick={() => setStatus('idle')}>Send another message <ArrowRight size={17} /></button>
      </div>
    );
  }

  if (status === 'fallback') {
    return (
      <div className="success-state" role="alert">
        <div className="success-icon fallback"><Mail size={25} /></div>
        <h3>Sorry, we couldn’t send that from the website.</h3>
        <p>Nothing has been saved. Press the button below to open your email with your message already written, then press send.</p>
        <a className="button button-primary" href={mailto}>Open in my email <ArrowRight size={16} /></a>
        <p>Or email us at <a href={`mailto:${church.email}`}>{church.email}</a>, or call {church.phone}.</p>
        <button className="text-link" onClick={() => setStatus('idle')}>Back to the form <ArrowRight size={17} /></button>
      </div>
    );
  }

  return (
    <form className="prayer-form" onSubmit={handleSubmit} noValidate={false}>
      <label>How can we help? *
        <select name="reason" required value={reason} onChange={(e: ChangeEvent<HTMLSelectElement>) => setReason(e.target.value)}>
          <option value="" disabled>Please choose…</option>
          {reasons.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
      </label>
      <div className="form-row">
        <label>Name *<input name="name" type="text" autoComplete="name" required maxLength={120} /></label>
        <label>Email *<input name="email" type="email" autoComplete="email" required maxLength={320} /></label>
      </div>
      <label>Phone <span className="optional">(optional, if you’d like us to call you)</span><input name="phone" type="tel" autoComplete="tel" maxLength={30} /></label>
      <label>{isPrayer ? 'What would you like us to pray about? *' : 'Your message *'}
        <textarea name="message" required maxLength={5000} rows={5} />
      </label>

      {isPrayer && (
        <fieldset className="choice-group">
          <legend>Who can know about this request? *</legend>
          <label className="check-label"><input type="radio" name="sharing" value="Pastors only" required defaultChecked /> <span>Our pastors only</span></label>
          <label className="check-label"><input type="radio" name="sharing" value="Pastors and the church prayer team" /> <span>Our pastors and the church prayer team</span></label>
        </fieldset>
      )}

      {/* Spam trap: hidden from people, bots fill it in */}
      <div className="hp-field" aria-hidden="true">
        <label>Leave this empty<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <label className="check-label consent">
        <input name="consent" type="checkbox" required />
        <span>I agree to Glenmachan Church using these details to reply to me{isPrayer ? ' and to pray for this request' : ''}. *</span>
      </label>
      <p className="form-privacy">
        Your message is emailed to the church office. It is not stored on this website, and we never add you to a mailing list.
        Read our <Link to="/privacy">privacy notice</Link>.
      </p>

      <button className="button button-primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'} <ArrowRight size={17} />
      </button>
    </form>
  );
}

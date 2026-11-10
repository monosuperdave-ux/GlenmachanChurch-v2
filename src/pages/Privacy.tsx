import { church } from '@/data/church';

// Keep this page up to date if the website ever starts collecting anything new
// (sign-ups, analytics, online giving, etc.).

export default function Privacy() {
  return (
    <>
      <section className="page-hero" aria-labelledby="privacy-title">
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> Your information</div>
          <h1 id="privacy-title">Privacy &amp; <em>cookies</em></h1>
          <p className="hero-lede">What this website collects, why, and what we do with it.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container narrow legal">
          <p className="updated">Last updated: November 2026</p>

          <h2>Who we are</h2>
          <p>This website is run by {church.name}, a registered charity in Northern Ireland (charity number {church.charityNumber}), Glenmachan Road, Belfast, BT4 2NL. For any question about your information, contact the Church Office at <a href={`mailto:${church.email}`}>{church.email}</a> or {church.phone}.</p>

          <h2>Visiting the website</h2>
          <p>We do not ask you to create an account, we do not run analytics or advertising trackers, and we do not set cookies of our own.</p>

          <h2>Our contact and prayer form</h2>
          <p>If you use the form on our homepage, we ask for your name, email address, an optional phone number and your message. If you send a prayer request, it may include personal or sensitive details, such as information about health or faith. Please only share what you are comfortable with.</p>
          <ul>
            <li><strong>Why we use it:</strong> to reply to you and, for prayer requests, to pray for you. We use it only because you have agreed to this when sending the form.</li>
            <li><strong>Where it goes:</strong> your message is sent by email to the Church Office inbox. It is not saved on this website or in any website database.</li>
            <li><strong>Who sends the email:</strong> we use an email service called Resend to deliver the message to our inbox. Resend keeps a copy of each email for up to 30 days, so delivery problems can be checked, and then deletes it. See the <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noreferrer">Resend privacy policy</a>.</li>
            <li><strong>Who sees it:</strong> church office staff and our pastors. For prayer requests, our church prayer team sees it only if you choose that option on the form.</li>
            <li><strong>How long we keep it:</strong> only as long as we need to deal with your message. We then delete the email.</li>
            <li><strong>What we never do:</strong> we never add you to a mailing list, and we never sell or pass on your details.</li>
          </ul>
          <p>You can ask us at any time what information we hold about you, or ask us to correct or delete it, by contacting the Church Office. If you are unhappy with how we have handled your information, you can complain to the Information Commissioner’s Office at <a href="https://ico.org.uk" target="_blank" rel="noreferrer">ico.org.uk</a>.</p>

          <h2>Videos, maps and Facebook</h2>
          <p>Some pages show content from other services. When these load, the service may set its own cookies or collect information about your visit, under its own privacy policy:</p>
          <ul>
            <li>YouTube videos (we use YouTube’s privacy-enhanced mode): <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google privacy policy</a></li>
            <li>Google Maps: <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google privacy policy</a></li>
            <li>Facebook posts on our homepage, shown using a service called Elfsight: <a href="https://elfsight.com/privacy-policy/" target="_blank" rel="noreferrer">Elfsight privacy policy</a> and <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noreferrer">Meta privacy policy</a></li>
          </ul>

          <h2>Hosting</h2>
          <p>This website is hosted by Cloudflare, which processes basic technical information (such as IP addresses) to deliver the site and protect it from attacks. Messages from the contact form also pass through Cloudflare on their way to Resend, but Cloudflare does not keep them. See the <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer">Cloudflare privacy policy</a>.</p>

          <h2>Managing cookies</h2>
          <p>You can block or delete cookies in your browser’s settings. The site will still work, although some videos, maps or Facebook posts may not show.</p>
        </div>
      </section>
    </>
  );
}

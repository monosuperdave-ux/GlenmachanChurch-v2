import { Link } from 'react-router-dom';
import { ArrowRight, Cross, HeartHandshake, MessageCircle, Sparkles, Sunrise } from 'lucide-react';

// "Our message is Hope": the church's Gospel message.
// Wording from the church's own document ("Website Gospel Message"), kept word for word apart from
// two small fixes ("our our" and capital-B "Bible"). Please don't reword it without checking with the church.
// The "contact us" buttons open the homepage contact form with the right choice already picked
// (see src/components/ContactForm.tsx).

const steps: { verse: string; ref: string; text: string }[] = [
  {
    verse: '“For all have sinned and fall short of the glory of God”',
    ref: 'Romans 3:23',
    text: 'The Bible tells us that we have ‘all sinned’ – every single one of us – none of us in our strength can meet the standard of the glory of God – we have all, by our very nature, fallen short.',
  },
  {
    verse: '“Your iniquities are separating you from God, and your sins have hidden his face from you”',
    ref: 'Isaiah 59:2',
    text: 'Our sin introduces a problem. It creates a gap between us and God that we cannot cross, an obstacle between us and God that we cannot overcome ourselves.',
  },
  {
    verse: '“For the wages of sin is death…”',
    ref: 'Romans 6:23',
    text: 'This same sin which separates us from the God who created us to be his image bearers, and which we cannot overcome ourselves, will lead us only to death.',
  },
];

const questions = [
  'Do we believe what the Bible says about God?',
  'Do we believe what the Bible says about us and the consequences of our sin?',
  'Do we believe what the Bible says about Jesus Christ, His death and His resurrection?',
];

export default function Hope() {
  return (
    <>
      <section className="page-hero" aria-labelledby="hope-title">
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> The good news</div>
          <h1 id="hope-title">Our message is <em>Hope</em></h1>
          <p className="hero-lede">At Glenmachan we believe that the message of the Bible, the message of the Gospel, is one of HOPE.</p>
        </div>
      </section>

      <section className="pillars-section" aria-labelledby="hope-all-title">
        <div className="container">
          <div className="center-heading">
            <div className="section-label">Hope for all people</div>
            <h2 id="hope-all-title">A hope <span>for everyone.</span></h2>
          </div>
          <div className="pillars">
            <article className="pillar"><div className="pillar-number">01</div><HeartHandshake size={27} /><h3>Reconciled</h3><p>Hope for all people to find reconciliation to the God who created them through what Jesus Christ accomplished by his death on the cross and his resurrection three days later.</p></article>
            <article className="pillar"><div className="pillar-number">02</div><Sparkles size={27} /><h3>Set free</h3><p>Hope for all people to be set free from the power of sin to live lives radically and completely transformed by the power of the Holy Spirit!</p></article>
            <article className="pillar"><div className="pillar-number">03</div><Sunrise size={27} /><h3>Eternal life</h3><p>Hope for all people of eternal life in heaven after their death on earth!</p></article>
          </div>
        </div>
      </section>

      <section className="page-section" aria-labelledby="hope-where-title">
        <div className="container">
          <div className="center-heading">
            <div className="section-label">The problem</div>
            <h2 id="hope-where-title">Where does that <span>hope come from?</span></h2>
            <p className="hope-intro">When we say at Glenmachan that we believe the Bible, we mean we believe what it says about God, but also what it says about each of us.</p>
          </div>
          <ol className="belief-list">
            {steps.map((s, i) => (
              <li className="belief-card" key={s.ref}>
                <span className="belief-number">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{s.verse} <span className="verse-ref">{s.ref}</span></h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section alt" aria-labelledby="hope-good-news-title">
        <div className="container split">
          <div>
            <div className="section-label">The good news</div>
            <h2 id="hope-good-news-title">So where is <span>the hope?</span></h2>
            <div className="prose">
              <p>So where is the hope? Where exactly is the good news of the gospel?!?</p>
              <p className="hope-verse">“For the wages of sin is death but the free gift of God is eternal life in Christ Jesus” <span>Romans 6:23</span></p>
              <p className="hope-verse">“But God proves his own love for us in that while we were still sinners, Christ died for us.” <span>Romans 5:8</span></p>
              <p>Those four words are the HOPE of the gospel. In fact we could even reduce it down to just one! “CHRIST”.</p>
              <p>The truth of that statement is a personal one. Just as it is true that when “all have sinned” the ‘all’ of that verse includes ‘you’. When the Bible says “Christ died for us” the ‘us’ includes you too – if you believe.</p>
            </div>
          </div>
          <div className="feature-quote">
            <div className="feature-quote-icon"><Cross size={24} /></div>
            <p>“Christ died for us”</p>
            <span>Romans 5:8</span>
          </div>
        </div>
      </section>

      <section className="page-section" aria-labelledby="hope-response-title">
        <div className="container narrow">
          <div className="section-label">Your response</div>
          <h2 id="hope-response-title">What must I do <span>to be saved?</span></h2>
          <div className="prose">
            <p className="hope-verse">“Sirs, what must I do to be saved?” They said “believe in the Lord Jesus, and you will be saved” <span>Acts 16:31</span></p>
            <p>The gospel message demands a response from each of us.</p>
          </div>
          <ol className="hope-questions">
            {questions.map((q) => <li key={q}>{q}</li>)}
          </ol>
          <div className="prose">
            <p>When we answer those questions with a ‘yes’, when we turn away (repent) from our sins and turn towards Jesus Christ as our saviour then the HOPE of the gospel becomes our personal HOPE!</p>
            <p>A life radically and miraculously transformed by the Holy Spirit within us becomes our life!</p>
          </div>
        </div>
      </section>

      <section className="page-section alt" aria-labelledby="hope-prayer-title">
        <div className="container narrow">
          <div className="section-label">A simple prayer</div>
          <h2 id="hope-prayer-title">So, how will you <span>respond to God?</span></h2>
          <div className="prose">
            <p>If your answer to the three questions above is “yes” then you can tell God that – you can pray a simple prayer using words like these:</p>
          </div>
          <blockquote className="feature-quote hope-prayer">
            <p>Jesus,</p>
            <p>I know that I can’t save myself and I know that you have promised to save those who repent and put their faith in you.</p>
            <p>I believe what the Bible says about you and what it says about me, and I trust you to forgive my sins and give me eternal life.</p>
            <p>Thank you for loving me so much that you died for me in my place, to save me.</p>
          </blockquote>
        </div>
      </section>

      <section className="page-section" aria-labelledby="hope-next-title">
        <div className="container">
          <div className="center-heading">
            <div className="section-label">What’s next?</div>
            <h2 id="hope-next-title">We’d love to <span>hear from you.</span></h2>
          </div>
          <div className="info-grid">
            <article className="info-card orange">
              <div className="info-icon"><HeartHandshake size={22} /></div>
              <h3>I’ve prayed the prayer</h3>
              <p>If you have prayed that prayer then you have taken your first breath in a life transformed by the power of the Holy Spirit and you are taking your first steps in the freedom that Christ’s death has bought you.</p>
              <p>We would be delighted to hear from you and speak to you more about it. Please contact us and let us know!</p>
              <Link className="button button-dark hope-button" to="/?reason=prayed#contact">Let us know <ArrowRight size={16} /></Link>
            </article>
            <article className="info-card">
              <div className="info-icon"><MessageCircle size={22} /></div>
              <h3>I’m not sure yet</h3>
              <p>If you are still not sure but would like to speak to one of our team further then please contact us straight away and we’d be delighted to chat some more.</p>
              <Link className="button button-outline hope-button" to="/?reason=know-more#contact">Talk to someone <ArrowRight size={16} /></Link>
            </article>
            <article className="info-card wide welcome-note">
              <h3>“See, now is the acceptable time; now is the day of salvation”</h3>
              <p>2 Corinthians 6:2</p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>Come and <span>see us.</span></h2>
          <p>You’ll find a warm welcome at Glenmachan every Sunday at 11:00am and 6:00pm.</p>
          <Link className="text-link" to="/plan-your-visit">Plan your visit <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}

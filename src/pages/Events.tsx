import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock3, MapPin, Ticket, Users } from 'lucide-react';
import { livePromos } from '@/data/promo';
import { church } from '@/data/church';

// "What's On": upcoming special events, soonest first. The events themselves live in
// src/data/promo.ts, and each one disappears by itself after its date.

export default function Events() {
  const events = livePromos();

  return (
    <>
      <section className="page-hero" aria-labelledby="events-title">
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> Upcoming events at Glenmachan</div>
          <h1 id="events-title">What’s <em>on</em></h1>
          <p className="hero-lede">Special nights, dinners and days out coming up in the life of our church family. Everyone is welcome, so bring a friend.</p>
        </div>
      </section>

      <section className="page-section" aria-labelledby="events-list-title">
        <div className="container">
          <div className="section-label">Coming up</div>
          <h2 id="events-list-title">Upcoming <span>events.</span></h2>

          {events.length === 0 ? (
            <div className="events-empty">
              <p>There are no special events listed just now. Keep an eye on this page and our Facebook page, and in the meantime there’s plenty going on every week.</p>
              <Link className="text-link" to="/church-life">See our weekly groups <ArrowRight size={17} /></Link>
            </div>
          ) : (
            <ol className="events-list">
              {events.map((e) => (
                <li key={e.title}>
                  <article className={e.image ? 'event-card' : 'event-card no-image'}>
                    {e.image && <img src={e.image} alt={e.imageAlt ?? ''} loading="lazy" decoding="async" />}
                    <div>
                      <div className="section-label">{e.label}</div>
                      <h3>{e.title}</h3>
                      <ul className="promo-facts">
                        <li><CalendarDays size={17} /> {e.when}</li>
                        {e.where && <li><MapPin size={17} /> {e.where}</li>}
                        {e.cost && <li><Ticket size={17} /> {e.cost}</li>}
                      </ul>
                      <p>{e.description}</p>
                      {e.buttonText && e.buttonLink && <Link className="button button-orange" to={e.buttonLink}>{e.buttonText} <ArrowRight size={16} /></Link>}
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      <section className="page-section alt" aria-labelledby="events-weekly-title">
        <div className="container">
          <div className="section-label">Every week</div>
          <h2 id="events-weekly-title">Something on <span>all week long.</span></h2>
          <div className="info-grid">
            <article className="info-card">
              <div className="info-icon"><Clock3 size={22} /></div>
              <h3>Sunday services</h3>
              <p><strong>11:00am</strong> morning service, with Sunday School and Youth Church, and <strong>6:00pm</strong> evening family service in the coffee bar.</p>
              <Link className="text-link" to="/plan-your-visit">Plan your visit <ArrowRight size={17} /></Link>
            </article>
            <article className="info-card orange">
              <div className="info-icon"><Users size={22} /></div>
              <h3>Groups for every age</h3>
              <p>Children and youth, women, men, seniors and prayer: there are groups and meetings at Glenmachan all through the week.</p>
              <Link className="text-link" to="/church-life">See church life <ArrowRight size={17} /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>Want to <span>know more?</span></h2>
          <p>Get in touch with the church office about any event, or follow us on Facebook for the latest news.</p>
          <div className="page-hero-actions centered">
            <Link className="button button-dark" to="/?reason=event#contact">Ask about an event <ArrowRight size={16} /></Link>
            <a className="button button-outline" href={church.facebook} target="_blank" rel="noreferrer">Follow us on Facebook</a>
          </div>
        </div>
      </section>
    </>
  );
}

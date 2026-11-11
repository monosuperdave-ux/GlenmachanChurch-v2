import { ArrowRight } from 'lucide-react';
import GroupCard, { slugFor } from '@/components/GroupCard';
import { categories, groupsIn } from '@/data/churchLife';
import { church } from '@/data/church';

// Support Ministries has its own page (it used to be a section of Church Life).
// The ministries listed here are the groups with category: 'support' in src/data/churchLife.ts.

export default function SupportMinistries() {
  const support = categories.find((c) => c.id === 'support');
  const ministries = groupsIn('support');

  return (
    <>
      <section className="page-hero" aria-labelledby="support-title">
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> You don’t have to face it alone</div>
          <h1 id="support-title">Support <em>ministries</em></h1>
          <p className="hero-lede">Practical help, care and prayer, close to home and further afield.</p>
        </div>
      </section>

      <nav className="jump-nav" aria-label="Jump to a ministry">
        <div className="container">
          {ministries.map((m) => <a key={m.name} href={`#${slugFor(m.name)}`}>{m.name}</a>)}
        </div>
      </nav>

      <section className="page-section" aria-labelledby="support-list-title">
        <div className="container">
          <div className="life-category-head">
            <h2 id="support-list-title">How we help</h2>
            <div>
              <p>{support?.intro}</p>
              {support?.verse && <blockquote>{support.verse}</blockquote>}
            </div>
          </div>
          <div className="group-grid">
            {ministries.map((g) => <GroupCard key={g.name} group={g} withId />)}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>Need help, or know <span>someone who does?</span></h2>
          <p>Contact the church office in confidence and we’ll point you to the right person.</p>
          <div className="page-hero-actions centered">
            <a className="button button-dark" href={`mailto:${church.email}`}>Email us <ArrowRight size={16} /></a>
            <a className="button button-outline" href={church.phoneLink}>Call {church.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}

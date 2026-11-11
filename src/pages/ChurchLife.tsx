import { Link } from 'react-router-dom';
import { ArrowRight, HandHeart } from 'lucide-react';
import GroupCard from '@/components/GroupCard';
import { categories, groupsIn } from '@/data/churchLife';
import { church } from '@/data/church';

// Support Ministries has its own page now (src/pages/SupportMinistries.tsx), so it's left out here.
const lifeCategories = categories.filter((c) => c.id !== 'support');

export default function ChurchLife() {
  return (
    <>
      <section className="page-hero" aria-labelledby="life-title">
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> There’s a place for you</div>
          <h1 id="life-title">Church <em>life</em></h1>
          <p className="hero-lede">Groups and meetings for every age and stage, all through the week.</p>
        </div>
      </section>

      <nav className="jump-nav" aria-label="Jump to a group">
        <div className="container">
          {lifeCategories.map((c) => <a key={c.id} href={`#${c.id}`}>{c.title}</a>)}
          <Link to="/support-ministries">Support Ministries</Link>
        </div>
      </nav>

      {lifeCategories.map((c, i) => (
        <section key={c.id} id={c.id} className={i % 2 ? 'page-section alt' : 'page-section'} aria-labelledby={`${c.id}-title`}>
          <div className="container">
            <div className="life-category-head">
              <h2 id={`${c.id}-title`}>{c.title}</h2>
              <div>
                <p>{c.intro}</p>
                {c.verse && <blockquote>{c.verse}</blockquote>}
              </div>
            </div>
            <div className="group-grid">
              {groupsIn(c.id).map((g) => <GroupCard key={g.name} group={g} />)}
            </div>
          </div>
        </section>
      ))}

      <section className="page-cta">
        <div className="container">
          <h2>Want to <span>find out more?</span></h2>
          <p>Get in touch with the church office and we’ll point you to the right person.</p>
          <div className="page-hero-actions centered">
            <a className="button button-dark" href={`mailto:${church.email}`}>Email us <ArrowRight size={16} /></a>
            <a className="button button-outline" href={church.phoneLink}>Call {church.phone}</a>
          </div>
          <p><Link className="text-link" to="/support-ministries"><HandHeart size={17} /> Looking for help or support? See our support ministries <ArrowRight size={17} /></Link></p>
        </div>
      </section>
    </>
  );
}

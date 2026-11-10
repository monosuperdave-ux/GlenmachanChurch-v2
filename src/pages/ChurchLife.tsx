import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, MapPin, Users } from 'lucide-react';
import { categories, groupsIn, type Group } from '@/data/churchLife';
import { church } from '@/data/church';

function GroupCard({ group }: { group: Group }) {
  return (
    <article className="group-card">
      <div className="group-card-head">
        <h3>{group.name}</h3>
        {!group.confirmed && <span className="to-confirm" title="Details still being checked">To confirm</span>}
      </div>
      <ul className="group-facts">
        {group.who && <li><Users size={15} /> {group.who}</li>}
        {group.when && <li><CalendarDays size={15} /> {group.when}</li>}
        {group.where && <li><MapPin size={15} /> {group.where}</li>}
      </ul>
      {group.quote && <blockquote className="group-quote">{group.quote}</blockquote>}
      <p>{group.description}</p>
      {group.sections && (
        <dl className="group-sections">
          {group.sections.map((s) => (
            <div key={s.name}><dt>{s.name}</dt><dd>{s.detail}</dd></div>
          ))}
        </dl>
      )}
      {group.link && <Link className="text-link" to={group.link.to}>{group.link.label} <ArrowRight size={17} /></Link>}
      {group.alsoHere && (
        <div className="group-also">
          <h3>{group.alsoHere.name}</h3>
          <ul className="group-facts">
            {group.alsoHere.who && <li><Users size={15} /> {group.alsoHere.who}</li>}
            {group.alsoHere.when && <li><CalendarDays size={15} /> {group.alsoHere.when}</li>}
            {group.alsoHere.where && <li><MapPin size={15} /> {group.alsoHere.where}</li>}
          </ul>
          <p>{group.alsoHere.description}</p>
        </div>
      )}
    </article>
  );
}

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
          {categories.map((c) => <a key={c.id} href={`#${c.id}`}>{c.title}</a>)}
        </div>
      </nav>

      {categories.map((c, i) => (
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
        </div>
      </section>
    </>
  );
}

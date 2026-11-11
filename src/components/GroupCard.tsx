import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, MapPin, Users } from 'lucide-react';
import type { Group } from '@/data/churchLife';

// One group or ministry card, used on the Church Life and Support Ministries pages.
// All the wording comes from src/data/churchLife.ts.

// Turns a name like "SALT Ministry" into "salt-ministry", for links straight to a card
export const slugFor = (name: string) =>
  name.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function GroupCard({ group, withId = false }: { group: Group; withId?: boolean }) {
  return (
    <article className="group-card" id={withId ? slugFor(group.name) : undefined}>
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

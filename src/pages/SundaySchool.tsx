import { Link } from 'react-router-dom';
import { ArrowRight, Baby, BookOpen, CalendarDays, Clock3, DoorOpen, Mail, Phone, ShieldCheck, Sprout, UserRound, Users } from 'lucide-react';
import { church } from '@/data/church';

// Sunday School and Youth Church, which run during the 11:00am Sunday service.
// Group leaders confirmed by the church, November 2026. If a leader changes, update the
// `groups` list below and the Sunday School card in src/data/churchLife.ts.

const groups = [
  {
    name: 'Sunday School',
    ages: 'Pre-school to Year 7',
    leader: 'Laura McCauley',
    icon: Sprout,
    text: 'A safe, age-appropriate place where the Bible is taught in a creative and relevant way, so that even our youngest children can discover how much God loves them.',
  },
  {
    name: 'Youth Church',
    ages: 'Year 8 to Year 10',
    leader: 'Sonya Morrow',
    icon: Users,
    text: 'Our younger teens have their own service, with singing, a Bible lesson and small-group time, in a space where they can ask real questions and grow in faith together.',
  },
  {
    name: 'Youth Church',
    ages: 'Year 11 to Year 14',
    leader: 'Lauren Osborne',
    icon: BookOpen,
    text: 'Our older teens have their own service too, with singing, a Bible lesson and small-group time, digging deeper into what it means to follow Jesus as they head towards adult life.',
  },
];

// Special Sundays and events through the year. Dates for the summer scheme go in the homepage
// promo (src/data/promo.ts) nearer the time.
const highlights = [
  {
    name: 'Christmas parties',
    when: 'December',
    text: 'A chance for every group to celebrate Christmas together with their friends and leaders.',
  },
  {
    name: 'Christmas Nativity',
    when: 'December, Sunday morning',
    text: 'Our Sunday School leads the whole morning service as they tell the Christmas story. Bring the grandparents!',
  },
  {
    name: 'Prize-giving',
    when: 'June, Sunday morning',
    text: 'During the morning service we celebrate every child’s year and give out their prizes.',
  },
  {
    name: 'Summer scheme',
    when: 'Sundays in the summer holidays',
    text: 'Sunday School keeps going all summer with our summer scheme, every Sunday during the school holidays. Watch this website for details nearer the time.',
  },
];

export default function SundaySchool() {
  return (
    <>
      <section className="page-hero" aria-labelledby="ss-title">
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> Sunday mornings for children and young people</div>
          <h1 id="ss-title">Sunday School <em>&amp; Youth Church</em></h1>
          <p className="hero-lede">Every Sunday during our 11:00am service, children and young people meet in their own groups to learn about Jesus in a way that fits their age.</p>
        </div>
      </section>

      <section className="page-section" aria-labelledby="ss-about">
        <div className="container split">
          <div>
            <div className="section-label">Growing up with God’s Word</div>
            <h2 id="ss-about">A place for every child <span>to belong.</span></h2>
            <div className="prose">
              <p>At Glenmachan we want every child and young person to know that they are loved by God and welcome in His church. Sunday School and Youth Church give them the chance to hear the Bible, ask questions and build friendships, at a level that suits their age.</p>
              <p>There is a group for every age, from pre-school right up to Year 14, all running at the same time as the Sunday morning service. That means the whole family can come to church together, with something just right for everyone.</p>
              <p>None of it would happen without our faithful teachers and helpers, who give their time every single week. We are so thankful for each one of them.</p>
            </div>
          </div>
          <div className="feature-quote">
            <div className="feature-quote-icon"><Sprout size={24} /></div>
            <p>“Start children off on the way they should go, and even when they are old they will not turn from it.”</p>
            <span>Proverbs 22:6</span>
          </div>
        </div>
      </section>

      <section className="page-section alt" aria-labelledby="ss-groups">
        <div className="container">
          <div className="section-label">Our groups</div>
          <h2 id="ss-groups">A group for <span>every age.</span></h2>
          <p className="with-icon section-note"><CalendarDays size={16} /> Every Sunday, during the 11:00am service</p>
          <div className="ss-groups">
            {groups.map(({ name, ages, leader, icon: Icon, text }) => (
              <article className="info-card" key={ages}>
                <div className="info-icon"><Icon size={22} /></div>
                <h3>{name}</h3>
                <p className="ss-ages">{ages}</p>
                <p>{text}</p>
                <p className="with-icon ss-leader"><UserRound size={16} /> <span>Led by <strong>{leader}</strong></span></p>
              </article>
            ))}
          </div>
          <article className="info-card wide welcome-note ss-thanks">
            <h3>Our teachers and helpers</h3>
            <p>Every group is supported each week by a faithful team of teachers and helpers. Thank you to everyone who prepares, teaches, welcomes and prays, week in, week out.</p>
          </article>
        </div>
      </section>

      <section className="page-section" aria-labelledby="ss-year">
        <div className="container">
          <div className="section-label">Through the year</div>
          <h2 id="ss-year">Highlights to <span>look forward to.</span></h2>
          <div className="info-sublist brigade-sections ss-year">
            {highlights.map((h) => (
              <div key={h.name}><strong>{h.name}</strong><span className="ss-when">{h.when}</span><p>{h.text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt" aria-labelledby="ss-first">
        <div className="container">
          <div className="section-label">Your first Sunday</div>
          <h2 id="ss-first">Bringing your children <span>for the first time?</span></h2>
          <div className="info-grid">
            <article className="info-card">
              <div className="info-icon"><DoorOpen size={22} /></div>
              <h3>How the morning works</h3>
              <p>Children start the service sitting with you. After the time of worship, at around 11:30am, they head out to their own groups.</p>
              <p>Leaving your children somewhere new can feel like a big step, so arrive a few minutes early and let one of our Deacons know it’s your first time. We’ll gladly show you round and introduce you to the leaders before the service starts.</p>
            </article>
            <article className="info-card orange">
              <div className="info-icon"><ShieldCheck size={22} /></div>
              <h3>Safe and cared for</h3>
              <p>All of our Sunday School and Youth Church teachers are Access NI checked and trained, so you can relax and enjoy the service knowing your children are in safe hands.</p>
            </article>
            <article className="info-card">
              <div className="info-icon"><Baby size={22} /></div>
              <h3>Little ones</h3>
              <p>Our nursery is a safe and comfortable area for nursing mothers and pre-nursery children, where you can still watch the service.</p>
            </article>
            <article className="info-card orange">
              <div className="info-icon"><Clock3 size={22} /></div>
              <h3>After the service</h3>
              <p>Stay for coffee and fellowship after the service. It’s a great time for your family to get to know people, and for your children to see their new friends again.</p>
            </article>
            <article className="info-card wide orange">
              <div className="info-icon"><Phone size={22} /></div>
              <h3>Any questions?</h3>
              <p>Get in touch with the church office and we’ll be glad to help, or put you in touch with the right leader.</p>
              <p className="with-icon"><Phone size={16} /> <a href={church.phoneLink}>{church.phone}</a></p>
              <p className="with-icon"><Mail size={16} /> <a href={`mailto:${church.email}`}>{church.email}</a></p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>See you <span>on Sunday.</span></h2>
          <p>Everything you need to know before your first visit is on our Plan Your Visit page.</p>
          <div className="page-hero-actions centered">
            <Link className="button button-dark" to="/plan-your-visit">Plan your visit <ArrowRight size={16} /></Link>
            <Link className="button button-outline" to="/church-life#children">All children’s and youth groups</Link>
          </div>
        </div>
      </section>
    </>
  );
}

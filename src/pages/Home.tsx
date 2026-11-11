import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarDays,
  Check,
  Facebook,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Youtube,
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import worshipTeamImg from '@/assets/Worship_Team.jpg';
import aerialImg from '@/assets/Glenmachan_soft_edges.jpg';
import { groups, type CategoryId } from '@/data/churchLife';
import { church } from '@/data/church';
import { promo, promoIsLive } from '@/data/promo';

// Homepage "Life at Glenmachan" cards. The group names come from src/data/churchLife.ts
const activities: { title: string; categories: CategoryId[]; link: string; tone: string }[] = [
  { title: 'Children & Youth', categories: ['children', 'youth'], link: '/church-life#children', tone: 'blue' },
  { title: 'Women, Men & Seniors', categories: ['women', 'men', 'seniors'], link: '/church-life#women', tone: 'orange' },
  { title: 'Prayer', categories: ['prayer'], link: '/church-life#prayer', tone: 'slate' },
  { title: 'Support Ministries', categories: ['support'], link: '/support-ministries', tone: 'blue' },
];
const namesFor = (cats: CategoryId[]) => groups.filter((g) => cats.includes(g.category)).flatMap((g) => (g.alsoHere ? [g.name, g.alsoHere.name] : [g.name])).join(' · ');

export default function Home() {
  // Loads the Elfsight platform script (once) for the Facebook feed widget
  useEffect(() => {
    const src = 'https://elfsightcdn.com/platform.js';
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-image" style={{ backgroundImage: `linear-gradient(90deg, rgba(8,26,38,.8), rgba(10,35,48,.34) 58%, rgba(8,26,38,.23)), url(${aerialImg})` }} />
          <div className="hero-glow" />
          <div className="hero-content container mobile-hero-reposition">
            <div className="eyebrow light mobile-eyebrow"><span /> A church family in East Belfast</div>
            <div className="mobile-title-block">
              <h1 id="hero-title">Welcome to<br /><em>Glenmachan</em></h1>
            </div>
            <div className="mobile-center-paragraph">
              <p className="hero-lede mobile-subtitle">A city on a hill, shining God’s hope across East Belfast.</p>
              <p className="hero-copy mobile-copy">We’re a welcoming church family where people of all ages can belong, grow in faith, and discover the hope found in Jesus Christ.</p>
            </div>
          </div>
          <div className="hero-links mobile-hero-links" aria-label="Quick links">
            <a className="hero-link" href="https://www.youtube.com/@GLENMACHANdotORG" target="_blank" rel="noreferrer"><Youtube size={15} /> <span>Watch online</span></a>
            <a className="hero-link" href="#contact"><HeartHandshake size={15} /> <span>Request prayer</span></a>
            <a className="hero-link" href="https://www.facebook.com/glenmachan.church" target="_blank" rel="noreferrer"><Facebook size={15} /> <span>Facebook</span></a>
          </div>
          <div className="scroll-note desktop-scroll-note"><span /> Scroll to explore</div>
        </section>

        {/* WHAT'S ON promo: switch it on or off in src/data/promo.ts */}
        {promoIsLive() && (
          <section className="promo-band" aria-labelledby="promo-title">
            <div className={promo.image ? 'container promo-grid' : 'container promo-grid no-image'}>
              {promo.image && <img src={promo.image} alt={promo.imageAlt} loading="lazy" />}
              <div>
                <div className="section-label">{promo.label}</div>
                <h2 id="promo-title">{promo.title}</h2>
                <p className="promo-when"><CalendarDays size={17} /> {promo.when}</p>
                <p>{promo.description}</p>
                {promo.buttonText && <Link className="button button-orange" to={promo.buttonLink}>{promo.buttonText} <ArrowRight size={16} /></Link>}
              </div>
            </div>
          </section>
        )}

        <section className="welcome section container" id="about">
          <div className="section-label">Welcome home</div>
          <div className="welcome-grid">
            <div className="welcome-copy">
              <h2>A place to belong,<br /><span>grow and shine.</span></h2>
              <p className="lead">At Glenmachan, we believe church is more than a place to attend. It’s a family to belong to.</p>
              <p>Whether you’re exploring Christianity, returning to church, or searching for a church home, you’ll find a warm welcome here. United in Christ and rooted in community, we seek to worship God, care for one another and share His hope throughout East Belfast and beyond.</p>
              <div className="link-row">
                <Link className="text-link" to="/plan-your-visit">Find your place at Glenmachan <ArrowRight size={17} /></Link>
                <Link className="text-link" to="/about">About us and what we believe <ArrowRight size={17} /></Link>
              </div>
            </div>
            <div className="welcome-photo photo-frame"><img className="web-image-feather" src={worshipTeamImg} alt="The Glenmachan worship team leading a service" loading="lazy" decoding="async" width={1200} height={800} /><span className="photo-stamp">A warm<br /><strong>welcome</strong><br />awaits</span></div>
          </div>
        </section>

        <section className="pillars-section">
          <div className="container">
            <div className="center-heading"><div className="section-label">Our heartbeat</div><h2>Belong. Grow. <span>Shine.</span></h2><p>Three simple words that shape who we are and how we live together.</p></div>
            <div className="pillars">
              <article className="pillar"><div className="pillar-number">01</div><Users size={27} /><h3>Belong</h3><p>A welcoming church family where everyone has a place and every story matters.</p><Link to="/plan-your-visit" aria-label="Learn about belonging"><ArrowRight size={18} /></Link></article>
              <article className="pillar"><div className="pillar-number">02</div><Sparkles size={27} /><h3>Grow</h3><p>Growing together through worship, prayer and the life-changing truth of God’s Word.</p><a href="#services" aria-label="Learn about growing"><ArrowRight size={18} /></a></article>
              <article className="pillar"><div className="pillar-number">03</div><HeartHandshake size={27} /><h3>Shine</h3><p>Sharing God’s hope and love across East Belfast and beyond, wherever we are.</p><a href="#visit" aria-label="Learn about shining"><ArrowRight size={18} /></a></article>
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="container services-grid">
            <div className="services-intro"><div className="section-label">Make room for the good</div><h2>Join us<br /><span>this week.</span></h2><p>Come as you are. There’s a seat and a friendly face waiting for you.</p><Link className="button button-dark" to="/plan-your-visit">Plan your visit <ArrowRight size={17} /></Link></div>
            <div className="service-list">
              <article className="service-card featured"><div className="service-time"><span>Sundays</span><strong>11:00<small>am</small></strong></div><div><h3>Sunday Morning Service</h3><p>Family Worship · Communion · Sunday School · Youth Church</p><span className="service-note">Coffee & fellowship after the service.</span></div><ArrowRight className="service-arrow" size={20} /></article>
              <article className="service-card"><div className="service-time"><span>Sundays</span><strong>6:00<small>pm</small></strong></div><div><h3>Sunday Evening Family Service</h3><p>A relaxed and welcoming gathering with Bible teaching, fellowship and refreshments.</p><span className="service-note">Everyone is welcome.</span></div><ArrowRight className="service-arrow" size={20} /></article>
              <article className="service-card"><div className="service-time"><span>Wednesday</span><strong>7:30<small>pm</small></strong></div><div><h3>Midweek Prayer Gathering</h3><p>A time of prayer, worship and seeking God together.</p></div><ArrowRight className="service-arrow" size={20} /></article>
            </div>
          </div>
        </section>

        <section className="life section container" id="church-life">
          <div className="life-header"><div><div className="section-label">There’s a place for you</div><h2>Life at <span>Glenmachan.</span></h2></div><p>From children and youth ministries to community outreach, support groups, and weekly fellowship, there is a vibrant place for you and your family to belong, grow, and serve at Glenmachan.</p></div>
          <div className="life-grid"><div className="life-photo-collage photo-frame"><img className="web-image-feather life-photo-feature" src="/images/Glenmachan_Photo_Collage.webp" loading="lazy" decoding="async" width={1000} height={1500} alt="Collage showing fellowship, community activities, teaching, and outdoor time at Glenmachan" /><div className="photo-caption">Rooted in our<br /><strong>community</strong></div></div><div className="activity-list">{activities.map((activity) => <Link to={activity.link} className={`activity-card ${activity.tone}`} key={activity.title}><div className="activity-icon"><CalendarDays size={19} /></div><div><h3>{activity.title}</h3><p>{namesFor(activity.categories)}</p></div><ArrowRight size={19} /></Link>)}<Link className="text-link" to="/church-life">See all groups and meeting times <ArrowRight size={17} /></Link></div></div>
        </section>

        <section className="leadership section" id="leadership">
          <div className="container"><div className="center-heading"><div className="section-label">Meet the team</div><h2>Here to <span>serve.</span></h2><p>Our pastors are here to walk with you through every season.</p></div><div className="leaders"><article className="leader-card"><div className="leader-avatar avatar-blue">PC</div><div><h3>Peter Comfort</h3><span>Senior Pastor</span><p>Providing spiritual leadership, biblical teaching and pastoral care to the Glenmachan church family.</p></div></article><article className="leader-card"><div className="leader-avatar avatar-orange">AS</div><div><h3>Alan Stephens</h3><span>Assistant Pastor</span><p>Supporting the ministry of the church through leadership, discipleship and pastoral care.</p></div></article></div></div>
        </section>

        <section className="media section" id="watch">
          <div className="container media-grid">
            <div className="media-col">
              <div className="section-label">Catch up online</div>
              <h2>Watch <span>latest.</span></h2>
              <p className="media-intro">Missed a Sunday? Catch up on our most recent messages and livestreams anytime.</p>
              <div className="video-card" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  title="Glenmachan Church YouTube Uploads"
                  src="https://www.youtube-nocookie.com/embed/videoseries?list=UUPbVdwA94cp7y8XfDK0yatA"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="link-row">
                <Link className="text-link" to="/sermons">All sermons <ArrowRight size={17} /></Link>
                <a className="text-link" href={church.youtube} target="_blank" rel="noreferrer">Visit our YouTube channel <ArrowRight size={17} /></a>
              </div>
            </div>
            <div className="media-col">
              <div className="section-label">Stay connected</div>
              <h2>From our <span>Facebook page.</span></h2>
              <p className="media-intro">News, encouragements and what's happening in the life of our church family.</p>
              <div className="fb-card" style={{ borderRadius: '12px', overflow: 'hidden', background: '#fff', minHeight: '380px', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div className="elfsight-app-fb98b956-de7a-43a0-8dae-e1d12f411c58" data-elfsight-app-lazy="" />
              </div>
              <a className="media-link" href="https://www.facebook.com/glenmachan.church" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '1rem', color: '#1877F2', fontWeight: 600, textDecoration: 'none' }}>
                <Facebook size={18} /> Visit our Facebook page <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="prayer section" id="contact" aria-labelledby="contact-title">
          <div className="container prayer-grid">
            <div className="prayer-copy">
              <div className="section-label light">You don’t have to face it alone</div>
              <h2 id="contact-title">How can we<br /><span>help or pray?</span></h2>
              <p>Whether you’d like prayer, want to talk to one of our pastors, are planning a visit or just have a question, we’d love to hear from you. Share as much or as little as you like.</p>
              <div className="confidential-note"><ShieldCheck size={20} /><span>Your message goes straight to the church office by email. Nothing is stored on this website.</span></div>
              <p className="contact-alt">Prefer to talk? Call <a href={church.phoneLink}>{church.phone}</a> or email <a href={`mailto:${church.email}`}>{church.email}</a>.</p>
            </div>
            <div className="prayer-form-wrap"><ContactForm /></div>
          </div>
        </section>

        <section className="visit section" id="visit"><div className="container visit-grid"><div className="visit-details"><div className="section-label">Come and see us</div><h2>Find <span>us.</span></h2><p className="visit-intro">We’d love to welcome you through our doors.</p><div className="address"><MapPin size={21} /><div><strong>{church.name}</strong><p>{church.addressLines[0]}<br />{church.addressLines[1]}</p></div></div><div className="contact-line"><a href={church.phoneLink}><Phone size={18} /> {church.phone}</a><a href={`mailto:${church.email}`}><Mail size={18} /> {church.email}</a></div><a className="button button-dark" href={church.directionsLink} target="_blank" rel="noreferrer">Get directions <ArrowRight size={16} /></a></div><div className="map-card"><iframe title="Map showing Glenmachan Church of God" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2310.4106970842527!2d-5.846846224246041!3d54.61437347268409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48610a307118a731%3A0x16ea94eedc198e26!2sGlenmachan%20Church%20of%20God!5e0!3m2!1sen!2suk!4v1792747311957!5m2!1sen!2suk" loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" style={{ border: 0, width: '100%', height: '100%' }} /></div></div></section>

      {/* Mobile structural CSS adjustments injected safely */}
      <style>{`
        @media (max-width: 768px) {
          .hero {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            padding-top: 5rem !important;
            padding-bottom: 2rem !important;
            min-height: 100vh;
          }
          .mobile-hero-reposition {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            flex-grow: 1;
            width: 100%;
            padding-top: 0.5rem;
            padding-left: 20px;
            padding-right: 20px;
          }
          .mobile-eyebrow {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
            align-self: flex-start;
          }
          .mobile-title-block {
            width: 100%;
            text-align: left;
            margin-bottom: auto;
          }
          .mobile-center-paragraph {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: auto 0;
            text-align: center !important;
            padding: 1rem 0;
          }
          .mobile-subtitle {
            text-align: center !important;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .mobile-copy {
            text-align: center !important;
            max-width: 92%;
            margin-left: auto;
            margin-right: auto;
          }
          .desktop-scroll-note {
            display: none !important;
          }
          .mobile-hero-links {
            margin-top: auto;
            margin-bottom: 1rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start !important;
            gap: 0.85rem;
            width: 100%;
          }
          .mobile-hero-links .hero-link {
            font-size: 1.15rem !important;
            padding: 0.35rem 0;
          }
          .mobile-hero-links .hero-link svg {
            width: 20px !important;
            height: 20px !important;
          }
        }
      `}</style>
    </>
  );
}

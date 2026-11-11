import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, ExternalLink, HandHeart, Sprout, Sun, Users } from 'lucide-react';

// SONshine Club Kenya Project. Facts taken from their own website (sckp.co.uk, read November 2026).
// Check sponsorship prices and project numbers against their site now and then, as they change.
const site = 'https://sckp.co.uk/';
const donate = 'https://sckp.co.uk/donate/';

export default function SonshineClub() {
  return (
    <>
      <section className="page-hero" aria-labelledby="sckp-title">
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> Mission in Kenya</div>
          <h1 id="sckp-title">SONshine <em>Club</em></h1>
          <p className="hero-lede">Delivering a brighter future for children in Tharaka, Kenya.</p>
        </div>
      </section>

      <section className="page-section" aria-labelledby="sckp-story">
        <div className="container split">
          <div>
            <div className="section-label">Our story</div>
            <h2 id="sckp-story">From a summer Bible club <span>to Kenya.</span></h2>
            <div className="prose">
              <p>The SONshine Club began here at Glenmachan in August 2000, as a week-long summer Bible club for primary school children, full of games, songs and Bible teaching.</p>
              <p>In 2005 the children were encouraged to look beyond themselves, and began bringing pencils, pens, erasers and sharpeners for schools in Tharaka, Kenya, where even basic supplies were desperately needed. The response was overwhelming.</p>
              <p>As the parcels were packed in February 2006, someone wondered aloud whether we could hand out the gifts ourselves. A few weeks later, three women were on a plane to Kenya. They expected to give out stationery and come home. But God had other plans. What they saw first-hand, the poverty, the need, the resilience and the joy, changed everything.</p>
              <p>Twenty years on, the SONshine Club Kenya Project is a registered charity (NIC 103250), run at home entirely by volunteers and working in Kenya with local partners, helping children in great need to thrive and to build a more self-sustaining future.</p>
            </div>
          </div>
          <div className="feature-quote">
            <div className="feature-quote-icon"><Sun size={24} /></div>
            <p>“To assist in the relief of poverty, the furtherance of education and the provision of healthcare and clean safe water, amongst the children in the region of Tharaka, Kenya.”</p>
            <span>Our aim</span>
          </div>
        </div>
      </section>

      <section className="page-section alt" aria-labelledby="sckp-work">
        <div className="container">
          <div className="section-label">What we do</div>
          <h2 id="sckp-work">Hope you can <span>see and touch.</span></h2>
          <div className="info-grid">
            <article className="info-card">
              <div className="info-icon"><Users size={22} /></div>
              <h3>Child sponsorship</h3>
              <p>For <strong>£18 a month</strong>, a sponsored child receives a new school uniform and shoes each year, a goat with training to care for it, and a place in a health care scheme that gives the family access to local clinics and hospitals.</p>
              <p>Where needed, there is also help with solar lamps, mattresses, mosquito nets, water tanks and food. Sponsors receive updates on their child through the year and can write letters.</p>
            </article>
            <article className="info-card">
              <div className="info-icon"><Droplets size={22} /></div>
              <h3>Clean, safe water</h3>
              <p>Each water filter can provide 500 litres of clean water a day, for around £80 including a clean bucket. Since 2017 the project has handed out 150 filters to the families of sponsored children.</p>
            </article>
            <article className="info-card">
              <div className="info-icon"><Sprout size={22} /></div>
              <h3>Gatagani SONshine Farm</h3>
              <p>A two-acre training farm beside the River Tana, in an area that was dry and barren when we first visited in 2006. With pumped water it now grows food for the elderly and most needy, keeps goats, cows and chickens, has a beehive project, and offers training to local farmers.</p>
            </article>
            <article className="info-card orange">
              <div className="info-icon"><HandHeart size={22} /></div>
              <h3>Get involved</h3>
              <p>You can sponsor a child, give towards water filters, goats or the farm, or make a one-off gift. Everything is explained on the SONshine Club’s own website.</p>
              <div className="link-stack">
                <a className="text-link" href={donate} target="_blank" rel="noreferrer">Sponsor a child or donate <ExternalLink size={16} /></a>
                <a className="text-link" href={site} target="_blank" rel="noreferrer">Visit the SONshine Club website <ExternalLink size={16} /></a>
              </div>
            </article>
            <article className="info-card wide welcome-note">
              <h3>Twenty years of SONshine</h3>
              <p>We give thanks for everyone who has served, supported, prayed, travelled, donated and believed in the vision since 2000, and we look forward with faith as the SONshine Club keeps shining Christ’s love into the lives of children who need it most.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <Link className="text-link" to="/support-ministries">See all our support ministries <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, Baby, Car, Clock3, DoorOpen, HeartHandshake, Mail, MapPin, Phone, Shirt } from 'lucide-react';
import { church } from '@/data/church';

export default function PlanYourVisit() {
  return (
    <>
      <section className="page-hero" aria-labelledby="visit-title">
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> First time at Glenmachan?</div>
          <h1 id="visit-title">Plan your <em>visit</em></h1>
          <p className="hero-lede">We’d love to welcome you. Here’s everything you need to know before your first Sunday.</p>
          <div className="page-hero-actions">
            <a className="button button-primary" href={church.directionsLink} target="_blank" rel="noreferrer">Get directions <ArrowRight size={16} /></a>
            <a className="button button-ghost" href="mailto:glenmachanchurch@outlook.com">Ask us a question <Mail size={16} /></a>
          </div>
        </div>
      </section>

      <section className="page-section alt" aria-labelledby="sunday-title">
        <div className="container">
          <div className="center-heading">
            <div className="section-label">Join us this Sunday</div>
            <h2 id="sunday-title">Two services, <span>one family.</span></h2>
            <p>Come as you are. There’s a seat and a friendly face waiting for you.</p>
          </div>
          <div className="visit-service-list">
            <article className="service-card featured">
              <div className="service-time"><span>Sundays</span><strong>11:00<small>am</small></strong></div>
              <div>
                <h3>Sunday Morning Service</h3>
                <p>Praise and worship, communion, prayer and Bible teaching. Sunday School and Youth Church run during the service.</p>
                <span className="service-note">Coffee &amp; fellowship after the service.</span>
              </div>
            </article>
            <article className="service-card">
              <div className="service-time"><span>Sundays</span><strong>6:00<small>pm</small></strong></div>
              <div>
                <h3>Sunday Evening Family Service</h3>
                <p>A relaxed and welcoming gathering with Bible teaching, fellowship and refreshments.</p>
                <span className="service-note">Held in our coffee bar. Everyone is welcome.</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section" aria-labelledby="expect-title">
        <div className="container">
          <div className="center-heading">
            <div className="section-label">What to expect</div>
            <h2 id="expect-title">Before you <span>arrive.</span></h2>
            <p>A few answers to the questions people often ask before their first visit.</p>
          </div>
          <div className="info-grid">
            <article className="info-card">
              <div className="info-icon"><DoorOpen size={22} /></div>
              <h3>Where do I go when I arrive?</h3>
              <p>Head up the main drive and pass Glenmachan Tower House Nursing Home on your left. The main sanctuary building is straight ahead, with the main entrance at the front. Level access is available at the rear.</p>
              <p>Inside, one of our friendly Deacons will greet you. Just let them know it’s your first time and they’ll help you find the sanctuary, toilets and children’s area, including the nursery. If you need anything during your visit, just ask.</p>
            </article>

            <article className="info-card orange">
              <div className="info-icon"><Car size={22} /></div>
              <h3>Where can I park?</h3>
              <p>Parking is free. Please follow the one-way system around the site. At busy times a team helps to manage the car park.</p>
              <p>As well as disabled and accessibility bays, we have a few priority bays for anyone with limited mobility.</p>
            </article>

            <article className="info-card">
              <div className="info-icon"><Clock3 size={22} /></div>
              <h3>How long is the service?</h3>
              <p>Our Sunday services last about 90 minutes. We begin with praise and worship, and spend time in communion (Sunday morning), prayer and listening to God’s Word.</p>
              <Link className="text-link" to="/sermons">Watch or listen to previous messages <ArrowRight size={17} /></Link>
            </article>

            <article className="info-card orange">
              <div className="info-icon"><Shirt size={22} /></div>
              <h3>What should I wear?</h3>
              <p>Most people dress smart casual, but you’re welcome to wear whatever makes you comfortable.</p>
            </article>

            <article className="info-card wide">
              <div className="info-icon"><Baby size={22} /></div>
              <h3>What do you do for my children?</h3>
              <p>We run a Sunday School and a Youth Church during our Sunday morning service. Leaving your children somewhere unfamiliar can feel like a big step, so you’re welcome to ask before the service starts to be shown round and to meet the Sunday School and Youth Team Leaders.</p>
              <div className="info-sublist">
                <div><strong>Sunday School</strong><p>Pre-school to Year 7. A safe, age-appropriate place where the Bible is taught in a creative and relevant way.</p></div>
                <div><strong>Youth Church</strong><p>Year 8 and above. Our youth team provides their own service with a Bible lesson and small-group time.</p></div>
                <div><strong>Nursery</strong><p>A safe and comfortable area for nursing mothers and pre-nursery children, where you can still watch the service.</p></div>
              </div>
            </article>

            <article className="info-card wide welcome-note">
              <div className="info-icon"><HeartHandshake size={22} /></div>
              <h3>Can I come if I’m…?</h3>
              <p>Fill in the blank with whatever worry you have about not being accepted: divorced, a single parent, rich, poor, an addict, a sceptic, too old. Everyone is welcome at Glenmachan. Please come as you are, and we’ll see you on Sunday.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="visit section alt-visit" aria-labelledby="findus-title">
        <div className="container visit-grid">
          <div className="visit-details">
            <div className="section-label">Come and see us</div>
            <h2 id="findus-title">Find <span>us.</span></h2>
            <p className="visit-intro">We’d love to welcome you through our doors.</p>
            <div className="address"><MapPin size={21} /><div><strong>Church of God, Glenmachan</strong><p>{church.addressLines[0]}<br />{church.addressLines[1]}</p></div></div>
            <div className="contact-line">
              <a href={church.phoneLink}><Phone size={18} /> {church.phone}</a>
              <a href="mailto:glenmachanchurch@outlook.com"><Mail size={18} /> glenmachanchurch@outlook.com</a>
            </div>
            <a className="button button-dark" href={church.directionsLink} target="_blank" rel="noreferrer">Get directions <ArrowRight size={16} /></a>
          </div>
          <div className="map-card">
            <iframe title="Map showing Glenmachan Church of God" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2310.4106970842527!2d-5.846846224246041!3d54.61437347268409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48610a307118a731%3A0x16ea94eedc198e26!2sGlenmachan%20Church%20of%20God!5e0!3m2!1sen!2suk!4v1792747311957!5m2!1sen!2suk" loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" style={{ border: 0, width: '100%', height: '100%' }} />
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>See you <span>on Sunday.</span></h2>
          <p>Not sure about anything? Get in touch and we’ll be happy to help.</p>
          <Link className="text-link" to="/">Back to the home page <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}

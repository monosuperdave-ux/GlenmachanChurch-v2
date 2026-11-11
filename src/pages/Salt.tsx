import { Link } from 'react-router-dom';
import { ArrowRight, Facebook, Gift, HandHeart, Handshake, Mail, Package, Phone } from 'lucide-react';
import { church } from '@/data/church';

const saltFacebook = 'https://www.facebook.com/glenmachansalt';

// SALT Ministry: Serving All, Labouring Together.
// Written from the church's older website and SALT's Facebook posts.
// Check the partner organisations and the Christmas figures each year, as they can change.

export default function Salt() {
  return (
    <>
      <section className="page-hero" aria-labelledby="salt-title">
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> Food hamper and support ministry</div>
          <h1 id="salt-title">SALT <em>Ministry</em></h1>
          <p className="hero-lede">Serving All, Labouring Together.</p>
        </div>
      </section>

      <section className="page-section" aria-labelledby="salt-about">
        <div className="container split">
          <div>
            <div className="section-label">About SALT</div>
            <h2 id="salt-about">Called to be <span>salt of the earth.</span></h2>
            <div className="prose">
              <p>SALT is our food hamper and support ministry. The name comes from Matthew 5, where Jesus says we are to be the “salt of the earth”, and from His challenge in Matthew 25 to feed the hungry and care for those in need.</p>
              <p>We respond to referrals for local families in genuine need, from Social Services and other agencies, and from members of our congregation who are worried about a neighbour, colleague or family member who is struggling to put food on the table.</p>
              <p>Small teams of volunteers visit the families referred to us, delivering food and reaching out in friendship, support and fellowship. Each referral is looked at individually.</p>
              <p>All our support is offered without judgement and in complete confidence.</p>
            </div>
          </div>
          <div className="feature-quote">
            <div className="feature-quote-icon"><HandHeart size={24} /></div>
            <p>“For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink, I was a stranger and you invited me in.”</p>
            <span>Matthew 25:35</span>
          </div>
        </div>
      </section>

      <section className="page-section alt" aria-labelledby="salt-how">
        <div className="container">
          <div className="section-label">Faith in action</div>
          <h2 id="salt-how">Love you can <span>deliver.</span></h2>
          <div className="info-grid">
            <article className="info-card">
              <div className="info-icon"><Handshake size={22} /></div>
              <h3>Working together</h3>
              <p>To help as many people as we can, we work alongside local food banks in East Belfast, including Dundonald Foodbank. We give donations to them, and in return can draw on their food hampers to answer the referrals in our area.</p>
              <p>We also work with agencies such as Social Services, Barnardo’s and Women’s Aid.</p>
            </article>
            <article className="info-card">
              <div className="info-icon"><Gift size={22} /></div>
              <h3>Christmas</h3>
              <p>Christmas is our busiest time. With Dundonald Foodbank and our partners, we provide hampers, gifts and vouchers so parents can buy presents for their children, including families supported by Women’s Aid and children whose mums have been victims of trafficking.</p>
              <p>In one Christmas alone, that came to 85 hampers, 180 gifts and over 220 vouchers.</p>
            </article>
            <article className="info-card">
              <div className="info-icon"><Package size={22} /></div>
              <h3>How you can help</h3>
              <p><strong>Volunteer:</strong> help as back-up for one of the delivery teams, or with our fundraising events.</p>
              <p><strong>Give food:</strong> donations of non-perishable food are always welcome. Contact the church office to arrange.</p>
              <p><strong>Give money:</strong> even small regular gifts make a real difference, and you can Gift Aid your donation.</p>
            </article>
            <article className="info-card orange">
              <div className="info-icon"><Phone size={22} /></div>
              <h3>Need help, or know someone who does?</h3>
              <p>Contact the church office in confidence, to ask for help, make a referral or offer your support.</p>
              <p className="with-icon"><Phone size={16} /> <a href={church.phoneLink}>{church.phone}</a></p>
              <p className="with-icon"><Mail size={16} /> <a href={`mailto:${church.email}`}>{church.email}</a></p>
              <p className="with-icon"><Facebook size={16} /> <a href={saltFacebook} target="_blank" rel="noreferrer">SALT on Facebook</a></p>
            </article>
            <article className="info-card wide welcome-note">
              <h3>Salt and light</h3>
              <p>None of this is one person’s effort. It happens because church members, volunteers and partner agencies give their time, gifts and prayers. The church is here to serve our community and to show God’s love to those in need. Thank you to everyone who helps.</p>
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

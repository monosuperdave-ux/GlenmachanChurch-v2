import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CalendarDays, Facebook, Mail, Phone, Shield, Tent, Trophy } from 'lucide-react';
import { church } from '@/data/church';
import { groups } from '@/data/churchLife';

// 79th Belfast Company of the Boys' Brigade.
// Written from the company's Facebook page and the BBNI "About us" page (bbni.org), November 2026.
// The section names, ages, times and halls come from src/data/churchLife.ts, so change them there.
const bbFacebook = 'https://www.facebook.com/79thBelfast';
const bbni = 'https://www.bbni.org/';
const bb = groups.find((g) => g.name === 'Boys’ Brigade');

export default function BoysBrigade() {
  return (
    <>
      <section className="page-hero" aria-labelledby="bb-title">
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> 79th Belfast Company</div>
          <h1 id="bb-title">Boys’ <em>Brigade</em></h1>
          <p className="hero-lede">A growing, thriving, exciting adventure for boys and young men, every Thursday night at Glenmachan.</p>
        </div>
      </section>

      <section className="page-section" aria-labelledby="bb-about">
        <div className="container split">
          <div>
            <div className="section-label">About the 79th</div>
            <h2 id="bb-about">Fun, friendship <span>and faith.</span></h2>
            <div className="prose">
              <p>The 79th Belfast is Glenmachan’s own company of the Boys’ Brigade, for boys from age 3 right up to Year 14. It’s run by trained, caring volunteers from our church, who give their Thursday nights to create a safe and fun place where every boy belongs.</p>
              <p>A typical night might mean a Bible story, a fierce game of unihoc and something baking in the kitchen. Along the way the boys grow in confidence, learn to work as a team, try new things, earn badges and awards, and discover more about God’s love.</p>
              <p>We’re part of the Northern Ireland Boys’ Brigade (BBNI), a church ministry with over 240 groups across Northern Ireland. BB welcomes boys from all communities, all faiths and none.</p>
            </div>
          </div>
          <div className="feature-quote">
            <div className="feature-quote-icon"><Shield size={24} /></div>
            <p>“To raise generations of Christ-like men.”</p>
            <span>The BBNI vision</span>
          </div>
        </div>
      </section>

      {bb?.sections && (
        <section className="page-section alt" aria-labelledby="bb-sections">
          <div className="container">
            <div className="section-label">Sections</div>
            <h2 id="bb-sections">A section for <span>every age.</span></h2>
            <p className="with-icon section-note"><CalendarDays size={16} /> {bb.when}</p>
            <div className="info-sublist brigade-sections">
              {bb.sections.map((s) => (
                <div key={s.name}><strong>{s.name}</strong><p>{s.detail}</p></div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="page-section" aria-labelledby="bb-life">
        <div className="container">
          <div className="section-label">Life in the 79th</div>
          <h2 id="bb-life">Never a <span>dull Thursday.</span></h2>
          <div className="info-grid">
            <article className="info-card">
              <div className="info-icon"><BookOpen size={22} /></div>
              <h3>Bible teaching</h3>
              <p>Every section learns from the Bible at a level that suits their age, from the Juniors hearing the story of Jonah and the whale to the older boys’ Bible class.</p>
            </article>
            <article className="info-card">
              <div className="info-icon"><Trophy size={22} /></div>
              <h3>Games, skills and badges</h3>
              <p>Unihoc and other sports, crafts, music and plenty of baking. Boys earn badges and awards as they go, and older boys can work towards the Duke of Edinburgh’s Award.</p>
            </article>
            <article className="info-card">
              <div className="info-icon"><Tent size={22} /></div>
              <h3>Camps and outings</h3>
              <p>Our weekend camp is a highlight of the year: safe, fun and full of memories. We also head away with the 216th Belfast Girls’ Brigade for a joint camp weekend of zip lines, water slides, boat trips and s’mores. Thank you to every parent who trusts us with their boys, and to everyone who volunteers, helps and prays.</p>
            </article>
            <article className="info-card">
              <div className="info-icon"><CalendarDays size={22} /></div>
              <h3>Special nights</h3>
              <p>The Company Section know how to enjoy themselves, from pizza straight out of the pizza oven to a surprisingly competitive night of bingo.</p>
            </article>
            <article className="info-card wide welcome-note">
              <h3>Our values</h3>
              <div className="info-sublist values-list">
                <div><strong>Courage</strong><p>Rooted in faith and trusting in God.</p></div>
                <div><strong>Integrity</strong><p>Doing the right thing, and what is best for our boys.</p></div>
                <div><strong>Responsibility</strong><p>Owning our actions and learning from our mistakes.</p></div>
                <div><strong>Respect</strong><p>Valuing all people and treating everyone with grace.</p></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section alt" aria-labelledby="bb-join">
        <div className="container">
          <div className="section-label">Join us</div>
          <h2 id="bb-join">Come along <span>and try it.</span></h2>
          <div className="info-grid">
            <article className="info-card orange">
              <div className="info-icon"><Phone size={22} /></div>
              <h3>Get in touch</h3>
              <p>New boys are always welcome. Contact the church office and we’ll put you in touch with the leaders of the right section.</p>
              <p className="with-icon"><Phone size={16} /> <a href={church.phoneLink}>{church.phone}</a></p>
              <p className="with-icon"><Mail size={16} /> <a href={`mailto:${church.email}`}>{church.email}</a></p>
            </article>
            <article className="info-card">
              <div className="info-icon"><Facebook size={22} /></div>
              <h3>Follow along</h3>
              <p>See what the boys have been up to each week, plus news of camps and special nights, on our Facebook page.</p>
              <div className="link-stack">
                <a className="text-link" href={bbFacebook} target="_blank" rel="noreferrer">79th Belfast on Facebook <ArrowRight size={16} /></a>
                <a className="text-link" href={bbni} target="_blank" rel="noreferrer">About the Boys’ Brigade in NI <ArrowRight size={16} /></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <Link className="text-link" to="/church-life#children">See all our children’s and youth groups <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}

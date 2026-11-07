import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Mail, MapPin, Phone } from 'lucide-react';
import { church } from '@/data/church';

export default function FamilyCareInCancer() {
  return (
    <>
      <section className="page-hero" aria-labelledby="fcic-title">
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> Monthly support group</div>
          <h1 id="fcic-title">Family Care <em>in Cancer</em></h1>
          <p className="hero-lede">You don’t have to face it alone.</p>
        </div>
      </section>

      <section className="page-section" aria-labelledby="fcic-about">
        <div className="container split">
          <div>
            <div className="section-label">About the group</div>
            <h2 id="fcic-about">Care, prayer and <span>practical help.</span></h2>
            <div className="prose">
              <p>Family Care-in-Cancer is an inter-denominational Christian ministry, formed in August 1998 in response to calls for help from families facing the trauma of cancer throughout Northern Ireland.</p>
              <p>It is a charity dedicated to assisting families touched by cancer, offering support, care and advice to anyone, wherever and whenever we can: a place to speak safely with people who care, and to share your fears and anxieties with those who have experienced the trauma of cancer themselves.</p>
              <p>The Glenmachan group was formed in September 2019. Our aim is to reach cancer patients in the East Belfast area by providing practical help in dealing with their diagnosis. The group is also there for carers, as so often in a cancer diagnosis the family and carers get forgotten about.</p>
              <p>We want everyone affected by cancer to know they are never alone, and through prayer and practical Christian help to show that, through Christ, there is an answer to many of the issues they face.</p>
            </div>
          </div>
          <img className="flyer" src="/images/Family_Care_in_Cancer_logo.jpg" alt="Family Care in Cancer logo: Hope in times of crisis" loading="lazy" />
        </div>
      </section>

      <section className="page-section alt" aria-labelledby="fcic-meet">
        <div className="container">
          <div className="info-grid">
            <article className="info-card">
              <div className="info-icon"><CalendarDays size={22} /></div>
              <h3 id="fcic-meet">When we meet</h3>
              <p><strong>Third Friday of every month, 12:00pm – 1:30pm</strong></p>
              <p className="with-icon"><MapPin size={16} /> Coffee bar, above the Minor Youth Halls, Glenmachan Church, Glenmachan Road, Belfast BT4 2NL</p>
            </article>
            <article className="info-card orange">
              <div className="info-icon"><Phone size={22} /></div>
              <h3>Get in touch</h3>
              <p><strong>Rab Laverty</strong>, Group Co-ordinator</p>
              <p className="with-icon"><Mail size={16} /> <a href="mailto:familycareincancer@outlook.com">familycareincancer@outlook.com</a></p>
              <p className="with-icon"><Phone size={16} /> Church office: <a href={church.phoneLink}>{church.phone}</a></p>
            </article>
            <article className="info-card wide welcome-note">
              <h3>Could you help?</h3>
              <p>The invitation to the group goes out to churches and groups across our area, and we are still looking for helpers for about two to three hours a month. Even making tea and coffee, your help will be valuable to the group.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <Link className="text-link" to="/church-life#support">See all our support ministries <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}

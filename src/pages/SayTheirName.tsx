import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Coffee, Mail, MapPin, Phone } from 'lucide-react';
import { church } from '@/data/church';

const directions = 'https://www.google.com/maps/search/?api=1&query=Tim+Hortons+Connswater+Belfast+BT5+5DL';

export default function SayTheirName() {
  return (
    <>
      <section className="page-hero" aria-labelledby="stn-title">
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> Bereavement support group</div>
          <h1 id="stn-title">Say <em>Their Name</em></h1>
          <p className="hero-lede">A safe space, a cuppa and a listening ear.</p>
        </div>
      </section>

      <section className="page-section" aria-labelledby="stn-about">
        <div className="container split">
          <div>
            <div className="section-label">About the group</div>
            <h2 id="stn-about">You don’t have to <span>grieve alone.</span></h2>
            <div className="prose">
              <p>Say Their Name is a safe space for people who have been bereaved. Losing someone we love can be one of the loneliest experiences in life, and it can help to spend time with others who understand.</p>
              <p>Once a month we meet for a cuppa and a chat in a relaxed, friendly setting. There is no pressure to talk. You can share your story, talk about the person you have lost, or simply sit and listen.</p>
              <p>The group is run by Joanne Simms. We are a friendly group with a listening ear, and it is a chance to meet like-minded people and find comfort and friendship along the way.</p>
              <p>However recent or long ago your loss, everyone is very welcome to join us.</p>
            </div>
          </div>
          <div className="feature-quote">
            <div className="feature-quote-icon"><Coffee size={24} /></div>
            <p>“Come along, have a cuppa and a chat, and meet people who understand.”</p>
            <span>Everyone is very welcome</span>
          </div>
        </div>
      </section>

      <section className="page-section alt" aria-labelledby="stn-meet">
        <div className="container">
          <div className="info-grid">
            <article className="info-card">
              <div className="info-icon"><CalendarDays size={22} /></div>
              <h3 id="stn-meet">When we meet</h3>
              <p><strong>First Monday of every month, 7:30pm</strong></p>
              <p className="with-icon"><MapPin size={16} /> Tim Hortons, Connswater, Belfast BT5 5DL</p>
              <p>Please note we meet in the café at Connswater, not at the church.</p>
              <a className="text-link" href={directions} target="_blank" rel="noreferrer">Get directions <ArrowRight size={17} /></a>
            </article>
            <article className="info-card orange">
              <div className="info-icon"><Phone size={22} /></div>
              <h3>Get in touch</h3>
              <p><strong>Joanne Simms</strong>, Group Leader</p>
              <p>To find out more, contact Joanne through the church office.</p>
              <p className="with-icon"><Phone size={16} /> <a href={church.phoneLink}>{church.phone}</a></p>
              <p className="with-icon"><Mail size={16} /> <a href={`mailto:${church.email}`}>{church.email}</a></p>
            </article>
            <article className="info-card wide welcome-note">
              <h3>Thinking of coming along?</h3>
              <p>You don’t need to book. Just come along on the first Monday of the month. If you would find it easier to speak to someone first, please get in touch and we will be glad to help.</p>
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

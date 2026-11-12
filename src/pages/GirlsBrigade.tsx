import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookOpen, CalendarDays, Facebook, Heart, Mail, Medal, Phone, Sparkles, Star, Tent } from 'lucide-react';
import { church } from '@/data/church';
import { groups } from '@/data/churchLife';

// 216th Belfast Company of the Girls' Brigade.
// Written from the company's Facebook page and the GBNI website (gbni.co.uk), November 2026.
// The section names, ages, time and hall come from src/data/churchLife.ts, so change them there.
// Update the competition and camp news each year.
const gbFacebook = 'https://www.facebook.com/profile.php?id=100064419650638';
const gbni = 'https://gbni.co.uk/';
const gb = groups.find((g) => g.name === 'Girls’ Brigade');

export default function GirlsBrigade() {
  return (
    <>
      <section className="page-hero" aria-labelledby="gb-title">
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> 216th Belfast Company</div>
          <h1 id="gb-title">Girls’ <em>Brigade</em></h1>
          <p className="hero-lede">A place for girls to have fun, build friendships and discover God, every Tuesday night at Glenmachan.</p>
        </div>
      </section>

      <section className="page-section" aria-labelledby="gb-about">
        <div className="container split">
          <div>
            <div className="section-label">About the 216th</div>
            <h2 id="gb-about">Valued, nurtured <span>and equipped.</span></h2>
            <div className="prose">
              <p>The 216th Belfast is Glenmachan’s own company of the Girls’ Brigade, for girls from age 3 right up to Year 14. GB is a Christian uniformed organisation, and our aim is to help girls become followers of the Lord Jesus Christ.</p>
              <p>Every girl who comes along is valued and nurtured. Through games, crafts, activities and Bible teaching suited to her age, she can make good friends, grow in confidence and be equipped for life, while learning about Jesus along the way.</p>
              <p>We’re part of Girls’ Brigade Northern Ireland, which has been helping girls across the province since 1940. Our leaders are volunteers from the church who love seeing girls grow, and there’s a section for every age, from our youngest Ladybirds to the Brigaders.</p>
            </div>
          </div>
          <div className="feature-quote">
            <div className="feature-quote-icon"><Star size={24} /></div>
            <p>“Seek, Serve and Follow Christ.”</p>
            <span>The Girls’ Brigade motto</span>
          </div>
        </div>
      </section>

      {gb?.sections && (
        <section className="page-section alt" aria-labelledby="gb-sections">
          <div className="container">
            <div className="section-label">Sections</div>
            <h2 id="gb-sections">A section for <span>every age.</span></h2>
            <p className="with-icon section-note"><CalendarDays size={16} /> {gb.when}{gb.where ? ` · ${gb.where}` : ''}</p>
            <div className="info-sublist brigade-sections">
              {gb.sections.map((s) => (
                <div key={s.name}><strong>{s.name}</strong><p>{s.detail}</p></div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="page-section" aria-labelledby="gb-motto">
        <div className="container">
          <div className="section-label">Our motto</div>
          <h2 id="gb-motto">Seek, serve <span>and follow.</span></h2>
          <div className="info-grid motto-grid">
            <article className="info-card">
              <div className="info-icon"><BookOpen size={22} /></div>
              <h3>Seek</h3>
              <blockquote className="group-quote">“But seek first His kingdom and His righteousness, and all these things will be given to you as well.” Matthew 6:33</blockquote>
              <p>Discovering who Jesus is through Bible teaching, songs and prayer, pitched just right for each age group.</p>
            </article>
            <article className="info-card">
              <div className="info-icon"><Heart size={22} /></div>
              <h3>Serve</h3>
              <blockquote className="group-quote">“Whatever you do, work heartily, as for the Lord… You are serving the Lord Christ.” Colossians 3:23–24</blockquote>
              <p>Learning to care for others, at home, in the church and in the community. Our girls help raise money for good causes, like the hand-made pumpkins sold at GB each autumn.</p>
            </article>
            <article className="info-card">
              <div className="info-icon"><Sparkles size={22} /></div>
              <h3>Follow</h3>
              <blockquote className="group-quote">“Follow me, and I will make you become fishers of men.” Mark 1:17</blockquote>
              <p>Growing in faith, confidence and friendship, week by week, with leaders who are there to encourage every girl.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section alt" aria-labelledby="gb-life">
        <div className="container">
          <div className="section-label">Life in the 216th</div>
          <h2 id="gb-life">Proud to <span>be 216.</span></h2>
          <div className="info-grid">
            <article className="info-card">
              <div className="info-icon"><Medal size={22} /></div>
              <h3>Competitions</h3>
              <p>GB teams compete against companies from across Northern Ireland. Our Explorers put in months of hard work with their officer, finished 5th at the inter-district competition, and went on to shine on the floor at the NI Finals.</p>
            </article>
            <article className="info-card">
              <div className="info-icon"><Tent size={22} /></div>
              <h3>Camp</h3>
              <p>Every year we head away with the 79th Belfast Boys’ Brigade for a joint camp weekend: zip lines, climbing walls, water slides, boat trips, ice creams and s’mores. Best of all, it’s a weekend of laughing, cheering each other on and friendships that grow stronger with every adventure. And the officers have just as much fun!</p>
            </article>
            <article className="info-card">
              <div className="info-icon"><Award size={22} /></div>
              <h3>Badges and awards</h3>
              <p>Girls earn badges and awards as they move up through the sections. Older girls can take on the Duke of Edinburgh’s Award, and work towards the Queen’s Award, the highest award a girl can gain in the Girls’ Brigade.</p>
            </article>
            <article className="info-card orange">
              <div className="info-icon"><Phone size={22} /></div>
              <h3>Come and join us</h3>
              <p>New girls are always welcome. Contact the church office and we’ll put you in touch with the GB leaders.</p>
              <p className="with-icon"><Phone size={16} /> <a href={church.phoneLink}>{church.phone}</a></p>
              <p className="with-icon"><Mail size={16} /> <a href={`mailto:${church.email}`}>{church.email}</a></p>
              <p className="with-icon"><Facebook size={16} /> <a href={gbFacebook} target="_blank" rel="noreferrer">216th Girls’ Brigade on Facebook</a></p>
              <a className="text-link" href={gbni} target="_blank" rel="noreferrer">About Girls’ Brigade in NI <ArrowRight size={16} /></a>
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

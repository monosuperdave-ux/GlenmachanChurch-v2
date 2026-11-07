import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const beliefs: { title: string; points: string[] }[] = [
  { title: 'The Holy Bible', points: ['We believe that all holy scripture is inspired by God and is the final authority in matters of faith and behaviour.'] },
  { title: 'God', points: ['We believe that there is one sovereign God revealed in scripture as the Father, the Son and the Holy Spirit.'] },
  {
    title: 'The Lord Jesus Christ',
    points: [
      'We believe in the deity of the Lord Jesus Christ; in His pre-existence as the eternal God; in His manifestation in the flesh through the virgin birth; in His sinless life, miraculous ministry, atoning death, triumphant physical resurrection, bodily ascension, abiding intercession, and in His personal return in great glory.',
    ],
  },
  { title: 'Man', points: ['We believe in the total depravity of man who, but for the sovereign grace of God, would be forever lost.'] },
  {
    title: 'Salvation',
    points: [
      'We believe that salvation is by sovereign grace through faith in the atoning blood of our Lord Jesus Christ.',
      'We believe in the New Testament experience of Acts 2:38.',
    ],
  },
  {
    title: 'The Ordinances',
    points: [
      'We believe in water baptism by immersion in the name of the Lord Jesus Christ for repentant believers.',
      'We believe in the regular observance of the Lord’s Supper.',
      'We believe in anointing with oil in the name of the Lord for the healing of the sick.',
    ],
  },
  {
    title: 'The Body of Christ',
    points: [
      'We believe that the church, the mystical body of Christ, is expressed in the local church.',
      'We believe that the headship of our Lord is expressed in the five-fold ministry of Ephesians 4:11–13.',
      'We believe that the nine spiritual gifts of 1 Corinthians 12 are in operation in the local churches today.',
    ],
  },
  {
    title: 'Church and Churches of God',
    points: [
      'The local Church of God: we believe in the autonomy of the local church and its support by the tithes and offerings of its members.',
      'The house of God: we believe that the local church is the visible expression of the house of God where the royal priesthood of believers offer up spiritual sacrifices to God (1 Peter 2:9).',
      'The Churches of God: we believe in inter-church fellowship and co-operation at national and international levels.',
    ],
  },
  {
    title: 'The Hereafter',
    points: [
      'We believe that the only hope of the believer is the physical return of the Lord Jesus Christ in glory (Titus 2:13).',
      'We believe in eternal life for the believer. We also believe in the eternal judgment of the unbeliever in the lake of fire, which is the second death (Revelation 20:12–15).',
    ],
  },
  { title: 'Bible Prophecy', points: ['We believe that in the prophecies of the Bible God has revealed His plan for men and nations.'] },
];

export default function About() {
  return (
    <>
      <section className="page-hero" aria-labelledby="about-title">
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> Who we are</div>
          <h1 id="about-title">About <em>us</em></h1>
          <p className="hero-lede">A busy, family-orientated church in East Belfast, with something for everyone.</p>
        </div>
      </section>

      <section className="page-section" aria-labelledby="story-title">
        <div className="container narrow">
          <div className="section-label">Welcome to Glenmachan</div>
          <h2 id="story-title">A church for <span>every age.</span></h2>
          <div className="prose">
            <p>Glenmachan is a busy and family-orientated church that has something of interest for everyone.</p>
            <p>From our regular Sunday services, Sunday School and Youth Church through to youth clubs, youth organisations, men’s and ladies’ fellowships, senior members’ clubs and choirs, we cater for all age groups.</p>
            <p>If you are not attached to a church, or are looking for a new spiritual home in East Belfast, you are welcome to come along to one of our services or events, or get in touch with us for more information.</p>
            <p>You will find a warm welcome at Glenmachan Church of God every Sunday at 11:00am and 6:00pm. We look forward to meeting you as you join with us in praise, worship and service for our Lord and Saviour.</p>
            <p className="signoff">God bless.</p>
          </div>
          <div className="page-hero-actions">
            <Link className="button button-dark" to="/plan-your-visit">Plan your visit <ArrowRight size={16} /></Link>
            <Link className="button button-outline" to="/church-life">Explore church life <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="page-section alt" id="beliefs" aria-labelledby="beliefs-title">
        <div className="container">
          <div className="center-heading">
            <div className="section-label">Our foundations</div>
            <h2 id="beliefs-title">What we <span>believe.</span></h2>
            <p>The truths that shape our worship, our teaching and our life together.</p>
          </div>
          <ol className="belief-list">
            {beliefs.map((belief, i) => (
              <li className="belief-card" key={belief.title}>
                <span className="belief-number">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{belief.title}</h3>
                  {belief.points.map((point) => <p key={point}>{point}</p>)}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

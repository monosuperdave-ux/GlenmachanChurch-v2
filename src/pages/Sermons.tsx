import { ArrowRight, Headphones, Youtube } from 'lucide-react';
import { church } from '@/data/church';

// PLACEHOLDER PAGE
// Coming later:
//  1. Watch: a self-updating grid of sermon videos from the YouTube "Sermons" playlist
//     (read by a small Cloudflare function).
//  2. Listen: a podcast of the same sermons, with the audio stored on Cloudflare R2.
// Until then this shows the channel's latest uploads.

export default function Sermons() {
  return (
    <>
      <section className="page-hero" aria-labelledby="sermons-title">
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> Watch and listen again</div>
          <h1 id="sermons-title">Our <em>sermons</em></h1>
          <p className="hero-lede">Missed a Sunday, or want to hear a message again? Catch up here.</p>
        </div>
      </section>

      <section className="page-section" aria-labelledby="watch-title">
        <div className="container">
          <div className="center-heading">
            <div className="section-label"><Youtube size={14} /> Watch</div>
            <h2 id="watch-title">Latest <span>messages.</span></h2>
            <p>Full services and livestreams from our YouTube channel.</p>
          </div>
          <div className="video-card sermon-player">
            <iframe
              title="Glenmachan Church YouTube uploads"
              src="https://www.youtube-nocookie.com/embed/videoseries?list=UUPbVdwA94cp7y8XfDK0yatA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="center-heading">
            <a className="text-link" href={church.youtube} target="_blank" rel="noreferrer">Visit our YouTube channel <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="page-section alt" aria-labelledby="listen-title">
        <div className="container">
          <div className="center-heading">
            <div className="section-label"><Headphones size={14} /> Listen</div>
            <h2 id="listen-title">Sermon <span>podcast.</span></h2>
            <p>Coming soon: listen to recent sermons here, or subscribe in your podcast app.</p>
          </div>
        </div>
      </section>
    </>
  );
}

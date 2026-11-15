import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Bell, PlayCircle, Youtube } from 'lucide-react';
import { church } from '@/data/church';

// Recent services from the church YouTube channel. The list comes from /api/sermons
// (functions/api/sermons.ts), which reads YouTube's public feed, so it updates itself
// whenever a new video goes up. If that can't be reached (or when testing with `npm run dev`),
// the page falls back to YouTube's own "latest uploads" player.

type Video = { id: string; title: string; published: string };

const UPLOADS_PLAYLIST = 'UUPbVdwA94cp7y8XfDK0yatA';
const playerAllow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export default function Sermons() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [current, setCurrent] = useState<Video | null>(null);
  const [autoplay, setAutoplay] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/sermons')
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { ok?: boolean; videos?: Video[] } | null) => {
        if (cancelled || !data?.ok || !data.videos?.length) return;
        setVideos(data.videos);
        setCurrent(data.videos[0]);
      })
      .catch(() => { /* keep the fallback player */ });
    return () => { cancelled = true; };
  }, []);

  const play = (video: Video) => {
    setCurrent(video);
    setAutoplay(true);
    playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const src = current
    ? `https://www.youtube-nocookie.com/embed/${current.id}${autoplay ? '?autoplay=1' : ''}`
    : `https://www.youtube-nocookie.com/embed/videoseries?list=${UPLOADS_PLAYLIST}`;

  return (
    <>
      <section className="page-hero" aria-labelledby="sermons-title">
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> Watch again</div>
          <h1 id="sermons-title">Our <em>sermons</em></h1>
          <p className="hero-lede">Missed a Sunday, or want to hear a message again? Catch up on our recent services here.</p>
        </div>
      </section>

      <section className="page-section" aria-labelledby="watch-title">
        <div className="container">
          <div className="center-heading">
            <div className="section-label"><Youtube size={14} /> {current ? 'Now showing' : 'Watch'}</div>
            <h2 id="watch-title">{current ? current.title : <>Latest <span>messages.</span></>}</h2>
            {current && <p>Added to YouTube on {formatDate(current.published)}</p>}
          </div>
          <div className="video-card sermon-player" ref={playerRef}>
            <iframe key={src} title={current ? current.title : 'Glenmachan Church latest services'} src={src} allow={playerAllow} allowFullScreen />
          </div>
        </div>
      </section>

      {videos.length > 1 && (
        <section className="page-section alt" aria-labelledby="recent-title">
          <div className="container">
            <div className="center-heading">
              <div className="section-label">Recent services</div>
              <h2 id="recent-title">Choose a <span>Sunday.</span></h2>
              <p>The most recent services from our YouTube channel. Pick one to watch it above.</p>
            </div>
            <ul className="sermon-grid">
              {videos.map((v) => (
                <li key={v.id}>
                  <button type="button" className={current?.id === v.id ? 'sermon-tile is-playing' : 'sermon-tile'} onClick={() => play(v)} aria-label={`Watch ${v.title}`}>
                    <span className="sermon-thumb">
                      <img src={`https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`} alt="" loading="lazy" decoding="async" width={320} height={180} />
                      <PlayCircle size={34} aria-hidden="true" />
                      {current?.id === v.id && <span className="sermon-badge">Now showing</span>}
                    </span>
                    <span className="sermon-title">{v.title}</span>
                    <span className="sermon-date">Added {formatDate(v.published)}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="page-cta">
        <div className="container">
          <h2>Never miss <span>a Sunday.</span></h2>
          <p>Subscribe to our YouTube channel to be notified whenever a new service goes up.</p>
          <div className="page-hero-actions centered">
            <a className="button button-dark" href={church.youtube} target="_blank" rel="noreferrer"><Bell size={16} /> Subscribe on YouTube</a>
            <a className="button button-outline" href={`${church.youtube}/videos`} target="_blank" rel="noreferrer">All our videos <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>
    </>
  );
}

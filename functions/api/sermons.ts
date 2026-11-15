// ─────────────────────────────────────────────────────────────
// Cloudflare Pages Function: GET /api/sermons
//
// Reads the church YouTube channel's free public feed (the 15 most recent
// videos) and returns them as a simple list for the Sermons page.
// No API key or account needed. Cloudflare keeps a copy for 30 minutes,
// so YouTube is asked at most a couple of times an hour.
// ─────────────────────────────────────────────────────────────

const CHANNEL_ID = 'UCPbVdwA94cp7y8XfDK0yatA'; // Glenmachan Church of God
const FEED = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

type Video = { id: string; title: string; published: string };

const json = (body: unknown, status = 200, maxAge = 1800) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': status === 200 ? `public, max-age=600, s-maxage=${maxAge}` : 'no-store',
    },
  });

const pick = (xml: string, tag: string) => {
  const m = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return m ? m[1].trim() : '';
};

const decode = (s: string) =>
  s
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, '’')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

export const onRequestGet = async () => {
  try {
    const res = await fetch(FEED, { cf: { cacheTtl: 1800, cacheEverything: true } } as RequestInit);
    if (!res.ok) return json({ ok: false, videos: [] }, 502);

    const xml = await res.text();
    const videos: Video[] = xml
      .split('<entry>')
      .slice(1)
      .map((entry) => ({
        id: pick(entry, 'yt:videoId'),
        title: decode(pick(entry, 'title')),
        published: pick(entry, 'published'),
      }))
      .filter((v) => /^[\w-]{11}$/.test(v.id) && v.title);

    return json({ ok: true, videos });
  } catch {
    return json({ ok: false, videos: [] }, 502);
  }
};

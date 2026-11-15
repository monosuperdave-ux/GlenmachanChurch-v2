// ─────────────────────────────────────────────────────────────
// UPCOMING EVENTS (the What's On page, /events)
//
// Each event below shows on the What's On page, soonest first. The
// homepage banner names the next one and links to the page.
//
// To add an event:   copy one of the blocks below and change the details.
// To hide one early: set show to false.
// date:              the (first) date of the event, YYYY-MM-DD. Used for the order.
// hideAfter:         the event disappears by itself after this date (YYYY-MM-DD).
// image:             put the poster in public/images/events and give its path here.
//                    Leave it as '' for no poster.
// ─────────────────────────────────────────────────────────────

export type Promo = {
  show: boolean;
  label: string;
  title: string;
  when: string;
  where?: string;
  cost?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
  date: string;
  hideAfter: string;
};

export const promos: Promo[] = [
  {
    show: true,
    label: 'Adelphos · For men',
    title: 'Adelphos: hot dogs this month!',
    when: 'Friday 20 November · 8:00pm',
    where: 'Minor Youth Halls, Glenmachan Church of God',
    cost: '£2 per person, any donation welcome',
    description:
      '“The Youth Club for the Older Man” is back! An invite to all grandfathers, fathers and sons for a great night of fun, fellowship and food. Indoor bowls, pool and table tennis, or a quiet corner for a chat with as much tea or coffee as you can drink.',
    image: '/images/events/adelphos-2026-11.webp',
    imageAlt: 'Adelphos Men poster: Friday 20 November, 8pm, Minor Youth Halls. Hot dogs this month. Indoor bowls, pool, snooker and table tennis. £2 entry, donations welcome.',
    buttonText: 'About Adelphos',
    buttonLink: '/church-life#men',
    date: '2026-11-20',
    hideAfter: '2026-11-20',
  },
  {
    show: true,
    label: 'Adelphos · Christmas',
    title: 'Adelphos Christmas Dinner: Chinese buffet night',
    when: 'Friday 4 December · 8:00pm till late',
    where: 'The coffee bar, Glenmachan Church of God',
    cost: '£15 per person, pay at the door',
    description:
      'Forget the dry turkey and the sad sprouts. All the chow mein, spring rolls and sweet and sour you can handle, plus bingo, a movie and plenty of laughs. Never been to Adelphos? Consider this your no-excuses invitation. Bring a mate, and your appetite!',
    image: '/images/events/adelphos-christmas-dinner-2026.webp',
    imageAlt: 'Adelphos Men Christmas Dinner poster: Chinese buffet and Christmas cheer, Friday 4 December from 8pm in the coffee bar, £15 per person. Bingo, a movie, chatting and a good laugh. All men welcome.',
    buttonText: 'About Adelphos',
    buttonLink: '/church-life#men',
    date: '2026-12-04',
    hideAfter: '2026-12-04',
  },
  {
    show: true,
    label: 'Adelphos · Bowling',
    title: 'The Paul Sims Bowling Competition',
    when: 'Fridays 15 January, 12 February and 12 March · 8:00pm',
    where: 'Belfast Indoor Bowls, Milltown Road',
    cost: '£7 per person, per night',
    description:
      'Three nights of bowling, open to all men. You don’t need to be an Adelphos member, and whether you’re a seasoned bowler or have never lifted a bowl, come and join in. We need names and numbers, so see Dave McCauley or contact the church office to get your name down.',
    image: '/images/events/paul-sims-bowling-2027.webp',
    imageAlt: 'The Paul Sims Bowling Competition poster: three Friday nights, 15 January, 12 February and 12 March, at Belfast Indoor Bowls, Milltown Road. Starts 8pm, £7 per person per night. Open to all men.',
    buttonText: 'Get your name down',
    buttonLink: '/?reason=event#contact',
    date: '2027-01-15',
    hideAfter: '2027-03-12',
  },
];

// The events still to come, soonest first
export function livePromos() {
  const today = new Date().toISOString().slice(0, 10);
  return promos
    .filter((p) => p.show && (!p.hideAfter || today <= p.hideAfter))
    .sort((a, b) => a.date.localeCompare(b.date));
}

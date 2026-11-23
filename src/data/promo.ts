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

import { revivalYouthDates } from './churchLife';
import { dayMonth, nextDate, upcomingDates } from './dates';

// Revival Youth shows one listing that moves on to the next date by itself
const revivalNext = nextDate(revivalYouthDates);

export type Promo = {
  show: boolean;
  label: string;
  title: string;
  when: string;
  where?: string;
  cost?: string;
  description: string;
  details?: { name: string; detail: string }[]; // optional extra lines, e.g. how to get tickets
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
    label: 'Youth · P6 to Year 14',
    title: revivalNext === '2026-12-12' ? 'Revival Youth: Christmas dinner' : 'Revival Youth',
    when: `Saturday ${dayMonth(revivalNext)} · 7:30pm – 9:30pm`,
    where: 'Minor Youth Halls, Glenmachan Church of God',
    cost: 'Free (bring a bit of pocket money for the tuck shop)',
    description:
      'Saturday night is sorted. Football, hockey, table tennis, consoles, a tuck shop and somewhere quieter to hang out with your friends. ' +
      (revivalNext <= '2026-12-12' ? 'Saturday 12 December is our Christmas dinner! ' : '') +
      `Dates coming up: ${upcomingDates(revivalYouthDates)}. Invite a friend, and follow @revival.youth.belfast on Instagram.`,
    image: '/images/events/revival-youth-2026-27.jpg',
    imageAlt: 'Revival Youth graphic: youth club for P6 to Year 14. Upcoming Saturday dates 21 November, 12 December (Christmas dinner), 2 and 16 January, 6 and 20 February, 7:30pm to 9:30pm in the Minor Youth Halls. Free entry, bring a friend. Instagram @revival.youth.belfast.',
    buttonText: 'About Revival Youth',
    buttonLink: '/church-life#youth',
    date: revivalNext,
    hideAfter: '2027-02-20',
  },
  {
    show: true,
    label: 'For men · Breakfast',
    title: 'Men’s Breakfast & Bible Study',
    when: 'Saturday 5 December · 9:30am – 11:30am',
    where: 'The coffee bar, Glenmachan Church of God',
    cost: 'Free, a donation towards the food is appreciated',
    description:
      'A fry, a hot cup of tea and an open Bible. There are worse ways to start a Saturday. This season we’re on a journey through Mark’s Gospel: we eat first (priorities), then open God’s Word together and talk it through. No need to book, just turn up hungry.',
    image: '/images/events/mens-breakfast-2026-12.jpg',
    imageAlt: 'Men’s Breakfast and Bible Study graphic: men enjoying a fry around a long table in the coffee bar. Saturday 5 December, 9:30am, free. A journey through Mark’s Gospel.',
    buttonText: 'All breakfast dates',
    buttonLink: '/church-life#men',
    date: '2026-12-05',
    hideAfter: '2026-12-05',
  },
  {
    show: true,
    label: 'Christmas concert',
    title: 'Festive Brass & Voices',
    when: 'Saturday 19 December · 7:30pm',
    where: 'Glenmachan Church of God',
    cost: 'Tickets £15',
    description:
      'Festival Brass invite you to an evening of Christmas music, with the Miskelly Chorale (Musical Director Edwin Gray), Strandtown Primary School Choir (Conductor Mrs Hannah Makinson) and Festival Brass themselves (Conductor Alan Corry). Your compère for the night is George Jones. Bring the family and get into the Christmas spirit.',
    details: [
      { name: 'Buy in advance', detail: 'In person at the church office, or by phone on 028 9076 1676 and collect from the office' },
      { name: 'Reserve', detail: 'Reserve your tickets with the church office and pay on the night' },
      { name: 'Paying', detail: 'Cash, or cheque made payable to Festival Brass' },
      { name: 'Also from', detail: 'Festival Brass, 07980 306425 (phone or post), and Matchetts Music, Wellington Place, Belfast, 028 9032 6695' },
      { name: 'Interval', detail: 'Tea and coffee, cash only. Every penny goes towards the work of the church' },
    ],
    image: '/images/events/festive-brass-voices-2026.jpg',
    imageAlt: 'Festival Brass presents Festive Brass and Voices poster: Saturday 19 December 2026, 7:30pm, Glenmachan Church of God. Compère George Jones. Featuring the Miskelly Chorale, Strandtown Primary School Choir and Festival Brass. Tickets £15.',
    buttonText: 'Ask about tickets',
    buttonLink: '/?reason=event#contact',
    date: '2026-12-19',
    hideAfter: '2026-12-19',
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

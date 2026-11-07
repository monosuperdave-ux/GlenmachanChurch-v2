// ─────────────────────────────────────────────────────────────
// HOMEPAGE PROMO ("What's On" band under the hero)
//
// To show a promo:   set show to true and fill in the details.
// To hide it:        set show to false.
// hideAfter:         the promo disappears by itself after this date
//                    (YYYY-MM-DD). Leave it as '' to never auto-hide.
// image:             put the poster in public/images and give its
//                    path here, e.g. '/images/My_Poster.jpg'.
//                    Leave it as '' for no image.
// ─────────────────────────────────────────────────────────────

export const promo = {
  show: false,
  label: 'What’s on',
  title: 'Half Term Special: Pizza & Praise Night',
  when: 'Sunday 25th October · 6:00pm',
  description: 'Example promo: replace this text with a line or two about your next event.',
  image: '/images/Pizza_and_praise.jpg',
  imageAlt: 'Pizza & Praise Night poster',
  buttonText: 'Plan your visit',
  buttonLink: '/plan-your-visit',
  hideAfter: '2026-10-25',
};

export function promoIsLive() {
  if (!promo.show) return false;
  if (!promo.hideAfter) return true;
  const today = new Date().toISOString().slice(0, 10);
  return today <= promo.hideAfter;
}

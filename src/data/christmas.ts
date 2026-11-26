// ─────────────────────────────────────────────────────────────
// CHRISTMAS: the homepage switches to its Christmas look between
// these two dates (YYYY-MM-DD), then goes back to normal by itself.
// Next year, just change the dates.
//
// To see the Christmas look before it starts, add ?christmas=on to
// the address, e.g. glenmachanchurch.org/?christmas=on
// (and ?christmas=off to see the normal look during Christmas).
// ─────────────────────────────────────────────────────────────

export const christmasSeason = {
  start: '2026-12-01',
  end: '2027-01-06',
};

export function isChristmas() {
  const asked = new URLSearchParams(window.location.search).get('christmas');
  if (asked === 'on') return true;
  if (asked === 'off') return false;
  const today = new Date().toISOString().slice(0, 10);
  return today >= christmasSeason.start && today <= christmasSeason.end;
}

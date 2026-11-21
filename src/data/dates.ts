// Small helpers for groups that meet on a list of set dates (e.g. Men's Breakfast,
// Revival Youth). Dates are written YYYY-MM-DD. Past dates drop off by themselves.

const today = () => new Date().toISOString().slice(0, 10);

// "5 December"
export function dayMonth(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' });
}

// The dates still to come (today counts as still to come)
export function datesLeft(dates: string[]) {
  return dates.filter((d) => d >= today());
}

// The next date still to come, or the last one if they have all passed
export function nextDate(dates: string[]) {
  return datesLeft(dates)[0] ?? dates[dates.length - 1];
}

// "5 December, 6 February, 6 March", or a fallback once they have all passed
export function upcomingDates(dates: string[]) {
  const left = datesLeft(dates);
  if (left.length === 0) return 'New dates coming soon. Contact the church office for details';
  return left.map(dayMonth).join(', ');
}

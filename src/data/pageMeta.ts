// The browser-tab title and Google description for each page.
// When you add a new page, add a line here too (and to public/sitemap.xml).

const SITE = 'Glenmachan Church';

export const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Glenmachan Church of God | A City on a Hill, East Belfast',
    description: 'A welcoming church family in East Belfast. Sunday services at 11:00am and 6:00pm on Glenmachan Road, with groups for every age through the week.',
  },
  '/plan-your-visit': {
    title: `Plan Your Visit | ${SITE}`,
    description: 'Coming to Glenmachan for the first time? Service times, parking, what to expect and what we do for your children.',
  },
  '/about': {
    title: `About Us | ${SITE}`,
    description: 'Who we are and what we believe at Glenmachan Church of God, a family church in East Belfast.',
  },
  '/hope': {
    title: `Our Message is Hope | ${SITE}`,
    description: 'The good news of the Gospel: hope for all people through Jesus Christ, and how you can respond.',
  },
  '/church-life': {
    title: `Church Life | ${SITE}`,
    description: 'Groups and meetings for every age at Glenmachan: children, young people, women, men, seniors and prayer.',
  },
  '/sunday-school': {
    title: `Sunday School & Youth Church | ${SITE}`,
    description: 'Sunday School and Youth Church for pre-school to Year 14, every Sunday during our 11:00am service.',
  },
  '/boys-brigade': {
    title: `Boys’ Brigade (79th Belfast) | ${SITE}`,
    description: 'The 79th Belfast Company of the Boys’ Brigade meets at Glenmachan on Thursday evenings, for boys aged 3 to Year 14.',
  },
  '/girls-brigade': {
    title: `Girls’ Brigade | ${SITE}`,
    description: 'Girls’ Brigade at Glenmachan meets on Tuesday evenings in term time, for girls aged 3 to Year 14.',
  },
  '/support-ministries': {
    title: `Support Ministries | ${SITE}`,
    description: 'Practical help, care and prayer: Family Care in Cancer, Say Their Name, SONshine Club and SALT Ministry.',
  },
  '/family-care-in-cancer': {
    title: `Family Care in Cancer | ${SITE}`,
    description: 'A monthly support group at Glenmachan for anyone affected by cancer, and their families and carers.',
  },
  '/say-their-name': {
    title: `Say Their Name | ${SITE}`,
    description: 'A friendly monthly bereavement support group: a cuppa, a chat and people who understand.',
  },
  '/sonshine-club': {
    title: `SONshine Club | ${SITE}`,
    description: 'From a summer Bible club to mission in Kenya: child sponsorship, clean water and a training farm in Tharaka.',
  },
  '/salt': {
    title: `SALT Ministry | ${SITE}`,
    description: 'Serving All, Labouring Together: our food hamper and support ministry for local families in need.',
  },
  '/events': {
    title: `What’s On | ${SITE}`,
    description: 'Upcoming events at Glenmachan Church of God in East Belfast: special nights, dinners and days out. Everyone welcome.',
  },
  '/sermons': {
    title: `Sermons | ${SITE}`,
    description: 'Watch recent Sunday services and messages from Glenmachan Church of God.',
  },
  '/privacy': {
    title: `Privacy & Cookies | ${SITE}`,
    description: 'What the Glenmachan Church website collects, why, and what we do with it.',
  },
};

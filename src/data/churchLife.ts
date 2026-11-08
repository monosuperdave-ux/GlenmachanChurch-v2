// ─────────────────────────────────────────────────────────────
// CHURCH LIFE: every group and meeting lives in this one file.
// The Church Life page and the homepage both read from here, so
// a time only ever needs changing in one place.
//
// confirmed: false  → shows a "To confirm" tag on the page.
// Change it to true once the church office has checked the details.
// ─────────────────────────────────────────────────────────────

export type CategoryId = 'children' | 'youth' | 'women' | 'men' | 'seniors' | 'prayer' | 'support';

export type Group = {
  name: string;
  category: CategoryId;
  who?: string;
  when?: string;
  where?: string;
  description: string;
  sections?: { name: string; detail: string }[];
  link?: { label: string; to: string };
  // A second group shown inside the same card, under a dividing line (e.g. Youth Church under Sunday School)
  alsoHere?: Omit<Group, 'category' | 'confirmed' | 'alsoHere'>;
  confirmed: boolean;
};

export const categories: { id: CategoryId; title: string; intro: string; verse?: string }[] = [
  {
    id: 'children',
    title: 'Children',
    intro:
      'Our aim is to provide children with a strong foundation, on which they develop a deeper relationship with God, gaining an understanding of the plan and purpose for their life.',
  },
  {
    id: 'youth',
    title: 'Young People',
    intro:
      'Our vision is to see the youth of this generation pursuing God, deepening their friendships and claiming the city of Belfast for Christ, in the name of Jesus.',
  },
  {
    id: 'women',
    title: 'Women',
    intro: 'Becoming the women that God created us to be.',
    verse:
      '“For the word of God is living and powerful, and sharper than any two-edged sword, piercing even to the division of soul and spirit, and of joints and marrow, and is a discerner of the thoughts and intents of the heart.” Hebrews 4:12',
  },
  {
    id: 'men',
    title: 'Men',
    intro: 'Providing men with a space to fellowship together and discover what it means to be a man of God.',
  },
  {
    id: 'seniors',
    title: 'Seniors',
    intro: 'Friendship, food and fellowship for our older members, their friends and neighbours.',
  },
  {
    id: 'prayer',
    title: 'Prayer',
    intro:
      'We run a number of prayer meetings through the week, and prayer ministry is available at each of our Sunday services.',
    verse:
      '“If My people who are called by My name will humble themselves, and pray and seek My face, and turn from their wicked ways, then I will hear from heaven, and will forgive their sin and heal their land.” 2 Chronicles 7:14',
  },
  {
    id: 'support',
    title: 'Support Ministries',
    intro: 'Practical help, care and prayer for people going through the hardest seasons of life.',
  },
];

export const groups: Group[] = [
  // ── Children ──────────────────────────────────────────────
  {
    name: 'Sunday School',
    category: 'children',
    who: 'Pre-school to Year 7',
    when: 'Sundays during the 11:00am service',
    description: 'A safe, age-appropriate place where the Bible is taught in a creative and relevant way.',
    alsoHere: {
      name: 'Youth Church',
      who: 'Year 8 and above',
      when: 'Sundays during the 11:00am service',
      description: 'Our youth team leads its own service with singing, a Bible lesson and small-group time.',
    },
    confirmed: true,
  },

  {
    name: 'Girls’ Brigade',
    category: 'children',
    who: 'Girls aged 3 to Year 14',
    when: 'Tuesdays, 6:30pm – 8:00pm (term time)',
    where: 'Minor Youth Hall',
    description:
      'GB is a place for girls to have fun, build friendships and discover God, learning about Christ while being valued, nurtured and equipped for life.',
    sections: [
      { name: 'Ladybirds', detail: '3 years to P1' },
      { name: 'Explorers', detail: 'P2 to P4' },
      { name: 'Juniors', detail: 'P5 to P7' },
      { name: 'Seniors', detail: 'Year 8 to Year 10' },
      { name: 'Brigaders', detail: 'Year 11 to Year 14' },
    ],
    confirmed: true,
  },
  {
    name: 'Boys’ Brigade',
    category: 'children',
    who: 'Boys aged 3 to Year 14',
    when: 'Thursday evenings (term time)',
    description:
      'BB exists for the advancement of Christ’s kingdom among boys, promoting obedience, reverence, discipline, self-respect and all that tends towards a true Christian manliness.',
    sections: [
      { name: 'Robins', detail: '3 years to P1 · 6:15pm – 7:30pm · Minor Youth Hall' },
      { name: 'Anchor Boys', detail: 'P2 to P4 · 6:15pm – 7:30pm · Main Youth Hall' },
      { name: 'Junior Section', detail: 'P5 to P7 · 7:15pm – 8:45pm · Minor Youth Hall' },
      { name: 'Company Section', detail: 'Year 8 to Year 11 · 7:45pm – 9:45pm · Main Youth Hall' },
      { name: 'Senior Section', detail: 'Year 12 to Year 14 · 7:45pm – 9:45pm · Main Youth Hall' },
    ],
    confirmed: true,
  },


  // ── Young People ──────────────────────────────────────────
  // (Youth Church is shown inside the Sunday School card above)
  {
    name: 'Access Youth',
    category: 'youth',
    who: 'Year 8 to Year 14',
    when: '1st and 3rd Saturday of the month, 7:30pm – 9:30pm (term time)',
    where: 'Minor Youth Halls',
    description: 'Access exists to offer young people a place to come and grow together in their knowledge of Christ.',
    confirmed: true,
  },

  // ── Women ─────────────────────────────────────────────────
  {
    name: 'GEMS Ladies Bible Study',
    category: 'women',
    when: 'Third Monday of every month, 7:30pm',
    where: 'Coffee bar',
    description:
      'We love coming together to explore God’s mighty word, discovering who we are in Christ and who we are together.',
    confirmed: true,
  },

  // ── Men ───────────────────────────────────────────────────
  {
    name: 'Adelphos',
    category: 'men',
    who: '“The youth club for the older man!” Men of all ages',
    when: 'Third Friday of every month, 8:00pm',
    where: 'Minor Youth Hall',
    description:
      'Adelphos means “brethren in Christ”. A relaxed, friendly and welcoming place for men of all ages to meet and fellowship together.',
    confirmed: true,
  },
  {
    name: 'Men’s Breakfast',
    category: 'men',
    when: 'First Saturday of the month, 9:30am – 11:30am',
    where: 'Coffee bar',
    description: 'Breakfast and fellowship together. All men are welcome.',
    confirmed: true,
  },

  // ── Seniors ───────────────────────────────────────────────
  {
    name: 'Memory Lane',
    category: 'seniors',
    who: 'Over sixties, with friends and neighbours',
    when: 'Wednesdays, 11:00am – 1:00pm',
    where: 'Coffee bar',
    description:
      'Lunch together in our coffee bar, with guest speakers, craft days and information days, not forgetting snooker and pool for the men.',
    confirmed: true,
  },
  {
    name: 'Old Time Sing Along',
    category: 'seniors',
    when: 'Held occasionally. Watch this website and our Facebook page for the next date.',
    description: 'A friendly welcome, a good sing and a supper provided.',
    confirmed: true,
  },

  // ── Prayer ────────────────────────────────────────────────
  {
    name: 'Midweek Prayer Meeting',
    category: 'prayer',
    when: 'Every Wednesday, 7:30pm – 8:30pm',
    description: 'A time of prayer, worship and seeking God together.',
    confirmed: true,
  },
  {
    name: 'Prayer ministry',
    category: 'prayer',
    when: 'At each of our Sunday services',
    description: 'If you would like someone to pray with you, just ask one of our team.',
    confirmed: true,
  },

  // ── Support Ministries ────────────────────────────────────
  {
    name: 'Family Care in Cancer',
    category: 'support',
    who: 'Anyone affected by cancer, and their families and carers',
    when: 'Third Friday of every month, 12:00pm – 1:30pm',
    where: 'Coffee bar, above the Minor Youth Halls',
    description: 'A monthly support group. You don’t have to face it alone.',
    link: { label: 'Find out more', to: '/family-care-in-cancer' },
    confirmed: true,
  },
  {
    name: 'Say Their Name',
    category: 'support',
    who: 'Bereavement support group',
    description: '[TEXT NEEDED: who it is for, when and where it meets, and who to contact]',
    confirmed: false,
  },
];

export const groupsIn = (category: CategoryId) => groups.filter((g) => g.category === category);

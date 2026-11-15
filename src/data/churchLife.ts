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
  quote?: string; // a short Bible verse or saying, shown in italics under the details
  image?: string; // optional photo at the top of the card, e.g. '/images/memory-lane.jpg' (only with permission)
  imageAlt?: string; // describe the photo for people who can't see it
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
      'We meet to pray together every Wednesday night, and prayer ministry is available at all of our services.',
    verse:
      '“If My people who are called by My name will humble themselves, and pray and seek My face, and turn from their wicked ways, then I will hear from heaven, and will forgive their sin and heal their land.” 2 Chronicles 7:14',
  },
  {
    id: 'support',
    title: 'Support Ministries',
    intro:
      'From cancer support and bereavement care to food hampers here in East Belfast and mission in Kenya: practical help, care and prayer for people going through the hardest seasons of life.',
  },
];

export const groups: Group[] = [
  // ── Children ──────────────────────────────────────────────
  {
    name: 'Sunday School',
    category: 'children',
    who: 'Pre-school to Year 7',
    when: 'Sundays during the 11:00am service',
    quote: '“Start children off on the way they should go, and even when they are old they will not turn from it.” Proverbs 22:6',
    description:
      'A safe, age-appropriate place where the Bible is taught in a creative and relevant way, led by Laura McCauley and a faithful team of Access NI checked teachers and helpers. Children start in the service and head out after the time of worship, at around 11:30am.',
    alsoHere: {
      name: 'Youth Church',
      who: 'Year 8 to Year 10, and Year 11 to Year 14',
      when: 'Sundays during the 11:00am service',
      description:
        'Two groups, each with its own service of singing, a Bible lesson and small-group time. Year 8 to 10 is led by Sonya Morrow, and Year 11 to 14 by Lauren Osborne, each supported by faithful teachers and helpers.',
    },
    link: { label: 'Find out more about Sunday mornings', to: '/sunday-school' },
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
    link: { label: 'Find out more about GB', to: '/girls-brigade' },
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
    link: { label: 'Find out more about BB', to: '/boys-brigade' },
    confirmed: true,
  },


  // ── Young People ──────────────────────────────────────────
  // (Youth Church is shown inside the Sunday School card above)
  {
    name: 'Access Youth',
    category: 'youth',
    who: 'P6 to Year 14',
    when: '1st and 3rd Saturday of the month, 7:30pm – 9:30pm (term time, September to June)',
    where: 'Minor Youth Halls',
    quote: '“Don’t let anyone look down on you because you are young…” 1 Timothy 4:12',
    description:
      'Two Saturday nights a month, the Minor Youth Halls get loud. Access is our youth club: a safe, friendly place to burn off some energy, hang out with your friends and make new ones. Whether you live for a last-minute winner or you’d rather quietly destroy your mates at a board game, there’s a spot for you. Leave the homework at home.',
    sections: [
      { name: 'Sport', detail: 'Football, hockey and badminton' },
      { name: 'Games', detail: 'Table tennis, foosball and gaming consoles' },
      { name: 'Chill-out', detail: 'Quieter areas to chat or play board games' },
      { name: 'Tuck shop', detail: 'Of course! Bring a bit of pocket money' },
      { name: 'Entry', detail: 'Free' },
      { name: 'For parents', detail: 'All our leaders are Access NI checked and trained in the church’s safeguarding. Contact the church office with any questions' },
    ],
    confirmed: true,
  },

  // ── Women ─────────────────────────────────────────────────
  {
    name: 'GEMS Ladies Fellowship',
    category: 'women',
    who: 'All women welcome',
    when: 'Third Monday of every month, 7:30pm',
    where: 'Coffee bar',
    quote: '“You are the light of the world. A town built on a hill cannot be hidden.” Matthew 5:14',
    description:
      'Just like real gems, every woman is created in the image of our Father: unique, beautiful, precious and treasured. At GEMS we plug into the power source together, so we can reflect His love, His beauty and His glory to everyone around us. A place where ordinary women can know their extraordinary God.',
    sections: [
      { name: 'Bible study', detail: 'Studying His Word and being reminded of who we are in God, individually and together' },
      { name: 'Prayer', detail: 'Praying for each other, believing God hears and answers, and expecting the miraculous' },
      { name: 'Passing it on', detail: 'Sharing Christ with others and pouring into the next generation, just as Paul mentored young Timothy' },
      { name: 'Friendship', detail: 'Laughing together, crying together, and just being real as we share with each other' },
    ],
    confirmed: true,
  },

  // ── Men ───────────────────────────────────────────────────
  {
    name: 'Adelphos',
    category: 'men',
    who: '“The youth club for the older man!” Men of all ages',
    when: 'Third Friday of every month, 8:00pm',
    where: 'Minor Youth Halls',
    quote: '“As iron sharpens iron, so one man sharpens another.” Proverbs 27:17',
    description:
      'Adelphos means “brethren in Christ”. Gents, if your idea of a big Friday night is out-bowling your mates, sinking a few (pool balls, relax) and drinking enough tea to alarm your GP, this is your night. No membership card, no dress code, and nobody checks your handicap.',
    sections: [
      { name: 'On the menu', detail: 'Hot dogs, sausage rolls, and as many cups of tea or coffee as your heart can handle' },
      { name: 'On the games list', detail: 'Indoor bowls, pool, snooker and table tennis, or the quiet corner for a bit of “tactical reflection”' },
      { name: 'Donation', detail: 'There’s a collection box on the night with a suggested £2, or whatever’s in your pocket (we’re not HMRC).' },
      { name: 'Bring', detail: 'Your mate who “doesn’t do church stuff”, your dad who still thinks he’s unbeatable, or your son. Just don’t bring excuses.' },
    ],
    confirmed: true,
  },
  {
    name: 'Men’s Breakfast & Bible Study',
    category: 'men',
    who: 'Adult men, whatever your church background',
    when: 'First Saturday of the month, 9:30am – 11:30am (September to June)',
    where: 'Coffee bar',
    quote: '“And let us consider how we may spur one another on toward love and good deeds.” Hebrews 10:24',
    description:
      'A fry, a hot cup of tea and an open Bible. There are worse ways to start a Saturday. We eat first (priorities), then open God’s Word together and talk it through. Come hungry, bring your questions, and leave encouraged.',
    sections: [
      { name: 'On the menu', detail: 'A fry or sausage baps, with tea and coffee' },
      { name: 'The Bible study', detail: 'Led by one or two men from the church, working through a chapter or a few verses as part of a theme for the session' },
      { name: 'The chat', detail: 'Afterwards we talk about what we’ve read: exploring, questioning and encouraging each other' },
      { name: 'Cost', detail: 'Free. If you can afford it, a donation towards the food is appreciated' },
      { name: 'Booking', detail: 'No need to book, just turn up. Or contact the church office for more information' },
    ],
    confirmed: true,
  },

  // ── Seniors ───────────────────────────────────────────────
  {
    name: 'Memory Lane',
    category: 'seniors',
    who: 'Over sixties, with friends and neighbours',
    when: 'Wednesdays, 11:00am – 1:00pm (term time)',
    where: 'Coffee bar, above the Minor Youth Halls',
    image: '/images/memory-lane.jpg',
    imageAlt: 'Memory Lane members at long tables set for tea in the coffee bar, listening to a guest at the front',
    quote: '“Even to your old age and grey hairs I am he, I am he who will sustain you.” Isaiah 46:4',
    description:
      'Good food, good company and a warm welcome every Wednesday. Pull up a chair, catch up with old friends, make some new ones, and enjoy a cooked lunch our volunteers are rightly proud of.',
    sections: [
      { name: 'Lunch', detail: 'A delicious cooked meal and dessert, with tea and coffee, prepared and served by our faithful team of volunteers' },
      { name: 'What’s on', detail: 'A guest speaker every week, plus craft days and information days, and a Christmas dinner to look forward to' },
      { name: 'For the men', detail: 'Snooker and pool' },
      { name: 'Cost', detail: 'No set charge. Memory Lane pays for itself through donations on the day' },
      { name: 'Getting there', detail: 'Level access, with parking facing the entrance. Transport can be offered: contact the church office to check availability and arrange' },
      { name: 'Booking', detail: 'No need to book, just turn up' },
    ],
    confirmed: true,
  },
  {
    name: 'Old Time Sing Along',
    category: 'seniors',
    who: 'Mainly our older friends, but everyone is welcome',
    when: 'Four times a year, on a Monday evening',
    where: 'Coffee bar',
    quote: '“Come, let us sing for joy to the Lord; let us shout aloud to the Rock of our salvation.” Psalm 95:1',
    description:
      'The old hymns, Gospel songs and choruses, sung the way they were meant to be sung: together, and with gusto. A friendly welcome, a good sing and a supper, all completely free.',
    sections: [
      { name: 'What we sing', detail: 'Old hymns, Gospel songs, choruses and old favourites' },
      { name: 'The music', detail: 'Led on the piano or by our guest musicians' },
      { name: 'Your favourites', detail: 'Got a hymn you love? Ask, and we’ll do our best to sing it' },
      { name: 'Supper', detail: 'Supper is provided, and it’s all free' },
      { name: 'Next date', detail: 'Contact the church office, or keep an eye on this website and our Facebook page' },
    ],
    confirmed: true,
  },

  // ── Prayer ────────────────────────────────────────────────
  {
    name: 'Midweek Prayer Meeting',
    category: 'prayer',
    who: 'Everyone welcome',
    when: 'Every Wednesday, 7:30pm – 8:30pm, all year round',
    where: 'Coffee bar',
    quote: '“For where two or three gather in my name, there am I with them.” Matthew 18:20',
    description:
      'In the middle of a busy week, we stop, worship and bring everything to God together. Whether you love to pray out loud or would rather sit quietly and listen, you are very welcome to join us.',
    sections: [
      { name: 'What happens', detail: 'A short time of worship, then open prayer, led by one of our pastors' },
      { name: 'What we pray for', detail: 'Our church family, our community, missionaries and the wider world, and the prayer requests people have shared with us' },
      { name: 'No pressure', detail: 'Pray out loud, or simply listen and agree in your heart. Everyone is welcome' },
      { name: 'Can’t make it?', detail: 'Send us your prayer request and we will pray for it' },
    ],
    link: { label: 'Send a prayer request', to: '/?reason=prayer#contact' },
    confirmed: true,
  },
  {
    name: 'Prayer Ministry',
    category: 'prayer',
    who: 'Anyone who would like prayer',
    when: 'At all of our services',
    quote: '“Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord.” James 5:14',
    description:
      'Whatever you are carrying, you don’t have to carry it alone. Prayer is available at every service, led by our pastors and elders, for any need at all.',
    sections: [
      { name: 'When', detail: 'During the altar call at any of our services, or privately if you would prefer' },
      { name: 'Who prays with you', detail: 'Our pastors and elders' },
      { name: 'Prayer cloths', detail: 'We also offer prayer cloths, anointed with oil and prayed over for your particular need' },
      { name: 'During the week', detail: 'Send a request through the church office, this website, or directly to one of our pastors or elders, and it will be prayed for in our services' },
      { name: 'Confidential', detail: 'What you share is kept in confidence. The only exception is if someone may be at risk of harm, when we have a duty to pass it on to our safeguarding lead' },
    ],
    link: { label: 'Ask for prayer', to: '/?reason=prayer#contact' },
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
    who: 'Anyone who has been bereaved',
    when: 'First Monday of every month, 7:30pm',
    where: 'Tim Hortons, Connswater, Belfast BT5 5DL',
    description: 'A safe space to have a cuppa and a chat with people who understand. A friendly group with a listening ear.',
    link: { label: 'Find out more', to: '/say-their-name' },
    confirmed: true,
  },
  {
    name: 'SONshine Club',
    category: 'support',
    who: 'Children in great need',
    when: 'Started at Glenmachan in 2000',
    where: 'Tharaka, Kenya',
    description:
      'What began as a summer Bible club became a mission to Kenya. Child sponsorship, clean water and a training farm, helping children in great need to thrive.',
    link: { label: 'Find out more', to: '/sonshine-club' },
    confirmed: true,
  },
  {
    name: 'SALT Ministry',
    category: 'support',
    who: 'Local families in genuine need',
    where: 'East Belfast, working with local food banks',
    description:
      'Serving All, Labouring Together. Our food hamper and support ministry, delivering food, friendship and support to families referred to us, in complete confidence.',
    link: { label: 'Find out more', to: '/salt' },
    confirmed: true,
  },
];

export const groupsIn = (category: CategoryId) => groups.filter((g) => g.category === category);

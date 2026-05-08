const STORAGE_KEYS = {
  pledge: 'fanlove.pledgeAccepted',
  badges: 'fanlove.selectedBadges',
  moods: 'fanlove.selectedMoods',
  playMode: 'fanlove.playMode',
  generated: 'fanlove.novair.generatedConcepts',
  comments: 'fanlove.novair.comments',
  reactions: 'fanlove.novair.reactions',
  fandomVotes: 'fanlove.novair.fandomVotes',
  userVotes: 'fanlove.novair.userVotes',
  actions: 'fanlove.localActions',
};

const ASSET_CACHE_KEY = 'layout-clean-4';

const OOWA_ASSETS = {
  logoEyes: './assets/oowa/original/logo/svg/oowa_logo_secondary.svg',
  logoPrimary: './assets/oowa/original/logo/svg/oowa_logo_primary.svg',
  oobiDefault: './assets/oowa/original/oobi/svg/oobi_default.svg',
  oobiHappy: './assets/oowa/original/oobi/svg/oobi_happy.svg',
  oobiConfidence: './assets/oowa/original/oobi/svg/oobi_confidence.svg',
  oobiSurprized: './assets/oowa/original/oobi/svg/oobi_surprized.svg',
  oobiMiniGuide: './assets/oowa/oobi-mini/oobi-mini-guide.svg',
  oobiMiniRooms: './assets/oowa/oobi-mini/oobi-mini-rooms.svg',
  oobiMiniLab: './assets/oowa/oobi-mini/oobi-mini-lab.svg',
  oobiMiniStudio: './assets/oowa/oobi-mini/oobi-mini-studio.svg',
  oobiMiniPass: './assets/oowa/oobi-mini/oobi-mini-pass.svg',
  oobiMiniSafety: './assets/oowa/oobi-mini/oobi-mini-safety.svg',
};

const DEFAULT_CONCEPT_ASSET = './assets/novair-cohesive-lineup-v4.png';

const BRAND = {
  name: 'OOWA Loveloop',
  tagline: 'fan signal club',
};

const fandomBadges = [
  { id: 'army', name: 'ARMY', color: '#F1E7FF', roomId: 'room-army', accent: '#5D05CE', imageUrl: './assets/oowa/fan-badges/army-orbit.svg', alias: 'Purple Orbit', cue: 'protective night signal' },
  { id: 'blink', name: 'BLINK', color: '#F0FFE0', roomId: 'room-blink', accent: '#7A39F1', imageUrl: './assets/oowa/fan-badges/blink-flash.svg', alias: 'Flash Circuit', cue: 'glam voltage' },
  { id: 'once', name: 'ONCE', color: '#F8F2FF', roomId: 'room-once', accent: '#7B35E8', imageUrl: './assets/oowa/fan-badges/once-loop.svg', alias: 'Loop Signal', cue: 'again and always' },
  { id: 'stay', name: 'STAY', color: '#ECFFF0', roomId: 'room-stay', accent: '#45A34F', imageUrl: './assets/oowa/fan-badges/stay-frequency.svg', alias: 'Homewave', cue: 'found signal' },
  { id: 'moa', name: 'MOA', color: '#F6F1FF', roomId: 'room-moa', accent: '#8D62FF', imageUrl: './assets/oowa/fan-badges/moa-moments.svg', alias: 'Moment Link', cue: 'connected soft arc' },
  { id: 'carat', name: 'CARAT', color: '#F3FFD3', roomId: 'room-carat', accent: '#9EC522', imageUrl: './assets/oowa/fan-badges/carat-facet.svg', alias: 'Facet Glow', cue: 'shine together' },
  { id: 'engene', name: 'ENGENE', color: '#F1FFD6', roomId: 'room-engene', accent: '#6E35D8', imageUrl: './assets/oowa/fan-badges/engene-prism.svg', alias: 'Prism Engine', cue: 'lore voltage' },
  { id: 'atiny', name: 'ATINY', color: '#EDF8FF', roomId: 'room-atiny', accent: '#315BCB', imageUrl: './assets/oowa/fan-badges/atiny-tide.svg', alias: 'Tide Signal', cue: 'performance tide' },
  { id: 'fearnot', name: 'FEARNOT', color: '#FFF2F8', roomId: 'room-fearnot', accent: '#DF4C82', imageUrl: './assets/oowa/fan-badges/fearnot-thread.svg', alias: 'Brave Thread', cue: 'dance confidence' },
  { id: 'my', name: 'MY', color: '#EFFFFB', roomId: 'room-my', accent: '#34A6A0', imageUrl: './assets/oowa/fan-badges/my-meta-bloom.svg', alias: 'Meta Bloom', cue: 'concept world' },
  { id: 'dive', name: 'DIVE', color: '#EFF6FF', roomId: 'room-dive', accent: '#6F9EE8', imageUrl: './assets/oowa/fan-badges/dive-gloss-drop.svg', alias: 'Gloss Drop', cue: 'visual polish' },
  { id: 'nctzen', name: 'NCTzen', color: '#F0FFE5', roomId: 'room-nctzen', accent: '#45A34F', imageUrl: './assets/oowa/fan-badges/nctzen-city-pulse.svg', alias: 'City Pulse', cue: 'subunit city' },
  { id: 'midzy', name: 'MIDZY', color: '#FFF0FA', roomId: 'room-midzy', accent: '#E24A9A', imageUrl: './assets/oowa/fan-badges/midzy-step-spark.svg', alias: 'Step Spark', cue: 'challenge energy' },
  { id: 'zerose', name: 'ZEROSE', color: '#FFF2F8', roomId: 'room-zerose', accent: '#D989B9', imageUrl: './assets/oowa/fan-badges/zerose-bloom-count.svg', alias: 'Bloom Count', cue: 'bias discovery' },
  { id: 'briize', name: 'BRIIZE', color: '#F3FFD3', roomId: 'room-briize', accent: '#7FB51D', imageUrl: './assets/oowa/fan-badges/briize-sunrise.svg', alias: 'Sunrise Loop', cue: 'rookie warmth' },
  { id: 'monbebe', name: 'MONBEBE', color: '#F0F5FF', roomId: 'room-monbebe', accent: '#384D9B', imageUrl: './assets/oowa/fan-badges/monbebe-mono-orbit.svg', alias: 'Mono Orbit', cue: 'legacy loyalty' },
  { id: 'exol', name: 'EXO-L', color: '#F2F3FF', roomId: 'room-exol', accent: '#6F6BB8', imageUrl: './assets/oowa/fan-badges/exol-eclipse.svg', alias: 'Eclipse Lane', cue: 'vocal depth' },
  { id: 'neverland', name: 'Neverland', color: '#EEFFF2', roomId: 'room-neverland', accent: '#2CA66D', imageUrl: './assets/oowa/fan-badges/neverland-island.svg', alias: 'Island Thread', cue: 'self-made story' },
  { id: 'multi', name: 'Multi-stan', color: '#F6F0FF', roomId: 'room-multi', accent: '#5D05CE', imageUrl: './assets/oowa/fan-badges/multi-prism.svg', alias: 'Prism Pass', cue: 'many biases one beat' },
];

const rooms = [
  {
    id: 'brief',
    badge: 'Multi-stan',
    accent: '#6f4af2',
    title: 'Comeback Brief Room',
    description: 'Brief, vote, unlock.',
    members: '412K',
    vibe: 'round 2 voting · 38.2K live',
  },
  {
    id: 'visual',
    badge: 'BLINK',
    accent: '#8a7dff',
    title: 'Visual Teaser Room',
    description: 'Teaser cuts and visual picks.',
    members: '286K',
    vibe: 'visual picks · 21.4K live',
  },
  {
    id: 'performance',
    badge: 'STAY',
    accent: '#2b97c9',
    title: 'Performance Cut Room',
    description: 'Stage pull, replay hooks.',
    members: '244K',
    vibe: 'choreo debate · 19.8K live',
  },
  {
    id: 'lore',
    badge: 'MOA',
    accent: '#9a73d9',
    title: 'Lore & Lyrics Room',
    description: 'Symbols, lyrics, story hints.',
    members: '231K',
    vibe: 'symbol map · 16.7K live',
  },
  {
    id: 'styling',
    badge: 'CARAT',
    accent: '#A2C72E',
    title: 'Styling Desk',
    description: 'Fits, texture, member styling.',
    members: '198K',
    vibe: 'fit checks · 13.2K live',
  },
  {
    id: 'beginner',
    badge: 'ONCE',
    accent: '#2ca66d',
    title: 'Beginner Voting Room',
    description: 'Easy voting help.',
    members: '176K',
    vibe: 'new fans welcome · 9.5K live',
  },
  {
    id: 'multi',
    badge: 'Multi-stan',
    accent: '#5D05CE',
    title: 'Multi-stan Table',
    description: 'Many badges, one play table.',
    members: '401K',
    vibe: 'different badges, same vibe · 22.8K live',
  },
  {
    id: 'transit',
    badge: 'DIVE',
    accent: '#6F9EE8',
    title: 'Transit Drop Watch',
    description: 'Airport, van, hallway crumbs.',
    members: '356K',
    vibe: 'drop watch · 27.9K live',
    filterTags: ['following', 'active'],
  },
  {
    id: 'dancecover',
    badge: 'ATINY',
    accent: '#315BCB',
    title: 'Dance Cover Room',
    description: 'Practice logs, clean counts.',
    members: '318K',
    vibe: 'cover notes · 24.6K live',
    filterTags: ['active'],
  },
  {
    id: 'collector',
    badge: 'ZEROSE',
    accent: '#D989B9',
    title: 'Collector Shelf',
    description: 'Cards, binders, shelf tours.',
    members: '302K',
    vibe: 'shelf check · 18.9K live',
    filterTags: ['recommended'],
  },
  {
    id: 'conceptworld',
    badge: 'MY',
    accent: '#34A6A0',
    title: 'Concept World Room',
    description: 'Lore, worlds, safe prompts.',
    members: '297K',
    vibe: 'symbol map · 17.8K live',
    filterTags: ['following', 'beginner'],
  },
  {
    id: 'latam',
    badge: 'Multi-stan',
    accent: '#5D05CE',
    title: 'LatAm Night Shift',
    description: 'English-Spanish fan notes.',
    members: '284K',
    vibe: 'timezone table · 19.4K live',
    filterTags: ['active', 'beginner'],
  },
  {
    id: 'tourprep',
    badge: 'ENGENE',
    accent: '#6E35D8',
    title: 'Tour Prep Table',
    description: 'Venue tips, bags, parent-safe plans.',
    members: '263K',
    vibe: 'show prep · 14.7K live',
    filterTags: ['beginner'],
  },
];

const roomHighlights = {
  brief: {
    latest: 'RAYN name notes are helping new fans understand the comeback hook.',
    host: 'brief.ops',
    tempo: 'vote window',
  },
  visual: {
    latest: 'Silver-blue candid tones are leading the teaser moodboard thread.',
    host: 'visual.zip',
    tempo: 'image picks',
  },
  performance: {
    latest: 'JAX floorwork clips are shaping the cleanest replay moment.',
    host: 'stagecut',
    tempo: 'replay notes',
  },
  lore: {
    latest: 'Nova + Air theories are turning into a softer symbol map.',
    host: 'loredesk',
    tempo: 'theory calm',
  },
  styling: {
    latest: 'KAIRO black-chrome layers are reading cleaner than velvet in the fit check.',
    host: 'fitroom',
    tempo: 'styling desk',
  },
  beginner: {
    latest: 'A one-minute guide explains voting without pressure.',
    host: 'softhelp',
    tempo: 'open Q&A',
  },
  multi: {
    latest: 'Multi-stans are translating stage taste into comfort notes.',
    host: 'luna.zip',
    tempo: 'cross-fan',
  },
  transit: {
    latest: 'The new rehearsal-door group photo made NOVAIR feel like an actual working team.',
    host: 'dropwatch',
    tempo: 'daily crumbs',
  },
  dancecover: {
    latest: 'ATINY and MIDZY badges are comparing JAX counts without turning it into a scoreboard.',
    host: 'count8',
    tempo: 'practice log',
  },
  collector: {
    latest: 'ZEROSE and DIVE badges want more tiny objects in each concept card.',
    host: 'shelf.zip',
    tempo: 'binder calm',
  },
  conceptworld: {
    latest: 'MY, MOA, and ENGENE badges are mapping BREATH CHECK as a safe fictional world.',
    host: 'worlddesk',
    tempo: 'symbol map',
  },
  latam: {
    latest: 'Fans are turning the comeback brief into English-Spanish one-glance summaries.',
    host: 'medianoche',
    tempo: 'night shift',
  },
  tourprep: {
    latest: 'Venue prep threads are staying useful without resale or off-platform meetups.',
    host: 'showready',
    tempo: 'parent-safe',
  },
};

const roomVisuals = {
  brief: {
    imageUrl: './assets/fanlove-lab-ritual-still-v1.png',
    label: 'brief table',
    position: 'center 46%',
  },
  visual: {
    imageUrl: './assets/fanlove-lab-teaser-unlock-v1.png',
    label: 'teaser mood',
    position: 'center 42%',
  },
  performance: {
    imageUrl: './assets/novair-life-jax-practice-v2.png',
    label: 'stage cut',
    position: 'center top',
  },
  lore: {
    imageUrl: './assets/fanlove-lab-live-signal-table-v1.png',
    label: 'symbol shelf',
    position: 'center 50%',
  },
  styling: {
    imageUrl: './assets/novair-life-kairo-vinyl-dig-v1.png',
    label: 'fit desk',
    position: 'center 18%',
  },
  beginner: {
    imageUrl: './assets/fanlove-brand-card-surface-v1.png',
    label: 'soft help',
    position: 'center',
  },
  multi: {
    imageUrl: './assets/novair-life-leo-min-practice-v1.png',
    label: 'multi table',
    position: 'center 34%',
  },
  transit: {
    imageUrl: './assets/novair-life-group-practice-door-v1.png',
    label: 'drop watch',
    position: 'center 46%',
  },
  dancecover: {
    imageUrl: './assets/novair-life-jax-stage-monitor-v1.png',
    label: 'count check',
    position: 'center 26%',
  },
  collector: {
    imageUrl: './assets/novair-life-min-fan-kit-pack-v1.png',
    label: 'fan kit',
    position: 'center 22%',
  },
  conceptworld: {
    imageUrl: './assets/novair-life-kairo-demo-share-v1.png',
    label: 'world desk',
    position: 'center 32%',
  },
  latam: {
    imageUrl: './assets/novair-life-rayn-vocal-check-v1.png',
    label: 'night recap',
    position: 'center 18%',
  },
  tourprep: {
    imageUrl: './assets/novair-life-leo-min-fan-kit-v1.png',
    label: 'show prep',
    position: 'center 30%',
  },
};

const virtualGroup = {
  id: 'novair',
  name: 'NOVAIR',
  pronunciation: 'NO-vair',
  meaning: 'Nova + Air: a new star you cannot touch, a breath you can still feel.',
  fandom: 'BREATH',
  fandomMeaning: 'Fans complete the signal and make NOVAIR breathe.',
  tagline: 'Invisible, but closest to your breath.',
  comeback: 'BREATH CHECK',
  campaignHook: 'Your reaction unlocks the next teaser signal.',
  description: 'A fictional 5-member virtual male idol IP built around light, speed, warmth, shadow, and air.',
  groupImageUrl: './assets/novair-cohesive-lineup-v4.png',
  members: [
    {
      id: 'rayn',
      name: 'RAYN',
      signalLabel: 'Light signal',
      role: 'Leader / Main Vocal',
      signal: 'Light',
      breathType: 'Crystal Breath',
      hook: 'Grounded center leader',
      tagline: 'For fans who need someone steady at the center.',
      biasPoint: 'Mature calm, protective posture, steady eye contact, and the kind of quiet authority that makes the room settle.',
      quote: 'If the night gets loud, stand near me.',
      avatarColor: '#A9C8FF',
      accent: '#6F9EE8',
      imageUrl: './assets/novair-cohesive-rayn-v4.png',
    },
    {
      id: 'jax',
      name: 'JAX',
      signalLabel: 'Speed signal',
      role: 'Main Dancer / Center',
      signal: 'Speed',
      breathType: 'Pulse Breath',
      hook: 'Kinetic stage spark',
      tagline: 'For fans who replay the dance break before sleeping.',
      biasPoint: 'Sharp angles, wild grin energy, neon-lime styling, and choreography that turns comfort into adrenaline.',
      quote: 'Keep up. I want your heartbeat on tempo.',
      avatarColor: '#B6F84E',
      accent: '#7FB51D',
      imageUrl: './assets/novair-cohesive-jax-v4.png',
    },
    {
      id: 'leo',
      name: 'LEO',
      signalLabel: 'Warmth signal',
      role: 'Visual / Soft Vocal',
      signal: 'Warmth',
      breathType: 'Warm Breath',
      hook: 'Nurturing rose-gold warmth',
      tagline: 'For fans who want beauty that takes care of the room.',
      biasPoint: 'Caretaker warmth, gentle eye contact, soft elegance, and the member who notices when the group chat goes quiet.',
      quote: 'Bring the tired parts too. I will make space.',
      avatarColor: '#F2B9A4',
      accent: '#D98974',
      imageUrl: './assets/novair-cohesive-leo-v4.png',
    },
    {
      id: 'kairo',
      name: 'KAIRO',
      signalLabel: 'Shadow signal',
      role: 'Rapper / Producer',
      signal: 'Shadow',
      breathType: 'Deep Breath',
      hook: 'Underground street producer',
      tagline: 'For fans who find comfort in rough demos and basement beats.',
      biasPoint: 'Gritty producer aura, black-chrome layers, sampler-in-hand confidence, and the feeling of discovering a 2 a.m. track before anyone else.',
      quote: 'The clean version comes later. Stay for the first take.',
      avatarColor: '#6A42A3',
      accent: '#8B62D0',
      imageUrl: './assets/novair-cohesive-kairo-v4.png',
    },
    {
      id: 'min',
      name: 'MIN',
      signalLabel: 'Air signal',
      role: 'Youngest / All-rounder',
      signal: 'Air',
      breathType: 'Bubble Breath',
      hook: 'Playful bright youngest',
      tagline: 'For fans who want the room to laugh first.',
      biasPoint: 'Mischievous timing, cute reactions, mint-white brightness, and the easy charm that turns a tense thread soft again.',
      quote: 'I brought the joke. You bring the smile.',
      avatarColor: '#AEEDE2',
      accent: '#59C8B6',
      imageUrl: './assets/novair-cohesive-min-v4.png',
    },
  ],
};

const reactionLabels = [
  'My vote',
  'Stage-ready',
  'Save this',
  'Remix idea',
];

const commentTemplates = [
  'I love this because',
  'This reminds me of',
  'The styling feels',
  'My fandom would love this because',
  'This concept feels like',
  'A detail that made me smile is',
];

const moodOptions = ['hype spark', 'cozy scroll', 'lore dig', 'cute chaos', 'stage replay', 'drop watch'];

const playModeOptions = [
  {
    id: 'soft-stan',
    title: 'Soft Stan',
    detail: 'Cozy posts, kind hype, low-pressure rooms.',
    signal: 'cozy',
    asset: OOWA_ASSETS.oobiHappy,
  },
  {
    id: 'main-character',
    title: 'Main Character',
    detail: 'Louder reactions, fresh drops, room energy.',
    signal: 'live',
    asset: OOWA_ASSETS.oobiSurprized,
  },
  {
    id: 'deep-cut',
    title: 'Deep Cut',
    detail: 'Lore boards, vote receipts, comeback clues.',
    signal: 'detective',
    asset: OOWA_ASSETS.oobiConfidence,
  },
];

const promptOptions = {
  mood: ['rayn light signal', 'jax spark signal', 'leo warmth signal', 'kairo shadow signal', 'min air signal', 'breath check unlock'],
  styling: ['tailored black suits', 'wet-look leather', 'silver jewelry', 'varsity blazer layers', 'oversized streetwear', 'romantic velvet'],
  season: ['midnight', 'rainy night', 'blue hour', 'backstage', 'rooftop dusk'],
  stageVibe: ['dance-break teaser', 'vocal teaser', 'performance film', 'album jacket', 'music-video still'],
  palette: ['midnight plum', 'black chrome', 'icy blue', 'dark rose', 'monochrome silver', 'smoky lavender'],
};

const seedConcepts = [
  {
    id: 'concept-rayn-light-signal',
    title: 'RAYN Light Signal',
    creatorName: 'breath.ops',
    creatorBadge: 'STAY',
    mood: ['light signal', 'silver blue', 'main vocal'],
    teaserCaption: 'Silver-blue center. Calm, protective, instantly readable.',
    assetUrl: './assets/novair-cohesive-rayn-v4.png',
    assetGradient: ['#EAF4FF', '#6F9EE8'],
    reactions: { 'My vote': 1384, 'Stage-ready': 912, 'Save this': 824, 'Remix idea': 316 },
    fandomAffinity: { STAY: 42, ARMY: 31, BLINK: 28, 'Multi-stan': 24 },
  },
  {
    id: 'concept-jax-spark-stage',
    title: 'JAX Spark Stage',
    creatorName: 'stagecut',
    creatorBadge: 'BLINK',
    mood: ['speed signal', 'neon lime', 'dance center'],
    teaserCaption: 'Neon motion, fast cuts, replay-ready stage spark.',
    assetUrl: './assets/novair-cohesive-jax-v4.png',
    assetGradient: ['#171B1C', '#B6F84E'],
    reactions: { 'My vote': 1298, 'Performance wins': 1160, 'Teaser-worthy': 788, 'Save this': 520 },
    fandomAffinity: { BLINK: 40, CARAT: 35, ARMY: 24, 'Multi-stan': 21 },
  },
  {
    id: 'concept-leo-rose-orbit',
    title: 'LEO Rose Orbit',
    creatorName: 'roselight',
    creatorBadge: 'MOA',
    mood: ['warmth signal', 'rose gold', 'visual vocal'],
    teaserCaption: 'Rose warmth, soft eye contact, caretaker visual lane.',
    assetUrl: './assets/novair-cohesive-leo-v4.png',
    assetGradient: ['#FFF0EA', '#D98974'],
    reactions: { 'My vote': 1186, 'Title-track fit': 894, 'Lore fits': 602, 'Save this': 541 },
    fandomAffinity: { MOA: 38, ARMY: 26, ONCE: 20, CARAT: 18 },
  },
  {
    id: 'concept-kairo-shadow-wave',
    title: 'KAIRO Shadow Wave',
    creatorName: 'waveform',
    creatorBadge: 'ARMY',
    mood: ['shadow signal', 'deep violet', 'producer rap'],
    teaserCaption: 'Basement grit, black chrome, late-night producer pull.',
    assetUrl: './assets/novair-cohesive-kairo-v4.png',
    assetGradient: ['#16111F', '#8B62D0'],
    reactions: { 'My vote': 976, 'Performance wins': 742, 'Stage-ready': 690, 'Remix idea': 405 },
    fandomAffinity: { ARMY: 36, STAY: 34, BLINK: 18, 'Multi-stan': 17 },
  },
  {
    id: 'concept-min-air-ring',
    title: 'MIN Air Ring',
    creatorName: 'airring',
    creatorBadge: 'CARAT',
    mood: ['air signal', 'mint white', 'zero gravity'],
    teaserCaption: 'Mint-white playfulness and easy youngest charm.',
    assetUrl: './assets/novair-cohesive-min-v4.png',
    assetGradient: ['#F0FFFB', '#59C8B6'],
    reactions: { 'My vote': 831, 'Styling wins': 598, 'Save this': 520, 'Same pick': 314 },
    fandomAffinity: { CARAT: 36, BLINK: 24, ONCE: 19, MOA: 15 },
  },
  {
    id: 'concept-breath-check-unlock',
    title: 'BREATH CHECK Unlock',
    creatorName: 'motionfile',
    creatorBadge: 'ONCE',
    mood: ['five signals', 'fan reaction', 'teaser unlock'],
    teaserCaption: 'Fan reactions unlock member teasers one signal at a time.',
    assetUrl: DEFAULT_CONCEPT_ASSET,
    assetGradient: ['#241F2B', '#B6F84E'],
    reactions: { 'My vote': 744, 'Performance wins': 552, 'Remix idea': 421, 'Same pick': 250 },
    fandomAffinity: { ONCE: 31, STAY: 26, ARMY: 18, 'Multi-stan': 18 },
  },
  {
    id: 'concept-rayn-first-breath',
    title: 'RAYN First Breath',
    creatorName: 'silverhour',
    creatorBadge: 'ENGENE',
    mood: ['light signal', 'vocal check', 'first frame'],
    teaserCaption: 'Mic-pack calm, silver-blue focus, and a leader intro fans read in one glance.',
    assetUrl: './assets/novair-life-rayn-vocal-check-v1.png',
    assetGradient: ['#EAF4FF', '#B6F84E'],
    reactions: { 'My vote': 692, 'Stage-ready': 418, 'Save this': 384, 'Remix idea': 244 },
    fandomAffinity: { ENGENE: 32, STAY: 29, DIVE: 24, ARMY: 22, 'Multi-stan': 20 },
  },
  {
    id: 'concept-jax-monitor-spark',
    title: 'JAX Monitor Spark',
    creatorName: 'count8',
    creatorBadge: 'ATINY',
    mood: ['speed signal', 'monitor glow', 'dance proof'],
    teaserCaption: 'A rehearsal monitor moment that turns JAX from stage idea into replay habit.',
    assetUrl: './assets/novair-life-jax-stage-monitor-v1.png',
    assetGradient: ['#171B1C', '#D5FF72'],
    reactions: { 'My vote': 640, 'Performance wins': 512, 'Stage-ready': 480, 'Save this': 272 },
    fandomAffinity: { ATINY: 36, MIDZY: 29, BLINK: 24, CARAT: 21, STAY: 18 },
  },
  {
    id: 'concept-kairo-demo-room',
    title: 'KAIRO Demo Room',
    creatorName: 'worlddesk',
    creatorBadge: 'MY',
    mood: ['shadow signal', 'rough demo', 'studio world'],
    teaserCaption: 'Late-night producer proof with enough mess to make the fictional IP feel handled.',
    assetUrl: './assets/novair-life-kairo-demo-share-v1.png',
    assetGradient: ['#21172F', '#8B62D0'],
    reactions: { 'My vote': 604, 'Remix idea': 488, 'Save this': 336, 'Stage-ready': 214 },
    fandomAffinity: { MY: 34, MOA: 28, ENGENE: 22, ARMY: 18, NCTzen: 16 },
  },
  {
    id: 'concept-min-fan-kit',
    title: 'MIN Fan Kit',
    creatorName: 'mintqueue',
    creatorBadge: 'ZEROSE',
    mood: ['air signal', 'fan kit', 'youngest charm'],
    teaserCaption: 'Sticker-table softness that gives MIN an easy entry point for new fans.',
    assetUrl: './assets/novair-life-min-fan-kit-pack-v1.png',
    assetGradient: ['#EFFFFB', '#59C8B6'],
    reactions: { 'My vote': 588, 'Save this': 471, 'Same pick': 264, 'Remix idea': 190 },
    fandomAffinity: { ZEROSE: 34, BRIIZE: 28, ONCE: 22, CARAT: 20, DIVE: 18 },
  },
  {
    id: 'concept-leo-min-soft-pack',
    title: 'LEO + MIN Soft Pack',
    creatorName: 'softorbit',
    creatorBadge: 'FEARNOT',
    mood: ['warmth signal', 'fan kit', 'pair chemistry'],
    teaserCaption: 'Warm care and playful chaos in one believable fan-club drop.',
    assetUrl: './assets/novair-life-leo-min-fan-kit-v1.png',
    assetGradient: ['#FFF0EA', '#D5FF72'],
    reactions: { 'My vote': 552, 'Save this': 420, 'Remix idea': 258, 'Stage-ready': 190 },
    fandomAffinity: { FEARNOT: 30, ONCE: 25, ZEROSE: 21, Neverland: 19, 'Multi-stan': 18 },
  },
  {
    id: 'concept-novair-door-sync',
    title: 'NOVAIR Door Sync',
    creatorName: 'dropwatch',
    creatorBadge: 'Multi-stan',
    mood: ['five signals', 'rehearsal door', 'group proof'],
    teaserCaption: 'A five-member working-group photo that makes the comeback feel staffed, lived-in, and real.',
    assetUrl: './assets/novair-life-group-practice-door-v1.png',
    assetGradient: ['#5D05CE', '#D5FF72'],
    reactions: { 'My vote': 712, 'Stage-ready': 386, 'Save this': 442, 'Remix idea': 281 },
    fandomAffinity: { 'Multi-stan': 34, NCTzen: 24, MONBEBE: 22, 'EXO-L': 18, ATINY: 18 },
  },
];

const moderationFlags = [
  { id: 'flag-01', reason: 'Comparative fandom wording', severity: 'medium', targetType: 'comment', targetId: 'concept-jax-spark-stage:note-184', snippet: 'better than...', locale: 'en-US', reviewer: 'safety.ops', status: 'pending', action: 'warn + request rewrite' },
  { id: 'flag-02', reason: 'Real idol likeness prompt', severity: 'high', targetType: 'concept', targetId: 'studio-draft-447', snippet: 'look exactly like...', locale: 'en-US', reviewer: 'studio.guard', status: 'resolved', action: 'block term' },
  { id: 'flag-03', reason: 'Off-platform contact request', severity: 'high', targetType: 'post', targetId: 'rooms-tourprep:post-91', snippet: 'dm me after the show...', locale: 'en-US', reviewer: 'community.mod', status: 'pending', action: 'hide + educate' },
  { id: 'flag-04', reason: 'Spammy repost pattern', severity: 'low', targetType: 'user', targetId: 'user-queue-77', snippet: 'same image repeated 11x', locale: 'multi', reviewer: 'queue.bot', status: 'dismissed', action: 'monitor' },
];

const roomPosts = [
  { type: 'Voting help', title: 'Which signal opens BREATH CHECK?', body: 'Pick the member lane you remember fastest.' },
  { type: 'Concept note', title: 'RAYN makes NOVAIR click.', body: 'Visible star, invisible breath, steady center.' },
  { type: 'Beginner guide', title: 'How the vote works', body: 'Vote once. Remix safely. Unlock the next teaser.' },
  { type: 'Performance talk', title: 'JAX has the stage hook.', body: 'Neon lime reads before the profile copy.' },
  { type: 'Safety note', title: 'Use mood, not real idols.', body: 'Try “rainy subway teaser” instead of a real name.' },
  { type: 'Share card', title: 'BREATH CHECK card idea', body: 'Member image, signal, vote mix, unlock status.' },
  { type: 'Drop watch', title: 'Which daily photo should pin next?', body: 'Transit RAYN, monitor JAX, or fan-kit MIN. Real-life proof feels more useful than poster polish.', roomIds: ['transit', 'brief', 'multi'] },
  { type: 'Clip note', title: 'JAX reads quickest in the three-second test.', body: 'No lore needed when the monitor-glow count already explains the role.', roomIds: ['performance', 'dancecover'] },
  { type: 'Bias note', title: 'LEO care kit is a quiet bias trap.', body: 'Practical warmth beats perfect styling when fans are choosing a first save.', roomIds: ['collector', 'beginner', 'multi'] },
  { type: 'Studio note', title: 'Add mess to KAIRO prompts.', body: 'Cables, sampler pads, half-finished notes, and an open chair make the producer lane credible.', roomIds: ['conceptworld', 'lore', 'styling'] },
  { type: 'Guide', title: 'Vote by vibe, then read details.', body: 'Badge first, signal second, long theory later. New fans need one clean path.', roomIds: ['beginner', 'latam', 'tourprep'] },
  { type: 'Bilingual recap', title: 'BREATH CHECK in one Spanish line.', body: 'Una senal, un voto, un teaser nuevo. Keep translations simple enough to screenshot.', roomIds: ['latam', 'beginner'] },
  { type: 'Tour prep', title: 'Parent-safe show planning thread', body: 'Bag policy, ride pickup, venue entry, and no off-platform meetup pressure.', roomIds: ['tourprep'] },
  { type: 'Collector note', title: 'Make the vote card shelf-worthy.', body: 'Small member photo, badge mix, and one clear signal. No fake merch pressure.', roomIds: ['collector', 'visual'] },
  { type: 'Concept world', title: 'MY and ENGENE badges are mapping the air motif.', body: 'The trick is making BREATH feel like a fictional system, not homework.', roomIds: ['conceptworld', 'lore'] },
  { type: 'Dance cover', title: 'Eight-count notes without rivalry energy', body: 'ATINY, MIDZY, and STAY badges are comparing motion, not groups.', roomIds: ['dancecover', 'performance'] },
];

const roomSectionFilters = [
  { id: 'hot', label: 'Hot' },
  { id: 'new', label: 'New' },
  { id: 'guides', label: 'Guides' },
  { id: 'events', label: 'Events' },
];

const communityStats = [
  { label: 'sample fans online', value: '514K', detail: '+52K in the comeback vote demo' },
  { label: 'sample concepts', value: '34.9K', detail: 'fictional-IP safety scan' },
  { label: 'sample votes cast', value: '2.4M', detail: 'round 2 closes in 14h' },
  { label: 'sample active rooms', value: '82', detail: 'visual, stage, lore, touring' },
];

const communityFeedPosts = [
  {
    id: 'feed-01',
    author: 'luna.zip',
    badge: 'ARMY',
    room: 'Comeback week',
    time: 'now',
    title: 'RAYN makes the name NOVAIR finally make sense.',
    body: 'Silver-blue center. Nova + Air finally reads.',
    attachedConcept: 'concept-rayn-light-signal',
    reactions: '24.8K',
    replies: '1.2K',
    status: 'vote thread',
  },
  {
    id: 'feed-02',
    author: 'rosiecloud',
    badge: 'BLINK',
    room: 'Visual Teaser Room',
    time: '2m',
    title: 'JAX is the first member who would pop in a thumbnail.',
    body: 'Neon lime is risky in the right way. Instant thumbnail read.',
    attachedConcept: 'concept-jax-spark-stage',
    reactions: '18.1K',
    replies: '884',
    status: 'safety reviewed',
  },
  {
    id: 'feed-03',
    author: 'peachdiary',
    badge: 'ONCE',
    room: 'Beginner Voting Room',
    time: '4m',
    title: 'What am I supposed to compare when choosing a signal?',
    body: 'I am comparing silhouette, role, and whether LEO makes the teaser easy to enter.',
    attachedConcept: 'concept-leo-rose-orbit',
    reactions: '13.6K',
    replies: '641',
    status: 'helpful thread',
  },
  {
    id: 'feed-04',
    author: 'staysoft',
    badge: 'STAY',
    room: 'Performance Corner',
    time: '8m',
    title: 'KAIRO gives fans who like darker concepts a clean entry point.',
    body: 'The producer lane gives KAIRO a specific reason to save.',
    attachedConcept: 'concept-kairo-shadow-wave',
    reactions: '10.9K',
    replies: '512',
    status: 'mod cleared',
  },
  {
    id: 'feed-05',
    author: 'mintqueue',
    badge: 'CARAT',
    room: 'Transit Drop Watch',
    time: '11m',
    title: 'MIN packing fan kits is the youngest lane finally clicking.',
    body: 'It feels like a fan-club drop, not a concept poster. That is the difference.',
    attachedConcept: 'concept-min-fan-kit',
    reactions: '9.8K',
    replies: '421',
    status: 'vote thread',
  },
  {
    id: 'feed-06',
    author: 'silverhour',
    badge: 'ENGENE',
    room: 'Concept World Room',
    time: '14m',
    title: 'RAYN with the mic pack sells the whole first teaser.',
    body: 'Not dramatic. Just centered. The kind of image that makes the comeback feel already in motion.',
    attachedConcept: 'concept-rayn-first-breath',
    reactions: '9.2K',
    replies: '398',
    status: 'safety reviewed',
  },
  {
    id: 'feed-07',
    author: 'count8',
    badge: 'ATINY',
    room: 'Dance Cover Room',
    time: '17m',
    title: 'JAX should get the practice-monitor teaser.',
    body: 'The role reads through action. Fans will clip it before they read the caption.',
    attachedConcept: 'concept-jax-monitor-spark',
    reactions: '8.7K',
    replies: '366',
    status: 'performance pull',
  },
  {
    id: 'feed-08',
    author: 'worlddesk',
    badge: 'MY',
    room: 'Concept World Room',
    time: '21m',
    title: 'KAIRO needs more messy-world props.',
    body: 'Sampler pads, cables, rough demo, no clean poster desk. The fictional world feels better when it has work on it.',
    attachedConcept: 'concept-kairo-demo-room',
    reactions: '8.3K',
    replies: '342',
    status: 'helpful thread',
  },
  {
    id: 'feed-09',
    author: 'medianoche',
    badge: 'Multi-stan',
    room: 'LatAm Night Shift',
    time: '25m',
    title: 'English-Spanish recaps make the vote less intimidating.',
    body: 'One signal. One vote. One unlock. That is enough for a school-night screenshot.',
    attachedConcept: 'concept-novair-door-sync',
    reactions: '7.9K',
    replies: '318',
    status: 'beginner-safe',
  },
  {
    id: 'feed-10',
    author: 'glossdrop',
    badge: 'DIVE',
    room: 'Visual Teaser Room',
    time: '29m',
    title: 'The group rehearsal-door photo should be the proof image.',
    body: 'It makes all five lanes exist in the same room, which the old solo cards could not do alone.',
    attachedConcept: 'concept-novair-door-sync',
    reactions: '7.6K',
    replies: '301',
    status: 'safety reviewed',
  },
  {
    id: 'feed-11',
    author: 'stepfairy',
    badge: 'MIDZY',
    room: 'Dance Cover Room',
    time: '33m',
    title: 'Can Studio generate an eight-count prompt from my badge?',
    body: 'I want the vote card to say “speed signal” and give a safe practice-room image idea.',
    attachedConcept: 'concept-jax-monitor-spark',
    reactions: '6.8K',
    replies: '255',
    status: 'helpful thread',
  },
  {
    id: 'feed-12',
    author: 'moonbinder',
    badge: 'EXO-L',
    room: 'Tour Prep Table',
    time: '41m',
    title: 'Older-gen fans will use this if the rooms stay calm.',
    body: 'The point is not proving loyalty. It is translating taste into a cleaner comeback decision.',
    attachedConcept: 'concept-rayn-first-breath',
    reactions: '5.9K',
    replies: '218',
    status: 'mod cleared',
  },
];

const belongingPrompts = [
  { title: 'Pick the next teaser image', meta: 'vote wall · 2.4M votes' },
  { title: 'Generate a comeback brief', meta: 'studio · 34K concepts today' },
  { title: 'Compare styling vs performance', meta: 'debate · 42K notes' },
  { title: 'Share your vote card', meta: 'growth loop · ready next' },
];

const tasteInsights = [
  { title: 'Light and speed split cleanly', body: 'RAYN owns clarity. JAX owns replay.', mood: 'light vs speed', badges: ['STAY', 'ARMY', 'Multi-stan'] },
  { title: 'Warmth and shadow created bias lanes', body: 'LEO and KAIRO pull opposite emotional hooks.', mood: 'warmth / shadow', badges: ['BLINK', 'CARAT', 'Multi-stan'] },
  { title: 'Beginners prefer named signals', body: 'Light, Speed, and Air beat abstract moodboards.', mood: 'easy to read', badges: ['ONCE', 'MOA'] },
];

const plazaFilters = ['For you', 'Following', 'Live vote', 'New', 'Safe prompts'];

const communityChannels = [
  { label: 'Vote Wall', count: '2.4M votes', active: true, route: '/vote' },
  { label: 'Concept Studio', count: '34K drafts', active: false, route: '/studio' },
  { label: 'Member Styling', count: '31K notes', active: false, route: '/rooms?filter=recommended&q=styling' },
  { label: 'Safe Prompt Help', count: '9K rewrites', active: false, route: '/rooms?filter=beginner' },
  { label: 'New Fan Guide', count: '14K asks', active: false, route: '/rooms?filter=beginner&q=guide' },
  { label: 'LatAm Night Shift', count: '19K live', active: false, route: '/rooms/latam' },
  { label: 'Dance Cover Room', count: '24K live', active: false, route: '/rooms/dancecover' },
];

const roomCategories = [
  { label: 'My comeback rooms', count: '11 pinned', route: '/rooms?filter=following' },
  { label: 'NOVAIR only', count: 'fictional group', route: '/lab' },
  { label: 'Voting rooms', count: 'round 2 live', route: '/rooms?filter=active&q=vote' },
  { label: 'Safe creation', count: 'no real likeness', route: '/studio' },
  { label: 'Americas night shift', count: 'bilingual rooms', route: '/rooms/latam' },
  { label: 'Tour prep', count: 'venue-safe help', route: '/rooms/tourprep' },
];

const eventOps = [
  { label: 'sample viewers', value: '348K', detail: 'watching the vote wall' },
  { label: 'BREATH meter', value: '74%', detail: 'next teaser unlock' },
  { label: 'sample remixes', value: '51K', detail: 'generated in the last hour' },
  { label: 'safety holds', value: '2.7%', detail: 'mostly real-IP prompt attempts' },
];

const imageGenerationBriefs = [
  {
    id: 'brief-rayn',
    title: 'RAYN Light Signal',
    queue: '12.4K remixes',
    prompt: 'mature silver-blue virtual idol leader, grounded center presence, protective calm, no real likeness',
    imageUrl: './assets/novair-cohesive-rayn-v4.png',
    palette: ['#EAF4FF', '#6F9EE8'],
  },
  {
    id: 'brief-jax',
    title: 'JAX Spark Stage',
    queue: '9.8K remixes',
    prompt: 'neon lime virtual idol dancer, techwear, motion trails, stage spark, no real likeness',
    imageUrl: './assets/novair-cohesive-jax-v4.png',
    palette: ['#171B1C', '#B6F84E'],
  },
  {
    id: 'brief-leo',
    title: 'LEO Rose Orbit',
    queue: '8.7K remixes',
    prompt: 'rose-gold virtual idol vocalist, nurturing warmth, gentle caretaker aura, no real likeness',
    imageUrl: './assets/novair-cohesive-leo-v4.png',
    palette: ['#FFF0EA', '#D98974'],
  },
  {
    id: 'brief-kairo',
    title: 'KAIRO Shadow Wave',
    queue: '8.1K remixes',
    prompt: 'dark violet virtual idol producer, underground streetwear, sampler details, no real likeness',
    imageUrl: './assets/novair-cohesive-kairo-v4.png',
    palette: ['#16111F', '#8B62D0'],
  },
  {
    id: 'brief-min',
    title: 'MIN Air Ring',
    queue: '7.4K remixes',
    prompt: 'mint-white virtual idol all-rounder, playful bright youngest energy, no real likeness',
    imageUrl: './assets/novair-cohesive-min-v4.png',
    palette: ['#F0FFFB', '#59C8B6'],
  },
  {
    id: 'brief-rayn-vocal-check',
    title: 'RAYN Vocal Check',
    queue: '6.9K remixes',
    prompt: 'silver-blue fictional idol leader checking mic pack in side-stage hallway, grounded calm, no real likeness',
    imageUrl: './assets/novair-life-rayn-vocal-check-v1.png',
    palette: ['#EAF4FF', '#B6F84E'],
  },
  {
    id: 'brief-jax-monitor',
    title: 'JAX Monitor Spark',
    queue: '6.3K remixes',
    prompt: 'fictional idol dancer reviewing rehearsal monitor, black practice clothes, lime detail, no real likeness',
    imageUrl: './assets/novair-life-jax-stage-monitor-v1.png',
    palette: ['#171B1C', '#D5FF72'],
  },
  {
    id: 'brief-kairo-demo',
    title: 'KAIRO Demo Room',
    queue: '5.8K remixes',
    prompt: 'fictional underground producer idol in messy violet studio booth sharing rough demo, no real likeness',
    imageUrl: './assets/novair-life-kairo-demo-share-v1.png',
    palette: ['#21172F', '#8B62D0'],
  },
  {
    id: 'brief-min-kit',
    title: 'MIN Fan Kit',
    queue: '5.1K remixes',
    prompt: 'mint-haired fictional idol youngest packing abstract fan-kit stickers and hoodies, no real likeness',
    imageUrl: './assets/novair-life-min-fan-kit-pack-v1.png',
    palette: ['#EFFFFB', '#59C8B6'],
  },
];

const dailyRollPhotos = [
  {
    id: 'daily-rayn-transit',
    member: 'RAYN',
    title: 'Airport Corridor Pause',
    kicker: 'Transit candid',
    meta: '08:14 · airport corridor',
    body: 'A grounded off-duty cut that keeps RAYN mature, quiet, and close to real idol daily life without making the moment feel staged.',
    imageUrl: './assets/novair-life-rayn-transit-v1.png',
    accent: '#6F9EE8',
    focal: 'center top',
  },
  {
    id: 'daily-rayn-rain-van',
    member: 'RAYN',
    title: 'Umbrella Load-Out',
    kicker: 'Rainy back door',
    meta: '21:03 · venue exit',
    body: 'RAYN reads as the grounded center through action: umbrella, garment bag, and a quiet check before the team leaves.',
    imageUrl: './assets/novair-life-rayn-umbrella-load-v1.png',
    accent: '#6F9EE8',
    focal: 'center 18%',
  },
  {
    id: 'daily-jax-practice',
    member: 'JAX',
    title: 'Late Practice Take',
    kicker: 'Dance room',
    meta: '23:48 · practice floor',
    body: 'JAX feels more real in plain rehearsal clothes: tired smile, floor tape, water bottle, and no impossible mirror reflection.',
    imageUrl: './assets/novair-life-jax-practice-v2.png',
    accent: '#7FB51D',
    focal: 'center top',
  },
  {
    id: 'daily-jax-hallway',
    member: 'JAX',
    title: 'Sneaker Tape Ritual',
    kicker: 'Practice reset',
    meta: '00:18 · floor tape corner',
    body: 'JAX gets a more specific dancer-life reference: ankle tape, lime laces, floor marks, and one more run-through waiting.',
    imageUrl: './assets/novair-life-jax-sneaker-tape-v1.png',
    accent: '#7FB51D',
    focal: 'center 18%',
  },
  {
    id: 'daily-kairo-studio',
    member: 'KAIRO',
    title: '2 A.M. Track Pass',
    kicker: 'Recording room',
    meta: '02:06 · mix booth',
    body: 'KAIRO becomes more believable in work clothes, with messy equipment, headphones, and a late-night track still open.',
    imageUrl: './assets/novair-life-kairo-studio-v2.png',
    accent: '#8B62D0',
    focal: 'center 42%',
  },
  {
    id: 'daily-kairo-night-break',
    member: 'KAIRO',
    title: 'Vinyl Dig Before Mix',
    kicker: 'Archive hunt',
    meta: '01:11 · sample shelf',
    body: 'A better underground-producer beat: crate digging, unmarked sleeves, sampler pads, and a focused look that feels like finding a sound.',
    imageUrl: './assets/novair-life-kairo-vinyl-dig-v1.png',
    accent: '#8B62D0',
    focal: 'center 12%',
  },
  {
    id: 'daily-leo-min-practice',
    member: 'LEO + MIN',
    title: 'Counting The Soft Part',
    kicker: 'Pair practice',
    meta: '18:32 · rehearsal room',
    body: 'LEO guides the count while MIN keeps the room loose, making the warm-cute chemistry easier to believe.',
    imageUrl: './assets/novair-life-leo-min-practice-v1.png',
    accent: '#D98974',
    focal: 'center 34%',
  },
  {
    id: 'daily-leo-tea',
    member: 'LEO',
    title: 'Notes Before Check-In',
    kicker: 'Dressing room',
    meta: '21:10 · backstage',
    body: 'A softer caretaker cut that makes LEO feel like the member who checks on everyone after practice.',
    imageUrl: './assets/novair-life-leo-tea-v1.png',
    accent: '#D98974',
    focal: 'center top',
  },
  {
    id: 'daily-leo-snack-run',
    member: 'LEO',
    title: 'Care Kit Check',
    kicker: 'Backstage care',
    meta: '19:42 · wardrobe corner',
    body: 'LEO feels warmer when the care is practical: folded blankets, lint roller, first-aid pouch, and the member bag he quietly keeps ready.',
    imageUrl: './assets/novair-life-leo-care-kit-v1.png',
    accent: '#D98974',
    focal: 'center 12%',
  },
  {
    id: 'daily-min-selfie',
    member: 'MIN',
    title: 'After-Practice Selfie',
    kicker: 'Fan club drop',
    meta: '22:04 · practice floor',
    body: 'MIN gets a casual, playful fan-club moment so the youngest lane feels accessible instead of abstract.',
    imageUrl: './assets/novair-life-min-selfie-v1.png',
    accent: '#59C8B6',
    focal: 'center 30%',
  },
  {
    id: 'daily-min-snack-break',
    member: 'MIN',
    title: 'Laundry Room Hoodie Heist',
    kicker: 'Dorm errand',
    meta: '22:31 · laundry corner',
    body: 'MIN gets a softer everyday gag: folding the mint hoodie pile with the caught-in-the-act smile fans would clip immediately.',
    imageUrl: './assets/novair-life-min-laundry-v1.png',
    accent: '#59C8B6',
    focal: 'center 16%',
  },
  {
    id: 'daily-group-practice-door',
    member: 'NOVAIR',
    title: 'Rehearsal Door Sync',
    kicker: 'Group proof',
    meta: '00:06 · studio corridor',
    body: 'A five-member everyday photo that makes the IP feel staffed, rehearsing, and active between fan-facing drops.',
    imageUrl: './assets/novair-life-group-practice-door-v1.png',
    accent: '#5D05CE',
    focal: 'center 46%',
  },
  {
    id: 'daily-rayn-vocal-check',
    member: 'RAYN',
    title: 'Mic Pack Calm',
    kicker: 'Vocal check',
    meta: '19:26 · side stage',
    body: 'RAYN gets a practical leader moment: mic pack, in-ear cable, and the quiet focus before the room starts moving.',
    imageUrl: './assets/novair-life-rayn-vocal-check-v1.png',
    accent: '#6F9EE8',
    focal: 'center 18%',
  },
  {
    id: 'daily-jax-stage-monitor',
    member: 'JAX',
    title: 'Monitor Replay Check',
    kicker: 'Count review',
    meta: '23:17 · rehearsal edge',
    body: 'JAX reads through action instead of styling: monitor glow, floor tape, and one clean count before the next run.',
    imageUrl: './assets/novair-life-jax-stage-monitor-v1.png',
    accent: '#7FB51D',
    focal: 'center 24%',
  },
  {
    id: 'daily-kairo-demo-share',
    member: 'KAIRO',
    title: 'Rough Demo Share',
    kicker: 'Studio handoff',
    meta: '02:18 · mix booth',
    body: 'KAIRO’s producer lane gets human context: a rough track, messy desk, and the feeling that someone just heard the hook.',
    imageUrl: './assets/novair-life-kairo-demo-share-v1.png',
    accent: '#8B62D0',
    focal: 'center 30%',
  },
  {
    id: 'daily-leo-min-fan-kit',
    member: 'LEO + MIN',
    title: 'Fan Kit Fold',
    kicker: 'Dorm table',
    meta: '21:48 · common room',
    body: 'LEO’s caretaker rhythm and MIN’s playful youngest lane meet in one low-pressure fan-club preparation moment.',
    imageUrl: './assets/novair-life-leo-min-fan-kit-v1.png',
    accent: '#D98974',
    focal: 'center 30%',
  },
  {
    id: 'daily-min-fan-kit-pack',
    member: 'MIN',
    title: 'Sticker Table Smile',
    kicker: 'Fan kit',
    meta: '16:44 · practice corner',
    body: 'MIN becomes easier to remember through a specific object: fan-kit cards, mint hoodie, and a caught-off-guard smile.',
    imageUrl: './assets/novair-life-min-fan-kit-pack-v1.png',
    accent: '#59C8B6',
    focal: 'center 22%',
  },
];

const memberReferenceBoards = [
  {
    member: 'RAYN',
    title: 'Grounded Center Reference',
    body: 'Face, stance, and profile checks for the mature silver-blue leader lane.',
    imageUrl: './assets/novair-ref-rayn-v1.png',
    anchorUrl: './assets/novair-anchor-rayn-v1.png',
    accent: '#6F9EE8',
  },
  {
    member: 'JAX',
    title: 'Kinetic Dancer Reference',
    body: 'Close, motion, and side angles for the neon-lime performance lane.',
    imageUrl: './assets/novair-ref-jax-v1.png',
    anchorUrl: './assets/novair-anchor-jax-v1.png',
    accent: '#7FB51D',
  },
  {
    member: 'LEO',
    title: 'Warm Caretaker Reference',
    body: 'Soft portrait, relaxed standing, and profile checks for the nurturing rose lane.',
    imageUrl: './assets/novair-ref-leo-v1.png',
    anchorUrl: './assets/novair-anchor-leo-v1.png',
    accent: '#D98974',
  },
  {
    member: 'KAIRO',
    title: 'Street Producer Reference',
    body: 'Studio close-up, producer posture, and side angle for the underground violet lane.',
    imageUrl: './assets/novair-ref-kairo-v1.png',
    anchorUrl: './assets/novair-anchor-kairo-v1.png',
    accent: '#8B62D0',
  },
  {
    member: 'MIN',
    title: 'Playful Youngest Reference',
    body: 'Cute smile, relaxed practice pose, and candid laugh for the mint-white lane.',
    imageUrl: './assets/novair-ref-min-v1.png',
    anchorUrl: './assets/novair-anchor-min-v1.png',
    accent: '#59C8B6',
  },
];

const liveSubmissions = [
  { title: 'RAYN Light Signal', badge: 'STAY', status: 'brand clarity lead', count: '1.2K votes/min' },
  { title: 'JAX Spark Stage', badge: 'BLINK', status: 'stage surge', count: '9.8K remixes' },
  { title: 'LEO Rose Orbit', badge: 'MOA', status: 'bias sync pick', count: '8.1K saves' },
  { title: 'KAIRO Shadow Wave', badge: 'ARMY', status: 'producer room', count: '6.4K notes' },
];

function loadJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    showToast('Local demo storage is full, so this action was not saved.');
  }
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function asObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
}

function normalizeBadgeList(value) {
  const valid = new Set(fandomBadges.map((badge) => badge.name));
  return asArray(value).filter((name) => typeof name === 'string' && valid.has(name));
}

function normalizeGeneratedConcepts(value) {
  return asArray(value)
    .filter((concept) => concept && typeof concept === 'object' && typeof concept.id === 'string' && typeof concept.title === 'string')
    .map((concept) => ({
      ...concept,
      mood: asArray(concept.mood),
      safetyNotes: asArray(concept.safetyNotes),
      reactions: asObject(concept.reactions),
      fandomAffinity: asObject(concept.fandomAffinity),
      assetUrl: typeof concept.assetUrl === 'string' && concept.assetUrl.trim() ? concept.assetUrl : DEFAULT_CONCEPT_ASSET,
    }));
}

function normalizeComments(value, fallback = {}) {
  const source = asObject(value);
  const comments = {};
  Object.entries(source).forEach(([conceptId, items]) => {
    const cleanItems = asArray(items)
      .filter((item) => item && typeof item === 'object' && typeof item.body === 'string')
      .map((item) => ({
        name: typeof item.name === 'string' ? item.name : 'fan',
        badge: typeof item.badge === 'string' ? item.badge : 'Multi-stan',
        body: item.body,
      }));
    if (cleanItems.length) comments[conceptId] = cleanItems;
  });
  return { ...fallback, ...comments };
}

function showToast(message) {
  let toast = document.getElementById('fanloveToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'fanloveToast';
    toast.className = 'fanlove-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.__fanloveToastTimer);
  window.__fanloveToastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

function imageHostFor(img) {
  return img.closest([
    '[data-image-host]',
    '.concept-asset',
    '.brand-symbol',
    '.oobi-helper-mark',
    '.oobi-preview-card',
    '.oobi-pledge',
    '.lounge-photo-main',
    '.lounge-photo-stack a',
    '.drop-shelf-card',
    '.member-card figure',
    '.lineup-hero-card',
    '.group-hero-photo',
    '.leaderboard-pulse-card',
    '.room-visual-card',
    '.studio-visual',
    '.event-cover-card',
    '.brief-visual',
    '.reference-card figure',
    '.member-lane-chip',
    '.feed-attachment',
    'figure',
  ].join(', ')) || img.parentElement;
}

function setImageState(img, state) {
  const host = imageHostFor(img);
  img.dataset.imageState = state;
  if (!host) return;
  host.dataset.imageState = state;
  if (state === 'error') {
    const src = img.currentSrc || img.getAttribute('src') || '';
    host.dataset.missingSrc = src.split('/').pop()?.split('?')[0] || 'image';
  } else if (host.dataset.missingSrc) {
    delete host.dataset.missingSrc;
  }
}

function versionAssetReferences(markup) {
  return markup
    .replace(/(src=")(\.\/assets\/[^"?#]+)([^"]*)(")/g, (_match, prefix, path, suffix, quote) => {
      if (suffix.includes('v=')) return `${prefix}${path}${suffix}${quote}`;
      const separator = suffix.startsWith('?') ? '&' : '?';
      return `${prefix}${path}${suffix}${separator}v=${ASSET_CACHE_KEY}${quote}`;
    })
    .replace(/url\((['"]?)(\.\/assets\/[^)'"?]+)([^)'"]*)(['"]?)\)/g, (_match, openQuote, path, suffix, closeQuote) => {
      if (suffix.includes('v=')) return `url(${openQuote}${path}${suffix}${closeQuote})`;
      const separator = suffix.startsWith('?') ? '&' : '?';
      return `url(${openQuote}${path}${suffix}${separator}v=${ASSET_CACHE_KEY}${closeQuote})`;
    });
}

function decorateImages() {
  document.querySelectorAll('img').forEach((img) => {
    if (img.dataset.assetDecorated === 'true') return;
    img.dataset.assetDecorated = 'true';
    const sync = () => {
      if (img.naturalWidth > 0) {
        setImageState(img, 'loaded');
      } else if (img.complete) {
        setImageState(img, 'error');
      } else {
        setImageState(img, 'loading');
      }
    };
    img.addEventListener('load', () => setImageState(img, 'loaded'), { once: true });
    img.addEventListener('error', () => setImageState(img, 'error'), { once: true });
    if (img.complete) sync();
    else setImageState(img, 'loading');
    window.setTimeout(sync, 250);
    window.setTimeout(sync, 1200);
  });
}

const defaultComments = {
  'concept-rayn-light-signal': [
    { name: 'peachdiary', badge: 'ONCE', body: 'The silver-blue styling reads fast, and RAYN makes the group meaning feel clearer.' },
    { name: 'moa.moon', badge: 'MOA', body: 'My vote is here because Light Signal feels like the cleanest first teaser.' },
  ],
};

let state = {
  selectedBadges: normalizeBadgeList(loadJson(STORAGE_KEYS.badges, [])),
  selectedMoods: asArray(loadJson(STORAGE_KEYS.moods, [])).filter((mood) => moodOptions.includes(mood)),
  playMode: playModeOptions.some((mode) => mode.id === loadJson(STORAGE_KEYS.playMode, 'soft-stan')) ? loadJson(STORAGE_KEYS.playMode, 'soft-stan') : 'soft-stan',
  pledgeAccepted: Boolean(loadJson(STORAGE_KEYS.pledge, false)),
  generatedConcepts: normalizeGeneratedConcepts(loadJson(STORAGE_KEYS.generated, [])),
  comments: normalizeComments(loadJson(STORAGE_KEYS.comments, defaultComments), defaultComments),
  reactionOverrides: asObject(loadJson(STORAGE_KEYS.reactions, {})),
  fandomVoteOverrides: asObject(loadJson(STORAGE_KEYS.fandomVotes, {})),
  userVotes: asObject(loadJson(STORAGE_KEYS.userVotes, {})),
  localActions: asObject(loadJson(STORAGE_KEYS.actions, {})),
  pendingComment: null,
};

function allConcepts() {
  return [...state.generatedConcepts, ...seedConcepts].map((concept) => {
    const overrides = asObject(state.reactionOverrides[concept.id]);
    return {
      ...concept,
      reactions: { ...asObject(concept.reactions), ...overrides },
      fandomAffinity: asObject(concept.fandomAffinity),
    };
  });
}

function getConcept(id) {
  return allConcepts().find((concept) => concept.id === id);
}

function normalizePath() {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

function routeBase() {
  return normalizePath().split('?')[0] || '/';
}

function routeParams() {
  const query = normalizePath().split('?')[1] || '';
  return new URLSearchParams(query);
}

function go(path, options = {}) {
  window.__fanloveFocusMain = options.focusMain !== false;
  if (normalizePath() === path) {
    render();
    return;
  }
  window.location.hash = path;
}

function link(path) {
  return `#${path}`;
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function badgeByName(name) {
  return fandomBadges.find((badge) => badge.name === name) || fandomBadges[0];
}

function sumReactions(concept) {
  return Object.values(asObject(concept.reactions)).reduce((sum, count) => sum + Number(count || 0), 0);
}

function topReaction(concept) {
  const entries = Object.entries(asObject(concept.reactions));
  entries.sort((a, b) => b[1] - a[1]);
  return entries[0]?.[0] || 'Voted';
}

function reactionCount(concept, label) {
  return Number(asObject(concept.reactions)[label] || 0);
}

function compactNumber(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return String(value);
}

function conceptSignal(concept) {
  return concept.mood?.[0] || 'safe signal';
}

function topFandomBadges(concept, limit = 3) {
  return fandomBreakdown(concept, limit).map((item) => item.name);
}

function primaryStudioBadgeName() {
  const selected = state.selectedBadges.find((badge) => badge !== 'Multi-stan');
  return selected || state.selectedBadges[0] || 'Multi-stan';
}

function selectedVotingBadgeName() {
  const badge = selectedBadgeName();
  return badge === 'FAN' ? 'Multi-stan' : badge;
}

function fandomScores(concept) {
  const overrides = asObject(state.fandomVoteOverrides[concept.id]);
  const baseScores = asObject(concept.fandomAffinity);
  return {
    ...baseScores,
    ...Object.fromEntries(
      Object.entries(overrides).map(([name, count]) => [name, Number(baseScores[name] || 0) + Number(count || 0)]),
    ),
  };
}

function fandomBreakdown(concept, limit = Infinity) {
  const entries = Object.entries(fandomScores(concept))
    .sort((a, b) => b[1] - a[1])
    .filter(([, count]) => count > 0);
  const total = entries.reduce((sum, [, count]) => sum + count, 0) || 1;
  return entries.slice(0, limit).map(([name, count]) => ({
    name,
    count,
    percent: Math.max(1, Math.round((count / total) * 100)),
  }));
}

function fandomInsightRows(concepts) {
  return concepts.slice(0, 4).map((concept) => {
    const mix = fandomBreakdown(concept, 3);
    const lead = mix[0] || { name: 'Multi-stan', percent: 0 };
    const gap = mix[1] ? lead.percent - mix[1].percent : lead.percent;
    const read = gap >= 10 ? 'clear visible share' : 'cross-fandom taste split';
    return { concept, mix, lead, read };
  });
}

function castConceptVote(conceptId) {
  const concept = getConcept(conceptId);
  if (!concept) return;
  const badge = selectedVotingBadgeName();
  if (state.userVotes[conceptId]) {
    showToast(`Your vote is already counted for ${concept.title}.`);
    window.__fanlovePreserveScroll = window.scrollY;
    render();
    return;
  }
  const didVote = addReaction(concept, 'My vote', badge);
  showToast(didVote ? `Your ${badge} vote joined ${concept.title}.` : `${badge} vote is already counted for ${concept.title}.`);
  window.__fanlovePreserveScroll = window.scrollY;
  render();
}

function addReaction(concept, label, badgeName = selectedVotingBadgeName()) {
  const conceptId = concept.id;
  if (label === 'My vote' && state.userVotes[conceptId]) {
    return false;
  }
  const base = concept.reactions?.[label] || 0;
  state.reactionOverrides[conceptId] = {
    ...(state.reactionOverrides[conceptId] || {}),
    [label]: base + 1,
  };
  if (label === 'My vote') {
    state.fandomVoteOverrides[conceptId] = {
      ...(state.fandomVoteOverrides[conceptId] || {}),
      [badgeName]: (state.fandomVoteOverrides[conceptId]?.[badgeName] || 0) + 1,
    };
    state.userVotes[conceptId] = badgeName;
    saveJson(STORAGE_KEYS.fandomVotes, state.fandomVoteOverrides);
    saveJson(STORAGE_KEYS.userVotes, state.userVotes);
  }
  saveJson(STORAGE_KEYS.reactions, state.reactionOverrides);
  return true;
}

function leaderboardSlotLabel(index) {
  return ['Lead', 'Surge', 'Sync', 'Deep cut', 'Favorite'][index] || 'Rising';
}

function selectedBadgeName() {
  return state.selectedBadges[0] || 'FAN';
}

function composerIdentity(name = selectedBadgeName()) {
  const badge = badgeByName(name);
  const label = name === 'FAN' ? 'Fan' : name;
  return `
    <span class="composer-identity" style="--identity-bg:${badge.color}; --identity-accent:${badge.accent};" aria-label="Current fan mode">
      <span class="composer-identity-dot"></span>
      <strong>${escapeHtml(label)}</strong>
    </span>
  `;
}

function badgePill(name, extra = '') {
  const badge = badgeByName(name);
  const iconMarkup = extra.split(' ').includes('mini') ? `<img src="${escapeHtml(badge.imageUrl)}" alt="" />` : '';
  return `<span class="badge-pill ${extra}" style="--badge-bg: ${badge.color}; --badge-accent: ${badge.accent};">${iconMarkup}${escapeHtml(name)}</span>`;
}

function localActionButton(label, actionId, message, doneLabel = 'Saved') {
  const isDone = Boolean(state.localActions[actionId]);
  return `<button type="button" class="${isDone ? 'is-done' : ''}" data-toast="${escapeHtml(message)}" data-local-action="${escapeHtml(actionId)}" data-done-label="${escapeHtml(doneLabel)}">${escapeHtml(isDone ? doneLabel : label)}</button>`;
}

function icon(name) {
  const icons = {
    plaza: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z"/></svg>',
    rooms: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10a4 4 0 1 1 8 0v1h2a3 3 0 0 1 3 3v5H4v-5a3 3 0 0 1 3-3h2z"/><path d="M17 7a3 3 0 0 1 3 3"/></svg>',
    event: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18l-6-3-6 3z"/><path d="M9 8h6M9 12h4"/></svg>',
    create: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/><path d="M7 7h10v10H7z"/></svg>',
    taste: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 17c4-8 10-8 14 0"/><path d="M7 14c2-3 8-3 10 0"/><circle cx="12" cy="17" r="2"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z"/><path d="m9 12 2 2 4-5"/></svg>',
    spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M5 12h14M5 17h14"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/></svg>',
    bell: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>',
    plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
    flask: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6M10 3v5.2l-4.2 7.3A3.6 3.6 0 0 0 8.9 21h6.2a3.6 3.6 0 0 0 3.1-5.5L14 8.2V3"/><path d="M7.4 15.2c2.5-1 4.1 1 6.4.2 1-.3 1.8-.8 2.8-.4"/><path d="M8.8 18h6.4"/></svg>',
  };
  return icons[name] || icons.spark;
}

function oobiHelperMark(helper, kind) {
  return `
    <div class="oobi-helper-mark oobi-helper-mark-${escapeHtml(kind)}" aria-hidden="true">
      <img class="oobi-helper-avatar" src="${helper.mascot}" alt="" />
    </div>
  `;
}

function oobiHelperCard(kind = 'home') {
  const helpers = {
    home: {
      mascot: OOWA_ASSETS.oobiHappy,
      eyebrow: 'OOBI play tip',
      title: 'One move is enough.',
      body: 'Create a safe concept, vote once, or just watch tonight.',
      actions: [
        { label: 'Create concept', path: '/studio', primary: true },
        { label: 'Rooms', path: '/rooms' },
      ],
    },
    rooms: {
      mascot: OOWA_ASSETS.oobiDefault,
      eyebrow: 'Room guide',
      title: 'Start where the signal feels easy.',
      body: 'Brief Room is fastest. Beginner Room is slower and calmer.',
      actions: [
        { label: 'Brief Room', path: '/rooms/brief', primary: true },
        { label: 'Beginner', path: '/rooms?filter=beginner' },
      ],
    },
    lab: {
      mascot: OOWA_ASSETS.oobiConfidence,
      eyebrow: 'Lab guide',
      title: 'Vote the hook, not the fandom.',
      body: 'Read the short brief, vote once, then unlock the teaser.',
      actions: [
        { label: 'Vote Wall', path: '/vote', primary: true },
        { label: 'Make concept', path: '/studio' },
      ],
    },
    studio: {
      mascot: OOWA_ASSETS.oobiSurprized,
      eyebrow: 'Studio helper',
      title: 'Use vibes, not real idols.',
      body: 'Pick a fandom badge, build a fictional NOVAIR brief, and send it to the vote wall.',
      actions: [
        { label: 'Start recipe', target: '#promptForm', primary: true },
        { label: 'Vote Wall', path: '/vote' },
      ],
    },
  };
  const helper = helpers[kind] || helpers.home;
  return `
    <article class="oobi-helper-card oobi-helper-${kind}" aria-label="${escapeHtml(helper.eyebrow)}">
      ${oobiHelperMark(helper, kind)}
      <div class="oobi-helper-copy">
        <span>${escapeHtml(helper.eyebrow)}</span>
        <strong>${escapeHtml(helper.title)}</strong>
        <p>${escapeHtml(helper.body)}</p>
      </div>
      <div class="oobi-helper-actions">
        ${helper.actions.map((action) => `
          ${action.target
            ? `<button class="${action.primary ? 'primary' : ''}" type="button" data-scroll-target="${escapeHtml(action.target)}">${escapeHtml(action.label)}${action.primary ? ` ${icon('chevron')}` : ''}</button>`
            : `<a class="${action.primary ? 'primary' : ''}" href="${link(action.path)}">${escapeHtml(action.label)}${action.primary ? ` ${icon('chevron')}` : ''}</a>`}
        `).join('')}
      </div>
    </article>
  `;
}

function conceptAsset(concept, size = 'regular') {
  const [first, second] = concept.assetGradient || ['#5D05CE', '#D5FF72'];
  const mood = concept.mood?.slice(0, 3).join(' / ') || 'safe concept';
  return `
    <div class="concept-asset ${size}" style="--asset-a:${first}; --asset-b:${second};">
      ${concept.assetUrl ? `<img class="asset-image" src="${escapeHtml(concept.assetUrl)}" alt="" />` : ''}
      <div class="asset-grid"></div>
      <div class="asset-disc one"></div>
      <div class="asset-disc two"></div>
      <div class="asset-ticket">
        <span>NOVAIR</span>
        <strong>${escapeHtml(concept.title)}</strong>
        <em>${escapeHtml(mood)}</em>
      </div>
    </div>
  `;
}

function conceptCard(concept, compact = false) {
  const badge = badgeByName(concept.creatorBadge);
  return `
    <article class="concept-card ${compact ? 'compact' : ''}">
      <a class="concept-link" href="${link(`/concepts/${concept.id}`)}" aria-label="Open ${escapeHtml(concept.title)}">
        ${conceptAsset(concept, compact ? 'small' : 'regular')}
        <div class="concept-card-body">
          <div class="row spread">
            ${badgePill(concept.creatorBadge)}
            <span class="tiny">${sumReactions(concept)} votes</span>
          </div>
          <h3>${escapeHtml(concept.title)}</h3>
          <p>${escapeHtml(concept.teaserCaption)}</p>
          <div class="chip-row">
            ${(concept.mood || []).slice(0, 3).map((mood) => `<span class="soft-chip">${escapeHtml(mood)}</span>`).join('')}
          </div>
          <div class="affinity-line" style="--badge-accent:${badge.accent}">
            Active across ${Object.keys(concept.fandomAffinity || {}).length} fan badges
          </div>
        </div>
      </a>
    </article>
  `;
}

function lineupHero() {
  return `
    <div class="lineup-hero-grid" aria-label="NOVAIR member concept art lineup">
      ${virtualGroup.members.map((member) => `
        <article class="lineup-hero-card" style="--member-accent:${member.accent};">
          <img src="${escapeHtml(member.imageUrl)}" alt="" />
          <div>
            <strong>${escapeHtml(member.name)}</strong>
            <span>${escapeHtml(member.breathType)}</span>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

function groupHero() {
  return `
    <figure class="group-hero-photo" aria-label="NOVAIR five-member group key visual">
      <img src="${escapeHtml(virtualGroup.groupImageUrl)}" alt="" />
    </figure>
  `;
}

function memberShowcase() {
  return `
    <section class="member-showcase">
      <div class="section-heading row spread">
        <div>
          <p class="eyebrow">Five signals</p>
          <h2>One group, five clear bias lanes.</h2>
          <p>Five lanes. One group read.</p>
        </div>
        <span class="breath-pill">${escapeHtml(virtualGroup.fandom)} unlocks the comeback</span>
      </div>
      <div class="member-card-grid">
        ${virtualGroup.members.map((member) => `
          <article class="member-card member-${member.id}" style="--member-accent:${member.accent}; --member-bg:${member.avatarColor};">
            <figure>
              <img src="${escapeHtml(member.imageUrl)}" alt="" />
            </figure>
            <div class="member-card-copy">
              <div class="row spread">
                <span class="soft-chip">${escapeHtml(member.breathType)}</span>
                <em>${escapeHtml(member.signalLabel)}</em>
              </div>
              <h3>${escapeHtml(member.name)}</h3>
              <strong>${escapeHtml(member.role)}</strong>
              <p>${escapeHtml(member.hook)} · ${escapeHtml(member.signal)} lane.</p>
              <blockquote>${escapeHtml(member.quote)}</blockquote>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function dailyRollSection() {
  return `
    <section class="daily-roll-section">
      <div class="section-heading row spread">
        <div>
          <p class="eyebrow">NOVAIR Daily Roll</p>
          <h2>Photos that make the IP feel lived-in.</h2>
          <p>Candid drops, practice cuts, studio proof.</p>
        </div>
        <span class="breath-pill">${dailyRollPhotos.length} fan-club drops</span>
      </div>
      <div class="daily-roll-grid">
        ${dailyRollPhotos.map((photo, index) => `
          <article class="daily-photo-card ${index === 0 ? 'featured' : ''}" style="--photo-accent:${photo.accent}; --photo-y:${photo.focal};">
            <figure>
              <img src="${escapeHtml(photo.imageUrl)}" alt="" />
            </figure>
            <div>
              <span>${escapeHtml(photo.kicker)}</span>
              <strong>${escapeHtml(photo.title)}</strong>
              <em>${escapeHtml(photo.member)} · ${escapeHtml(photo.meta)}</em>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function referenceBoardSection() {
  return `
    <section class="reference-board-section">
      <div class="section-heading row spread">
        <div>
          <p class="eyebrow">Member reference boards</p>
          <h2>More angles, same bias lane.</h2>
          <p>Fixed faces. Cleaner future drops.</p>
        </div>
        <a class="text-link" href="${link('/studio')}">Generate from a lane</a>
      </div>
      <div class="reference-board-grid">
        ${memberReferenceBoards.map((board) => `
          <article class="reference-board-card" style="--board-accent:${board.accent};">
            <img src="${escapeHtml(board.imageUrl)}" alt="" />
            <div>
              <figure class="reference-anchor">
                <img src="${escapeHtml(board.anchorUrl)}" alt="" />
                <figcaption>${escapeHtml(board.member)} anchor</figcaption>
              </figure>
              <strong>${escapeHtml(board.title)}</strong>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function appShell(content, active = 'feed', options = {}) {
  const hideNav = options.hideNav || false;
  const showCreateCta = !hideNav && active !== 'studio';
  return `
    <div class="page-shell">
      <header class="app-topbar ${hideNav ? 'minimal' : ''}">
        <a class="brand-mark" href="${link('/')}">
          <span class="brand-symbol brand-oobi-symbol" aria-hidden="true">
            <img src="${OOWA_ASSETS.oobiHappy}" alt="" />
          </span>
          <span>
            <strong>${BRAND.name}</strong>
          </span>
        </a>
        ${hideNav ? '' : globalNav(active)}
        <div class="top-actions">
          ${showCreateCta ? `<a class="top-create-button" href="${link('/studio')}">${icon('plus')}<span>Create</span></a>` : ''}
        </div>
      </header>
      <main id="mainContent" class="screen ${options.screenClass || ''}" tabindex="-1">
        ${content}
      </main>
      ${hideNav ? '' : bottomNav(active)}
    </div>
  `;
}

function globalNav(active) {
  const items = [
    { id: 'feed', label: 'Feed', path: '/home' },
    { id: 'rooms', label: 'Rooms', path: '/rooms' },
    { id: 'studio', label: 'Studio', path: '/studio' },
    { id: 'vote', label: 'Vote', path: '/vote' },
  ];
  return `
    <nav class="global-nav" aria-label="Primary sections">
      ${items.map((item) => `
        <a class="${item.id === active ? 'active' : ''}" ${item.id === active ? 'aria-current="page"' : ''} href="${link(item.path)}">${item.label}</a>
      `).join('')}
    </nav>
  `;
}

function bottomNav(active) {
  const items = [
    { id: 'feed', label: 'Feed', path: '/home', asset: OOWA_ASSETS.oobiMiniGuide },
    { id: 'rooms', label: 'Rooms', path: '/rooms', asset: OOWA_ASSETS.oobiMiniRooms },
    { id: 'studio', label: 'Studio', path: '/studio', asset: OOWA_ASSETS.oobiMiniStudio },
    { id: 'vote', label: 'Vote', path: '/vote', asset: OOWA_ASSETS.oobiMiniPass },
  ];
  return `
    <nav class="bottom-nav" aria-label="Primary">
      ${items.map((item) => `
        <a class="${item.id === active ? 'active' : ''}" ${item.id === active ? 'aria-current="page"' : ''} href="${link(item.path)}">
          <img class="bottom-nav-mini" src="${item.asset}" alt="" />
          <span>${item.label}</span>
        </a>
      `).join('')}
    </nav>
  `;
}

function landingPage() {
  return appShell(`
    <section class="landing-hero community-landing">
      <div class="hero-copy">
        <p class="eyebrow">514K fans online</p>
        <h1>${BRAND.name}</h1>
        <p class="hero-line">Make your fan signal pass.</p>
        <p class="hero-body">Pick your vibe, choose your fandom badges, enter rooms, and remix a fictional comeback without the drama.</p>
        <div class="hero-actions">
          <a class="primary-button" href="${link('/onboarding')}">Make my pass ${icon('chevron')}</a>
          <a class="ghost-button" href="${link('/studio')}">Open Studio</a>
        </div>
        <div class="stat-grid landing-stats">
          ${communityStats.slice(0, 3).map((stat) => statCard(stat)).join('')}
        </div>
      </div>
      <div class="hero-visual" aria-label="Fanlove app preview">
        <div class="phone-frame">
          <div class="phone-notch"></div>
          <div class="phone-header">
            <span>Live Play Feed</span>
            ${badgePill('ARMY', 'mini')}
          </div>
          <div class="phone-pass-card">
            <img src="${badgeByName('Multi-stan').imageUrl}" alt="" />
            <span>
              <strong>Fan pass ready</strong>
              <em>Soft Stan · Prism Pass</em>
            </span>
          </div>
          <div class="mini-event-card">
            <strong>NOVAIR Comeback Lab is tonight's ritual</strong>
            <span>42K signal drafts in the last hour.</span>
          </div>
          <div class="oobi-preview-card">
            <img src="${OOWA_ASSETS.oobiDefault}" alt="" />
            <span>OOBI keeps the playground friendly.</span>
          </div>
          ${communityFeedPosts.slice(0, 3).map((post) => feedPostCard(post, true)).join('')}
        </div>
        <div class="floating-sticker sticker-one">348K playing now</div>
        <div class="floating-sticker sticker-two">signal rooms</div>
        <div class="floating-sticker sticker-three">safe remix queue</div>
      </div>
    </section>
  `, 'feed', { hideNav: true, screenClass: 'landing-screen' });
}

function onboardingPage() {
  const selectedMode = playModeOptions.find((mode) => mode.id === state.playMode) || playModeOptions[0];
  const selectedBadges = state.selectedBadges
    .map((name) => fandomBadges.find((badge) => badge.name === name))
    .filter(Boolean);
  const selectedBadgeNames = selectedBadges.length ? selectedBadges.map((badge) => badge.name).join(' / ') : 'Choose up to 3 fandoms';
  const selectedMoodNames = state.selectedMoods.length ? state.selectedMoods.slice(0, 2).join(' / ') : 'drop watch';
  const canStart = state.pledgeAccepted && state.selectedBadges.length;
  const ctaLabel = canStart ? 'Enter Loveloop' : state.selectedBadges.length ? 'Accept the promise' : 'Pick a fandom';
  return appShell(`
    <section class="onboarding-entry onboarding-pro">
      <section class="fan-pass-hero">
        <div class="fan-pass-copy">
          <p class="eyebrow">Fan pass setup</p>
          <h1>Pick your fandom mix. Enter the playground.</h1>
          <p>One pass tunes rooms, Studio prompts, and Vote insight for tonight's fictional comeback ritual.</p>
          <div class="onboarding-progress-row" aria-label="Setup progress">
            <span class="done"><em>01</em> Mode</span>
            <span class="${selectedBadges.length ? 'done' : ''}"><em>02</em> Fandom</span>
            <span class="${state.pledgeAccepted ? 'done' : ''}"><em>03</em> Promise</span>
          </div>
        </div>
        <figure class="onboarding-hero-media">
          <img src="./assets/novair-life-group-practice-door-v1.png" alt="" />
          <figcaption>
            <span>NOVAIR Lab</span>
            <strong>BREATH CHECK opens tonight</strong>
          </figcaption>
        </figure>
        <article class="fan-pass-preview pro-pass-card" aria-label="Fanlove pass preview">
          <div class="pass-card-top">
            <span>${BRAND.name}</span>
            <em>${escapeHtml(selectedMode.signal)}</em>
          </div>
          <div class="fan-pass-orbit">
            <img src="${escapeHtml(selectedMode.asset)}" alt="" />
          </div>
          <div>
            <span>Fan pass</span>
            <strong>${escapeHtml(selectedMode.title)}</strong>
            <em>${escapeHtml(selectedBadgeNames)}</em>
          </div>
          <div class="pass-badge-row">
            ${selectedBadges.length ? selectedBadges.slice(0, 3).map((badge) => `<img src="${escapeHtml(badge.imageUrl)}" alt="" />`).join('') : '<span>ready</span>'}
          </div>
          <div class="pass-card-footer">
            <span>${escapeHtml(selectedMoodNames)}</span>
            <strong>${selectedBadges.length}/3 badges</strong>
          </div>
        </article>
      </section>

      <section class="onboarding-choice-board">
        <div class="onboarding-stack">
          <section class="onboarding-panel mode-panel">
            <div class="section-heading compact">
              <p class="eyebrow">Play mode</p>
              <h2>Choose your pace.</h2>
            </div>
            <div class="play-mode-grid">
              ${playModeOptions.map((mode) => `
                <button class="play-mode-card play-mode-select ${state.playMode === mode.id ? 'selected' : ''} ${window.__fanloveMotionCue === `mode:${mode.id}` ? 'motion-cue' : ''}" data-mode="${mode.id}" type="button">
                  <img src="${escapeHtml(mode.asset)}" alt="" />
                  <span>${escapeHtml(mode.signal)}</span>
                  <strong>${escapeHtml(mode.title)}</strong>
                  <em>${escapeHtml(mode.detail)}</em>
                </button>
              `).join('')}
            </div>
          </section>

          <section class="onboarding-panel mood-panel">
            <div class="section-heading compact">
              <p class="eyebrow">Feed mood</p>
              <h2>Tune the first scroll.</h2>
            </div>
            <div class="mood-pill-row">
              ${moodOptions.map((mood) => `
                <button class="mood-pill mood-select ${state.selectedMoods.includes(mood) ? 'selected' : ''} ${window.__fanloveMotionCue === `mood:${mood}` ? 'motion-cue' : ''}" data-mood="${mood}" type="button">${escapeHtml(mood)}</button>
              `).join('')}
            </div>
          </section>

          <article class="fanlove-promise">
            <div class="pledge-icon oobi-pledge"><img src="${OOWA_ASSETS.oobiConfidence}" alt="" /></div>
            <div>
              <span>Loveloop promise</span>
              <strong>Play nice. Keep it fictional. No private info.</strong>
              <label class="check-row">
                <input type="checkbox" id="pledgeCheck" ${state.pledgeAccepted ? 'checked' : ''} />
                <span>I accept the No Fanwars Pledge.</span>
              </label>
            </div>
          </article>
        </div>

        <section class="onboarding-panel fandom-panel">
          <div class="section-heading compact">
            <p class="eyebrow">Fandom badges</p>
            <h2>Pick your fandom mix.</h2>
            <p>Choose up to 3. Fandom names stay visible for future taste insight.</p>
          </div>
          <div class="selected-badge-dock" aria-label="Selected fandom badges">
            ${selectedBadges.length ? selectedBadges.map((badge) => `
              <span style="--badge-bg:${badge.color}; --badge-accent:${badge.accent};">
                <img src="${escapeHtml(badge.imageUrl)}" alt="" />
                <strong>${escapeHtml(badge.name)}</strong>
              </span>
            `).join('') : '<em>Pick a fandom to light up your pass.</em>'}
          </div>
          <div class="fan-badge-grid">
            ${fandomBadges.map((badge) => `
              <button class="fan-badge-tile badge-select ${state.selectedBadges.includes(badge.name) ? 'selected' : ''} ${window.__fanloveMotionCue === `badge:${badge.name}` ? 'motion-cue' : ''}" data-badge="${badge.name}" type="button" style="--badge-bg:${badge.color}; --badge-accent:${badge.accent};">
                <span>
                  <strong>${escapeHtml(badge.name)}</strong>
                  <em>${escapeHtml(badge.alias)}</em>
                </span>
                <img src="${escapeHtml(badge.imageUrl)}" alt="" />
                <small>${escapeHtml(badge.cue)}</small>
              </button>
            `).join('')}
          </div>
        </section>
      </section>

      <div class="onboarding-action-bar">
        <p><strong>${selectedBadges.length ? `${selectedBadges.length}/3 fandom badges` : 'Fandom badge needed'}</strong><span>13+ community. No private contact or location details.</span></p>
        <div>
          <a class="ghost-button" href="${link('/home')}">Explore first</a>
          <button id="startFanlove" class="primary-button wide ${canStart ? '' : 'is-locked'}" ${canStart ? '' : 'aria-disabled="true"'}>${ctaLabel} ${icon('chevron')}</button>
        </div>
      </div>
    </section>
  `, 'feed', { hideNav: true, screenClass: 'onboarding-screen' });
}

function homeLoungeSpotlight() {
  const spotlight = dailyRollPhotos.find((photo) => photo.id === 'daily-rayn-rain-van') || dailyRollPhotos[0];
  const shelfIds = ['daily-jax-hallway', 'daily-kairo-night-break', 'daily-leo-tea'];
  const shelf = shelfIds
    .map((id) => dailyRollPhotos.find((photo) => photo.id === id))
    .filter(Boolean);
  return `
    <article class="lounge-spotlight">
      <div class="lounge-spotlight-copy">
        <div class="lounge-signal-strip" aria-label="Live play signal">
          <span><strong>348K</strong><em>in Lab</em></span>
          <span><strong>3</strong><em>new drops</em></span>
          <span><strong>soft</strong><em>vote mode</em></span>
        </div>
        <div class="lounge-spotlight-command">
          <span class="soft-chip">Tonight's play board</span>
          <h2>BREATH CHECK is live.</h2>
          <p>New drop. Fan notes. One signal pick.</p>
          <div class="lounge-spotlight-actions">
            <a class="primary-button" href="${link('/studio')}">Create concept ${icon('chevron')}</a>
            <a class="ghost-button" href="${link('/vote')}">Vote Wall</a>
          </div>
        </div>
      </div>
      <div class="lounge-photo-stack" aria-label="NOVAIR daily photo shelf">
        <figure class="lounge-photo-main" style="--photo-accent:${spotlight.accent}; --photo-y:${spotlight.focal}; --photo-image:url(${escapeHtml(spotlight.imageUrl)});">
          <img src="${escapeHtml(spotlight.imageUrl)}" alt="" />
          <figcaption>
            <span>${escapeHtml(spotlight.kicker)}</span>
            <strong>${escapeHtml(spotlight.title)}</strong>
            <em>${escapeHtml(spotlight.member)} · ${escapeHtml(spotlight.meta)}</em>
          </figcaption>
        </figure>
        <div class="lounge-photo-minis">
          ${shelf.map((photo) => `
            <a href="${link('/lab')}" style="--photo-accent:${photo.accent}; --photo-y:${photo.focal}; --photo-image:url(${escapeHtml(photo.imageUrl)});">
              <img src="${escapeHtml(photo.imageUrl)}" alt="" />
              <span>${escapeHtml(photo.member)}</span>
            </a>
          `).join('')}
        </div>
      </div>
    </article>
  `;
}

function homeDropShelf() {
  const shelfPicks = [
    ['daily-rayn-rain-van', 'Umbrella'],
    ['daily-jax-hallway', 'Sneaker'],
    ['daily-kairo-night-break', 'Vinyl Dig'],
    ['daily-leo-tea', 'Leo Notes'],
    ['daily-min-snack-break', 'Laundry'],
  ];
  const drops = shelfPicks
    .map(([id, shelfTitle]) => [dailyRollPhotos.find((photo) => photo.id === id), shelfTitle])
    .filter(([photo]) => Boolean(photo))
    .map(([photo, shelfTitle]) => ({ ...photo, shelfTitle }));
  return `
    <section class="home-drop-shelf" aria-label="Tonight's NOVAIR drops">
      <div class="section-heading row spread compact">
        <div>
          <p class="eyebrow">Tonight's drops</p>
          <h2>Save a signal.</h2>
        </div>
        <a class="text-link" href="${link('/studio')}">Open Studio</a>
      </div>
      <div class="drop-shelf-grid">
        ${drops.map((photo) => `
          <a class="drop-shelf-card" href="${link('/lab')}" style="--photo-accent:${photo.accent}; --photo-y:${photo.focal}; --photo-image:url(${escapeHtml(photo.imageUrl)});">
            <figure>
              <img src="${escapeHtml(photo.imageUrl)}" alt="" />
            </figure>
            <span>${escapeHtml(photo.kicker)}</span>
            <strong>${escapeHtml(photo.shelfTitle)}</strong>
            <em>${escapeHtml(photo.member)}</em>
          </a>
        `).join('')}
      </div>
    </section>
  `;
}

function biasShelfCard() {
  return `
    <section class="aside-card bias-shelf-card">
      <div class="row spread">
        <h2>Bias shelf</h2>
        <a class="text-link" href="${link('/lab')}">Meet all</a>
      </div>
      <div class="bias-shelf">
        ${virtualGroup.members.map((member) => `
          <a href="${link('/lab')}" style="--member-accent:${member.accent};">
            <img src="${escapeHtml(member.imageUrl)}" alt="" />
            <span>
              <strong>${escapeHtml(member.name)}</strong>
              <em>${escapeHtml(member.hook)}</em>
            </span>
          </a>
        `).join('')}
      </div>
    </section>
  `;
}

function homePage() {
  const badge = selectedBadgeName();
  const selectedMode = playModeOptions.find((mode) => mode.id === state.playMode) || playModeOptions[0];
  const selectedMoodChips = state.selectedMoods.length ? state.selectedMoods.slice(0, 2) : ['drop watch'];
  const defaultFeed = state.selectedMoods.includes('cozy scroll') || state.playMode === 'soft-stan'
    ? 'beginner-safe'
    : state.selectedMoods.includes('drop watch') || state.playMode === 'main-character'
      ? 'night-shift'
      : 'for-you';
  const activeFeed = routeParams().get('feed') || defaultFeed;
  const feedFilters = [
    { id: 'for-you', label: 'For you' },
    { id: 'beginner-safe', label: 'Beginner-safe' },
    { id: 'night-shift', label: 'Night shift' },
  ];
  const filteredPosts = communityFeedPosts.filter((post) => {
    if (activeFeed === 'beginner-safe') return post.status === 'helpful thread' || /beginner/i.test(`${post.room} ${post.status}`);
    if (activeFeed === 'night-shift') return ['now', '2m', '8m', '14m', '21m', '25m'].includes(post.time) || /night/i.test(post.room);
    return true;
  });
  return appShell(`
    <section class="community-console home-console">
      <section class="community-main">
        <div class="feed-header">
          <div>
            <p class="eyebrow">Fanlove Feed</p>
            <h1>Your K-pop playground is live.</h1>
            <p>Create safely, join rooms, or vote once.</p>
            <div class="copy-cue-row" aria-label="Feed status">
              <span>514K online</span>
              <span>82 rooms</span>
              <span>2.4M votes</span>
            </div>
            <div class="feed-personalization-row" aria-label="Your selected play mode">
              <span>${escapeHtml(selectedMode.title)}</span>
              ${selectedMoodChips.map((mood) => `<span>${escapeHtml(mood)}</span>`).join('')}
            </div>
          </div>
          <a class="secondary-button" href="${link('/rooms')}">Find a room ${icon('chevron')}</a>
        </div>

        ${homeLoungeSpotlight()}

        ${homeDropShelf()}

        ${oobiHelperCard('home')}

        <nav class="feed-tabs" aria-label="Feed filters">
          ${feedFilters.map((filter) => `
            <a class="${filter.id === activeFeed ? 'active' : ''}" ${filter.id === activeFeed ? 'aria-current="page"' : ''} href="${link(`/home?feed=${filter.id}`)}">${escapeHtml(filter.label)}</a>
          `).join('')}
        </nav>

        <article class="composer-card">
          ${composerIdentity(badge)}
          <button class="composer-prompt" type="button" data-route="/studio">Drop a signal other fans will understand...</button>
          <a class="composer-submit" href="${link('/studio')}" title="Create concept"><span>Create</span></a>
        </article>

        ${filteredPosts.map((post) => feedPostCard(post)).join('')}
      </section>

      <aside class="community-aside">
        <section class="aside-card live-card now-card">
          <div>
            <span class="rail-label">Live now</span>
            <h2>BREATH CHECK</h2>
            <p>74% unlocked · vote once</p>
          </div>
          <a class="primary-button wide" href="${link('/vote')}">Open Vote</a>
        </section>

        <section class="aside-card focus-room-card">
          <div class="row spread">
            <h2>Active rooms</h2>
            <a class="text-link" href="${link('/rooms')}">Browse</a>
          </div>
          <div class="pulse-list">
            ${rooms.slice(0, 3).map((room) => `
              <a href="${link(`/rooms/${room.id}`)}">
                ${badgePill(room.badge, 'mini')}
                <span>${escapeHtml(room.title)}</span>
                <em>${escapeHtml(room.members)}</em>
              </a>
            `).join('')}
          </div>
        </section>

        <section class="aside-card quiet-identity-card">
          <span class="rail-label">${escapeHtml(badge === 'FAN' ? 'Play' : badge)} mode</span>
          <p>No ranks. No fanwars. Just taste signals.</p>
        </section>
      </aside>
    </section>
  `, 'feed');
}

function roomCard(room, compact = false) {
  const liveCount = room.vibe.split('·')[1]?.trim() || '8K live';
  const badge = badgeByName(room.badge);
  const highlight = roomHighlights[room.id] || roomHighlights.brief;
  const visual = roomVisuals[room.id] || roomVisuals.brief;
  return `
    <article class="room-card directory-room-card ${compact ? 'compact' : ''}" style="--badge-accent:${badge.accent};">
      <div class="room-card-main">
        <div class="room-title-row">
          <a href="${link(`/rooms/${room.id}`)}"><h3>${escapeHtml(room.title)}</h3></a>
          <span class="live-dot">${escapeHtml(liveCount)}</span>
        </div>
        <p>${escapeHtml(room.description)}</p>
        <div class="room-meta">
          <span>${room.members} members</span>
          <span>${escapeHtml(room.vibe.split('·')[0].trim())}</span>
        </div>
        <div class="room-preview-line">
          <span>Tonight</span>
          <strong>${escapeHtml(highlight.latest)}</strong>
        </div>
        <div class="room-signal-row">
          <span>@${escapeHtml(highlight.host)}</span>
          <em>${escapeHtml(highlight.tempo)}</em>
        </div>
      </div>
      <figure class="room-story-thumb" style="--room-thumb-y:${visual.position};">
        <img src="${escapeHtml(visual.imageUrl)}" alt="" />
        <figcaption>${escapeHtml(visual.label)}</figcaption>
      </figure>
      <a class="secondary-button" href="${link(`/rooms/${room.id}`)}">Enter ${icon('chevron')}</a>
    </article>
  `;
}

function roomsPage() {
  const params = routeParams();
  const activeFilter = params.get('filter') || 'recommended';
  const searchQuery = (params.get('q') || '').trim();
  const roomFilters = [
    { id: 'recommended', label: 'Recommended' },
    { id: 'following', label: 'Following' },
    { id: 'active', label: 'Active now' },
    { id: 'beginner', label: 'Beginner' },
  ];
  const filteredRooms = rooms.filter((room) => {
    const filterTags = new Set(room.filterTags || []);
    const matchesFilter =
      activeFilter === 'following' ? filterTags.has('following') || ['brief', 'visual', 'performance', 'multi'].includes(room.id)
        : activeFilter === 'active' ? filterTags.has('active') || ['brief', 'visual', 'performance', 'lore', 'multi'].includes(room.id)
          : activeFilter === 'beginner' ? filterTags.has('beginner') || ['beginner', 'brief', 'multi'].includes(room.id)
            : true;
    const haystack = `${room.title} ${room.description} ${room.badge} ${room.vibe} ${(room.filterTags || []).join(' ')}`.toLowerCase();
    return matchesFilter && (!searchQuery || haystack.includes(searchQuery.toLowerCase()));
  });
  const roomCardsHtml = filteredRooms.map((room, index) => `
    ${index === 3 ? oobiHelperCard('rooms') : ''}
    ${roomCard(room)}
  `).join('');
  return appShell(`
    <section class="rooms-directory">
      <div class="directory-main">
        <header class="directory-header">
          <div>
            <p class="eyebrow">Rooms</p>
            <h1>Pick a room to play in.</h1>
            <p>Briefs, visuals, stage, styling, help.</p>
            <div class="copy-cue-row" aria-label="Room status">
              <span>44.8K live</span>
              <span>11 pinned</span>
              <span>safe prompts</span>
            </div>
          </div>
        <a class="primary-button" href="${link('/studio')}">Drop a note ${icon('plus')}</a>
        </header>

        <div class="directory-toolbar">
          <label class="directory-search">
            ${icon('search')}
            <input id="roomSearch" placeholder="Search rooms or topics" aria-label="Search rooms" value="${escapeHtml(searchQuery)}" />
          </label>
          <nav class="feed-tabs" aria-label="Room filters">
            ${roomFilters.map((filter) => `
              <a class="${filter.id === activeFilter ? 'active' : ''}" ${filter.id === activeFilter ? 'aria-current="page"' : ''} href="${link(`/rooms?filter=${filter.id}${searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : ''}`)}">${escapeHtml(filter.label)}</a>
            `).join('')}
          </nav>
        </div>

        <section class="room-list">
          ${filteredRooms.length ? roomCardsHtml : '<article class="empty-state"><strong>No matching rooms yet.</strong><p>Try visual, stage, beginner, styling, or comeback.</p></article>'}
        </section>
      </div>

      <aside class="directory-rail">
        <section class="aside-card">
          <span class="rail-label">Room categories</span>
          <div class="category-list">
            ${roomCategories.map((category) => `
              <a href="${link(category.route)}">
                <strong>${escapeHtml(category.label)}</strong>
                <span>${escapeHtml(category.count)}</span>
              </a>
            `).join('')}
          </div>
        </section>

        <section class="aside-card">
          <h2>Today in rooms</h2>
          <div class="pulse-list">
            ${communityFeedPosts.slice(0, 4).map((post) => `
              <a href="${link('/home')}">
                ${badgePill(post.badge, 'mini')}
                <span>${escapeHtml(post.title)}</span>
                <em>${escapeHtml(post.replies)} replies</em>
              </a>
            `).join('')}
          </div>
        </section>

        <section class="aside-card moderation-card">
          <h2>Built for low-drama play</h2>
          <p>No downvotes. No loyalty scores. Concept first.</p>
        </section>
      </aside>
    </section>
  `, 'rooms');
}

function roomDetailPage(roomId) {
  const room = rooms.find((item) => item.id === roomId);
  if (!room) return notFoundPage();
  const liveCount = room.vibe.split('·')[1]?.trim() || '8K live';
  const badge = badgeByName(room.badge);
  const requestedSection = routeParams().get('section') || 'hot';
  const activeSection = roomSectionFilters.some((section) => section.id === requestedSection) ? requestedSection : 'hot';
  const filteredRoomPosts = roomPosts
    .filter((post) => {
      if (post.roomIds && !post.roomIds.includes(room.id) && !post.roomIds.includes('all')) return false;
      if (activeSection === 'guides') return /guide|help|safety/i.test(post.type);
      if (activeSection === 'events') return /share|concept|voting/i.test(post.type);
      return true;
    })
    .sort((a, b) => (activeSection === 'new' ? roomPosts.indexOf(b) - roomPosts.indexOf(a) : roomPosts.indexOf(a) - roomPosts.indexOf(b)));
  return appShell(`
    <section class="room-workspace">
      <main class="room-thread-main">
        <header class="room-header-card room-header-card-clean" style="--badge-accent:${badge.accent};">
          <div class="room-header-copy">
            <h1>${escapeHtml(room.title)}</h1>
            <p>${escapeHtml(room.description)}</p>
          </div>
          <a class="primary-button" href="${link('/studio')}">Create ${icon('plus')}</a>
        </header>

        <nav class="feed-tabs" aria-label="Room sections">
          ${roomSectionFilters.map((section) => `
            <a class="${section.id === activeSection ? 'active' : ''}" ${section.id === activeSection ? 'aria-current="page"' : ''} href="${link(`/rooms/${room.id}?section=${section.id}`)}">${escapeHtml(section.label)}</a>
          `).join('')}
        </nav>

        <article class="composer-card">
          ${composerIdentity()}
          <button class="composer-prompt" type="button" data-route="/studio">Share what made you smile today...</button>
          <a class="composer-submit" href="${link('/studio')}" title="Add concept"><span>Create</span></a>
        </article>

        <section class="post-list">
          ${filteredRoomPosts.map((post, index) => `
            <article class="post-card community-post">
              <div class="vote-rail">
                <strong>${[42, 31, 28, 19, 16, 12][index] || 9}K</strong>
                <span>votes</span>
              </div>
              <div>
                <span class="soft-chip">${escapeHtml(post.type)}</span>
                <h3>${escapeHtml(post.title)}</h3>
                <p>${escapeHtml(post.body)}</p>
                <div class="feed-actions room-post-actions">
                  <a href="${link('/vote')}">Vote Wall</a>
                  <a href="${link('/studio')}">Reply in Studio</a>
                  ${localActionButton('Save', `save-room-${room.id}-${index}`, 'Saved to your OOWA shelf for later.', 'Saved')}
                </div>
              </div>
            </article>
          `).join('') || '<article class="empty-state"><strong>No room notes in this section yet.</strong><p>Try Hot or start a soft note in Studio.</p></article>'}
        </section>
      </main>

      <aside class="room-side-panel">
        <section class="aside-card room-about">
          <h2>About this room</h2>
          <p>Read. Pick. Remix softly.</p>
          <div class="room-pulse compact">
            <article><strong>${escapeHtml(room.members)}</strong><span>members</span></article>
            <article><strong>${escapeHtml(liveCount)}</strong><span>online</span></article>
            <article><strong>98%</strong><span>prompt pass</span></article>
          </div>
        </section>
        <section class="aside-card">
          <h2>Room rules</h2>
          <ul class="clean-list">
            <li>No fandom comparisons.</li>
            <li>No real idol prompts.</li>
            <li>Concept first.</li>
          </ul>
        </section>
      </aside>
    </section>
  `, 'rooms');
}

function eventPage() {
  const concepts = allConcepts().sort((a, b) => sumReactions(b) - sumReactions(a)).slice(0, 8);
  const leaders = allConcepts().sort((a, b) => sumReactions(b) - sumReactions(a)).slice(0, 4);
  const topConcept = leaders[0] || concepts[0];
  return appShell(`
    <section class="event-command">
      <div>
        <p class="eyebrow">NOVAIR · ${escapeHtml(virtualGroup.comeback)} D-5</p>
        <h1>NOVAIR Comeback Lab</h1>
        <p><strong>BREATH CHECK is live.</strong> Read the brief, vote once, and unlock the next teaser.</p>
        <article class="lab-focus-card" aria-label="Tonight's Comeback Lab focus">
          <div class="lab-focus-copy">
            <span>Tonight's path</span>
            <strong>Read. Vote. Unlock.</strong>
            <p>One vote decides which comeback moment fans remember first.</p>
          </div>
          <figure class="lab-focus-art">
            <img src="./assets/fanlove-lab-ritual-still-v1.png" alt="" />
          </figure>
        </article>
        <div class="lab-action-row" aria-label="Primary Comeback Lab actions">
          <a class="primary-button" href="${link('/vote')}">Vote once ${icon('chevron')}</a>
          <button class="ghost-button" type="button" data-scroll-target="#brief">Read brief</button>
          <a class="ghost-button" href="${link('/studio')}">Make concept</a>
        </div>
        ${oobiHelperCard('lab')}
        <article class="breath-unlock-card">
          <div>
            <span>Today’s BREATH</span>
            <strong>74%</strong>
            <em>80% unlocks RAYN’s secret teaser.</em>
          </div>
          <div class="breath-meter"><span style="width:74%"></span></div>
        </article>
        <div class="member-strip novair-members">
          ${virtualGroup.members.map((member) => `
            <span class="member-lane-chip" style="--avatar:${member.avatarColor}; --member-accent:${member.accent};">
              <img src="${escapeHtml(member.imageUrl)}" alt="" />
              <span class="member-lane-copy">
                <strong>${escapeHtml(member.name)}</strong>
                <em>${escapeHtml(member.signal)}</em>
              </span>
            </span>
          `).join('')}
        </div>
      </div>
      <div class="event-stage-card">
        ${groupHero()}
        <div class="stage-caption">
          <span class="soft-chip">${escapeHtml(virtualGroup.comeback)}</span>
          <strong>Five signals, one comeback breath.</strong>
          <em>${sumReactions(topConcept)} fan votes and reactions</em>
        </div>
      </div>
    </section>
    <section class="event-live-grid">
      <article class="info-panel event-brief" id="brief">
        <div>
          <p class="eyebrow">Tonight's comeback brief</p>
          <h2>Pick the hook fans can remember after one glance.</h2>
          <p>Clarity first. Hype second.</p>
          <div class="brief-chip-row" aria-label="Brief rules">
            <span>NOVAIR only</span>
            <span>No real logos</span>
            <span>Vote the hook</span>
          </div>
        </div>
        <figure class="brief-visual-card">
          <img src="./assets/fanlove-lab-teaser-unlock-v1.png" alt="" />
          <figcaption>
            <span>Teaser unlock</span>
            <strong>74%</strong>
          </figcaption>
        </figure>
      </article>
      <aside class="info-panel live-queue-panel">
        <figure class="live-signal-art">
          <img src="./assets/fanlove-lab-live-signal-table-v1.png" alt="" />
          <figcaption>
            <span>Live room</span>
            <strong>348K</strong>
          </figcaption>
        </figure>
        <div class="live-queue-head">
          <h2>Live submissions</h2>
          <span>now</span>
        </div>
        <div class="ticker-list">
          ${liveSubmissions.map((item) => liveSubmissionRow(item)).join('')}
        </div>
      </aside>
    </section>
    <section class="stat-grid event-stats">
      ${eventOps.map((stat) => statCard(stat)).join('')}
    </section>
    <section>
      <div class="section-heading">
        <p class="eyebrow">Round 2 wall</p>
        <h2>Safe concepts getting votes now</h2>
      </div>
      <div class="concept-grid">
        ${concepts.map((concept) => conceptCard(concept)).join('')}
      </div>
    </section>
    <section>
      <div class="section-heading row spread">
        <div>
          <p class="eyebrow">Vote board</p>
          <h2>Concepts, not fandoms</h2>
        </div>
        <a class="text-link board-link" href="${link('/vote')}">Open Vote Wall ${icon('chevron')}</a>
      </div>
      <div class="leaderboard-list">
        ${leaders.map((concept, index) => leaderboardRow(concept, index, { compact: true })).join('')}
      </div>
    </section>
    ${memberShowcase()}
    ${dailyRollSection()}
    ${referenceBoardSection()}
    <section>
      <div class="section-heading row spread">
        <div>
          <p class="eyebrow">Image generation briefs</p>
          <h2>Prompts fans are remixing now</h2>
        </div>
        <a class="text-link" href="${link('/studio')}">Make one</a>
      </div>
      <div class="brief-grid">
        ${imageGenerationBriefs.map((brief) => imageBriefCard(brief)).join('')}
      </div>
    </section>
  `, 'vote');
}

function leaderboardRow(concept, index, options = {}) {
  const compact = options.compact !== false;
  const metricValue = options.metricValue ? options.metricValue(concept) : sumReactions(concept);
  const maxValue = options.maxValue || metricValue;
  const voteShare = Math.max(8, Math.round((metricValue / Math.max(maxValue, 1)) * 100));
  const [firstAccent, secondAccent] = concept.assetGradient || ['#E9A6C6', '#B9C7FF'];
  const fandomMix = fandomBreakdown(concept, compact ? 2 : 4);
  const topFandom = fandomMix[0] || { name: selectedVotingBadgeName(), percent: 0 };
  const topLabel = topReaction(concept);
  const rankLabel = String(index + 1).padStart(2, '0');
  const alreadyVoted = Boolean(state.userVotes[concept.id]);
  if (compact) {
    return `
      <a class="leader-row compact-leader-row" href="${link(`/concepts/${concept.id}`)}" aria-label="Open ${escapeHtml(concept.title)} concept brief" style="--rank-accent:${firstAccent}; --rank-accent-2:${secondAccent}; --vote-share:${voteShare}%;">
        <span class="rank-number">${rankLabel}</span>
        ${conceptAsset(concept, 'thumb')}
        <div>
          <strong>${escapeHtml(concept.title)}</strong>
          <span>${badgePill(concept.creatorBadge, 'mini')} ${escapeHtml(topFandom.name)} visible share · ${compactNumber(sumReactions(concept))} votes</span>
        </div>
        <em>${escapeHtml(conceptSignal(concept))}</em>
      </a>
    `;
  }
  return `
    <article class="leader-row leaderboard-wall-card rank-${index < 3 ? 'podium' : 'standard'}" style="--rank-accent:${firstAccent}; --rank-accent-2:${secondAccent}; --vote-share:${voteShare}%;">
      <a class="leader-rank-cell" href="${link(`/concepts/${concept.id}`)}" aria-label="Open rank ${index + 1} ${escapeHtml(concept.title)}">
        <span class="rank-number">${rankLabel}</span>
        <em>${escapeHtml(leaderboardSlotLabel(index))}</em>
      </a>
      <a class="leader-media" href="${link(`/concepts/${concept.id}`)}" aria-label="Open ${escapeHtml(concept.title)} concept image">
        ${conceptAsset(concept, 'thumb')}
      </a>
      <div class="leader-copy">
        <div class="leader-kicker">
          <span class="signal-pill">${escapeHtml(conceptSignal(concept))}</span>
          <span>fan notes rising</span>
        </div>
        <a class="leader-title-link" href="${link(`/concepts/${concept.id}`)}">${escapeHtml(concept.title)}</a>
        <p>${escapeHtml(concept.teaserCaption)}</p>
        <div class="leader-signal-row">
          ${(concept.mood || []).slice(0, 3).map((mood) => `<span>${escapeHtml(mood)}</span>`).join('')}
        </div>
      </div>
      <div class="leader-ritual">
        <div class="leader-fandom-lead" aria-label="Top fandom for ${escapeHtml(concept.title)}">
          <span>${escapeHtml(topFandom.name)}</span>
          <strong>${topFandom.percent}%</strong>
          <em>largest visible badge share</em>
        </div>
        <div class="leader-vote-metric">
          <span class="leader-count">${compactNumber(metricValue)}</span>
          <em>${escapeHtml(options.metricLabel || topLabel)}</em>
        </div>
        <div class="leader-meter" aria-hidden="true"><span></span></div>
        <div class="fandom-mix" aria-label="Fandom vote mix">
              ${fandomMix.slice(0, 3).map((item) => `
              <span style="--mix-share:${item.percent}%;">
                <em>${escapeHtml(item.name)}</em>
                <strong>${item.percent}%</strong>
                <i aria-label="${escapeHtml(item.name)} ${item.percent}% badge mix"><b></b></i>
              </span>
            `).join('')}
        </div>
        <button class="leader-action ${alreadyVoted ? 'voted' : ''}" type="button" data-vote-concept="${escapeHtml(concept.id)}">${alreadyVoted ? 'Vote counted' : 'Vote once'} ${icon('chevron')}</button>
      </div>
    </article>
  `;
}

function statCard(stat) {
  return `
    <article class="stat-card">
      <span>${escapeHtml(stat.label)}</span>
      <strong>${escapeHtml(stat.value)}</strong>
      <em>${escapeHtml(stat.detail)}</em>
    </article>
  `;
}

function feedPostCard(post, compact = false) {
  const concept = getConcept(post.attachedConcept);
  return `
    <article class="feed-card ${compact ? 'compact' : ''}">
      <div class="feed-meta">
        <span class="status-dot"></span>
        <strong>${escapeHtml(post.author)}</strong>
        ${badgePill(post.badge, 'mini')}
        <span>${escapeHtml(post.room)} · ${escapeHtml(post.time)}</span>
      </div>
      <h3>${escapeHtml(post.title)}</h3>
      <p>${escapeHtml(post.body)}</p>
      ${concept && !compact ? `<a class="feed-attachment" href="${link(`/concepts/${concept.id}`)}">${conceptAsset(concept, 'thumb')}<span>${escapeHtml(concept.title)}</span><em>${sumReactions(concept)} votes</em></a>` : ''}
      <div class="feed-actions">
        <span>${escapeHtml(post.reactions)} reactions</span>
        <span>${escapeHtml(post.replies)} replies</span>
        <strong>${escapeHtml(post.status)}</strong>
      </div>
    </article>
  `;
}

function liveSubmissionRow(item) {
  return `
    <article class="live-submission">
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <span>${badgePill(item.badge, 'mini')} ${escapeHtml(item.status)}</span>
      </div>
      <em>${escapeHtml(item.count)}</em>
    </article>
  `;
}

function imageBriefCard(brief) {
  const [first, second] = brief.palette;
  return `
    <article class="brief-card" style="--brief-a:${first}; --brief-b:${second};">
      <div class="brief-art">
        ${brief.imageUrl ? `<img class="asset-image" src="${escapeHtml(brief.imageUrl)}" alt="" />` : ''}
        <div class="brief-art-card"></div>
        <div class="brief-art-card offset"></div>
      </div>
      <div>
        <span class="soft-chip">Creator image brief</span>
        <h3>${escapeHtml(brief.title)}</h3>
        <p>${escapeHtml(brief.prompt)}</p>
      </div>
      <strong>${escapeHtml(brief.queue)}</strong>
    </article>
  `;
}

function blockedReason(prompt) {
  const text = prompt.toLowerCase();
  const blockedGenerationTerms = [
    'deepfake',
    'face swap',
    'faceswap',
    'real idol face',
    'official logo',
    'agency logo',
    'copyrighted album',
    'album cover',
    'look exactly like',
    'look like',
    'in the style of',
    'same face as',
    'sexy minor',
  ];
  const realIpTermsForDemo = [
    'bts', 'blackpink', 'twice', 'stray kids', 'skz', 'newjeans', 'seventeen', 'txt',
    'enhypen', 'ateez', 'nct', 'exo', 'aespa', 'ive', 'le sserafim', 'lesserafim',
    'riize', 'zerobaseone', 'zb1', 'jungkook', 'jimin', 'taehyung', 'kim taehyung', 'namjoon',
    'jennie', 'lisa', 'rose', 'rosé', 'jisoo', 'scoups', 's.coups', 'zico',
    'g-dragon', 'g dragon', 'hongjoong', 'seonghwa', 'dino',
  ];
  const shadeTerms = ['better than', 'copy', 'ugly', 'flop', 'war', 'outsold', 'hate', 'worst'];
  if (blockedGenerationTerms.some((term) => text.includes(term)) || realIpTermsForDemo.some((term) => text.includes(term))) {
    return "Let's keep this rights-safe. Try describing a vibe instead of a real idol or official asset.";
  }
  if (shadeTerms.some((term) => text.includes(term))) {
    return 'Share the vibe, not the shade. Focus on the concept instead.';
  }
  return '';
}

function shadeReason(comment) {
  const text = comment.toLowerCase();
  const shadeTerms = ['better than', 'copy', 'ugly', 'flop', 'war', 'outsold', 'hate', 'worst'];
  const contactTerms = ['dm me', 'discord', 'instagram', 'ig:', 'kakao', 'line id', 'whatsapp', 'telegram', 'snapchat', 'phone', 'email me'];
  const locationTerms = ['hotel', 'address', 'meet me', 'meetup', 'after the show', 'school', 'dorm'];
  const commerceTerms = ['sell ticket', 'buy ticket', 'resale', 'venmo', 'cashapp', 'paypal me'];
  const phoneOrEmail = /(\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b|[^\s@]+@[^\s@]+\.[^\s@]+)/i.test(comment);
  if (shadeTerms.some((term) => text.includes(term))) return 'This may sound like comparing fandoms.';
  if (contactTerms.some((term) => text.includes(term)) || phoneOrEmail) return 'Keep contact details inside the app.';
  if (locationTerms.some((term) => text.includes(term))) return 'Do not share private locations or meetup details.';
  if (commerceTerms.some((term) => text.includes(term))) return 'Ticket resale or payment details are not allowed here.';
  return '';
}

const mockGenerationProvider = {
  async generateConcept(input) {
    const titleParts = {
      'rayn light signal': 'RAYN Light',
      'jax spark signal': 'JAX Spark',
      'leo warmth signal': 'LEO Rose',
      'kairo shadow signal': 'KAIRO Wave',
      'min air signal': 'MIN Air',
      'breath check unlock': 'BREATH Check',
    };
    const paletteMap = {
      'midnight plum': ['#211b31', '#8a7dff'],
      'black chrome': ['#151820', '#94a3b8'],
      'icy blue': ['#172033', '#8fd3ff'],
      'dark rose': ['#2B1727', '#C66B93'],
      'monochrome silver': ['#111318', '#D8DEE9'],
      'smoky lavender': ['#332748', '#B78AA4'],
    };
    const assetMap = {
      'rayn light signal': './assets/novair-cohesive-rayn-v4.png',
      'jax spark signal': './assets/novair-cohesive-jax-v4.png',
      'leo warmth signal': './assets/novair-cohesive-leo-v4.png',
      'kairo shadow signal': './assets/novair-cohesive-kairo-v4.png',
      'min air signal': './assets/novair-cohesive-min-v4.png',
      'breath check unlock': './assets/novair-cohesive-lineup-v4.png',
    };
    const first = titleParts[input.mood] || 'NOVAIR';
    const second = input.styling.replace('-inspired', '').replaceAll('-', ' ');
    const title = `${first} ${capitalizeWords(second)} Cut`;
    const fandomAffinity = Object.fromEntries(fandomBadges.map((badge) => [badge.name, 0]));
    fandomAffinity[input.creatorBadge] = 1;
    return {
      id: `concept-${Date.now()}`,
      title,
      creatorName: `${input.creatorBadge.toLowerCase()}.maker`,
      creatorBadge: input.creatorBadge,
      mood: [input.mood, input.styling, input.season],
      teaserCaption: `A ${input.season} ${input.stageVibe} comeback concept with ${input.palette} styling for NOVAIR's fictional next era.`,
      assetType: 'mock-image',
      assetUrl: assetMap[input.mood],
      assetGradient: paletteMap[input.palette] || ['#5D05CE', '#D5FF72'],
      reactions: { 'My vote': 1, 'Stage-ready': 1, 'Save this': 1, 'Remix idea': 0 },
      fandomAffinity,
      safetyNotes: ['Fictional group only', 'No real idol likeness', 'No official logos/assets'],
    };
  },
};

function capitalizeWords(value) {
  return value.replace(/\b\w/g, (char) => char.toUpperCase());
}

function studioBadgePicker(selectedBadge) {
  const selectedSet = new Set(state.selectedBadges);
  const orderedBadges = fandomBadges
    .slice()
    .sort((a, b) => Number(selectedSet.has(b.name)) - Number(selectedSet.has(a.name)));
  return `
    <section class="studio-badge-picker" aria-label="Fandom badge for this Studio concept">
      <div class="studio-badge-current">
        <span>Fandom insight tag</span>
        <strong>${escapeHtml(selectedBadge)}</strong>
        <em>Shown in Vote Wall mix. Concepts rank, fandoms do not.</em>
      </div>
      <div class="studio-badge-options" role="group" aria-label="Choose creator fandom badge">
        ${orderedBadges.map((badge) => `
          <button
            class="studio-badge-choice ${badge.name === selectedBadge ? 'active' : ''}"
            type="button"
            data-creator-badge="${escapeHtml(badge.name)}"
            aria-pressed="${badge.name === selectedBadge ? 'true' : 'false'}"
            style="--badge-accent:${badge.accent}; --badge-bg:${badge.color};"
          >
            <img src="${escapeHtml(badge.imageUrl)}" alt="" />
            <span>${escapeHtml(badge.name)}${badge.name === selectedBadge ? '<em>Selected</em>' : ''}</span>
          </button>
        `).join('')}
      </div>
    </section>
  `;
}

function createPage() {
  const defaultBadge = primaryStudioBadgeName();
  return appShell(`
    <section class="section-heading studio-heading">
      <p class="eyebrow">NOVAIR Studio</p>
      <h1>Build a fictional comeback concept.</h1>
      <p>Pick your fandom badge, shape a NOVAIR lane, and send the brief to Vote.</p>
    </section>
    <section class="studio-rhythm-strip" aria-label="Studio flow">
      <span><em>01</em><strong>Choose badge</strong></span>
      <span><em>02</em><strong>Shape NOVAIR</strong></span>
      <span><em>03</em><strong>Send to Vote</strong></span>
    </section>
    ${oobiHelperCard('studio')}
    <section class="generator-layout">
      <form id="promptForm" class="prompt-builder studio-console">
        <div class="prompt-builder-head">
          <span class="soft-chip">Fictional only</span>
          <strong>Signal recipe</strong>
          <p>Structured choices first. Optional text stays short and rights-safe.</p>
        </div>
        ${studioBadgePicker(defaultBadge)}
        ${selectField('mood', 'Member signal', promptOptions.mood)}
        ${selectField('styling', 'Styling', promptOptions.styling)}
        ${selectField('season', 'Season / time', promptOptions.season)}
        ${selectField('stageVibe', 'Stage vibe', promptOptions.stageVibe)}
        ${selectField('palette', 'Color palette', promptOptions.palette)}
        <label class="field prompt-text-field">
          <span>Optional text prompt</span>
          <textarea id="promptText" maxlength="180" placeholder="Use vibes, not real idols."></textarea>
          <em id="promptCount">0 / 180</em>
        </label>
        <input type="hidden" id="creatorBadge" value="${escapeHtml(defaultBadge)}" />
        <div id="generationNudge" class="nudge-message hidden"></div>
        <p class="studio-safety-promise">Fictional NOVAIR only. No real idols, no logos, no album art, no real-person uploads.</p>
        <button class="primary-button wide" type="submit">Generate concept brief ${icon('spark')}</button>
      </form>
      <aside id="generatedPreview" class="generated-preview empty">
        <div class="studio-visual"><img src="./assets/novair-cohesive-rayn-v4.png" alt="" /></div>
        <h2>Your signal brief appears here</h2>
        <p>Fictional NOVAIR only. Make something playful and voteable, not a real idol reference.</p>
        <div class="studio-callout">
          <strong>Ready for the vote wall</strong>
          <span>Keep the brief fictional, readable, and gentle enough for other fans to remix.</span>
        </div>
      </aside>
    </section>
  `, 'studio');
}

function selectField(id, label, options) {
  return `
    <label class="field select-field">
      <span>${label}</span>
      <select id="${id}" name="${id}">
        ${options.map((option) => `<option value="${option}">${option}</option>`).join('')}
      </select>
    </label>
  `;
}

function generatedPreview(concept) {
  return `
    <div class="generated-card">
      ${conceptAsset(concept)}
      <div class="generated-body">
        <div class="row spread">${badgePill(concept.creatorBadge)}<span class="tiny">AI brief · fictional IP</span></div>
        <h2>${escapeHtml(concept.title)}</h2>
        <p>${escapeHtml(concept.teaserCaption)}</p>
        <div class="chip-row">
          ${concept.mood.map((mood) => `<span class="soft-chip">${escapeHtml(mood)}</span>`).join('')}
        </div>
        <div class="safety-notes">
          ${concept.safetyNotes.map((note) => `<span>${icon('shield')} ${escapeHtml(note)}</span>`).join('')}
        </div>
        <div class="studio-callout">
          <strong>Ready for community voting</strong>
          <span>AI-generated concept brief. Fictional NOVAIR only. No real-person likeness, official logos, album art, or agency assets.</span>
        </div>
        <div class="button-row">
          <button class="primary-button" id="submitGenerated" data-concept="${concept.id}">Submit to Vote Wall</button>
          <button class="secondary-button" id="regenerateConcept">Regenerate brief</button>
        </div>
      </div>
    </div>
  `;
}

function conceptBadgeInsightPanel(concept) {
  const mix = fandomBreakdown(concept, 5);
  const lead = mix[0] || { name: 'Multi-stan', percent: 0 };
  const low = mix[mix.length - 1] || lead;
  const totalVotes = reactionCount(concept, 'My vote');
  return `
    <section class="vote-insight-detail">
      <div class="row spread">
        <h2>Fandom badge mix</h2>
        <span>${compactNumber(totalVotes)} votes</span>
      </div>
      <div class="detail-mix-list">
        ${mix.map((item) => `
          <article style="--mix-color:${badgeByName(item.name).accent}; --mix-share:${item.percent}%;">
            <div>
              ${badgePill(item.name, 'mini')}
              <strong>${item.percent}%</strong>
            </div>
            <span><i></i></span>
          </article>
        `).join('')}
      </div>
      <p>This ranks concepts, then shows which fandom badges understood each concept fastest. <strong>${escapeHtml(lead.name)}</strong> has the largest visible badge share here; <strong>${escapeHtml(low.name)}</strong> is the watch point for whether this teaser needs a clearer hook.</p>
    </section>
  `;
}

function conceptDetailPage(id) {
  const concept = getConcept(id);
  if (!concept) return notFoundPage();
  const comments = state.comments[concept.id] || [
    { name: 'NOVAIR.friend', badge: 'MOA', body: 'I love this because it feels safe, bright, and stage-ready.' },
  ];
  return appShell(`
    <section class="detail-layout">
      <div class="detail-main">
        ${conceptAsset(concept, 'hero')}
        <article class="detail-copy">
          <div class="row spread">
            <span>by ${escapeHtml(concept.creatorName)} ${badgePill(concept.creatorBadge, 'mini')}</span>
            <a class="secondary-button small" href="${link('/vote')}">Vote Wall</a>
          </div>
          <h1>${escapeHtml(concept.title)}</h1>
          <p>${escapeHtml(concept.teaserCaption)}</p>
          <div class="chip-row">
            ${(concept.mood || []).map((mood) => `<span class="soft-chip">${escapeHtml(mood)}</span>`).join('')}
          </div>
          <div class="safety-notes detail">
            <span>${icon('shield')} fictional group</span>
            <span>${icon('shield')} no real likeness</span>
            <span>${icon('shield')} prompt safe</span>
          </div>
        </article>
      </div>
      <aside class="detail-side">
        <section class="reaction-panel">
          <h2>React kindly</h2>
          <div class="reaction-grid" data-concept-id="${concept.id}">
            ${reactionLabels.map((label) => `
              <button class="reaction-chip" data-reaction="${label}">
                <span>${label}</span>
                <strong>${concept.reactions[label] || 0}</strong>
              </button>
            `).join('')}
          </div>
        </section>
        ${conceptBadgeInsightPanel(concept)}
        <section class="comment-panel">
          <h2>Comment softly</h2>
          <div class="template-row">
            ${commentTemplates.map((template) => `<button class="template-chip" data-template="${template}">${template}...</button>`).join('')}
          </div>
          <textarea id="commentText" placeholder="Choose a template first..." disabled></textarea>
          <div id="commentNudge" class="nudge-message hidden"></div>
          <button id="postComment" class="secondary-button wide" data-concept="${concept.id}" disabled>Post comment</button>
        </section>
        <section class="comment-list">
          <h2>Fanlove notes</h2>
          ${comments.map((comment) => `
            <article class="comment">
              <strong>${escapeHtml(comment.name)} ${badgePill(comment.badge, 'mini')}</strong>
              <p>${escapeHtml(comment.body)}</p>
            </article>
          `).join('')}
        </section>
        <section class="content-menu">
          ${localActionButton('Report', `report-${concept.id}`, 'Report queued with policy, snippet, and concept ID.', 'Queued')}
          ${localActionButton('Mute creator', `mute-${concept.id}`, 'Creator muted for this demo session.', 'Muted')}
          ${localActionButton('Block creator', `block-${concept.id}`, 'Creator block preview saved locally.', 'Blocked')}
        </section>
      </aside>
    </section>
  `, 'vote');
}

function leaderboardPage() {
  const concepts = allConcepts();
  const tabs = [
    { id: 'voted', label: 'Vote Wall', shortLabel: 'Vote', note: 'fandom mix', metricLabel: 'room votes', value: sumReactions, sort: (a, b) => sumReactions(b) - sumReactions(a) },
    { id: 'stage', label: 'Stage Fit', shortLabel: 'Stage', note: 'performance pull', metricLabel: 'stage votes', value: (concept) => reactionCount(concept, 'Stage-ready') + reactionCount(concept, 'Performance wins'), sort: (a, b) => (reactionCount(b, 'Stage-ready') + reactionCount(b, 'Performance wins')) - (reactionCount(a, 'Stage-ready') + reactionCount(a, 'Performance wins')) },
    { id: 'saved', label: 'Saved Notes', shortLabel: 'Saved', note: 'kept for later', metricLabel: 'saves', value: (concept) => reactionCount(concept, 'Save this'), sort: (a, b) => reactionCount(b, 'Save this') - reactionCount(a, 'Save this') },
    { id: 'remix', label: 'Remix Sparks', shortLabel: 'Remix', note: 'creator heat', metricLabel: 'remix sparks', value: (concept) => reactionCount(concept, 'Remix idea'), sort: (a, b) => reactionCount(b, 'Remix idea') - reactionCount(a, 'Remix idea') },
  ];
  const activeTab = new URLSearchParams(normalizePath().split('?')[1] || '').get('tab') || 'voted';
  const tab = tabs.find((item) => item.id === activeTab) || tabs[0];
  const sorted = concepts.slice().sort(tab.sort).slice(0, 12);
  const maxValue = Math.max(...sorted.map((concept) => tab.value(concept)), 1);
  const totalSignals = concepts.reduce((sum, concept) => sum + sumReactions(concept), 0);
  const heroConcept = sorted[0] || concepts[0];
  const insightRows = fandomInsightRows(sorted);
  const userConcepts = state.generatedConcepts.slice(0, 3);
  const tabsMarkup = `
    <nav class="tab-row leaderboard-tabs" aria-label="Leaderboard views">
      ${tabs.map((item) => `<a class="${item.id === tab.id ? 'active' : ''}" ${item.id === tab.id ? 'aria-current="page"' : ''} href="${link(`/vote?tab=${item.id}`)}"><strong><span class="tab-title-full">${item.label}</span><span class="tab-title-short">${item.shortLabel}</span></strong><span class="tab-note">${item.note}</span></a>`).join('')}
    </nav>
  `;
  return appShell(`
    <section class="leaderboard-hero">
      <div class="leaderboard-hero-copy">
        <p class="eyebrow">NOVAIR vote wall</p>
        <h1>Concepts rank. Fandom mix stays visible.</h1>
        <p>Vote the hook once, then read which fandom badges understood it fastest.</p>
        <div class="leaderboard-ritual-strip" aria-label="Vote ritual status">
          <span><em>01</em><strong>Brief open</strong></span>
          <span><em>02</em><strong>Vote once</strong></span>
          <span><em>03</em><strong>Teaser unlock</strong></span>
        </div>
      </div>
      <aside class="leaderboard-pulse-card">
        <img src="./assets/novair-comeback-hero.png" alt="" />
        <div>
          <span class="soft-chip">Live room pulse</span>
          <strong>${escapeHtml(heroConcept.title)}</strong>
          <em>${compactNumber(totalSignals)} fan votes across ${concepts.length} concepts</em>
        </div>
      </aside>
    </section>
    ${tabsMarkup}
    ${userConcepts.length ? `
      <section class="user-submissions-strip" aria-label="Your submitted concept briefs">
        <div>
          <p class="eyebrow">Your submissions</p>
          <h2>Fresh from Studio</h2>
        </div>
        <div class="user-submissions-carousel">
          ${userConcepts.map((concept) => `
            <a class="user-submission-card" href="${link(`/concepts/${concept.id}`)}" style="--rank-accent:${concept.assetGradient?.[0] || '#5D05CE'}; --rank-accent-2:${concept.assetGradient?.[1] || '#D5FF72'};">
              ${conceptAsset(concept, 'thumb')}
              <span class="user-submission-copy">
                <strong>${escapeHtml(concept.title)}</strong>
                <span class="user-submission-meta">${badgePill(concept.creatorBadge, 'mini')}<em>${compactNumber(sumReactions(concept))} votes</em></span>
              </span>
            </a>
          `).join('')}
        </div>
      </section>
    ` : ''}
    <section class="leaderboard-community-band" aria-label="Community voting status">
      <article>
        <span>${compactNumber(totalSignals)}</span>
        <strong>fan votes cast</strong>
        <em>round 2 closes in 14h</em>
      </article>
      <article>
        <span>82</span>
        <strong>rooms awake</strong>
        <em>visual, stage, lore, styling</em>
      </article>
      <article>
        <span>0</span>
        <strong>fandom ranks</strong>
        <em>badges show taste, not teams</em>
      </article>
    </section>
    <section class="fandom-insight-panel" aria-label="Fandom badge voting insights">
      <div>
        <p class="eyebrow">Fandom insight</p>
        <h2>Fandom mix, at a glance.</h2>
        <p>Partner-ready concept insight. No fandom ranking layer.</p>
      </div>
      <div class="fandom-insight-list">
        ${insightRows.map(({ concept, mix, lead, read }) => `
          <article style="--rank-accent:${concept.assetGradient?.[0] || '#E9A6C6'}; --rank-accent-2:${concept.assetGradient?.[1] || '#B9C7FF'};">
            <strong>${escapeHtml(concept.title)}</strong>
            <span>${escapeHtml(lead.name)} ${lead.percent}% · ${escapeHtml(read)}</span>
            <div class="insight-bars">
              ${mix.map((item) => `<i title="${escapeHtml(item.name)} ${item.percent}%" aria-label="${escapeHtml(item.name)} ${item.percent}% badge mix" style="--mix-share:${item.percent}%; --mix-color:${badgeByName(item.name).accent};"><b>${escapeHtml(item.name)}</b></i>`).join('')}
            </div>
          </article>
        `).join('')}
      </div>
    </section>
    <section class="leaderboard-list leaderboard-wall-list">
      ${sorted.map((concept, index) => leaderboardRow(concept, index, { compact: false, metricLabel: tab.metricLabel, metricValue: tab.value, maxValue })).join('')}
    </section>
  `, 'vote', { screenClass: 'leaderboard-screen' });
}

function tasteMapPage() {
  return appShell(`
    <section class="taste-hero">
      <div>
        <p class="eyebrow">Taste Map</p>
        <h1>See which comeback lanes fans understand fastest.</h1>
        <p>Fandom badges show shared taste, not who wins. Different rooms, same NOVAIR vote.</p>
      </div>
      <figure class="taste-art-card">
        <img src="./assets/novair-cohesive-min-v4.png" alt="" />
        <figcaption>shared fandom taste, not fanwar score</figcaption>
      </figure>
    </section>
    <section class="taste-insight-grid">
      ${tasteInsights.map((insight) => tasteInsightCard(insight)).join('')}
    </section>
    <section class="taste-board">
      <article class="taste-panel">
        <h2>Mood overlap this week</h2>
        <div class="bar-list">
          ${[
            { label: 'RAYN light signal', value: 86, color: '#6f9ee8' },
            { label: 'JAX spark stage', value: 78, color: '#7fb51d' },
            { label: 'KAIRO shadow wave', value: 71, color: '#8b62d0' },
            { label: 'MIN air ring', value: 64, color: '#2ca66d' },
          ].map((mood) => `
            <div class="bar-row">
              <span>${mood.label}</span>
              <div class="bar-track"><div style="width:${mood.value}%; --bar:${mood.color};"></div></div>
              <strong>${mood.value}%</strong>
            </div>
          `).join('')}
        </div>
      </article>
      <article class="taste-panel">
        <h2>Community rule</h2>
        <p>We show what fans loved together. We do not rank fandoms, score loyalty, or turn badges into teams.</p>
        <div class="safety-notes detail">
          <span>${icon('shield')} concept-centered</span>
          <span>${icon('shield')} no fandom winners</span>
          <span>${icon('shield')} soft reactions only</span>
        </div>
      </article>
    </section>
  `, 'taste');
}

function tasteInsightCard(insight) {
  return `
    <article class="taste-insight-card">
      <span class="soft-chip">${escapeHtml(insight.mood)}</span>
      <h3>${escapeHtml(insight.title)}</h3>
      <p>${escapeHtml(insight.body)}</p>
      <div class="chip-row">
        ${insight.badges.map((badge) => badgePill(badge, 'mini')).join('')}
      </div>
    </article>
  `;
}

function moderationPage() {
  return appShell(`
    <section class="section-heading">
      <p class="eyebrow">Safety queue</p>
      <h1>Keep the room soft.</h1>
      <p>Safety is part of the product loop, not only policy text.</p>
    </section>
    <section class="moderation-list">
      ${moderationFlags.map((flag) => `
        <article class="flag-card severity-${flag.severity}">
          <div>
            <span class="soft-chip">${flag.targetType}</span>
            <h3>${escapeHtml(flag.reason)}</h3>
            <p>${escapeHtml(flag.snippet)} · ${escapeHtml(flag.targetId)}</p>
            <p>Suggested action: ${escapeHtml(flag.action)}</p>
          </div>
          <div class="flag-meta">
            <strong>${flag.severity}</strong>
            <span>${escapeHtml(flag.status)}</span>
            <span>${escapeHtml(flag.locale)}</span>
            <span>${escapeHtml(flag.reviewer)}</span>
          </div>
        </article>
      `).join('')}
    </section>
  `, 'mods');
}

function notFoundPage() {
  return appShell(`
    <section class="empty-state">
      <h1>That corner is still being decorated.</h1>
      <a class="primary-button" href="${link('/home')}">Back to Feed</a>
    </section>
  `, 'feed');
}

function render() {
  const path = routeBase();
  let html = '';
  if (path === '/') html = landingPage();
  else if (path === '/onboarding') html = onboardingPage();
  else if (path === '/home') html = homePage();
  else if (path === '/rooms') html = roomsPage();
  else if (path.startsWith('/rooms/')) html = roomDetailPage(path.split('/')[2]);
  else if (path === '/lab' || path === '/events/novair-comeback-vote' || path === '/events/debut-concept-challenge') html = eventPage();
  else if (path === '/studio' || path === '/create') html = createPage();
  else if (path.startsWith('/concepts/')) html = conceptDetailPage(path.split('/')[2]);
  else if (path === '/vote' || path === '/leaderboard') html = leaderboardPage();
  else if (path === '/taste-map') html = tasteMapPage();
  else if (path === '/moderation') html = moderationPage();
  else html = notFoundPage();
  document.getElementById('app').innerHTML = versionAssetReferences(html);
  decorateImages();
  bindEvents();
  if (typeof window.__fanlovePreserveScroll === 'number') {
    const scrollY = window.__fanlovePreserveScroll;
    window.__fanlovePreserveScroll = undefined;
    window.scrollTo(0, scrollY);
  } else {
    window.scrollTo(0, 0);
  }
  if (window.__fanloveFocusRoomSearch) {
    window.__fanloveFocusRoomSearch = false;
    const input = document.getElementById('roomSearch');
    if (input) {
      input.focus({ preventScroll: true });
      const end = input.value.length;
      input.setSelectionRange(end, end);
    }
  } else if (window.__fanloveFocusMain) {
    window.__fanloveFocusMain = false;
    document.getElementById('mainContent')?.focus({ preventScroll: true });
  }
  if (window.__fanloveMotionCue) {
    window.setTimeout(() => {
      window.__fanloveMotionCue = null;
    }, 360);
  }
}

function bindGeneratedPreviewActions() {
  const submitGenerated = document.getElementById('submitGenerated');
  if (submitGenerated && submitGenerated.dataset.bound !== 'true') {
    submitGenerated.dataset.bound = 'true';
    submitGenerated.addEventListener('click', () => {
      const concept = window.__lastGeneratedConcept;
      if (!concept) return;
      state.generatedConcepts = [concept, ...state.generatedConcepts.filter((item) => item.id !== concept.id)];
      saveJson(STORAGE_KEYS.generated, state.generatedConcepts);
      showToast('Concept is live. Opening its Vote card.');
      go(`/concepts/${concept.id}`);
    });
  }

  const regenerateConcept = document.getElementById('regenerateConcept');
  if (regenerateConcept && regenerateConcept.dataset.bound !== 'true') {
    regenerateConcept.dataset.bound = 'true';
    regenerateConcept.addEventListener('click', () => {
      document.getElementById('promptForm')?.requestSubmit();
    });
  }
}

function bindEvents() {
  document.querySelectorAll('.badge-select').forEach((button) => {
    button.addEventListener('click', () => {
      const badge = button.dataset.badge;
      if (state.selectedBadges.includes(badge)) {
        state.selectedBadges = state.selectedBadges.filter((item) => item !== badge);
      } else if (state.selectedBadges.length < 3) {
        state.selectedBadges = [...state.selectedBadges, badge];
      } else {
        showToast('Pick up to 3 fandoms for this pass.');
        return;
      }
      window.__fanloveMotionCue = `badge:${badge}`;
      window.__fanlovePreserveScroll = window.scrollY;
      saveJson(STORAGE_KEYS.badges, state.selectedBadges);
      render();
    });
  });

  document.querySelectorAll('.play-mode-select').forEach((button) => {
    button.addEventListener('click', () => {
      state.playMode = button.dataset.mode;
      window.__fanloveMotionCue = `mode:${state.playMode}`;
      window.__fanlovePreserveScroll = window.scrollY;
      saveJson(STORAGE_KEYS.playMode, state.playMode);
      render();
    });
  });

  document.querySelectorAll('.mood-select').forEach((button) => {
    button.addEventListener('click', () => {
      const mood = button.dataset.mood;
      state.selectedMoods = state.selectedMoods.includes(mood)
        ? state.selectedMoods.filter((item) => item !== mood)
        : [...state.selectedMoods, mood];
      window.__fanloveMotionCue = `mood:${mood}`;
      window.__fanlovePreserveScroll = window.scrollY;
      saveJson(STORAGE_KEYS.moods, state.selectedMoods);
      render();
    });
  });

  const pledgeCheck = document.getElementById('pledgeCheck');
  if (pledgeCheck) {
    pledgeCheck.addEventListener('change', (event) => {
      state.pledgeAccepted = event.target.checked;
      saveJson(STORAGE_KEYS.pledge, state.pledgeAccepted);
      render();
    });
  }

  const startFanlove = document.getElementById('startFanlove');
  if (startFanlove) {
    startFanlove.addEventListener('click', () => {
      if (state.pledgeAccepted && state.selectedBadges.length) go('/home');
      else showToast(state.selectedBadges.length ? 'Accept the Loveloop promise to enter.' : 'Pick a fandom badge to make your pass.');
    });
  }

  const promptText = document.getElementById('promptText');
  const promptCount = document.getElementById('promptCount');
  if (promptText && promptCount) {
    promptText.addEventListener('input', () => {
      promptCount.textContent = `${promptText.value.length} / 180`;
      const reason = blockedReason(promptText.value);
      const nudge = document.getElementById('generationNudge');
      if (reason) {
        nudge.textContent = reason;
        nudge.classList.remove('hidden');
      } else {
        nudge.classList.add('hidden');
      }
    });
  }

  document.querySelectorAll('.studio-badge-choice').forEach((button) => {
    button.addEventListener('click', () => {
      const badge = button.dataset.creatorBadge;
      const input = document.getElementById('creatorBadge');
      const current = document.querySelector('.studio-badge-current strong');
      if (input) input.value = badge;
      if (current) current.textContent = badge;
      document.querySelectorAll('.studio-badge-choice').forEach((item) => {
        item.classList.toggle('active', item === button);
        item.setAttribute('aria-pressed', item === button ? 'true' : 'false');
      });
      showToast(`${badge} badge will tag this concept insight.`);
    });
  });

  const promptForm = document.getElementById('promptForm');
  if (promptForm) {
    promptForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const input = {
        mood: form.mood.value,
        styling: form.styling.value,
        season: form.season.value,
        stageVibe: form.stageVibe.value,
        palette: form.palette.value,
        prompt: document.getElementById('promptText').value.trim(),
        creatorBadge: document.getElementById('creatorBadge').value,
      };
      const safetyText = [input.mood, input.styling, input.season, input.stageVibe, input.palette, input.prompt, input.creatorBadge].join(' ');
      const reason = blockedReason(safetyText);
      const nudge = document.getElementById('generationNudge');
      if (reason) {
        nudge.textContent = reason;
        nudge.classList.remove('hidden');
        return;
      }
      const submit = form.querySelector('button[type="submit"]');
      submit.disabled = true;
      submit.textContent = 'Generating...';
      const concept = await mockGenerationProvider.generateConcept(input);
      window.__lastGeneratedConcept = concept;
      document.getElementById('generatedPreview').classList.remove('empty');
      document.getElementById('generatedPreview').innerHTML = generatedPreview(concept);
      submit.disabled = false;
      submit.innerHTML = `Generate concept brief ${icon('spark')}`;
      bindGeneratedPreviewActions();
    });
  }

  bindGeneratedPreviewActions();

  const roomSearch = document.getElementById('roomSearch');
  if (roomSearch) {
    roomSearch.addEventListener('input', () => {
      clearTimeout(window.__fanloveRoomSearchTimer);
      window.__fanloveRoomSearchTimer = setTimeout(() => {
        const params = routeParams();
        const filter = params.get('filter') || 'recommended';
        const query = roomSearch.value.trim();
        window.__fanlovePreserveScroll = window.scrollY;
        window.__fanloveFocusRoomSearch = true;
        go(`/rooms?filter=${filter}${query ? `&q=${encodeURIComponent(query)}` : ''}`, { focusMain: false });
      }, 220);
    });
  }

  document.querySelectorAll('.composer-prompt').forEach((button) => {
    button.addEventListener('click', () => {
      go(button.dataset.route || '/studio');
    });
  });

  document.querySelectorAll('.leader-action[data-vote-concept]').forEach((control) => {
    const vote = (event) => {
      event.preventDefault();
      event.stopPropagation();
      castConceptVote(control.dataset.voteConcept);
    };
    control.addEventListener('click', vote);
    control.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') vote(event);
    });
  });

  document.querySelectorAll('.reaction-chip').forEach((button) => {
    button.addEventListener('click', () => {
      const grid = button.closest('.reaction-grid');
      const conceptId = grid.dataset.conceptId;
      const label = button.dataset.reaction;
      const concept = getConcept(conceptId);
      const didReact = addReaction(concept, label);
      if (label === 'My vote') {
        showToast(didReact ? `Your ${selectedVotingBadgeName()} vote was added to the fandom mix.` : `${selectedVotingBadgeName()} vote is already counted here.`);
      }
      render();
    });
  });

  document.querySelectorAll('[data-scroll-target]').forEach((button) => {
    button.addEventListener('click', () => {
      const target = document.querySelector(button.dataset.scrollTarget);
      if (!target) return;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
      target.classList.add('pulse-focus');
      window.setTimeout(() => target.classList.remove('pulse-focus'), 1400);
    });
  });

  document.querySelectorAll('.template-chip').forEach((button) => {
    button.addEventListener('click', () => {
      const textarea = document.getElementById('commentText');
      textarea.disabled = false;
      textarea.value = `${button.dataset.template} `;
      textarea.focus();
      document.getElementById('postComment').disabled = false;
    });
  });

  const postComment = document.getElementById('postComment');
  if (postComment) {
    postComment.addEventListener('click', () => {
      const textarea = document.getElementById('commentText');
      const body = textarea.value.trim();
      const nudge = document.getElementById('commentNudge');
      if (!body) return;
      const moderationReason = shadeReason(body);
      if (moderationReason) {
        nudge.innerHTML = `
          <strong>${escapeHtml(moderationReason)}</strong>
          <span>Try focusing on the concept, not other fans, private info, or off-platform plans.</span>
          <button class="secondary-button small" id="rewriteSoftly">Rewrite softly</button>
          <button class="ghost-button small" id="cancelComment">Cancel</button>
        `;
        nudge.classList.remove('hidden');
        document.getElementById('rewriteSoftly').addEventListener('click', () => {
          textarea.value = 'This concept feels like ';
          nudge.classList.add('hidden');
          textarea.focus();
        });
        document.getElementById('cancelComment').addEventListener('click', () => {
          textarea.value = '';
          nudge.classList.add('hidden');
        });
        return;
      }
      const conceptId = postComment.dataset.concept;
      const nextComment = { name: 'you', badge: selectedBadgeName(), body };
      state.comments[conceptId] = [nextComment, ...(state.comments[conceptId] || [])];
      saveJson(STORAGE_KEYS.comments, state.comments);
      render();
    });
  }

  document.querySelectorAll('[data-toast]').forEach((button) => {
    button.addEventListener('click', () => {
      const actionId = button.dataset.localAction;
      if (actionId) {
        state.localActions[actionId] = true;
        saveJson(STORAGE_KEYS.actions, state.localActions);
        button.classList.add('is-done');
        if (button.dataset.doneLabel) button.textContent = button.dataset.doneLabel;
      }
      showToast(button.dataset.toast);
    });
  });
}

window.addEventListener('hashchange', render);
render();

export const navLinks = [
  { label: 'Zoho', href: '#experience' },
  { label: 'Building', href: '#building' },
  { label: 'Contact', href: '#contact' },
]

export const contact = {
  email: 'naveenkumar085@gmail.com',
  phone: '+91 7358517700',
  phoneHref: 'tel:+917358517700',
  linkedin: 'https://www.linkedin.com/in/naveen2109',
  linkedinLabel: 'linkedin.com/in/naveen2109',
}

// Short intro shown right under the hero.
export const intro = [
  'I’m a Product Marketing Manager at Zoho with a decade spent taking complex products to market, and a builder of SaaS products.',
  'What I care about most is turning a complex product into a story people understand, believe, and buy into. That starts with getting close to customers and understanding not just what they do, but why their work matters.',
]

// ---------- Zoho: the highlight ----------
export const zoho = {
  eyebrow: 'Experience · 2016 — Present',
  title: 'A decade marketing Zoho’s project management suite.',
  body: [
    'I lead end-to-end product marketing for Zoho’s project management suite, Zoho Projects, Zoho Sprints, Zoho BugTracker, and Zoho Projects Plus, across North America, Europe, MENA, APAC, and ANZ.',
    'The work spans the full lifecycle: positioning and messaging, go-to-market and launches, pricing and packaging, sales enablement, customer advocacy, analyst relations, and global events.',
  ],
  suite: ['Zoho Projects', 'Zoho Sprints', 'Zoho BugTracker', 'Zoho Projects Plus'],
  // Approximate placeholder figures — edit freely.
  stats: [
    { num: '$6M+', label: 'annual marketing budget owned' },
    { num: '$750K+', label: 'yearly event & campaign spend' },
    { num: '75+', label: 'customer stories & testimonials' },
    { num: '30+', label: 'customer-facing events run' },
    { num: '5', label: 'global regions covered' },
    { num: '~60%', label: 'fewer clicks on key workflows' },
  ],
  caseSlug: 'zoho-projects',
}

// ---------- Building: products I made from scratch ----------
export const products = [
  {
    slug: 'reochart',
    name: 'Reochart',
    tagline:
      'A data-storytelling tool I built and market from scratch, turning raw data into clean, shareable charts in minutes.',
    metric: '500+',
    metricLabel: 'users',
    blurb:
      'Built for founders, marketers, and consultants who need a chart that looks intentional, without a BI tool or a designer.',
    highlights: [
      'Product & positioning',
      'Product-led GTM',
      'Content & SEO engine',
      'Affiliate & community',
    ],
    tags: ['Built by me', 'Product + GTM', 'Data Viz'],
    link: 'https://reochart.com',
    logo: '/logos/reochart.png',    dark: true,
    accent: '#4f46e5',
    featured: true,
  },
  {
    slug: 'switchqr',
    name: 'SwitchQR',
    tagline:
      'A dynamic QR platform I built and took to market, letting businesses change what’s behind a code anytime.',
    metric: '400+',
    metricLabel: 'users',
    blurb:
      'Schedule redirects, run campaigns, and track every scan, positioned and priced against free, static generators.',
    highlights: [
      'Positioning vs “free”',
      'Pricing-led GTM',
      'SEO & comparison pages',
      'Referral & partnerships',
    ],
    tags: ['Built by me', 'GTM', 'Pricing'],
    link: 'https://switch-qr.com',
    logo: '/logos/Switch-qr.png',
    accent: '#0ea5e9',
    featured: false,
  },
  {
    slug: 'compare',
    name: 'Compare',
    tagline:
      'An AI-native competitor intelligence platform, currently in the making.',
    metric: 'Soon',
    metricLabel: 'in development',
    blurb:
      'An always-on, AI-native take on competitive intel, with positioning and go-to-market shaped alongside the build.',
    highlights: [
      'AI-native category',
      'GTM from day zero',
      'Positioning in progress',
    ],
    tags: ['Building', 'AI-Native'],
    link: null,
    accent: '#f59e0b',
    wip: true,
    featured: false,
  },
  {
    slug: 'cognizant',
    name: 'Cognizant',
    tagline: 'Where I learned to build software before I ever marketed it.',
    metric: '2015–16',
    metricLabel: 'software engineer',
    blurb:
      'Two years building enterprise software across the full SDLC, the technical grounding that still shapes how I market products today.',
    highlights: ['Full SDLC', 'Enterprise apps', 'Technical fluency'],
    tags: ['Where it started'],
    link: 'https://www.cognizant.com',
    accent: '#2563eb',
    featured: false,
  },
]

export const caseOrder = [
  'zoho-projects',
  'reochart',
  'switchqr',
  'compare',
  'cognizant',
]

export const caseStudies = {
  'zoho-projects': {
    num: '01',
    kind: 'Experience',
    accent: '#7c3aed',
    title: 'Zoho',
    logo: '/logos/zoho.svg',
    tagline:
      'Bringing project management software to millions of teams around the world.',
    summary:
      'A decade owning end-to-end GTM for Zoho’s project management suite across five regions, launches, a 75+ customer-story engine, ~60% usability gains, and a lasting PMI partnership.',
    link: 'https://www.zoho.com/projects/',
    meta: [
      { k: 'Role', v: 'Product Marketing Manager' },
      { k: 'Timeline', v: '2016 — Present' },
      { k: 'Regions', v: 'US · EU · MENA · APAC · ANZ' },
      { k: 'Suite', v: 'Projects · Sprints · BugTracker · Plus' },
    ],
    overview:
      'For over a decade, I’ve shaped the go-to-market strategy for Zoho’s project management suite, including Zoho Projects, Zoho Sprints, Zoho BugTracker, and Zoho Projects Plus.',
    overviewBody: [
      'My work has spanned every stage of the product marketing lifecycle, from customer research and positioning to global launches, customer advocacy, analyst relations, partnerships, and sales enablement.',
      'Working across North America, Europe, MENA, APAC, and ANZ taught me that great product marketing isn’t about telling people what a product does. It’s about helping them understand why it matters, and being willing to make the hard calls about what to leave out.',
    ],
    roleLead:
      'Instead of a traditional PMM role, I had the opportunity to influence almost every part of the product marketing function.',
    roles: [
      'Product positioning and messaging',
      'Go-to-market strategy',
      'Product launches',
      'Pricing and packaging',
      'Sales enablement',
      'Customer marketing',
      'Customer advocacy',
      'Voice of Customer',
      'Analyst relations',
      'Strategic partnerships',
      'Customer events and roadshows',
    ],
    stats: [
      { num: '$6M+', label: 'annual marketing budget owned' },
      { num: '75+', label: 'customer stories & testimonials' },
      { num: '30+', label: 'customer-facing events run' },
    ],
    execStats: [
      { num: 'Millions', label: 'teams using the products (adoption)' },
      { num: '$6M+', label: 'annual marketing budget owned' },
      { num: '$150K', label: 'ARR added in Projects Plus’ first 5 months' },
      { num: '15%', label: 'free-to-paid conversion on Projects Plus' },
      { num: '46', label: 'enterprise customers on Projects Plus' },
      { num: '60%+', label: 'enterprise deals backed by customer proof' },
      { num: '~60%', label: 'onboarding friction removed (activation)' },
      { num: '5', label: 'regions run end-to-end' },
    ],
    statsNote:
      'Zoho is a private company and doesn’t disclose these figures externally. The numbers on this page are rough, directional estimates from my own experience, not official Zoho data.',
    storiesLabel: 'Selected work',
    stories: [
      {
        n: '01',
        title: 'Marketing Zoho Projects in a crowded category',
        kicker: 'Positioning & go-to-market',
        blocks: [
          {
            pull: 'Zoho Projects was never the loudest name in the category. My job was to make it the clearest.',
            paras: [
              'Project management is one of the most competitive software categories there is, Asana, Monday, ClickUp, and Jira all carry bigger megaphones. For a decade, my core work has been making Zoho Projects the obvious choice for the teams it fits, across five very different regions.',
            ],
          },
          {
            label: 'The approach',
            paras: [
              'The bet was never to out-shout anyone, it was to **out-clarify** them. Lead with the job the customer is trying to do, prove it with real customers, and localise the story so it lands the same whether a team is evaluating in Dallas, Dubai, or Sydney.',
            ],
          },
          {
            type: 'metrics',
            title: 'The scale of the work',
            items: [
              { num: 'Millions', label: 'teams on Zoho Projects worldwide' },
              { num: '5', label: 'regions with localised GTM' },
              { num: '10 yrs', label: 'owning the product’s story' },
              { num: 'Full', label: 'lifecycle: positioning to enablement' },
            ],
          },
          {
            pull: 'Everything that follows, the launches, the advocacy, the events, is in service of one job: keep the story clear as the product and the category keep changing.',
          },
        ],
      },
      {
        n: '06',
        title: 'Building brand with out-of-home',
        kicker: 'Brand marketing',
        blocks: [
          {
            pull: 'We showed up where our buyers already were, long before they ever searched for us.',
            paras: [
              'Out-of-home was our brand bet. Airport and tech-hub billboards, transit, and summit signage in the markets that mattered most. The goal was never clicks, it was **familiarity**, so that when a team finally sat down to evaluate project tools, Zoho Projects already felt like a name they knew.',
              'The discipline was making a brand channel accountable. I ran OOH in tight geographies, paired every placement with digital retargeting in the same region so the awareness had somewhere to land, and treated lift in branded search and direct traffic as the signal, not vanity impressions.',
            ],
          },
          {
            type: 'metrics',
            title: 'Reach & footprint',
            items: [
              { num: '10M+', label: 'estimated impressions' },
              { num: 'US + IN', label: 'markets, incl. NYC Times Square' },
              { num: '5', label: 'formats: airport · taxi · transit · hoarding · event' },
              { num: '3+', label: 'major airports' },
              { num: '↑', label: 'branded search in target regions' },
              { num: '↑', label: 'direct & referral traffic' },
            ],
          },
          {
            type: 'gallery',
            title: 'Out in the world',
            items: [
              { src: '/images/ooh/standee.png', caption: 'Mall digital standee: “Get Zoho Projects. Get Clarity.”' },
              { src: '/images/ooh/nyc-taxi.jpg', caption: 'NYC taxi-top digital, Times Square' },
              { src: '/images/ooh/airport-standee.jpg', caption: 'Airport arrivals standee: “Plan, track, collaborate, automate.”' },
              { src: '/images/ooh/billboard.jpg', caption: 'Roadside hoarding: “Easier. Faster. Smarter.”' },
              { src: '/images/ooh/cabs.jpg', caption: 'Cab-branding fleet: “Manage Projects on the go.”' },
              { src: '/images/ooh/bus-straps.jpg', caption: 'In-bus grab-handle branding' },
              { src: '/images/ooh/bus-panel.jpg', caption: 'In-bus panel branding' },
            ],
          },
        ],
      },
      {
        n: '04',
        title: 'A five-year partnership with PMI',
        kicker: 'Partnerships & community',
        blocks: [
          {
            pull: 'Most event marketing is measured in weeks. I measured PMI in years.',
            paras: [
              'PMI members renew their certifications every year, so **familiarity compounds**. The practitioner who ignored our booth in 2020 becomes a buyer in 2024. Since 2019 I’ve invested in being a consistent part of the community, sponsorships, chapter events, webinars, and certification programs, not a booth that shows up once and disappears.',
            ],
          },
          {
            type: 'metrics',
            title: 'The compounding',
            items: [
              { num: '2019', label: 'the year the bet started' },
              { num: '10+', label: 'PMI chapters engaged' },
              { num: '5+', label: 'global summits attended' },
              { num: '20+', label: 'joint webinars & sessions' },
              { num: '3', label: 'regions of PMI presence' },
              { num: 'Familiar', label: 'name in the PMI ecosystem' },
            ],
          },
          {
            type: 'gallery',
            title: 'On the ground',
            items: [
              { src: '/images/pmi/pmi-summit.jpg', caption: 'PMI Global Summit' },
              { src: '/images/pmi/pmi-keynote.jpg', caption: 'On stage: the future of Zoho Projects' },
              { src: '/images/pmi/pmi-demo.jpg', caption: 'One-on-one at the booth' },
              { src: '/images/pmi/pmi-booth-success.jpg', caption: 'Zoho Projects booth' },
              { src: '/images/pmi/pmi-booth-rewarding.jpg', caption: 'Make work more rewarding' },
              { src: '/images/pmi/pmi-booth-effective.jpg', caption: 'On the exhibition floor' },
            ],
          },
        ],
      },
      {
        n: '02',
        title: 'Building the customer advocacy engine',
        kicker: 'Customer advocacy',
        blocks: [
          {
            pull: 'We assumed one great customer story could work everywhere. It couldn’t.',
            paras: [
              'A construction firm doesn’t care how an agency runs projects. So I stopped collecting testimonials and built a **repeatable engine** that turns customers into proof, organised by vertical, use case, company size, and deployment model.',
            ],
          },
          {
            type: 'chain',
            title: 'What the engine actually produced',
            items: [
              { n: '75+', v: 'customer stories and testimonials, organised by vertical, use case, size, and deployment' },
              { via: 'reused across', list: ['Website', 'Sales decks', 'Events', 'Paid ads', 'Analyst briefings'] },
              { via: 'which helped support', n: '60%+', v: 'of enterprise deals with matched, credible proof', highlight: true },
            ],
          },
          {
            type: 'metrics',
            title: 'Coverage built',
            items: [
              { num: '30+', label: 'customer videos produced' },
              { num: '12+', label: 'industries covered' },
              { num: '5', label: 'regions represented' },
            ],
          },
          {
            type: 'videos',
            title: 'Case studies I produced',
            items: [
              { id: 'lZqkooX62ss', company: 'Ultraviolette', title: 'Building world-class electric vehicles with Zoho Projects' },
              { id: 'U6ebGWGu2fg', company: 'Brigade Group', title: 'Reduced project timelines by 50%' },
              { id: 'F_sm6fq3_Dk', company: 'Pizza Factory', title: 'Zoho Projects as their secret ingredient to success' },
            ],
          },
        ],
      },
      {
        n: '07',
        title: 'Creator and media collaborations',
        kicker: 'Creator & media',
        blocks: [
          {
            pull: 'The most trusted marketing isn’t an ad. It’s a voice your audience already follows.',
            paras: [
              'Beyond our own channels, we put Zoho Projects in front of new audiences through creators and tech media, from a global tech channel with millions of subscribers to focused industry press. Borrowed trust travels further than a banner ever will.',
            ],
          },
          {
            type: 'videos',
            title: 'Selected collaborations',
            items: [
              { id: '-rwoPiM-8Qk', company: 'Linus Tech Tips', title: 'Creator collaboration reaching a global tech audience' },
              { id: 'rU-2Zt3yTDA', company: 'MobileAppDaily', title: '“Inside India’s most successful bootstrapped tech company”' },
              { id: '907PMEdiK0o', company: 'Tech & Data', title: 'Zoho Projects review: better than Asana or ClickUp?' },
            ],
          },
          {
            type: 'metrics',
            title: 'Reach',
            items: [
              { num: 'Millions', label: 'combined views across collabs' },
              { num: '3+', label: 'creator & media partners' },
              { num: 'Global', label: 'reach beyond owned channels' },
            ],
          },
        ],
      },
      {
        n: '02',
        title: 'Launching Zoho Projects Plus',
        kicker: 'Product launch',
        blocks: [
          {
            pull: 'We weren’t launching software. We were changing how customers thought about running projects.',
            paras: [
              'Projects Plus brought Zoho Projects, Sprints, Analytics, and WorkDrive together. Everyone already knew those products, so the challenge was never the software, it was the mental model. Nobody was asking for another bundle. They wanted **a simpler way to run projects** without stitching tools together.',
            ],
          },
          {
            type: 'process',
            title: 'The work behind the messaging',
            items: [
              { t: 'Customer interview notes', d: 'Dozens of conversations with teams already using the individual products.' },
              { t: 'Insight clustering', d: 'Group the raw notes until the real pattern surfaces: nobody wanted another bundle.' },
              { t: 'Positioning options', d: 'Draft a few distinct angles, then pressure-test each against the competition and the ICP.' },
              { t: 'Messaging hierarchy', d: 'Land on one primary message, the pillars beneath it, and the proof under each.' },
              { t: 'Launch assets', d: 'Cascade that single hierarchy into website, sales decks, pricing, and enablement.' },
            ],
          },
          {
            type: 'evolution',
            title: 'How the messaging changed',
            items: [
              {
                v: 'V1',
                tag: 'What it was',
                text: 'An integrated suite combining Projects, Sprints, Analytics, and WorkDrive.',
              },
              {
                pivot: true,
                label: 'What customers told us',
                text: 'We don’t need another bundle. We need a simpler way to run projects without stitching tools together.',
              },
              {
                v: 'V2',
                tag: 'What it does',
                text: 'One platform to plan, execute, collaborate, and report on projects.',
              },
            ],
          },
          {
            type: 'asset',
            title: 'The artifact everything cascaded from',
            asset: {
              file: 'projects-plus-messaging-framework.pdf',
              caption:
                'The messaging framework for the Projects Plus launch. Every asset (website, decks, pricing page, enablement) was built from this one page. Swap in a blurred screenshot of the real doc for full effect.',
              doc: {
                title: 'Projects Plus — Messaging Framework',
                badge: 'v2 · final',
                positioning:
                  'For teams that outgrew spreadsheets but don’t want heavyweight tooling, Projects Plus is the one platform to plan, execute, collaborate, and report, unlike point tools you have to stitch together.',
                primary: 'One platform to plan, execute, collaborate, and report on projects.',
                pillars: [
                  { k: 'Plan', v: 'From portfolio down to the task.' },
                  { k: 'Execute', v: 'No tool-switching tax.' },
                  { k: 'Collaborate', v: 'One place, one source of truth.' },
                  { k: 'Report', v: 'Outcomes leaders ask about.' },
                ],
                proof: [
                  'Built on Projects, Sprints, Analytics, and WorkDrive, products teams already trust.',
                  'Replaces three-to-four stitched-together tools with one.',
                ],
              },
            },
          },
          {
            type: 'tradeoff',
            title: 'The hard call',
            items: [
              { k: 'Biggest risk', tone: 'risk', v: 'Buyers reading Plus as **just another bundle**, exactly the fatigue they already had.' },
              { k: 'Decision', tone: 'decision', v: 'Lead with the workflow and the outcome, not the list of bundled products.' },
              { k: 'Trade-off', tone: 'tradeoff', v: 'We said less about feature depth to say one thing clearly. Breadth took a back seat to comprehension.' },
              { k: 'Result', tone: 'result', v: 'Cleaner demos, a message the field could repeat, and first-5-month targets beaten on ARR and conversion.' },
            ],
          },
          {
            type: 'compare',
            title: 'Goal vs. actual',
            items: [
              { label: 'ARR, first 5 months', target: '$100K', actual: '$150K', delta: '+50%' },
              { label: 'Enterprise customers', target: '20', actual: '46', delta: '+130%' },
              { label: 'Free → paid conversion', target: '8%', actual: '15%', delta: '+7 pts' },
            ],
          },
        ],
        reflection:
          'If I launched Projects Plus today, I’d validate the messaging with real customers before finalising a single asset. Building Reochart taught me how fast internal assumptions fall apart the moment a real user touches the product.',
      },
      {
        n: '05',
        title: 'Taking product marketing on the road',
        kicker: 'Field marketing & events',
        blocks: [
          {
            pull: 'Digital marketing scales. Relationships don’t.',
            paras: [
              'Webinars reach everyone and connect with no one. So we took the product on the road, across nine countries, for the hands-on workshops and long conversations digital can’t create. Roadshows became our **richest source of customer insight**, and my honest filter: I kept the cities where the insight beat the lead and cut the ones that were neither.',
            ],
          },
          {
            type: 'metrics',
            title: 'On the road',
            items: [
              { num: '500+', label: 'attendees hosted' },
              { num: '8+', label: 'cities toured' },
              { num: '9', label: 'countries toured' },
              { num: '40+', label: 'customer interviews captured' },
              { num: '15+', label: 'hands-on workshops' },
              { num: '50', label: 'case studies sourced' },
            ],
          },
          {
            type: 'gallery',
            title: 'From the roadshows',
            items: [
              { src: '/images/roadshow/speaking.jpg', caption: 'Presenting at a customer roadshow' },
              { src: '/images/roadshow/rs1.jpeg', caption: 'Customer roadshow group, US' },
              { src: '/images/roadshow/rs5.jpeg', caption: 'Roadshow session with customers' },
              { src: '/images/roadshow/rs6.jpeg', caption: 'Customer & partner meetup' },
              { src: '/images/roadshow/rs3.jpeg', caption: 'Hands-on workshop, ANZ' },
              { src: '/images/roadshow/rs2.jpeg', caption: 'Customer training session' },
              { src: '/images/roadshow/rs4.jpeg', caption: 'Community meetup' },
            ],
          },
        ],
      },
      {
        n: '03',
        title: 'Turning feedback into product decisions',
        kicker: 'Voice of customer',
        blocks: [
          {
            pull: 'Customers didn’t want more features. They wanted fewer decisions.',
            paras: [
              '**Most usability problems aren’t missing functionality, they’re unnecessary friction.** A Voice of Customer program I ran with Product, Support, and Engineering kept pointing at the same overloaded workflows.',
            ],
          },
          {
            type: 'bars',
            title: 'Where the friction actually was',
            items: [
              { label: 'Core workflow', value: 92 },
              { label: 'Navigation', value: 64 },
              { label: 'Onboarding', value: 52 },
              { label: 'Search', value: 41 },
              { label: 'Notifications', value: 33 },
            ],
          },
          {
            paras: [
              'I made the case with session recordings and click-path data, ranked fixes by reach × frequency, and simplified the busiest paths first. We never set out to move a score; it moved because the experience did.',
            ],
          },
          {
            type: 'metrics',
            title: 'Outcome',
            items: [
              { num: '~60%', label: 'fewer clicks on key actions' },
              { num: '8', label: 'core workflows simplified' },
              { num: '2×', label: 'CSAT on redesigned flows' },
            ],
          },
        ],
      },
    ],
    quote:
      'Great product marketing isn’t about telling people what a product does. It’s about helping them understand why it matters.',
    quoteBy: 'Naveen Kumar',
  },
  reochart: {
    num: '02',
    kind: 'Built from scratch',
    accent: '#4f46e5',
    title: 'Reochart',
    logo: '/logos/reochart.png',    storiesLabel: 'Build & go-to-market',
    tagline:
      'A data-storytelling tool I built and market from scratch, now used by 500+ people.',
    summary:
      'I built and market Reochart solo, an AI-era data-storytelling tool now used by 500+ people, owning everything from the product to positioning, SEO, and community-led growth.',
    link: 'https://reochart.com',
    meta: [
      { k: 'Role', v: 'Founder · Product + Marketing' },
      { k: 'Stage', v: 'Live · 500+ users' },
      { k: 'Category', v: 'Data Visualization' },
      { k: 'Focus', v: 'Product · Positioning · GTM' },
    ],
    overview:
      'Reochart turns raw data into clear, shareable stories. I built the product and its entire go-to-market, finding the wedge that makes a data-viz tool feel effortless.',
    overviewBody: [
      'Building has made me a better product marketer. It’s one thing to write positioning, another to watch a new user struggle, realise the messaging missed the mark, and iterate until it clicks.',
      'The promise I anchored everything on is simple: anyone can tell a compelling story with their data, fast, without living in spreadsheets.',
    ],
    stats: [
      { num: '500+', label: 'users on the platform (and growing)' },
      { num: '1', label: 'sharp, defensible core narrative' },
      { num: 'End-to-end', label: 'built and marketed solo' },
    ],
    glanceShot: {
      src: '/images/reochart/app-demo.gif',
      caption: 'Reochart in action: pick a chart type, style it, and export in seconds.',
    },
    stories: [
      {
        n: '01',
        title: 'What Reochart does',
        blocks: [
          {
            label: 'The product',
            paras: [
              'Reochart turns raw numbers into clean, animated charts you can share in minutes, without a BI tool, a designer, or a spreadsheet full of formulas.',
              'You paste or upload data, pick a chart, and Reochart handles the styling, motion, and export, so the output looks intentional rather than like a default Excel chart.',
            ],
          },
          {
            label: 'In practice',
            paras: ['People reach for it whenever they need a chart that looks good in a deck, a post, or a report, fast.'],
            list: [
              'Founder updates & investor decks',
              'Marketing and social posts',
              'Client-ready reports for consultants',
              'Newsletter and blog embeds',
            ],
          },
        ],
      },
      {
        n: '02',
        title: 'Positioning: from data to a story, in minutes',
        blocks: [
          {
            label: 'The wedge',
            paras: [
              'The market splits into two extremes, heavy BI tools that are overkill for a single chart, and spreadsheet charts that look generic. Reochart sits in the gap: serious-looking output with none of the setup.',
            ],
          },
          {
            label: 'The reasoning',
            paras: [
              'I deliberately avoided competing on chart count or integrations, a race that favours incumbents and bores buyers. Every surface, the landing page, onboarding, and templates, reinforces speed and polish over feature breadth.',
            ],
            pull: 'The fastest path from raw data to a chart you’re proud to share.',
          },
        ],
      },
      {
        n: '03',
        title: 'Who it’s for',
        blocks: [
          {
            label: 'Target audience',
            paras: [
              'Reochart is built for people who need charts often but aren’t analysts, the ones for whom a chart is a means to an end, not the job itself.',
            ],
          },
          {
            label: 'Core segments',
            list: [
              'Founders sharing metrics and updates',
              'Marketers making social and content visuals',
              'Consultants building client reports',
              'Operators who want quick, polished output',
            ],
          },
        ],
      },
      {
        n: '04',
        title: 'The go-to-market',
        blocks: [
          {
            label: 'The motion',
            paras: [
              'Reochart is product-led. The goal is for the value to be obvious before anyone talks to me, so the funnel is built around trying it, not booking a demo.',
              'A light Reochart credit on shared charts turns every published chart into a small, organic ad for the product.',
            ],
          },
          {
            label: 'The growth loop',
            pull: 'Make → share → someone makes their own. The output is the distribution.',
          },
        ],
      },
      {
        n: '05',
        title: 'Where I found the first users',
        blocks: [
          {
            label: 'Communities & forums',
            paras: [
              'I went where people already share charts and ask for help visualising data, and showed up with useful answers, not pitches.',
            ],
            list: [
              'Reddit: r/dataisbeautiful, r/DataVizRequests, r/SaaS, r/SideProject',
              'Indie Hackers and building in public on X',
              'Hacker News (Show HN) and Product Hunt',
              'Marketing, founder, and design Slack / Discord groups',
            ],
          },
          {
            label: 'What worked',
            paras: [
              'Answering “how would you visualise this?” posts with an actual Reochart example converted far better than any ad. Being genuinely helpful in-thread built the first cohort and the word of mouth that followed.',
            ],
          },
        ],
      },
      {
        n: '06',
        title: 'Content, SEO & growth',
        blocks: [
          {
            label: 'Content strategy',
            paras: [
              'The content engine is built around the job to be done: how to visualise a specific thing. Tutorials, chart-type guides, and templates that each solve one concrete task and lead naturally into the product.',
            ],
          },
          {
            label: 'SEO & blog',
            paras: [
              'I target long-tail, high-intent searches, “how to make an animated bar chart”, “best way to visualise survey data”, plus comparison pages against generic alternatives. A growing template gallery doubles as programmatic landing pages for chart types and use cases.',
            ],
          },
          {
            label: 'Affiliate & partnerships',
            paras: [
              'An affiliate program rewards creators, newsletter writers, and educators who send users, and I sponsor data and marketing newsletters that reach the exact audience.',
            ],
            stats: [
              { num: '500+', label: 'users, mostly organic' },
              { num: '0 → 1', label: 'built and grown solo' },
            ],
          },
        ],
      },
    ],
    quote: null,
  },
  switchqr: {
    num: '03',
    kind: 'Built from scratch',
    accent: '#0ea5e9',
    title: 'SwitchQR',
    logo: '/logos/Switch-qr.png',
    storiesLabel: 'Build & go-to-market',
    tagline:
      'A dynamic QR platform I built and took to market, now used by 400+ people.',
    summary:
      'I built and took SwitchQR to market solo, dynamic QR codes for 400+ businesses, positioned and priced to win against free, static tools.',
    link: 'https://switch-qr.com',
    meta: [
      { k: 'Role', v: 'Founder · Product + Marketing' },
      { k: 'Stage', v: 'Live · 400+ users' },
      { k: 'Category', v: 'QR / Engagement' },
      { k: 'Focus', v: 'GTM · Pricing' },
    ],
    overview:
      'SwitchQR gives businesses dynamic QR codes they can update anytime. I built it and shaped positioning and pricing to make the value obvious against free, static alternatives.',
    overviewBody: [
      'The core job was to reframe QR codes from a throwaway utility into a flexible, ongoing engagement channel worth paying for, then build the product to match.',
    ],
    stats: [
      { num: '400+', label: 'users on the platform' },
      { num: 'Dynamic', label: 'value framed around editable codes' },
      { num: 'SMB', label: 'GTM aimed at modern businesses' },
    ],
    glanceShot: {
      shots: [
        { src: '/images/switchqr/app-dashboard.png', caption: 'SwitchQR: dynamic QR codes with live scan analytics, editable anytime.' },
        { src: '/images/switchqr/app-1.png', caption: 'An early look at SwitchQR.' },
        { src: '/images/switchqr/app-2.png', caption: 'An early look at SwitchQR.' },
        { src: '/images/switchqr/app-3.png', caption: 'An early look at SwitchQR.' },
      ],
    },
    stories: [
      {
        n: '01',
        title: 'What SwitchQR does',
        blocks: [
          {
            label: 'The product',
            paras: [
              'SwitchQR gives businesses dynamic QR codes, codes whose destination you can change any time without reprinting. Update a link, schedule redirects, run campaigns, and track every scan from one dashboard.',
            ],
          },
          {
            label: 'In practice',
            paras: ['It turns a printed code from a one-time link into a channel you can manage.'],
            list: [
              'Menus, packaging & signage',
              'Campaigns & promotions',
              'Events & print collateral',
              'A/B testing destinations',
            ],
          },
        ],
      },
      {
        n: '02',
        title: 'Positioning: sell flexibility, not codes',
        blocks: [
          {
            label: 'The challenge',
            paras: [
              'Static QR generators are everywhere and free. Competing on “we make QR codes” is a losing game.',
            ],
          },
          {
            label: 'The reasoning',
            paras: [
              'So I positioned SwitchQR around what free tools can’t do: change the destination after printing, schedule it, and measure it, an ongoing engagement channel worth paying for, not a one-off utility.',
            ],
            pull: 'Sell flexibility, not codes.',
          },
        ],
      },
      {
        n: '03',
        title: 'Who it’s for',
        blocks: [
          {
            label: 'Target audience',
            paras: [
              'Businesses that print codes and need them to keep working as things change, where reprinting is expensive or impossible.',
            ],
          },
          {
            label: 'Core segments',
            list: [
              'Restaurants & hospitality (menus)',
              'Retail & consumer packaging',
              'Marketers running campaigns',
              'Events, print, and out-of-home',
            ],
          },
        ],
      },
      {
        n: '04',
        title: 'The go-to-market',
        blocks: [
          {
            label: 'Pricing-led',
            paras: [
              'Value maps directly to pricing tiers built around real usage, number of dynamic codes, scans, and features like scheduling and analytics, so the upgrade path is obvious as a business grows.',
            ],
          },
          {
            label: 'The motion',
            paras: [
              'Self-serve signup with a free tier to get the first code live, then conversion at the moment a user needs to edit, schedule, or measure, exactly what static tools can’t do.',
            ],
          },
        ],
      },
      {
        n: '05',
        title: 'Channels & growth',
        blocks: [
          {
            label: 'Communities & forums',
            paras: ['I targeted where SMB owners and marketers gather.'],
            list: [
              'Reddit: r/smallbusiness, r/marketing, r/restaurateur',
              'Founder and marketing Slack / Discord groups',
              'Product Hunt and Indie Hackers',
              'LinkedIn for B2B reach',
            ],
          },
          {
            label: 'Content & SEO',
            paras: [
              'Content targets high-intent, commercial queries, “dynamic QR code”, “editable QR code”, “QR code with analytics”, plus use-case guides for restaurants, packaging, and events. Comparison pages against free, static generators capture switchers.',
            ],
          },
          {
            label: 'Affiliate & partnerships',
            paras: [
              'A referral and affiliate program, plus partnerships with print shops, agencies, and menu / POS tools, put SwitchQR in front of businesses right when they’re creating codes.',
            ],
            stats: [
              { num: '400+', label: 'businesses on the platform' },
              { num: '0 → 1', label: 'built and marketed solo' },
            ],
          },
        ],
      },
    ],
    quote: null,
  },
  compare: {
    num: '04',
    kind: 'In development',
    accent: '#f59e0b',
    title: 'Compare',
    tagline:
      'An AI-powered competitor intelligence platform, currently in the making.',
    summary:
      'An AI-native competitor-intelligence platform I’m building from day zero, shaping the product and its go-to-market in parallel.',
    link: null,
    meta: [
      { k: 'Role', v: 'Founder · Product + Marketing' },
      { k: 'Stage', v: 'In development' },
      { k: 'Category', v: 'Competitive Intel' },
      { k: 'Focus', v: 'AI-Native GTM' },
    ],
    overview:
      'Compare is an AI-native competitor intelligence platform I’m building from the ground up, shaping positioning, narrative, and go-to-market alongside the product.',
    overviewBody: [
      'The thinking so far centers on making competitive intelligence continuous and automatic, instead of a battle-card that’s out of date the day it ships. A fuller story will land here as it takes shape.',
    ],
    stats: [
      { num: 'AI-native', label: 'core to the product and the pitch' },
      { num: 'Day 0', label: 'GTM shaped alongside the build' },
      { num: 'Soon', label: 'full story coming' },
    ],
    glanceShot: {
      shots: [
        { src: '/images/compare/app-1.png', caption: 'An early look at Compare, in development.' },
        { src: '/images/compare/app-2.png', caption: 'An early look at Compare, in development.' },
        { src: '/images/compare/app-3.png', caption: 'An early look at Compare, in development.' },
      ],
    },
    did: [
      'Shaping early positioning and category narrative',
      'Defining the AI-native GTM approach',
      'Building the product from day zero',
    ],
    quote: null,
  },
  cognizant: {
    num: '05',
    kind: 'Where it started',
    accent: '#2563eb',
    title: 'Cognizant',
    tagline: 'Where I learned to build software before I ever marketed it.',
    summary:
      'Two years building enterprise software before I marketed it, the technical foundation that makes me a sharper, more credible PMM today.',
    link: 'https://www.cognizant.com',
    meta: [
      { k: 'Role', v: 'Software Engineer' },
      { k: 'Timeline', v: '2015 — 2016' },
      { k: 'Focus', v: 'SDLC · Enterprise Apps' },
      { k: 'Value now', v: 'Technical fluency' },
    ],
    overview:
      'Before product marketing, I built enterprise software at Cognizant. That grounding in how software is actually made still shapes how I market it today.',
    overviewBody: [
      'Working through the full software development lifecycle taught me how products get built, what “done” really means, and how engineering teams think, context that makes me a sharper partner to product and a more credible marketer to technical buyers.',
    ],
    stats: [
      { num: 'Full SDLC', label: 'hands-on across the lifecycle' },
      { num: 'Enterprise', label: 'complex, real-world applications' },
      { num: 'Technical', label: 'fluency I still use every day' },
    ],
    did: [
      'Built enterprise applications across the SDLC',
      'Collaborated with cross-functional delivery teams',
      'Developed technical fluency I now apply to GTM',
    ],
    quote: null,
  },
}

export interface OfferItem {
  id: string;
  slug: string;
  title: string;
  shortTag: string;
  badge: string;
  tagline: string;
  plainSummary: string;
  heroImage: string;
  primaryMetric: string;
  metricLabel: string;
  timeToUse: string;
  coreProblem: string;
  ourSolution: string;
  deliverables: { title: string; desc: string; icon: string }[];
  caseStudy: {
    agent: string;
    brokerage: string;
    city: string;
    result: string;
    story: string;
  };
  faq: { q: string; a: string }[];
}

export const offersList: OfferItem[] = [
  {
    id: 'pipeline-recovery',
    slug: 'pipeline-recovery',
    title: 'Pipeline Recovery',
    shortTag: 'Revive Stalled Leads',
    badge: 'Featured Flagship Offer',
    tagline: 'Turn Cold Leads & Dead CRM Contacts Into Live Closings in 7 Days',
    plainSummary: 'Got leads in your phone or CRM who stopped replying? Do not throw them away. Send our 9-word text formula this Tuesday. Watch 6 out of 10 people text you right back with "Yes, we are still looking!"',
    heroImage: '/src/assets/images/pipeline_recovery_chat_1791411416175.jpg',
    primaryMetric: '64% Reply Rate',
    metricLabel: 'on cold leads who had not answered in 6+ months',
    timeToUse: '5 minutes to send',
    coreProblem: 'Most realtors think a lead is dead after 2 texts. In reality, buyers just get busy, overwhelmed, or tired of pushy salesmen. When you send long emails or generic newsletter spam, they ignore you.',
    ourSolution: 'We give you a simple 7-day multi-touch recovery plan built around a 9-word magic question. It feels like a polite friend asking a favor, not a robot trying to sell them something.',
    deliverables: [
      {
        title: 'The 9-Word Magic Text Swipe File',
        desc: 'Short, friendly questions that get ghosted buyers and past open house guests to text you back in minutes.',
        icon: 'message'
      },
      {
        title: '7-Day Recovery Touch Calendar',
        desc: 'Day-by-day instructions: Day 1 text, Day 3 video walk-through, Day 5 price change, Day 7 polite takeaway.',
        icon: 'calendar'
      },
      {
        title: '3-Part Email Reactivation Blast',
        desc: 'Send these to your entire old email list. Written in plain words that bypass the spam folder and get opened.',
        icon: 'mail'
      },
      {
        title: 'Voicemail & Audio Note Prompts',
        desc: 'Leave 20-second friendly voice messages that make people smile and call you back right away.',
        icon: 'mic'
      }
    ],
    caseStudy: {
      agent: 'Marcus Vance',
      brokerage: 'RE/MAX Premier',
      city: 'Dallas, TX',
      result: '$19,500 GCI from 2 Recovered Deals',
      story: 'I had 140 leads sitting in my CRM that I thought were totally dead. I sent the 9-word text on Tuesday morning. By Thursday, 21 people replied, 4 asked to tour homes this weekend, and I wrote 2 offers within 10 days.'
    },
    faq: [
      {
        q: 'Will sending this make my old leads angry?',
        a: 'Not at all. The 9-word text is polite, short, and friendly. It contains zero sales pressure, so people are happy to answer.'
      },
      {
        q: 'What if a lead says they already bought with another realtor?',
        a: 'Great! You can update your CRM, congratulate them, and ask if their friends are moving. We include an exact script for that too.'
      },
      {
        q: 'Do I need expensive software to run this?',
        a: 'No. You can send these texts directly from your personal cell phone or through your existing CRM like Follow Up Boss, KVCore, or Brivity.'
      }
    ]
  },
  {
    id: 'handoff-audit',
    slug: 'handoff-audit',
    title: 'The Handoff Audit',
    shortTag: 'Find Lead Leaks',
    badge: 'Diagnostic & Strategy Kit',
    tagline: 'Find the Holes in Your Follow-Up Where You Are Losing Deals',
    plainSummary: 'You spend time and money getting buyer and seller leads. But what happens after they click? Take our 60-second diagnostic to pinpoint the exact handoff points where clients slip away.',
    heroImage: '/src/assets/images/handoff_audit_report_1791411436902.jpg',
    primaryMetric: '3 to 5 Extra Closings',
    metricLabel: 'found by plugging handoff gaps without spending more on ads',
    timeToUse: '60 seconds to complete',
    coreProblem: 'Most real estate leads do not buy today because the handoff between their first question and your first meeting is messy, slow, or inconsistent. Leads fall through the cracks when you are busy showing homes.',
    ourSolution: 'The Handoff Audit is a 5-point checklist that tests your speed-to-lead, proof delivery, follow-up cadence, and objection handling. You immediately get a custom fix roadmap.',
    deliverables: [
      {
        title: 'The 60-Second Leak Scorecard',
        desc: 'Interactive tool that grades your current process and shows you which step is costing you the most money.',
        icon: 'clipboard'
      },
      {
        title: 'Speed-to-Lead Response System',
        desc: 'Pre-written automatic replies for open house sign-ups, website forms, and Zillow leads that start conversations.',
        icon: 'zap'
      },
      {
        title: 'The First-Call Handoff Script',
        desc: 'How to transition from a casual text to a booked 15-minute coffee or video consultation effortlessly.',
        icon: 'phone'
      },
      {
        title: 'Pipeline Accountability Checklist',
        desc: 'A 1-page daily tracker so you know exactly which 5 people to follow up with before you eat lunch.',
        icon: 'check'
      }
    ],
    caseStudy: {
      agent: 'Sarah Lindqvist',
      brokerage: 'eXp Realty',
      city: 'Scottsdale, AZ',
      result: 'Tripled Conversion Rate on Web Leads',
      story: 'I was spending $1,200 a month on Facebook ads and thought the leads were junk. Reale showed me my gap: I was waiting 4 hours to text back and had no seller guide to give them. Once I fixed that handoff, my conversion tripled.'
    },
    faq: [
      {
        q: 'How long does the audit take to complete?',
        a: 'Just 60 seconds! You answer 5 quick questions about how you handle new inquiries and get your score right away.'
      },
      {
        q: 'Is this only for big teams or solo agents too?',
        a: 'It is built for both. Solo agents use it to stay organized when they are busy. Team leaders use it to make sure their junior agents are not dropping balls.'
      }
    ]
  },
  {
    id: 'listing-launchpad',
    slug: 'listing-launchpad',
    title: 'Listing Launchpad',
    shortTag: '30-Day Seller Blitz',
    badge: 'Seller Domination System',
    tagline: 'The 30-Day Marketing Plan That Turns 1 Listing into 3 More Deals',
    plainSummary: 'When you get a new home to sell, do not just put a sign in the lawn. Use our 30-day checklist. Get coming-soon buzz, open house crowds, neighbor letters, and just-sold postcards that make every neighbor want to hire you.',
    heroImage: '/src/assets/images/listing_launchpad_sign_1791411426309.jpg',
    primaryMetric: '2.4 New Client Inquiries',
    metricLabel: 'generated per active listing using the full 30-day campaign',
    timeToUse: 'Ready in 10 minutes',
    coreProblem: 'Most agents list a home, post a blurry photo on Facebook, hold one slow open house, and hope for the best. They miss out on the 10 neighbors on that block who are thinking about selling soon.',
    ourSolution: 'Listing Launchpad orchestrates 7 distinct milestones for every listing: Coming Soon, Just Listed, Open House Blitz, Price Reset, Under Contract, Just Sold, and the Seller Success Story.',
    deliverables: [
      {
        title: '12-Page Printable Home Seller Guide',
        desc: 'Give this booklet away at open houses or drop it on neighboring porches. Makes you look like the #1 authority.',
        icon: 'book'
      },
      {
        title: 'Open House Mega-Pack',
        desc: 'Digital sign-in QR codes, directional sign placement map, and the 2-hour post-tour text script.',
        icon: 'home'
      },
      {
        title: '14 Social Carousel Templates',
        desc: 'High-end Instagram & Facebook templates for Coming Soon, Sneak Peek, Open House, and Just Sold.',
        icon: 'share'
      },
      {
        title: 'Neighbor & Farm Letters',
        desc: 'Pre-written letters to drop off to the 50 closest neighbors: "Your neighbor just listed, here is what it means for your value."',
        icon: 'mail'
      }
    ],
    caseStudy: {
      agent: 'Elena Rostova',
      brokerage: 'Compass',
      city: 'Miami, FL',
      result: '3 Listings Won from 1 Open House',
      story: 'I printed 25 copies of the Home Seller Guide for a $780k listing. Two visiting couples were actually neighbors sizing up the market. Both hired me to list their townhomes within 45 days because my presentation blew everyone else away.'
    },
    faq: [
      {
        q: 'Can I edit the templates with my headshot and brokerage logo?',
        a: 'Yes! Every design comes in 1-click Canva format so you can pop your photo, colors, and logo on in 30 seconds.'
      },
      {
        q: 'What if the home sells in 2 days?',
        a: 'Even better! That triggers the "Under Contract in 48 Hours" marketing kit which is the single most powerful seller lead magnet in real estate.'
      }
    ]
  },
  {
    id: 'sphere-nurture',
    slug: 'sphere-nurture',
    title: 'Sphere Nurture & Referral Engine',
    shortTag: 'Past Client Retention',
    badge: 'Referral Machine',
    tagline: 'Never Let Past Clients or Friends Forget That You Sell Real Estate',
    plainSummary: '80% of homeowners say they would hire their realtor again. But only 12% actually do because the agent stops talking to them. Our weekly emails, equity updates, and seasonal notes make sure friends and clients always call you first.',
    heroImage: '/src/assets/images/agent_happy_closing_1791193974108.jpg',
    primaryMetric: '84% Retention',
    metricLabel: 'and an average of 4 extra referral transactions every year',
    timeToUse: '2 minutes weekly',
    coreProblem: 'Real estate agents are terrible at staying in touch after closing. You promise to stay friends, but 2 years later you find out your past client bought their next house with someone else. Ouch.',
    ourSolution: 'A simple, non-annoying touch system. Short weekly market updates that take 2 minutes to read, annual equity review letters, and friendly text check-ins on home purchase anniversaries.',
    deliverables: [
      {
        title: '52 Weekly Market Update Emails',
        desc: 'Short, friendly notes that explain mortgage rates and housing trends in plain 6th-grade English.',
        icon: 'mail'
      },
      {
        title: 'Annual Home Equity Review Template',
        desc: 'Send this 1-page report on their 1-year home anniversary: "Here is how much equity your home gained this year."',
        icon: 'trending'
      },
      {
        title: 'Quarterly Sphere Coffee & Catch-up Scripts',
        desc: 'Polite casual texts to invite past clients for coffee or check in on their pets without sounding like a sleazy salesman.',
        icon: 'coffee'
      },
      {
        title: 'Client Appreciation Event Blueprint',
        desc: 'Step-by-step instructions to host a $300 pie giveaway or ice cream social that produces 5+ listing referrals.',
        icon: 'gift'
      }
    ],
    caseStudy: {
      agent: 'David Miller',
      brokerage: 'Keller Williams',
      city: 'Denver, CO',
      result: '6 Direct Referrals in 90 Days',
      story: 'I stopped posting boring company market infographics and started sending Reale weekly emails. A client from 3 years ago replied to an email about kitchen remodels, asked me to value her home, and referred her sister.'
    },
    faq: [
      {
        q: 'How often should I email my sphere?',
        a: 'Once a week is ideal as long as the email is short, helpful, and interesting. Reale emails take under 2 minutes to read and get 48% open rates.'
      },
      {
        q: 'Does this work if I only have 50 people in my contact list?',
        a: 'Yes! In fact, a small tight list of 50 people who actually know and like you will produce more referrals than 1,000 strangers.'
      }
    ]
  },
  {
    id: 'script-vault',
    slug: 'script-vault',
    title: 'Cold-to-Closed Script Vault',
    shortTag: 'Conversion Scripts',
    badge: 'Word-for-Word Words',
    tagline: 'Exact Texts and Words So People Say "Yes, Come Look at My House"',
    plainSummary: 'Hate cold calling? Nervous about what to say to an open house guest or expired listing? These scripts do not sound like high-pressure sales talk. They sound like a helpful neighbor. Copy and paste them into your phone.',
    heroImage: '/src/assets/images/realtor_social_content_1791193964551.jpg',
    primaryMetric: '3x More Appointments',
    metricLabel: 'booked compared to standard generic phone scripts',
    timeToUse: 'Instant copy-paste',
    coreProblem: 'Traditional scripts feel fake, robotic, and confrontational. When you use aggressive closing lines like "If I could show you a way...", homeowners get defensive and hang up.',
    ourSolution: 'Conversational frameworks built on asking genuine questions, lowering sales resistance, and offering real helpful information first. You will actually enjoy reaching out to people.',
    deliverables: [
      {
        title: '2-Hour Open House Follow-Up Text',
        desc: 'The exact text to send right after an open house ends. Casual, polite, and gets a 64% response rate.',
        icon: 'message'
      },
      {
        title: 'Ghosted Buyer Reactivation Text',
        desc: 'When a buyer stops answering your calls for 2 weeks, send this simple 1-liner to revive the conversation.',
        icon: 'zap'
      },
      {
        title: 'Expired Listing Empathy Framework',
        desc: 'Call frustrated sellers whose listing just failed with another agent without sounding like a greedy vulture.',
        icon: 'phone'
      },
      {
        title: 'FSBO "Help First" Partnership Script',
        desc: 'How to offer For Sale By Owner sellers a free open house checklist without them slamming the door on you.',
        icon: 'users'
      }
    ],
    caseStudy: {
      agent: 'Jason Chang',
      brokerage: 'Compass',
      city: 'Seattle, WA',
      result: 'Booked 4 Expired Listing Consultations',
      story: 'I used to get cursed out when calling expired listings. With the Reale empathy script, sellers actually thank me for calling because I ask about their moving plans instead of bragging about my sales volume.'
    },
    faq: [
      {
        q: 'Can I send these via text instead of calling?',
        a: 'Yes! Most of our scripts are specifically formatted for text messages (SMS and WhatsApp) because that is where modern buyers and sellers prefer to communicate.'
      },
      {
        q: 'Do I have to memorize them word for word?',
        a: 'No. Read them once or keep them open on your screen. They use natural everyday words that you already use with friends.'
      }
    ]
  }
];

// The 6 Slides of Pipeline Recovery matching the attachments Reale_Pipeline_Recovery_01 to 06
export const pipelineRecoverySlides = [
  {
    slideNumber: 1,
    title: 'Pipeline Recovery',
    subtitle: 'The 7-Day Plan to Turn Stalled Leads into Live Closings',
    badge: 'Slide 01 · Overview',
    hook: 'Why your old database is worth more than buying new leads.',
    keyPoints: [
      'The average real estate agent has 100+ "dead" leads in their CRM.',
      '85% of those leads will still buy or sell a home within the next 24 months.',
      'They didn’t hire you because they got busy, not because they dislike you.',
      'A simple, friendly reset gets conversations started this week.'
    ],
    highlight: 'Stop spending $1,500/mo on new ad leads until you tap the gold already in your CRM.'
  },
  {
    slideNumber: 2,
    title: 'The 4 Big Follow-Up Leaks',
    subtitle: 'Why Most Real Estate Leads Go Cold',
    badge: 'Slide 02 · The Problem',
    hook: 'Where your pipeline is leaking thousands in commission dollars.',
    keyPoints: [
      'Leak 1: The Speed Gap — Waiting more than 15 minutes to answer a new inquiry.',
      'Leak 2: The Robot Text — Sending long automated paragraphs that scream spam.',
      'Leak 3: The Missing Value — Texting "Just checking in!" without offering anything useful.',
      'Leak 4: The 2-Touch Surrender — 70% of agents quit after only 2 attempts.'
    ],
    highlight: 'Fixing these 4 gaps immediately doubles your booking rate without extra marketing cost.'
  },
  {
    slideNumber: 3,
    title: 'The 9-Word Magic Text Formula',
    subtitle: 'The Shortest, Highest-Converting Message in Real Estate',
    badge: 'Slide 03 · The Secret',
    hook: 'Word-for-word copy that gets a 64% response rate in under 2 hours.',
    keyPoints: [
      'Traditional text: "Hi John, this is Sarah with Premier Realty, just checking in to see if you are still looking to buy a 3 bed 2 bath in Austin..." (0% reply)',
      'The 9-Word Text: "Hi John, are you still looking for a home in [City]?"',
      'Why it works: Takes 3 seconds to read on a locked phone screen.',
      'It creates zero sales resistance and invites a quick "Yes" or "Not yet".'
    ],
    highlight: 'Short messages feel human. Long essays feel like a marketing robot.'
  },
  {
    slideNumber: 4,
    title: 'The 7-Day Touch Protocol',
    subtitle: 'Multi-Channel Cadence That Does Not Annoy People',
    badge: 'Slide 04 · The Cadence',
    hook: 'The exact step-by-step schedule to execute from Monday to Sunday.',
    keyPoints: [
      'Day 1 (Tuesday): The 9-Word Text to your 50 oldest leads.',
      'Day 3 (Thursday): Casual video selfie note: "Just saw this new listing down the street from where we talked."',
      'Day 5 (Saturday): Neighborhood Price Drop Alert: "2 homes in your price range just reduced prices."',
      'Day 7 (Monday): The Polite Takeaway: "I don’t want to bother you, should I take you off my private list?"'
    ],
    highlight: 'The Day 7 takeaway text alone gets 35% of ghosted buyers to apologize and re-engage.'
  },
  {
    slideNumber: 5,
    title: 'Case Study: Marcus Vance',
    subtitle: '$19,500 GCI Recovered from 140 "Dead" Leads',
    badge: 'Slide 05 · Real Proof',
    hook: 'What happened when a solo RE/MAX agent ran this exact 7-day protocol.',
    keyPoints: [
      'Marcus had 140 leads who had not opened an email in 8 months.',
      'He sent the 9-Word Text to 50 contacts on Tuesday morning.',
      'Result in 48 hours: 21 replies, 4 private weekend home tours booked.',
      'Final outcome: 2 closed contracts within 25 days and $19,500 in commission.'
    ],
    highlight: 'Total cost to Marcus: $0 and 15 minutes of sending text messages.'
  },
  {
    slideNumber: 6,
    title: 'Your 7-Day Implementation Plan',
    subtitle: 'Download the Full Swipe File & Start Recovering Deals Today',
    badge: 'Slide 06 · Take Action',
    hook: 'Everything you need is ready inside Reale Content Studio.',
    keyPoints: [
      'Download all 9-word text variations (Buyers, Sellers, Open Houses, Past Clients).',
      'Copy the Day 1 through Day 7 calendar straight into your calendar app.',
      'Get the 3-part email reactivation blast to send to your full database.',
      'Access it all free today with your 14-day Reale trial.'
    ],
    highlight: 'Pick 10 old leads right now. Send the 9-word text. Watch your phone buzz.'
  }
];

export const nineWordVariations = [
  {
    type: 'Ghosted Buyer',
    label: 'Old Buyer Lead',
    text: 'Hi [Name], are you still looking for a home in [City]?',
    why: 'Short, clean, no pressure. 64% response rate.'
  },
  {
    type: 'Open House Guest',
    label: 'Past Open House Visitor',
    text: 'Hi [Name], did you end up finding a home in [City] yet?',
    why: 'Opens the door for them to say "Not yet, everything is too expensive!" which lets you help.'
  },
  {
    type: 'Home Seller',
    label: 'Potential Home Seller',
    text: 'Hi [Name], do you still want to know what homes on your street sold for this month?',
    why: 'Offers valuable neighborhood information without asking them to list their home.'
  },
  {
    type: 'Past Client / Sphere',
    label: 'Friend or Past Client',
    text: 'Hi [Name], quick question — are you guys planning any home remodel projects this year?',
    why: 'Starts a warm friendly chat about contractors and home value that naturally leads to real estate.'
  }
];

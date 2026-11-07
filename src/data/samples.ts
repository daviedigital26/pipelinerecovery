export interface DiagnosticSample {
  id: string;
  category: 'recovery' | 'blueprint' | 'pricedrop' | 'sla';
  title: string;
  badge: string;
  hook: string;
  bodyText: string;
  previewNote: string;
  ctaText: string;
}

export const diagnosticSamples: DiagnosticSample[] = [
  {
    id: 'recovery-framework',
    category: 'recovery',
    title: 'High-Trust Quiet Lead Reactivation Framework',
    badge: 'Realtor Pipeline Recovery™ Asset',
    hook: 'How to re-engage buyers and sellers who stopped responding without sounding desperate or robotic.',
    bodyText: `✓ Re-engagement Scripts: Conversational texts and emails that don't sound like a robot.

✓ CRM Tagging & Cleanup: Know exactly who to call, and who to leave alone.

✓ Market-Specific Hooks: Give them a reason to reply based on their specific neighborhood.`,
    previewNote: 'Included in the Free Pipeline Snapshot and expanded in full within the $1,750 Recovery System.',
    ctaText: 'Get My Free Pipeline Snapshot →'
  },
  {
    id: 'blueprint-architecture',
    category: 'blueprint',
    title: 'CRM Stage & Follow-Up SLA Architecture',
    badge: '$1,750 Recovery System Asset',
    hook: 'Clear operational rules ensuring every incoming and historical lead receives systematic attention.',
    bodyText: `A leaky pipeline is rarely a lead quality problem; it is almost always a pipeline handoff problem.

The Recovery System establishes exact Service Level Agreements (SLAs) for your database:

• Stage 1 (New Inquiry): 5-minute multi-channel speed-to-lead sequence (SMS, call, email, video note).
• Stage 2 (Active Engagement): 14-day discovery cadence to schedule an in-person or video consultation.
• Stage 3 (Long-Term Nurture): 60-day value touches based on home equity, interest rate shifts, and neighborhood trends.
• Stage 4 (Dormant Reactivation): Quarterly 7-day re-engagement blitz designed to revive quiet buyers.`,
    previewNote: 'Custom-tailored to your exact CRM (Follow Up Boss, kvCORE, Lofty, Brivity, or HubSpot).',
    ctaText: 'Get My Free Pipeline Snapshot →'
  }
];

export const comparisonPoints = [
  {
    feature: 'Focus',
    others: 'Buying expensive new portal leads.',
    recovery: 'Monetizing contacts you already paid for.'
  },
  {
    feature: 'Cost',
    others: '$1,500 to $4,000+ every month.',
    recovery: 'Free snapshot to start. $1,750 one-time system.'
  },
  {
    feature: 'Trust',
    others: 'Cold strangers who ignore you.',
    recovery: 'Contacts who already know your name.'
  }
];

export const realScenarios = [
  {
    title: 'The 18-Month Portal Lead Graveyard',
    challenge: 'A producing agent spent over $18,000 on portal leads over a 2-year period. After initial outreach, over 280 contacts stopped replying and were marked as "dead" or "archive" in their CRM.',
    approach: 'We executed a targeted Realtor Pipeline Recovery™ triage, deploying low-pressure, micro-market reactivation cadences across 120 verified contacts.',
    outcome: 'Identified 18 active buyers and sellers who were still in-market, resulting in 4 closed purchase contracts within 60 days without spending a dime on new advertising.',
    badge: 'Realtor Pipeline Recovery™'
  },
  {
    title: 'The Quiet Past-Client Database',
    challenge: 'A top agent had over 600 past clients and sphere contacts who received nothing except a generic automated monthly newsletter for two years.',
    approach: 'Deployed our targeted Recovery Framework with conversational, market-specific check-in texts offering customized equity and neighborhood updates.',
    outcome: 'Generated 23 direct replies in the first 48 hours, uncovering 3 listing consultations and 5 immediate seller referrals without cold calling.',
    badge: 'Recovery Framework'
  },
  {
    title: 'The Broken Team Lead Handoff',
    challenge: 'A 6-agent real estate team was losing track of leads between initial intake and agent showing tours. Speed-to-lead averaged 4.5 hours, and leads rarely received more than 2 follow-ups.',
    approach: 'Built a customized $1,750 Recovery Blueprint, standardizing CRM stage definitions, automated reminder tasks, and mandatory 14-day multi-channel contact cadences.',
    outcome: 'Speed-to-lead dropped to under 8 minutes across the team. Follow-up completion rates jumped from 28% to 91%, doubling tour conversion rates across all inbound sources.',
    badge: 'Recovery Blueprint'
  }
];

export const faqs = [
  {
    q: 'Why should I follow up with existing leads instead of buying new ones?',
    a: 'Real estate leads take time. Most buyers and sellers take 6 to 24 months from their first inquiry before closing. When agents stop following up after 2 attempts, they leave the most valuable portion of their pipeline behind. Following up with contacts you already own costs nothing and converts at a much higher margin.'
  },
  {
    q: 'What is included in the Free Pipeline Snapshot?',
    a: 'The Free Pipeline Snapshot is a quick, zero-risk review of your current CRM. We find where contacts slip through the cracks, calculate your hidden commission potential, and show you exactly who to contact first.'
  },
  {
    q: 'What do I receive with the $1,750 Recovery Blueprint?',
    a: 'The $1,750 Recovery Blueprint is your custom follow-up playbook. You get proven text and email scripts that do not sound robotic, clean CRM stages, and step-by-step rules your team can run forever.'
  },
  {
    q: 'How does the Pipeline Recovery Implementation work?',
    a: 'If you want us to do the heavy lifting, our team builds the entire setup inside your CRM. We clean your database, build the tags and sequences, train your agents, and launch the re-engagement campaigns for you.'
  },
  {
    q: 'Which CRM systems and platforms do you support?',
    a: 'We work with all major real estate CRM platforms, including Follow Up Boss, kvCORE, Lofty (formerly Chime), Brivity, Sierra Interactive, BoomTown, CINC, and custom spreadsheets.'
  },
  {
    q: 'How do I get started?',
    a: 'Start by clicking "Get My Free Pipeline Snapshot →". We review your database setup with zero pressure, zero obligation, and no credit card required.'
  }
];

export const sampleTemplates = [
  {
    category: 'guide',
    pages: [
      {
        pageNumber: 1,
        title: 'Determining Fair Market Value',
        bullets: [
          'How automated online estimates differ from active MLS micro-market comps',
          'Understanding buyer search brackets and price cliff psychology',
          'Analyzing recent neighborhood pendings vs. expired listings'
        ]
      },
      {
        pageNumber: 2,
        title: 'High-ROI Home Prep & Staging',
        bullets: [
          'The 5 inexpensive updates that return 200%+ at settlement',
          'Professional lighting, decluttering, and curb appeal essentials',
          'Neutralizing spaces to help prospective buyers envision ownership'
        ]
      },
      {
        pageNumber: 3,
        title: 'Strategic Marketing & Maximum Exposure',
        bullets: [
          'High-definition architectural photography and cinematic walk-through video',
          'Targeted reverse prospecting across active local buyer agents',
          'Orchestrating high-urgency open house launch events'
        ]
      },
      {
        pageNumber: 4,
        title: 'Negotiating Offers & Escrow Management',
        bullets: [
          'Vetting buyer loan pre-approvals and proof of funds',
          'Protecting seller net proceeds through inspection and appraisal contingencies',
          'Navigating title, settlement, and closing timelines smoothly'
        ]
      }
    ]
  }
];


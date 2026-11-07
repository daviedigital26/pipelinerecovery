export interface OfferItem {
  id: string;
  slug: string;
  title: string;
  service: 'Realtor Pipeline Recovery™' | 'Price Drop Pro™';
  shortTag: string;
  badge: string;
  tagline: string;
  plainSummary: string;
  heroImage: string;
  deliverables: { title: string; desc: string; icon: string }[];
  problemSolved: string;
  processOverview: string;
  faq: { q: string; a: string }[];
}

export const offersList: OfferItem[] = [
  {
    id: 'pipeline-audit',
    slug: 'pipeline-recovery',
    title: 'Free Pipeline Recovery Audit',
    service: 'Realtor Pipeline Recovery™',
    shortTag: 'Step 01 · Diagnostic',
    badge: 'Offer 1 of 5 · Free Consultation',
    tagline: 'Pinpoint Where Active and Stalled Leads Are Falling Out of Your Pipeline',
    plainSummary: 'Good leads can go quiet. Before you spend more money on new portal leads, we review your current follow-up cadence, CRM stages, and inactive contacts to identify missed opportunities and outline a clear recovery plan.',
    heroImage: '/src/assets/images/pipeline_recovery_chat_1791411416175.jpg',
    problemSolved: 'Agents frequently lose track of leads after the initial inquiry because manual follow-up is inconsistent when showing homes, negotiating offers, and managing escrows.',
    processOverview: 'A rapid 30-point evaluation of speed-to-lead, touch frequency, multi-channel coverage (text, call, email), and dormant lead triage.',
    deliverables: [
      {
        title: 'Pipeline Leak Scorecard',
        desc: 'A clear diagnostic rating showing where your leads stall (Day 1, Day 14, or Day 60+).',
        icon: 'clipboard'
      },
      {
        title: 'Dormant Lead Opportunity Estimate',
        desc: 'Data-driven projection of recoverable commission volume sitting unworked in your CRM.',
        icon: 'trending'
      },
      {
        title: 'Recommended Follow-Up Cadence',
        desc: 'Specific message intervals and channels designed to re-engage quiet contacts without burning goodwill.',
        icon: 'calendar'
      },
      {
        title: 'Immediate Action Checklist',
        desc: 'The top 3 immediate outreach steps you can take today to generate quick replies.',
        icon: 'check'
      }
    ],
    faq: [
      {
        q: 'What is required from me for the Free Pipeline Recovery Audit?',
        a: 'Simply tell us your current database size, primary lead sources, and CRM platform. We do not require invasive system access to complete your initial diagnostic.'
      },
      {
        q: 'How long does it take to receive the audit results?',
        a: 'We prepare and review your diagnostic within 1 to 2 business days and walk through the findings in a focused 20-minute briefing.'
      }
    ]
  },
  {
    id: 'revenue-blueprint',
    slug: 'revenue-blueprint',
    title: '$1,750 Revenue Architecture Blueprint',
    service: 'Realtor Pipeline Recovery™',
    shortTag: 'Step 02 · Strategic Roadmap',
    badge: 'Offer 2 of 5 · Fixed Investment ($1,750)',
    tagline: 'The Complete Custom Architecture to Reactivate Your Entire Lead Database',
    plainSummary: 'A comprehensive, bespoke operational blueprint built specifically for your real estate business. We map your entire pipeline, engineer multi-touch re-engagement sequences, define CRM stage SLAs, and provide the exact scripts and playbooks your team needs to close dormant deals.',
    heroImage: '/src/assets/images/handoff_audit_report_1791411436902.jpg',
    problemSolved: 'Most real estate teams operate without documented follow-up standard operating procedures (SOPs). Leads sit unassigned or receive generic automated blasts that damage reply rates.',
    processOverview: 'We conduct a deep operational dive into your historical lead data, craft customized re-engagement scripts tailored to your local market, and design stage-by-stage CRM routing rules.',
    deliverables: [
      {
        title: 'Bespoke Re-Engagement Sequences',
        desc: 'Custom text, phone, and email sequences written specifically for your market, tone, and lead types.',
        icon: 'message'
      },
      {
        title: 'CRM Pipeline Stage Architecture',
        desc: 'Standardized stage definitions, transition triggers, and follow-up SLAs (Service Level Agreements) for your team.',
        icon: 'layers'
      },
      {
        title: 'Dormant Database Triage Protocol',
        desc: 'Segmentation rules to isolate high-intent past leads from unresponsive dead weight.',
        icon: 'filter'
      },
      {
        title: 'Execution & Accountability Playbook',
        desc: 'Turn-key daily and weekly checklists for solo agents or team ISA/agent handoffs.',
        icon: 'book'
      }
    ],
    faq: [
      {
        q: 'Is the $1,750 a one-time fee or a recurring subscription?',
        a: 'It is a one-time, fixed investment. You receive the complete custom blueprint, playbooks, and asset suite to keep and execute forever.'
      },
      {
        q: 'Can our internal team execute the blueprint ourselves?',
        a: 'Yes. The blueprint is designed to be fully actionable by your internal operations, an ISA, or yourself. If you prefer our team to implement it, we also offer separately quoted implementation.'
      }
    ]
  },
  {
    id: 'pipeline-implementation',
    slug: 'pipeline-implementation',
    title: 'Pipeline Recovery Implementation',
    service: 'Realtor Pipeline Recovery™',
    shortTag: 'Step 03 · Done-For-You Execution',
    badge: 'Offer 3 of 5 · Separately Quoted',
    tagline: 'Full Technical and Operational Rollout of Your Recovery Architecture',
    plainSummary: 'For top-producing agents and team leaders who want our specialists to handle the heavy lifting. We clean and segment your database, build and wire the automated sequences directly into your CRM, train your team, and manage the initial reactivation campaign.',
    heroImage: '/src/assets/images/realtor_social_content_1791193964551.jpg',
    problemSolved: 'Busy producers rarely have 20+ uninterrupted hours to configure CRM tags, rebuild automations, test webhook triggers, and segment thousands of historical contacts.',
    processOverview: 'Hands-on technical implementation across Follow Up Boss, kvCORE, Lofty, Brivity, or HubSpot, accompanied by live team training.',
    deliverables: [
      {
        title: 'Full CRM Data Cleanse & Tagging',
        desc: 'Deduplicating, segmenting, and structuring historical contacts into targeted outreach buckets.',
        icon: 'database'
      },
      {
        title: 'Direct Sequence Wiring & Testing',
        desc: 'Building all multi-touch text, email, and task cadences inside your existing CRM.',
        icon: 'settings'
      },
      {
        title: 'Live Launch Campaign Management',
        desc: 'Supervising the initial wave of re-engagement outreach to ensure smooth reply handling.',
        icon: 'zap'
      },
      {
        title: 'Team Training & SLA Review',
        desc: 'Live training session for agents and ISAs on handling revived leads and maintaining pipeline hygiene.',
        icon: 'users'
      }
    ],
    faq: [
      {
        q: 'How is the implementation scope quoted?',
        a: 'Quotes are based on database size, the complexity of your current CRM setup, and whether live agent/ISA coaching is included.'
      },
      {
        q: 'Do you require our CRM login credentials?',
        a: 'We work either through delegated administrative access or collaborative screen-share sessions according to your brokerage data policies.'
      }
    ]
  },
  {
    id: 'listing-relaunch-review',
    slug: 'listing-relaunch',
    title: 'Free Listing Relaunch Review',
    service: 'Price Drop Pro™',
    shortTag: 'Listing Diagnostic',
    badge: 'Offer 4 of 5 · Free Consultation',
    tagline: 'Strategic Audit for Stalled Listings That Have Lost In-Market Momentum',
    plainSummary: 'When an active listing sits with declining showings and no written offers, simply dropping the price on the MLS without a strategy rarely works. We analyze buyer agent feedback, showing drop-off curves, and comparable inventory to design a strategic relaunch roadmap.',
    heroImage: '/src/assets/images/listing_launchpad_sign_1791411426309.jpg',
    problemSolved: 'Listings become stigmatized when days-on-market climb. Sellers get anxious, blame their agent, and resist price reductions because there is no clear narrative or relaunch plan.',
    processOverview: 'Comprehensive evaluation of pricing positioning, showing feedback, online search drop-off, photo sequencing, and competitive micro-market inventory.',
    deliverables: [
      {
        title: 'Stalled Listing Diagnostic',
        desc: 'Detailed breakdown of why current buyers in this price band are passing on the property.',
        icon: 'search'
      },
      {
        title: 'Price Adjustment Positioning Matrix',
        desc: 'Clear analysis of new buyer search brackets unlocked by strategic price adjustments.',
        icon: 'trending'
      },
      {
        title: 'Seller Diplomacy Briefing Points',
        desc: 'Constructive, data-grounded talking points to help sellers make an informed pricing decision.',
        icon: 'fileText'
      },
      {
        title: 'Relaunch Campaign Recommendations',
        desc: 'Recommended media, reverse prospecting, and agent networking strategies to reset buyer perception.',
        icon: 'refresh'
      }
    ],
    faq: [
      {
        q: 'Can you review a luxury or unique property?',
        a: 'Yes. Price Drop Pro™ is particularly valuable for unique architectural, waterfront, and luxury properties where pricing bands are wide and buyer pools are specific.'
      },
      {
        q: 'Will my sellers know you reviewed the property?',
        a: 'No. The review is completely confidential and provided directly to you as the listing agent to strengthen your seller consultation.'
      }
    ]
  },
  {
    id: 'price-drop-work',
    slug: 'price-drop-pro',
    title: 'Price Drop Pro™ Implementation',
    service: 'Price Drop Pro™',
    shortTag: 'Listing Relaunch',
    badge: 'Offer 5 of 5 · Separately Quoted',
    tagline: 'End-to-End Repositioning & Buyer Relaunch Blitz for Stagnant Listings',
    plainSummary: 'Complete done-for-you execution of a property relaunch. We develop a new narrative hook, prepare fresh marketing assets, conduct reverse-prospecting agent outreach, and orchestrate a focused 14-day relaunch blitz that captures active buyers.',
    heroImage: '/src/assets/images/agent_happy_closing_1791193974108.jpg',
    problemSolved: 'Price drops without proactive marketing get lost in MLS noise. Price Drop Pro™ turns a price adjustment into a high-visibility property relaunch event.',
    processOverview: 'We coordinate narrative revision, agent-to-agent outreach, digital repositioning, and open house buyer activation.',
    deliverables: [
      {
        title: 'Repositioned Property Narrative',
        desc: 'Rewritten property copy, headline angles, and photo re-sequencing that highlight fresh value.',
        icon: 'edit'
      },
      {
        title: 'Reverse-Prospecting Agent Blitz',
        desc: 'Direct, professional outreach to local agents who have active buyers searching in the updated bracket.',
        icon: 'share'
      },
      {
        title: 'Buyer Re-Engagement Package',
        desc: 'Tailored outreach to every buyer who previously toured the home or saved it on portals.',
        icon: 'mail'
      },
      {
        title: 'Open House Relaunch Protocol',
        desc: 'Strategic open house repositioning designed to drive fresh traffic and generate urgency.',
        icon: 'home'
      }
    ],
    faq: [
      {
        q: 'How quickly can a Price Drop Pro™ campaign be launched?',
        a: 'Once the seller approves the strategic price adjustment, the complete relaunch assets and agent outreach blitz can deploy within 48 to 72 hours.'
      },
      {
        q: 'How is this work quoted?',
        a: 'Price Drop Pro™ engagements are quoted on a flat project basis per listing depending on property tier and marketing asset requirements.'
      }
    ]
  }
];

export const pipelineRecoverySlides = [
  {
    badge: 'Slide 01 of 06 · The Core Principle',
    title: 'The 80/20 Commission Reality',
    subtitle: 'Why buying more leads is the most expensive mistake in real estate',
    hook: 'Over 80% of buyers and sellers take 6 to 24 months to transact after their first inquiry. When you stop following up after 2 attempts, you hand your commission to the agent who stays in touch.',
    keyPoints: [
      'Average agent stops following up after only 1.8 attempts',
      'Over 70% of transactions close between months 6 and 18 of initial contact',
      'Leads in your existing CRM already know your name and market',
      'Recovering 2 quiet leads per year adds $18,000+ in pure net profit'
    ],
    highlight: 'Focus on pipeline recovery before increasing your lead acquisition budget.'
  },
  {
    badge: 'Slide 02 of 06 · The Follow-Up Breakdown',
    title: 'Why Standard Automated Follow-Up Fails',
    subtitle: 'Canned marketing broadcasts trigger consumer resistance',
    hook: 'Generic automated drip emails like "Just checking in on your real estate search!" feel robotic and invite immediate unsubscribes.',
    keyPoints: [
      'Consumers recognize automated CRM templates instantly',
      'Broad blast emails lack micro-market contextual relevance',
      'Zero clear low-friction call-to-action makes replying inconvenient',
      'Lack of polite takeaways makes the outreach feel pushy rather than consultative'
    ],
    highlight: 'Replace generic broadcasts with single-clause, conversational check-ins.'
  },
  {
    badge: 'Slide 03 of 06 · The Reactivation Sequence',
    title: 'The High-Trust Reactivation Architecture',
    subtitle: 'A 4-step multi-channel cadence that gets dormant buyers and sellers to reply',
    hook: 'Respect their time, provide micro-market data, and give them complete permission to say no.',
    keyPoints: [
      'Low-Friction Opener: Short, direct SMS asking an easy binary question',
      'Hyper-Local Reference: Cite a specific neighborhood comp or recent price shift',
      'Polite Takeaway: Remove sales pressure and invite honest timeframe updates',
      'Multi-Channel Safety: Combine conversational text, video note, and brief email'
    ],
    highlight: 'Achieves a 20%+ reactivation rate across historical CRM contacts.'
  },
  {
    badge: 'Slide 04 of 06 · CRM Stage Standards',
    title: 'Pipeline Stage Definitions & SLAs',
    subtitle: 'Operational rules that prevent leads from ever slipping away again',
    hook: 'A leaky pipeline is rarely a lead quality problem; it is almost always a pipeline handoff and SLA breakdown.',
    keyPoints: [
      'Speed-to-Lead SLA: Initial multi-touch sequence deployed within 5 minutes',
      'Active Cadence SLA: Minimum 6 touches across 14 days before staging',
      'Long-Term Nurture: Quarterly contextual equity and rate check-ins',
      'Dormant Triage: Systematic quarterly sweeps to resurrect quiet contacts'
    ],
    highlight: 'Transforms sporadic follow-up into a reliable revenue pipeline.'
  },
  {
    badge: 'Slide 05 of 06 · Stagnant Listings',
    title: 'Price Drop Pro™ Listing Relaunch',
    subtitle: 'How to reposition a stale property and create high buyer urgency',
    hook: 'Dropping a price on the MLS without a repositioning strategy simply broadcasts that a property is distressed.',
    keyPoints: [
      'Data-Backed Seller Diplomacy: Align on an adjustment that unlocks active search brackets',
      'Narrative & Photo Reset: Rewrite MLS remarks and re-order photography to highlight best features',
      'Reverse-Prospecting Agent Blitz: Reach out directly to agents with matching active buyers',
      'High-Urgency Relaunch Weekend: Coordinate open house activation to restart traffic'
    ],
    highlight: 'Re-ignites showing activity and creates buyer competition on stalled inventory.'
  },
  {
    badge: 'Slide 06 of 06 · The Complete Solution',
    title: 'Your 5-Tier Pipeline Architecture',
    subtitle: 'From free diagnostic audit to complete hands-off execution',
    hook: 'Start with our Free Pipeline Recovery Audit to diagnose hidden revenue in your CRM, or deploy the $1,750 Blueprint you own forever.',
    keyPoints: [
      'Free Pipeline Recovery Audit: 30-point evaluation of your active database',
      '$1,750 Revenue Architecture Blueprint: Complete custom sequences and CRM SOPs',
      'Separately Quoted Implementation: Hands-on database cleansing and technical wiring',
      'Free Listing Relaunch Review: Strategic pricing review for stalled properties',
      'Separately Quoted Price Drop Pro™: Full-service relaunch blitz and agent outreach'
    ],
    highlight: 'No monthly retainers. No contracts. Transparent, modular revenue architecture.'
  }
];

export const nineWordVariations = [
  {
    type: 'Ghosted Buyer',
    text: 'Hi [Name], are you still looking for a home in [City]?',
    why: 'Takes 3 seconds to read on a locked phone screen. Zero sales pressure. Over 60% reply rate.'
  },
  {
    type: 'Past Open House Visitor',
    text: 'Hi [Name], did you end up finding a home in [City], or are you still browsing?',
    why: 'Casual, polite, and allows them to reply with a simple one-word update without feeling trapped.'
  },
  {
    type: 'Old Portal Lead',
    text: 'Hi [Name], should I take you off my [City] home update list, or are you still keeping an eye out?',
    why: 'The takeaway technique triggers psychological reactance — leads who are still interested reply immediately.'
  },
  {
    type: 'Stalled Seller',
    text: 'Hi [Name], are you still considering selling your home in [City] this season?',
    why: 'Direct and respectful. Opens the door to discuss updated equity and neighborhood comps.'
  }
];


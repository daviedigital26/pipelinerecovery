export interface SampleContent {
  id: string;
  category: 'social' | 'guide' | 'script' | 'newsletter';
  title: string;
  badge: string;
  hook: string;
  bodyText: string;
  previewNote: string;
  ctaText: string;
  tags?: string[];
  pages?: { pageNumber: number; title: string; bullets: string[] }[];
}

export const defaultAgentInfo = {
  name: 'Sarah Jenkins',
  brokerage: 'Compass Real Estate',
  city: 'Austin, TX',
  phone: '(512) 555-0194',
  email: 'sarah@sellwithsarah.com',
};

export const sampleTemplates: SampleContent[] = [
  {
    id: 'social-1',
    category: 'social',
    title: '3 Weekend Fixes That Add $15,000 to Your Home',
    badge: 'Instagram & Facebook Post',
    hook: 'Want to sell your home this year? Start with these 3 easy fixes this Saturday morning.',
    bodyText: `Most homeowners think you need to spend $30,000 on a new kitchen before selling. You don't!

Here are 3 small things that make buyers fall in love fast:

1. Fresh front door paint (Black or deep navy blue stands out on Zillow).
2. Warm 2700K light bulbs everywhere (Bright, warm lighting makes rooms look 20% bigger).
3. Clear all bathroom and kitchen counters (Put everything in a plastic tote under the sink).

Thinking about what your home is worth in today's market? Send me a quick message and I will send you a free 2-page report with recent sales on your street!`,
    previewNote: 'Includes high-res square graphic, 3 carousel slides, and ready-to-copy caption.',
    ctaText: 'Copy Post & Caption',
    tags: ['#AustinRealEstate', '#HomeSellingTips', '#AustinHomes', '#RealtorLife']
  },
  {
    id: 'guide-1',
    category: 'guide',
    title: 'The Simple Home Seller Playbook',
    badge: '12-Page Printable & PDF Guide',
    hook: 'How to prepare, price, and sell your home for the highest price without getting stressed out.',
    bodyText: `A step-by-step booklet real estate agents can give away at open houses, coffee shops, or mail to homeowners in their farm area. It answers every question a seller has before they hire you.`,
    previewNote: 'Customized with your photo, phone number, and local city name on every page.',
    ctaText: 'Preview 12-Page Guide',
    pages: [
      {
        pageNumber: 1,
        title: 'Welcome & What to Expect',
        bullets: [
          'Why selling a home does not have to be scary or stressful',
          'The 4 big steps from day one to closing day',
          'How we protect your equity and negotiate for top dollar'
        ]
      },
      {
        pageNumber: 2,
        title: 'The 5-Day Prep Checklist',
        bullets: [
          'Decluttering room-by-room (keep, donate, toss)',
          'Small $100 fixes that bring $1,000s in return',
          'How professional photos bring 3x more showings'
        ]
      },
      {
        pageNumber: 3,
        title: 'Pricing Strategy Made Simple',
        bullets: [
          'Why overpricing hurts your sale price in the end',
          'How we find recent comparable sales on your block',
          'Setting a price that creates multiple offers'
        ]
      },
      {
        pageNumber: 4,
        title: 'Showings & Open House Rules',
        bullets: [
          'Keeping the house ready in 15 minutes or less',
          'What to do with pets during buyer tours',
          'How we filter out tire-kickers and verify pre-approvals'
        ]
      }
    ]
  },
  {
    id: 'script-1',
    category: 'script',
    title: 'Friendly Open House Follow-Up Text',
    badge: 'Word-for-Word Text Message',
    hook: 'Send this 2 hours after your open house. It feels like a polite friend, not a pushy salesman.',
    bodyText: `Hi [Buyer Name], it was so nice meeting you at 742 Evergreen Terrace today!

I know open houses can get crazy. Did you like the backyard and the open kitchen layout, or are you looking for something with a bigger garage?

I am touring 3 similar homes in [City] this Tuesday. Let me know if you want me to snap a quick video walk-through for you!

- [Agent Name], [Brokerage]`,
    previewNote: 'Agents report a 64% reply rate with this exact 4-line text.',
    ctaText: 'Copy Text Script'
  },
  {
    id: 'newsletter-1',
    category: 'newsletter',
    title: 'What Happened to Home Prices This Month?',
    badge: 'Weekly Email Newsletter',
    hook: 'A 2-minute market update your past clients and friends will actually read and thank you for.',
    bodyText: `Good morning!

Here is the quick truth about our local housing market in [City] this week:

- Homes are selling in an average of 24 days.
- Buyers are back touring homes as interest rates leveled out.
- Inventory is still tight, which means well-kept homes get great offers fast.

One quick question for you: Are you planning any home upgrades this spring?

If you ever want to know if a project (like a new deck or bathroom redo) actually adds value to your home before you spend the cash, shoot me an email. I'm always happy to give you an honest second opinion!

Warmly,
[Agent Name] · [Brokerage]`,
    previewNote: 'Formatted to copy directly into Mailchimp, Gmail, or your CRM.',
    ctaText: 'Copy Email Newsletter'
  }
];

export const comparisonPoints = [
  {
    feature: 'Time spent making content every week',
    others: '6 to 10 frustrating hours',
    reale: 'Under 10 minutes total'
  },
  {
    feature: 'Monthly cost',
    others: '$1,500 - $3,000 for a marketing agency',
    reale: 'Just $49/mo (less than lunch)'
  },
  {
    feature: 'Content quality',
    others: 'Boring stock photos with generic quotes',
    reale: 'Proven high-converting local posts and guides'
  },
  {
    feature: 'Lead generation tools',
    others: 'You have to write and design them yourself',
    reale: 'Complete ready-to-print buyer and seller books'
  },
  {
    feature: 'Contract commitments',
    others: '6-month or 12-month lock-in contracts',
    reale: 'Zero contracts. Cancel anytime with 1 click'
  }
];

export const realTestimonials = [
  {
    name: 'Marcus Vance',
    role: 'Top 5% Agent',
    brokerage: 'RE/MAX Premier',
    location: 'Dallas, TX',
    quote: 'I used to hate posting on social media because I did not know what to write. Now I open Reale on Monday, copy 5 posts, and put my name on them. Last month an old high school friend saw my post and called me to sell their $650k home!',
    result: '2 New Listings in Month 1',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Elena Rostova',
    role: 'Solo Real Estate Agent',
    brokerage: 'Compass',
    location: 'Miami, FL',
    quote: 'The 12-page Home Seller Guide is worth 100 times the price. I printed 20 copies at Staples and brought them to an open house. Three different couples asked me to come over and do a home valuation that same week.',
    result: '7 Listing Appointments',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'David Miller',
    role: 'Team Lead',
    brokerage: 'Keller Williams',
    location: 'Denver, CO',
    quote: 'I used to pay a marketing assistant $2,000 a month to create mediocre flyers. Reale does it for $49 and the content actually sounds like a real human. My agents love the follow-up text scripts.',
    result: '$24,000 Saved Annually',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  }
];

export const faqs = [
  {
    q: 'Do I need any graphic design or computer skills?',
    a: 'None at all! If you know how to copy and paste text on your phone or computer, you can use Reale. Everything is written and designed for you. You just enter your name and phone number.'
  },
  {
    q: 'Will my posts look just like every other realtor in town?',
    a: 'No. Every week we give you multiple choices for photos, headlines, and captions. When you add your local city, your headshot, and your brokerage, your content looks completely unique to your business.'
  },
  {
    q: 'How does the 14-day free trial work?',
    a: 'You get full instant access for 14 days without paying a single dollar. You can download guides, copy social posts, and use all the scripts right now. If you do not love it, you can cancel in one click.'
  },
  {
    q: 'What if I want to cancel after my trial?',
    a: 'There are no contracts or long commitments. You can cancel with a single click inside your settings. No phone calls, no emails, no guilt trips.'
  },
  {
    q: 'Can I put my own headshot, logo, and brokerage colors on the guides?',
    a: 'Yes! Every guide and template comes in easy-to-use formats including direct 1-click Canva links and fill-in-the-blank PDFs so you can add your logo and photo in seconds.'
  },
  {
    q: 'Does this help with both buyers and sellers?',
    a: 'Yes. We give you seller guides to win listings, buyer roadmaps for open houses, weekly neighborhood email updates, and proven text scripts for cold leads.'
  }
];

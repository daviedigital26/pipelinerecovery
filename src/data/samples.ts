export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: 'Is this a new CRM?',
    a: 'No. We start with the CRM and tools you already use. If a new tool is needed, we explain why and list the cost before you agree.'
  },
  {
    q: 'What is the Free Pipeline Recovery Audit?',
    a: 'It is a brief review of your answers and one follow-up gap. You get up to three issues to check, one lead group to review, and a next step. It does not include full CRM cleanup or a campaign.'
  },
  {
    q: 'What does the Blueprint cost?',
    a: 'The Revenue Architecture Blueprint is $1,750. You get a deeper review, a written plan, and a walkthrough. Setup and launch work use a separate quote.'
  },
  {
    q: 'Will you send messages to my whole list?',
    a: 'We start with an agreed group. We check contact choices and past notes. You approve the messages and who handles replies before launch.'
  },
  {
    q: 'Can you promise meetings or sales?',
    a: 'No. Results depend on your records, team, follow-up, and market. We track useful replies and next steps so you can see what changed.'
  },
  {
    q: 'How much does Price Drop Pro cost?',
    a: 'The Listing Relaunch Review is free. Paid work uses a custom quote based on the listing, assets, channels, and follow-up needed.'
  },
  {
    q: 'Who decides the listing price?',
    a: 'You and your client do. We help plan the message and follow-up. We do not change the price or MLS facts on our own.'
  },
  {
    q: 'Do I need a large database?',
    a: 'You need a real follow-up gap and leads to work. About 500 contacts or 30 new leads a month is a useful guide. A smaller list may still fit. A listing review can start with one active listing.'
  },
  {
    q: 'Do I have to buy after a free review?',
    a: 'No. The review helps you choose a next step. Paid work starts only after you agree to the scope and fee.'
  },
  {
    q: 'How long does paid work take?',
    a: 'We set the schedule after we agree on the scope, access, and tools. The written agreement states when the work starts and what is due.'
  },
  {
    q: 'Do I need to upload my contacts to request an audit?',
    a: 'No. Use the form to share your CRM name and rough counts. We arrange secure access later only if it is needed for agreed work.'
  }
];

export const defaultAgentInfo = {
  name: 'Marcus Vance',
  brokerage: 'Compass Real Estate',
  city: 'Austin, TX',
  phone: '(512) 555-0194',
  email: 'marcus@reale.example.com',
};

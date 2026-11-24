// All English copy. Keep the same structure as fr.ts.
import type { Dict } from './fr';

export const en: Dict = {
  lang: 'en',
  meta: {
    title: 'EVIMO — Every intervention fixes the fault the first time',
    description:
      'EVIMO detects charging station faults, including the ones nobody sees, diagnoses them from OCPP logs and manufacturer documentation, and sends the technician with the right part and the right procedure.',
  },
  nav: {
    product: 'Product',
    who: 'Who it is for',
    security: 'Security',
    careers: 'Careers',
    cta: 'Free audit',
    ctaLong: 'Request the free audit',
    menu: 'Menu',
    switchTo: 'FR',
    switchLabel: 'Version française',
  },
  routes: {
    home: '/en/',
    audit: '/en/free-audit/',
    careers: '/en/careers/',
    legal: '/mentions-legales/',
    privacy: '/confidentialite/',
  },
  hero: {
    eyebrow: 'AI-assisted maintenance for EV charging infrastructure',
    title: 'Every intervention fixes the fault the first time.',
    lead:
      'EVIMO detects the faults on your charging stations, including the ones nobody sees, diagnoses them from OCPP logs and manufacturer documentation, then sends the technician with the right part and the right procedure.',
    primary: 'Audit my maintenance history',
    secondary: 'See how it works',
    note: 'Free audit, run on your own maintenance data.',
  },
  incident: {
    head: 'Incident',
    illustrative: 'Illustrative',
    id: 'INC-2041',
    title: 'Connector 2 will not unlock',
    meta: 'Vitry — Station car park · AC 22 kW · 3 days ago',
    status: 'Active',
    detected: 'Detected by EVIMO',
    notReported: 'No ticket opened',
    signals: 'Signals',
    signalsValue: '14 correlated OCPP messages',
    cause: 'Probable cause',
    causeValue: 'The cable lock actuator no longer responds.',
    confidence: 'Confidence',
    plan: 'Before departure',
    planItems: [
      'Remote unlock attempted: failed',
      'Part: lock actuator, manufacturer reference',
      'Procedure: manufacturer manual, lock replacement',
    ],
  },
  proof: {
    label: 'Deployed with',
    names: ['SIGEIF', 'SDEM50', 'ANYOS'],
    note: 'Plugs into your existing CSMS. Does not replace it.',
  },
  problem: {
    num: '01',
    title: 'The problem is not only bad repairs. It is not seeing the fault.',
    lead:
      'To fix a fault the first time, you first need to know a station is down, and why. Today, that is where it breaks.',
    items: [
      {
        icon: 'eye',
        title: 'Faults nobody sees',
        text:
          'A station offline for a week, a fault that comes back every Tuesday, a session that stops too early: nothing surfaces until a driver complains.',
      },
      {
        icon: 'truck',
        title: 'Diagnosis done on site',
        text:
          'The technician discovers the fault on arrival, without the right part. They leave, order it, come back. The station stays down in the meantime.',
      },
      {
        icon: 'scale',
        title: 'Contracts that are hard to audit',
        text:
          'Public owners pay for maintenance but cannot check, station by station, response times, ignored faults and the quality of each intervention.',
      },
    ],
    quote:
      '“Our operator only has time for tickets and phone calls. Nobody reads the weak signals — so I do it myself, by hand.”',
    quoteBy: 'Public energy syndicate, 340 charge points. Customer discovery interview, 2026.',
  },
  how: {
    num: '02',
    title: 'Detect, diagnose, fix it the first time.',
    lead: 'Three steps, in that order. You cannot get right an intervention that was never triggered.',
    steps: [
      {
        n: '1',
        kicker: 'Detect',
        title: 'Every message from every station is read, continuously.',
        text:
          'EVIMO reads the full OCPP stream of your network, weak signals included: intermittent faults, repeated connection losses, failing sessions. Related messages are grouped: forty alerts become one incident.',
      },
      {
        n: '2',
        kicker: 'Diagnose',
        title: 'A probable cause, with a confidence level.',
        text:
          'For each incident, EVIMO combines the station history, faults already resolved and manufacturer documentation (fault codes, LED states, OCPP behaviour). The evidence stays attached, so you always know why a diagnosis was made.',
      },
      {
        n: '3',
        kicker: 'Fix it the first time',
        title: 'The technician leaves knowing what to do.',
        text:
          'What can be fixed remotely is fixed remotely: reset, unlock, firmware update, through your CSMS. The rest goes to the field with the diagnosis, the part and the procedure. Fewer wasted trips, fewer repeat visits.',
      },
    ],
    funnel: [
      { label: 'OCPP messages read', value: 'all of them', pct: 100 },
      { label: 'Real incidents, grouped', value: '1 per fault', pct: 34 },
      { label: 'Fixed remotely', value: 'no truck roll', pct: 16 },
      { label: 'Field interventions', value: 'with diagnosis', pct: 9 },
    ],
    funnelNote: 'Principle diagram, not a measurement.',
  },
  product: {
    num: '03',
    title: 'Two building blocks. Nothing to migrate.',
    lead: 'EVIMO sits alongside your CSMS. Your stations, your operator and your drivers see no difference.',
    proxy: {
      tag: 'Entry point',
      title: 'OCPP proxy',
      text:
        'Placed between your stations and your CSMS, it copies the OCPP stream without changing it. That is all it takes to start.',
      items: [
        'Transparent to stations and CSMS',
        'Hosted by EVIMO, or on your premises and operated by EVIMO',
        'History kept, even if you change operator',
      ],
    },
    one: {
      tag: 'Platform',
      title: 'EVIMO One',
      text:
        'The maintenance tool for your network: the queue of incidents to handle, their diagnosis and their follow-up until the repair.',
      items: [
        'Prioritised incidents, with probable cause and confidence',
        'Remote actions and work orders',
        'Manufacturer knowledge base and past interventions',
        'Uptime, response times and contract compliance, station by station',
      ],
    },
    foot: [
      'Does not replace your CSMS',
      'Does not touch billing',
      'Subscription per charge point per month, on quotation',
    ],
  },
  who: {
    num: '04',
    title: 'For those accountable for charging station uptime.',
    items: [
      {
        primary: true,
        title: 'Public network owners',
        text: 'Stay in control of the network you delegated.',
        points: [
          'See the faults your operator does not see',
          'Measure real uptime and response times, station by station',
          'Check contract compliance, with evidence',
          'Keep the maintenance history when the operator changes',
        ],
      },
      {
        title: 'Charge point operators (CPO)',
        text: 'A more available network, with fewer truck rolls.',
        points: [
          'Priorities set by impact and SLA, not by call order',
          'Fewer visits that find nothing to fix',
          'Uptime figures you can report (AFIR)',
        ],
      },
      {
        title: 'O&M contractors',
        text: 'The right diagnosis and the right part before departure.',
        points: [
          'Several clients and CSMS, one queue',
          'Fewer repeat visits, higher first-time fix rate',
          'Client reports with no re-keying',
        ],
      },
    ],
  },
  security: {
    num: '05',
    title: 'Built to pass your IT review.',
    items: [
      { title: 'EU hosting', text: 'Your station data stays in the European Union.' },
      { title: 'Per-client segregation', text: 'Each network is isolated from the others.' },
      { title: 'Encryption', text: 'In transit and at rest.' },
      { title: 'Read-only by default', text: 'The proxy copies the OCPP stream without changing it.' },
      { title: 'Actions under your control', text: 'Remote commands run through your CSMS, under your rules.' },
      { title: 'Audit trail', text: 'Every automated action is logged.' },
    ],
  },
  cta: {
    title: 'How many faults are your stations hiding?',
    text: 'Share the maintenance history of your network. We give you back, free of charge, what your current tools do not show.',
    button: 'Request the free audit',
    items: [
      'Faults never detected, or detected too late',
      'Repeat interventions for the same fault',
      'Real downtime, station by station',
    ],
  },
  audit: {
    title: 'Free audit of your maintenance history',
    lead:
      'In a few weeks, on your own data, we measure what your network loses to unseen faults and wasted trips.',
    whatTitle: 'What you get',
    what: [
      'The faults never detected, or detected too late, with their duration',
      'The faults that needed several interventions, and why',
      'Real downtime, station by station, compared with reported figures',
      'A walkthrough of the results with your team',
    ],
    needTitle: 'What we need',
    need: [
      'An export from your CSMS (OCPP logs, statuses, sessions) over a few months',
      'Your tickets and work orders over the same period',
      'Your station list (models, sites)',
    ],
    termsTitle: 'Terms',
    terms: [
      'Free, with no commitment',
      'Covered by an analysis agreement: your data is used for the audit only',
      'Data deleted at the end of the audit, at the latest 3 months after receipt',
    ],
    formTitle: 'Request the audit',
    formText:
      'Tell us your organisation, the number of charge points and your current operator. We get back to you within 2 business days.',
    formButton: 'Email us to request the audit',
    mailSubject: 'Free audit request',
    mailBody:
      'Hello,\n\nWe would like a free audit of our maintenance history.\n\nOrganisation:\nNumber of charge points:\nCurrent operator / O&M contractor:\nCSMS used:\nContact:\n',
  },
  careers: {
    title: 'Careers',
    lead:
      'EVIMO is a small team of engineers, data scientists and developers across Paris (Station F) and Tunis. We build the tool that keeps charging stations working.',
    valuesTitle: 'How we work',
    values: [
      { title: 'Field first', text: 'We start from real stations, real logs and real technicians, not from a theoretical model.' },
      { title: 'Small team, real impact', text: 'What you build reaches our customers within weeks.' },
      { title: 'Paris and Tunis', text: 'One team on two sites, working on the same product.' },
    ],
    openTitle: 'Open positions',
    none: 'No open positions right now.',
    spontaneous: 'Nothing that fits? Write to us at',
    see: 'View the offer',
    back: 'All positions',
    apply: 'Apply',
    applyIntro: 'Send your CV by email, with exactly this subject line:',
    applyNote: 'Applications without this subject cannot be processed.',
    applyButton: 'Apply by email',
    applyTally: 'Apply online',
    facts: { location: 'Location', type: 'Contract', start: 'Start', duration: 'Duration', paid: 'Pay' },
    inFrench: 'Offer in French',
  },
  footer: {
    tagline: 'AI-assisted maintenance for EV charging infrastructure.',
    product: 'Product',
    company: 'Company',
    legal: 'Legal',
    contact: 'Contact',
    legalNotice: 'Legal notice (FR)',
    privacy: 'Privacy (FR)',
    rights: 'EVIMO SAS',
    incubated: 'Incubated at Station F',
  },
  notFound: {
    title: 'Page not found',
    text: 'This page does not exist or has moved.',
    back: 'Back to home',
  },
};

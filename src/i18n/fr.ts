// Tous les textes du site en français.
// Pour modifier une phrase : la changer ici, puis faire la même chose dans en.ts.

export const fr = {
  lang: 'fr',
  meta: {
    title: 'EVIMO — Chaque intervention règle la panne du premier coup',
    description:
      "EVIMO détecte les pannes des bornes de recharge, même celles que personne ne voit, les diagnostique à partir des logs OCPP et de la documentation constructeur, et envoie le technicien avec la bonne pièce et la bonne procédure.",
  },
  nav: {
    product: 'Produit',
    who: 'Pour qui',
    security: 'Sécurité',
    careers: 'Nous rejoindre',
    cta: 'Audit gratuit',
    ctaLong: "Demander l'audit gratuit",
    menu: 'Menu',
    switchTo: 'EN',
    switchLabel: 'English version',
  },
  routes: {
    home: '/',
    audit: '/audit-gratuit/',
    careers: '/nous-rejoindre/',
    legal: '/mentions-legales/',
    privacy: '/confidentialite/',
  },
  hero: {
    eyebrow: 'Maintenance des bornes de recharge, assistée par IA',
    title: 'Chaque intervention règle la panne du premier coup.',
    lead:
      "Sur tout votre territoire, EVIMO repère les bornes en panne que personne ne signale, trouve la cause et envoie le technicien avec la bonne pièce.",
    primary: 'Faire auditer mon historique',
    secondary: 'Comment ça marche',
    note: 'Audit gratuit, sur vos propres données de maintenance.',
  },
  incident: {
    head: 'Incident',
    illustrative: 'Illustratif',
    id: 'INC-2041',
    title: 'Le connecteur 2 ne se déverrouille plus',
    meta: 'Vitry — Parking Gare · borne AC 22 kW · il y a 3 jours',
    status: 'Actif',
    detected: 'Détecté par EVIMO',
    notReported: 'Aucun ticket ouvert',
    signals: 'Signaux',
    signalsValue: '14 messages OCPP corrélés',
    cause: 'Cause probable',
    causeValue: "L'actionneur de verrouillage du câble ne répond plus.",
    confidence: 'Confiance',
    plan: 'Avant le départ',
    planItems: [
      "Déverrouillage à distance tenté : échec",
      'Pièce : actionneur de verrouillage, réf. constructeur',
      'Procédure : manuel constructeur, remplacement du verrou',
    ],
  },
  proof: {
    label: 'Déployé avec',
    names: ['SIGEIF', 'SDEM50', 'ANYOS'],
    note: "Se branche sur votre supervision existante. Ne la remplace pas.",
  },
  problem: {
    num: '01',
    title: "Le problème n'est pas seulement de mal réparer. C'est de ne pas voir.",
    lead:
      "Pour réparer du premier coup, il faut d'abord savoir qu'une borne est en panne, et pourquoi. Aujourd'hui, c'est là que tout se joue.",
    items: [
      {
        icon: 'eye',
        stat: '6 jours',
        title: 'Des pannes que personne ne voit',
        text:
          "Une borne hors ligne pendant une semaine, un défaut qui revient chaque mardi, une charge qui s'arrête trop tôt : rien ne remonte tant qu'un usager ne se plaint pas.",
      },
      {
        icon: 'truck',
        stat: '2 trajets',
        title: 'Un diagnostic fait sur place',
        text:
          "Le technicien découvre la panne en arrivant, sans la bonne pièce. Il repart, commande, revient. La borne reste indisponible pendant ce temps.",
      },
      {
        icon: 'scale',
        stat: '0 preuve',
        title: 'Un contrat difficile à contrôler',
        text:
          "Le syndicat paie la maintenance, mais ne peut pas vérifier borne par borne les délais, les pannes laissées de côté et la qualité des interventions.",
      },
    ],
    quote:
      "« Notre opérateur n'a le temps de traiter que les tickets et les appels. Personne ne lit les signaux faibles, alors je le fais moi-même, à la main. »",
    quoteBy: "Syndicat d'énergie, 340 points de charge · entretien de découverte, 2026",
  },
  how: {
    num: '02',
    title: "Le trajet d'une panne, avec EVIMO.",
    lead:
      "Trois étapes, dans cet ordre. On ne peut pas réussir une intervention qui n'a jamais été déclenchée.",
    steps: [
      {
        n: '1',
        kicker: 'Détecter',
        title: 'Chaque message de chaque borne est lu, en continu.',
        text:
          "EVIMO lit tout le flux OCPP de votre réseau, y compris les signaux faibles : défauts intermittents, pertes de communication répétées, sessions qui échouent. Les messages liés sont regroupés : quarante alertes deviennent un seul incident.",
      },
      {
        n: '2',
        kicker: 'Diagnostiquer',
        title: 'Une cause probable, avec son niveau de confiance.',
        text:
          "Pour chaque incident, EVIMO croise l'historique de la borne, les pannes déjà résolues et la documentation des constructeurs (codes défaut, états des voyants, comportement OCPP). Les preuves restent attachées : on sait toujours pourquoi un diagnostic a été posé.",
      },
      {
        n: '3',
        kicker: 'Réparer du premier coup',
        title: "Le technicien part en sachant quoi faire.",
        text:
          "Ce qui se règle à distance se règle à distance : redémarrage, déverrouillage, mise à jour, via votre supervision. Le reste part en intervention avec le diagnostic, la pièce et la procédure. Moins de déplacements pour rien, moins de retours sur site.",
      },
    ],
    funnel: [
      { label: 'Messages OCPP lus', value: 'tous', pct: 100 },
      { label: 'Incidents réels, regroupés', value: '1 par panne', pct: 34 },
      { label: 'Réglés à distance', value: 'sans déplacement', pct: 16 },
      { label: 'Interventions sur site', value: 'avec diagnostic', pct: 9 },
    ],
    funnelNote: 'Schéma de principe, pas une mesure.',
  },
  stream: {
    head: 'Flux de la supervision — brut',
    headMeta: '1 204 points de charge',
    correlate: 'Corréler',
    incidentHead: 'Incident',
    id: 'INC-4471',
    priority: 'Priorité 1',
    title: 'Site hors ligne — Aulnay Nord',
    rows: [
      ['Périmètre', '40 connecteurs, 12 bornes'],
      ['Signaux regroupés', '218 en 90 secondes'],
      ['Cause probable', 'Lien réseau coupé'],
      ['Action recommandée', 'Escalade — intervention terrain'],
    ],
    confidence: 'Confiance',
    note: "Illustratif. Les preuves restent attachées à l'incident : un technicien peut toujours vérifier pourquoi il a été ouvert.",
  },
  sim: {
    num: '03',
    title: 'Ce que vous économisez, avec vos chiffres.',
    lead:
      "Réglez la taille de votre parc et votre taux de panne. Le modèle est un calcul, pas une promesse : chaque hypothèse est à vous, et nous la vérifions sur vos données pendant l'audit.",
    inputs: {
      fleet: 'Points de charge',
      rate: 'Pannes par point de charge et par mois',
      remote: 'Pannes réglables sans déplacement',
      cost: "Coût d'un déplacement",
    },
    outTitle: 'Chaque mois, sur votre parc',
    out: {
      signals: ['Messages OCPP lus', 'Personne ne les lit aujourd\'hui.'],
      alerts: ['Alertes avant regroupement', 'Ce que montrerait un mur de supervision.'],
      incidents: ['Incidents dans la file', 'Un par panne réelle, classés par priorité.'],
      human: ['À traiter par une personne', 'Le reste est réglé à distance.'],
    },
    absorbedTitle: 'Sur 100 alertes',
    absorbed: 'absorbées par le regroupement et la résolution à distance',
    escalated: 'remontées à une personne',
    avoided: 'Déplacements évités par mois',
    saved: 'Économie par mois',
    savedYear: 'par an',
    model:
      'Hypothèses : 120 messages OCPP par point de charge et par jour, 6 alertes par panne réelle avant regroupement. Chiffres modifiables, vérifiés sur vos données pendant l\'audit.',
    cta: 'Vérifier sur mes données',
  },
  map: {
    caption: 'Réseau — 1 204 points de charge',
    fault: 'Panne non signalée',
    detected: 'Détectée, en diagnostic',
    ok: 'En service',
    cardStatus: 'Hors ligne depuis 6 jours · aucun ticket',
    cardTitle: 'Cergy Sud — la borne 09 ne charge plus',
    detectedBy: 'Détecté par EVIMO',
    label: 'Carte illustrative du réseau',
  },
  partners: {
    title: 'Déployé avec',
    note: 'Se branche sur votre supervision existante. Ne la remplace pas.',
    roles: {
      SIGEIF: "Syndicat d'énergie, Île-de-France",
      SDEM50: "Syndicat d'énergies de la Manche",
      ANYOS: 'Fabricant de bornes, Toulouse',
    },
  },
  flux: {
    title: 'Deux cent dix-huit messages. Un seul incident.',
    lead: "EVIMO lit le flux OCPP brut de votre supervision, regroupe ce qui va ensemble et ne garde que ce qui demande une décision.",
    action: 'Action',
    actionValue: 'Escalade terrain',
  },
  route: {
    steps: [
      { title: 'Détecter', text: 'Chaque message de chaque borne est lu, en continu. Quarante alertes deviennent un seul incident.' },
      { title: 'Diagnostiquer', text: 'Historique de la borne, pannes déjà résolues, documentation constructeur : une cause probable, avec sa confiance.' },
      { title: 'Réparer du premier coup', text: "À distance quand c'est possible. Sinon, le technicien part avec le diagnostic, la pièce et la procédure." },
    ],
  },
  simOut: {
    signals: 'Messages lus par mois',
    incidents: 'Incidents réels',
    remote: 'Réglés à distance',
    absorbed: 'Alertes absorbées',
    year: 'Économie estimée par an',
  },
  product: {
    num: '04',
    title: 'Deux briques. Rien à migrer.',
    lead:
      "EVIMO se place à côté de votre supervision. Vos bornes, votre exploitant et vos usagers ne voient aucune différence.",
    proxy: {
      tag: "Point d'entrée",
      title: 'Proxy OCPP',
      text:
        "Placé entre vos bornes et votre supervision, il recopie le flux OCPP sans le modifier. C'est tout ce qu'il faut pour commencer.",
      items: [
        "Transparent pour les bornes et la supervision",
        'Hébergé par EVIMO, ou chez vous et opéré par EVIMO',
        "Historique conservé, même si vous changez d'exploitant",
      ],
    },
    one: {
      tag: 'Plateforme',
      title: 'EVIMO One',
      text:
        "L'outil de maintenance de votre réseau : la file des incidents à traiter, leur diagnostic et leur suivi jusqu'à la réparation.",
      items: [
        'Incidents priorisés, avec cause probable et confiance',
        'Actions à distance et ordres d\'intervention',
        'Base de connaissances constructeurs et interventions passées',
        'Disponibilité, délais et respect du contrat, borne par borne',
      ],
    },
    foot: [
      'Ne remplace pas votre supervision',
      'Ne touche pas à la facturation',
      'Abonnement par point de charge et par mois, sur devis',
    ],
  },
  who: {
    num: '05',
    title: 'Pour ceux qui répondent de la disponibilité des bornes.',
    items: [
      {
        primary: true,
        title: "Syndicats d'énergie",
        text: 'Gardez la main sur le réseau que vous avez confié.',
        points: [
          'Voir les pannes que votre exploitant ne voit pas',
          'Mesurer, borne par borne, disponibilité réelle et délais',
          "Vérifier le respect du contrat, avec des preuves",
          "Garder l'historique de maintenance si l'exploitant change",
        ],
      },
      {
        title: 'Opérateurs de bornes (CPO)',
        text: 'Un réseau plus disponible, avec moins de déplacements.',
        points: [
          'Priorités fixées par l\'impact et le SLA, pas par l\'ordre des appels',
          'Moins de visites qui ne trouvent rien à réparer',
          'Des chiffres de disponibilité présentables (AFIR)',
        ],
      },
      {
        title: 'Exploitants-mainteneurs',
        text: 'Le bon diagnostic et la bonne pièce avant le départ.',
        points: [
          'Plusieurs clients et supervisions, une seule file',
          'Moins de retours sur site, meilleur taux de réparation',
          'Des rapports clients sans ressaisie',
        ],
      },
    ],
  },
  security: {
    num: '06',
    title: 'Conçu pour être validé par votre DSI.',
    items: [
      { title: 'Hébergement en Europe', text: 'Les données de vos bornes restent dans l\'Union européenne.' },
      { title: 'Données séparées par client', text: 'Chaque réseau est isolé des autres.' },
      { title: 'Chiffrement', text: 'En transit et au repos.' },
      { title: 'Lecture seule par défaut', text: 'Le proxy recopie le flux OCPP sans le modifier.' },
      { title: 'Actions sous votre contrôle', text: 'Les commandes à distance passent par votre supervision, avec vos règles.' },
      { title: 'Traçabilité', text: 'Chaque action automatique est journalisée.' },
    ],
  },
  cta: {
    title: 'Combien de pannes vos bornes cachent-elles ?',
    text:
      "Confiez-nous l'historique de maintenance de votre réseau. Nous vous rendons gratuitement ce que vos outils actuels ne montrent pas.",
    button: "Demander l'audit gratuit",
    items: [
      'Les pannes jamais détectées, ou détectées trop tard',
      'Les interventions répétées pour une même panne',
      "L'indisponibilité réelle, borne par borne",
    ],
  },
  audit: {
    title: "Audit gratuit de votre historique de maintenance",
    lead:
      "En quelques semaines, sur vos propres données, nous mesurons ce que votre réseau perd en pannes non vues et en déplacements inutiles.",
    whatTitle: 'Ce que vous obtenez',
    what: [
      'La liste des pannes jamais détectées, ou détectées trop tard, avec leur durée',
      'Les pannes qui ont demandé plusieurs interventions, et pourquoi',
      "L'indisponibilité réelle, borne par borne, comparée à celle déclarée",
      'Une restitution commentée avec votre équipe',
    ],
    needTitle: 'Ce dont nous avons besoin',
    need: [
      'Un export de votre supervision (logs OCPP, statuts, sessions) sur quelques mois',
      "Vos tickets et ordres d'intervention sur la même période",
      'La liste de vos bornes (modèles, sites)',
    ],
    termsTitle: 'Conditions',
    terms: [
      'Gratuit et sans engagement',
      "Encadré par un contrat d'analyse : vos données ne servent qu'à l'audit",
      'Données supprimées à la fin de l\'audit, au plus tard 3 mois après réception',
    ],
    formTitle: "Demander l'audit",
    formText:
      "Indiquez-nous votre organisation, le nombre de points de charge et votre exploitant actuel. Nous revenons vers vous sous 48 heures ouvrées.",
    formButton: 'Écrire pour demander l\'audit',
    mailSubject: "Demande d'audit gratuit",
    mailBody:
      "Bonjour,\n\nNous souhaitons un audit gratuit de notre historique de maintenance.\n\nOrganisation :\nNombre de points de charge :\nExploitant / mainteneur actuel :\nSupervision utilisée :\nContact :\n",
  },
  careers: {
    title: 'Nous rejoindre',
    lead:
      "EVIMO est une petite équipe d'ingénieurs, de data scientists et de développeurs, entre Paris (Station F) et Tunis. Nous construisons l'outil qui fait marcher les bornes de recharge.",
    valuesTitle: 'Comment on travaille',
    values: [
      { title: 'Le terrain d\'abord', text: 'On part des vraies bornes, des vrais logs et des vrais techniciens, pas d\'un modèle théorique.' },
      { title: 'Petite équipe, vrai impact', text: 'Ce que vous construisez part chez nos clients en quelques semaines.' },
      { title: 'Paris et Tunis', text: 'Une seule équipe sur deux sites, qui travaille dans la même langue et sur le même produit.' },
    ],
    openTitle: 'Offres ouvertes',
    none: "Aucune offre ouverte pour le moment.",
    spontaneous: 'Aucune offre ne vous correspond ? Envoyez-nous une candidature spontanée.',
    see: "Voir l'offre",
    back: 'Toutes les offres',
    apply: 'Postuler',
    applyIntro: 'Envoyez votre CV par mail, avec exactement cet objet :',
    applyNote: 'Les candidatures sans cet objet ne pourront pas être traitées.',
    applyButton: 'Postuler par mail',
    applyTally: 'Postuler en ligne',
    facts: { location: 'Lieu', type: 'Contrat', start: 'Début', duration: 'Durée', paid: 'Rémunération' },
    inFrench: '',
  },
  footer: {
    tagline: 'La maintenance des bornes de recharge, assistée par IA.',
    product: 'Produit',
    company: 'Entreprise',
    legal: 'Légal',
    contact: 'Contact',
    legalNotice: 'Mentions légales',
    privacy: 'Confidentialité',
    rights: 'EVIMO SAS',
    incubated: 'Incubé à Station F',
  },
  notFound: {
    title: 'Page introuvable',
    text: "Cette page n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },
};

export type Dict = typeof fr;

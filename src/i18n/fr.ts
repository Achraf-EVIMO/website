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
      "EVIMO détecte les pannes de vos bornes, même celles que personne ne voit, les diagnostique à partir des logs OCPP et de la documentation constructeur, puis envoie le technicien avec la bonne pièce et la bonne procédure.",
    primary: 'Faire auditer mon historique',
    secondary: 'Voir comment ça marche',
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
        title: 'Des pannes que personne ne voit',
        text:
          "Une borne hors ligne pendant une semaine, un défaut qui revient chaque mardi, une charge qui s'arrête trop tôt : rien ne remonte tant qu'un usager ne se plaint pas.",
      },
      {
        icon: 'truck',
        title: 'Un diagnostic fait sur place',
        text:
          "Le technicien découvre la panne en arrivant, sans la bonne pièce. Il repart, commande, revient. La borne reste indisponible pendant ce temps.",
      },
      {
        icon: 'scale',
        title: 'Un contrat difficile à contrôler',
        text:
          "Le syndicat paie la maintenance, mais ne peut pas vérifier borne par borne les délais, les pannes laissées de côté et la qualité des interventions.",
      },
    ],
    quote:
      "« Notre opérateur n'a le temps de traiter que les tickets et les appels. Personne ne lit les signaux faibles, alors je le fais moi-même, à la main. »",
    quoteBy: "Syndicat d'énergie, 340 points de charge. Entretien de découverte, 2026.",
  },
  how: {
    num: '02',
    title: 'Détecter, diagnostiquer, réparer du premier coup.',
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
  product: {
    num: '03',
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
    num: '04',
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
    num: '05',
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
    spontaneous: 'Aucune offre ne vous correspond ? Écrivez-nous à',
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

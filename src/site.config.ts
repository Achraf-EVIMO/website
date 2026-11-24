// Réglages du site, tous au même endroit.
// Laisser une valeur vide ('') pour masquer l'élément correspondant.

export const site = {
  name: 'EVIMO',
  url: 'https://evimo.fr',

  // Adresse affichée pour le contact général et l'audit gratuit.
  contactEmail: 'contact@evimo.fr',

  // Lien du formulaire Tally de demande d'audit gratuit (ex. 'https://tally.so/r/abcd12').
  // Tant qu'il est vide, le bouton ouvre un mail pré-rempli vers contactEmail.
  auditTallyUrl: 'https://tally.so/r/RWD1ZK',

  // Page LinkedIn de l'entreprise (ex. 'https://www.linkedin.com/company/...').
  linkedinUrl: '',

  // Bureaux (pied de page).
  address: 'Station F, 5 parvis Alan Turing, 75013 Paris',
  // Siège social (mentions légales) : ajouter le numéro et la rue.
  legalAddress: '78300 Poissy',
  tunisCity: 'Tunis',
};

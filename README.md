# evimo.fr

Site vitrine d'EVIMO, en français (`/`) et en anglais (`/en/`).
Construit avec [Astro](https://astro.build), publié automatiquement sur GitHub Pages à chaque modification de `main`.

## Modifier le site sans coder

Tout se fait depuis GitHub (bouton ✏️ sur un fichier, puis « Commit changes »). Le site est à jour 1 à 2 minutes plus tard.

| Je veux… | Fichier à modifier |
| --- | --- |
| Changer un texte de la page d'accueil, de l'audit ou de la page carrières | `src/i18n/fr.ts`, puis la même chose en anglais dans `src/i18n/en.ts` |
| Ajouter une offre d'emploi | Copier un fichier de `src/content/jobs/`, le renommer (le nom devient l'adresse de la page), modifier son contenu |
| Retirer une offre | Dans son fichier, passer `published: true` à `published: false` |
| Mettre un formulaire Tally sur une offre | Ajouter `tallyUrl: https://tally.so/r/xxxx` dans l'en-tête du fichier de l'offre |
| Mettre un formulaire Tally pour l'audit gratuit | `auditTallyUrl` dans `src/site.config.ts` |
| Changer l'adresse de contact, ajouter le lien LinkedIn | `src/site.config.ts` |
| Mentions légales, confidentialité | `src/pages/mentions-legales.astro`, `src/pages/confidentialite.astro` |

### Une offre d'emploi

```md
---
title: Intitulé du poste
summary: Une phrase qui résume le poste (affichée en haut de l'offre et dans Google).
location: Paris — Station F
type: Stage            # ou CDI, Alternance…
start: Février 2027    # facultatif
duration: 6 mois       # facultatif
paid: Stage rémunéré   # facultatif
lang: fr               # fr ou en
applyEmail: achraf.gharsalli@evimo.fr
applySubject: Candidature - Intitulé court   # objet imposé, pour le filtre Gmail
# tallyUrl: https://tally.so/r/xxxx         # si présent, remplace la candidature par mail
published: true
order: 1               # ordre d'affichage
---

## Le texte de l'offre, en Markdown
```

Sans `tallyUrl`, le bouton « Postuler » ouvre un mail pré-rempli avec l'objet imposé, ce qui permet de trier les candidatures automatiquement dans Gmail.

## Travailler en local

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # génère le site dans dist/
```

## Design

Couleurs, police (Geist) et composants reprennent le design system « Evimo ». Les variables sont en tête de `src/styles/global.css`.
Le site suit automatiquement le mode clair ou sombre de l'appareil. Aucun cookie, aucun outil de suivi, aucune ressource chargée chez un tiers.

## Mise en ligne

`.github/workflows/deploy.yml` publie le site. Réglage à faire une seule fois dans le dépôt : **Settings → Pages → Source = GitHub Actions**. Le domaine `evimo.fr` est déclaré dans `public/CNAME`.

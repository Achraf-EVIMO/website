import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Une offre d'emploi = un fichier .md dans src/content/jobs/.
// Le nom du fichier donne l'adresse de la page : stage-commercial-paris.md → /nous-rejoindre/stage-commercial-paris/
const jobs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jobs' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    location: z.string(),
    type: z.string(), // ex. « Stage », « CDI », « Alternance »
    start: z.string().optional(),
    duration: z.string().optional(),
    paid: z.string().optional(),
    remote: z.string().optional(), // ex. « Full remote », « Très flexible »
    equipment: z.string().optional(), // ex. « Ordinateur fourni »
    lang: z.enum(['fr', 'en']).default('fr'),
    // Pour postuler : par mail avec un objet imposé (filtre Gmail), ou par un formulaire Tally.
    applyEmail: z.string().email(),
    applySubject: z.string(),
    tallyUrl: z.string().url().optional(),
    // Passer à false pour retirer l'offre du site sans supprimer le fichier.
    published: z.boolean().default(true),
    order: z.number().default(10),
  }),
});

export const collections = { jobs };

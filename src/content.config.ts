import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/" }),
  schema: z.object({
    name: z.string(),
    desc: z.string(),
    from: z.date(),
    to: z.date().optional(),
    roles: z.array(z.string()),
    stacks: z.array(z.string()),
    portfolio: z.array(
      z.object({
        type: z.enum(["Git Repo", "Play Store", "App Store", "Website"]),
        url: z.string(),
      }),
    ),
  }),
});

export const collections = { works };

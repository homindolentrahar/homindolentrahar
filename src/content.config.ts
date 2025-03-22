import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/" }),
  schema: z.object({
    name: z.string(),
    desc: z.string(),
    from: z.date(),
    to: z.date().optional(),
    workType: z.enum(["Personal", "Professional"]),
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

const experience = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "src/content/" }),
  schema: z.object({
    company: z.string(),
    companyUrl: z.string(),
    position: z.string(),
    employmentType: z.enum(["Full-time", "Part-time", "Freelance"]),
    startDate: z.string().transform((value) => new Date(value)),
    endDate: z
      .string()
      .transform((value) => new Date(value))
      .optional(),
    description: z.array(z.string()),
  }),
});

export const collections = { works, experience };

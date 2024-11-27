import { reference, z } from "astro:content";

export const experienceSchema = z.object({
  role: z.string(),
  company: z.string(),
  companyUrl: z.string(),
  location: z.string(),
  type: z.enum(["Full-time", "Freelance", "Internship"]),
  workScheme: z.enum(["WFO", "Hybrid", "Remote"]),
  startDate: z.date(),
  endDate: z.date().optional(),
  achievements: z.array(z.string()).optional(),
});

export const projectSchema = z.object({
  title: z.string(),
  desc: z.string(),
  url: z.string().optional(),
  thumbnailUrl: z.string(),
  images: z.array(z.string()),
  category: z.object({
    slug: z.string(),
    title: z.string(),
  }),
  stacks: z.array(z.string()),
  type: z.enum(["Personal", "Professional"]),
  startDate: z.date(),
  endDate: z.date().optional(),
});

export const categorySchema = z.object({
  title: z.string(),
});

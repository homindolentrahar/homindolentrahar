import { z } from "astro:content";

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
  projectUrl: z.string().optional(),
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
  roles: z.array(z.string()),
  services: z.array(z.string()),
  client: z.string().optional(),
});

export const postSchema = z.object({
  title: z.string(),
  desc: z.string(),
  thumbnailUrl: z.string(),
  category: z.object({
    slug: z.string(),
    title: z.string(),
  }),
  keywords: z.array(z.string()),
  publishedDate: z.date(),
});

export const leetSchema = z.object({
  title: z.string(),
  desc: z.string(),
  difficulty: z.object({
    slug: z.string(),
    title: z.string(),
  }),
  tags: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
});

export const educationSchema = z.object({
  title: z.string(),
  institute: z.string(),
  instituteUrl: z.string(),
  startDate: z.string().transform((e) => new Date(e)),
  endDate: z
    .string()
    .transform((e) => new Date(e))
    .optional(),
  gpa: z.number().optional(),
  achievements: z.array(z.string()).optional(),
});

export const courseSchema = z.object({
  title: z.string(),
  provider: z.string(),
  providerUrl: z.string(),
  startDate: z.string().transform((e) => new Date(e)),
  endDate: z
    .string()
    .transform((e) => new Date(e))
    .optional(),
  certificateUrl: z.string().optional(),
  learnPoints: z.array(z.string()).optional(),
});

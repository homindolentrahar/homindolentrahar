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

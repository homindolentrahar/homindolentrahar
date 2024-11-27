import { defineCollection } from "astro:content";
import {
  categorySchema,
  experienceSchema,
  projectSchema,
} from "../schemas/collection_schemas";

// Define collections
const experience = defineCollection({
  type: "content",
  schema: experienceSchema,
});

const project = defineCollection({
  type: "content",
  schema: projectSchema,
});

const category = defineCollection({
  type: "content",
  schema: categorySchema,
});

export const collections = {
  experience: experience,
  project: project,
  category: category,
};

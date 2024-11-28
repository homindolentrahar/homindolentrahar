import { defineCollection } from "astro:content";
import {
  projectCategorySchema,
  experienceSchema,
  projectSchema,
  postSchema,
  leetSchema,
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

const blog = defineCollection({
  type: "content",
  schema: postSchema,
});

const leet = defineCollection({
  type: "content",
  schema: leetSchema,
});

const projectCategory = defineCollection({
  type: "content",
  schema: projectCategorySchema,
});

export const collections = {
  experience: experience,
  project: project,
  projectCategory: projectCategory,
  blog: blog,
  leet: leet,
};

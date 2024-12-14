import { defineCollection } from "astro:content";
import {
  experienceSchema,
  projectSchema,
  postSchema,
  leetSchema,
  educationSchema,
  courseSchema,
  serviceSchema,
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

const education = defineCollection({
  type: "data",
  schema: educationSchema,
});

const course = defineCollection({
  type: "data",
  schema: courseSchema,
});

const service = defineCollection({
  type: "data",
  schema: serviceSchema,
});

export const collections = {
  experience: experience,
  project: project,
  blog: blog,
  leet: leet,
  education: education,
  course: course,
  service: service,
};

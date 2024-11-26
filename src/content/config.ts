import { defineCollection } from "astro:content";
import { experienceSchema } from "../schemas/collection_schemas";

// Define collections
const experience = defineCollection({
  type: "content",
  schema: experienceSchema,
});

export const collections = {
  experience: experience,
};

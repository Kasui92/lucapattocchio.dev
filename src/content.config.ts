import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const socials = defineCollection({
  loader: file("src/data/socials.json"),
  schema: z.object({
    id: z.string(),
    label: z.string(),
    url: z.string().url(),
    icon: z.string(),
  }),
});

const navigation = defineCollection({
  loader: file("src/data/navigation.json"),
  schema: z.object({
    id: z.string(),
    label: z.string(),
    url: z.string(),
  }),
});

export const collections = {
  socials,
  navigation,
};

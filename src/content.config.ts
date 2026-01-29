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

const experiences = defineCollection({
  loader: file("src/data/experiences.json", {
    parser: (data) => {
      const arrayData = JSON.parse(data) as any[];
      return arrayData?.map((item, index) => {
        return {
          id: index.toString(),
          ...item,
        };
      });
    },
  }),
  schema: z.object({
    position: z.string(),
    company: z.string(),
    companyUrl: z.string().url(),
    workExperience: z.string(),
    startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
    endDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
      })
      .optional(),
    location: z.string(),
  }),
});

const works = defineCollection({
  loader: file("src/data/works.json", {
    parser: (data) => {
      const arrayData = JSON.parse(data) as any[];
      return arrayData?.map((item, index) => {
        return {
          id: index.toString(),
          ...item,
        };
      });
    },
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    url: z.string().url(),
  }),
});

export const collections = {
  socials,
  navigation,
  experiences,
  works,
};

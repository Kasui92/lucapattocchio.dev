import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file } from "astro/loaders";

const socials = defineCollection({
  loader: file("src/contents/socials.json"),
  schema: z.object({
    id: z.string(),
    label: z.string(),
    url: z.string().url(),
    icon: z.string(),
  }),
});

const navigation = defineCollection({
  loader: file("src/contents/navigation.json"),
  schema: z.object({
    id: z.string(),
    label: z.string(),
    url: z.string(),
  }),
});

const experiences = defineCollection({
  loader: file("src/contents/experiences.json", {
    parser: (data: string) => {
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
  loader: file("src/contents/works.json", {
    parser: (data: string) => {
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

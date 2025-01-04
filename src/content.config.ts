import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const work = defineCollection({
  loader: file("./src/content/work.json"),
  schema: z.object({
    company: z.string(),
    featured: z.boolean().optional(),
    image: z.string().optional(),
    role: z.string().optional(),
    summary: z.string().optional(),
    startDate: z.coerce.date(),
    endDate: z.union([z.coerce.date(), z.string()]).optional(),
    subJobs: z
      .array(
        z.object({
          role: z.string(),
          summary: z.string().optional(),
          startDate: z.coerce.date(),
          endDate: z.union([z.coerce.date(), z.string()]).optional(),
        })
      )
      .optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    featured: z.boolean().optional(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
});

export const collections = { work, projects };

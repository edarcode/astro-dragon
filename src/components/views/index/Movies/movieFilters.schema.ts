import { z } from "astro/zod";

export const movieFiltersSchema = z
  .object({
    title: z
      .string()
      .max(128)
      .transform((title) => title.toLowerCase()),
  })
  .strict()
  .partial();

export type MovieFiltersSchema = z.infer<typeof movieFiltersSchema>;

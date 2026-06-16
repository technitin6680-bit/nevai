import { z } from "zod";

export const documentSchema = z.object({
  title: z.string().min(1).max(120),
  description: z.string().max(500).optional(),
});

export type DocumentInput = z.infer<typeof documentSchema>;


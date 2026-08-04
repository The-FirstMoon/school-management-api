import { z } from "zod";

export const classSchema = z.object({
  name: z.string().trim().min(1, "Class name is required"),
});

export type ClassInput = z.infer<typeof classSchema>;
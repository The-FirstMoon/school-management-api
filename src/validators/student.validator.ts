import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),

  dob: z.string().date("Invalid date"),

  rollNumber: z.string().trim().min(1, "Roll number is required"),

  grade: z.string().trim().min(1, "Grade is required"),

  fee: z.coerce.number().nonnegative("Fee cannot be negative"),

  isFeePaid: z.coerce.boolean(),
});

export const editStudentSchema = z.object({
  name: z.optional(z.string().trim().min(1, "Name is required")),

  dob: z.optional(z.string().date("Invalid date")),

  rollNumber: z.optional(z.string().trim().min(1, "Roll number is required")),

  grade: z.optional(z.string().trim().min(1, "Grade is required")),

  fee: z.optional(z.number().nonnegative("Fee cannot be negative")),

  isFeePaid: z.optional(z.boolean()),
});

export type StudentInput = z.infer<typeof studentSchema>;
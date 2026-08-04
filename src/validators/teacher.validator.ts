import { z } from "zod";

export const teacherSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),

  salary: z.number().positive("Salary must be greater than 0"),

  level: z.enum(["BS", "MS", "PHD"]),
});

export const editTeacherSchema = z.object({
  name: z.optional(z.string().trim().min(1,"Name is required")),
  
  salary: z.optional(z.number().positive("Salary must be greater than 0")),

  level: z.optional(z.enum(["BS", "MS", "PHD"])),
})

export type TeacherInput = z.infer<typeof teacherSchema>;
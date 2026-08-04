export type TeacherLevel = "BS" | "MS" | "PHD";

export interface Teacher {
  id?: number;
  name: string;
  salary: number;
  level: TeacherLevel;
  createdAt?: Date;
  updatedAt?: Date;
}
import { TeacherLevel } from "../types/teacher.type";

export interface AddTeacherDto {
  name: string;
  salary: number;
  level: TeacherLevel;
}

export interface EditTeacherDto {
  id: number;
  name?: string;
  salary?: number;
  level?: TeacherLevel;
}
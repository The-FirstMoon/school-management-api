import { TeacherLevel } from "../types/teacher.type";

export interface AddTeacherDto {
  id?: number;
  name: string;
  salary: number;
  level: TeacherLevel;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface EditTeacherDto {
  id: number;
  name?: string;
  salary?: number;
  level?: TeacherLevel;
  createdAt?: Date;
  updatedAt?: Date;
}
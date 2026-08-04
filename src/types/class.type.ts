export interface Class {
  id?: number;
  name: string;
  enrolledStudents?: number[];
  assignedTeachers?: number[];
  createdAt?: Date;
  updatedAt?: Date;
}
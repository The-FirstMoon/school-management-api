export interface AddClassDto {
  id?: number;
  name: string;
  enrolledStudents?: number[];
  assignedTeachers?: number[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface EditClassDto {
  id: number;
  name?: string;
  enrolledStudents?: number[];
  assignedTeachers?: number[];
  createdAt?: Date;
  updatedAt?: Date;
}
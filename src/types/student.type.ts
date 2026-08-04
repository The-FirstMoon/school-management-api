
export interface Student {
  id?: number;
  name: string;
  dob: Date;
  rollNumber: string;
  grade: string;
  fee: number;
  isFeePaid: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

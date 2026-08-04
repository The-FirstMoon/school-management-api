export interface AddStudentDto{
      name: string;
      dob: Date;
      rollNumber: string;
      grade: string;
      fee: number;
      isFeePaid: boolean;
}

export interface EditStudentDto{
        id : Number,
        name? : String,
        dob? : Date,
        grade? : String,
        rollNumber? : Number,
        fee? : Number,
        isFeePaid? : boolean,    
}
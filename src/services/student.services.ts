import { Request, Response } from "express";
import pool from "../config/db";
import { Student } from "../types/student.type";
import { AddStudentDto, EditStudentDto } from "../dtos/student.dto";

export const addStudent = async (/*req: Request, res: Response,*/student: AddStudentDto) => {
  
    const {
    name,
    dob,
    rollNumber,
    grade,
    fee,
    isFeePaid,
  } = student;
   // const isPaid : boolean = student.isFeePaid === "on"?true:false ;

  const result = await pool.query(
      `
      INSERT INTO students
      (name, dob, roll_number, grade, fee, is_fee_paid)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
      `,
      [name, dob, rollNumber, grade, fee, isFeePaid]
    );

    return result.rows[0];

  
};

export const getStudents = async () => {
  const result = await pool.query(
  `
    SELECT * FROM students
    ORDER BY id;
  `
);

  return result.rows;
};

export const getStudent = async (id: number) => {
  const result = await pool.query(
    `
    SELECT * FROM students
    WHERE id = $1;
    `,
    [id]
  );

  return result.rows[0];
};

export const editStudent = async (
  //id: number,
  student: EditStudentDto
) => {
  try {
      
    const {
      id,
      name,
      dob,
      rollNumber,
      grade,
      fee,
      isFeePaid,
    } = student;

    const result = await pool.query(
      `
      UPDATE students
      SET
        name = COALESCE($1,name),
        dob = COALESCE($2,dob),
        roll_number = COALESCE($3,roll_number),
        grade = COALESCE($4,grade),
        fee = COALESCE($5,fee),
        is_fee_paid = COALESCE($6,is_fee_paid),
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $7
      RETURNING *;
      `,
      [name, dob, rollNumber, grade, fee, isFeePaid, id]
    );

    return result.rows[0];
  } catch (err : any) {
    if (err.code === "23505") {
        throw new Error("Roll number already exists");
    }

    throw err;
  }
};

export const deleteStudent = async (id: number) => {
  const result = await pool.query(
    `
    DELETE FROM students
    WHERE id = $1
    RETURNING *;
    `,
    [id]
  );

  return result.rows[0];
};
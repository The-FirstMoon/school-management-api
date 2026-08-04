import pool from "../config/db";
import { AddClassDto, EditClassDto } from "../dtos/class.dto";
import { Class } from "../types/class.type";

export const addClass = async (newClass: AddClassDto) => {
  const { name } = newClass;

  const result = await pool.query(
    `
    INSERT INTO classes (name)
    VALUES ($1)
    RETURNING *;
    `,
    [name]
  );

  return result.rows[0];
};

export const getClasses = async () => {
  const result = await pool.query(`
    SELECT *
    FROM classes
    ORDER BY id;
  `);

  return result.rows;
};

export const getClass = async (id: number) => {
  const result = await pool.query(
    `
    SELECT *
    FROM classes
    WHERE id = $1;
    `,
    [id]
  );

  return result.rows[0];
};

export const editClass = async (
  //id: number,
  newClass: EditClassDto
) => {
  const { id, name } = newClass;

  const result = await pool.query(
    `
    UPDATE classes
    SET
      name = $1,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = $2
    RETURNING *;
    `,
    [name, id]
  );

  return result.rows[0];
};

export const deleteClass = async (id: number) => {
  const result = await pool.query(
    `
    DELETE FROM classes
    WHERE id = $1
    RETURNING *;
    `,
    [id]
  );

  return result.rows[0];
};

export const addStudentClass = async (
  classId: number,
  studentId: number
) => {
  const result = await pool.query(
    `
    INSERT INTO student_classes
    (student_id, class_id)
    VALUES ($1, $2)
    RETURNING *;
    `,
    [studentId, classId]
  );

  return result.rows[0];
};

export const deleteStudentClass = async (
  classId: number,
  studentId: number
) => {
  
  const result = await pool.query(
    `
    DELETE FROM student_classes
    WHERE student_id = $1
      AND class_id = $2
    RETURNING *;
    `,
    [studentId, classId]
  );

  return result.rows[0];
};

export const getStudentClasses = async (
  classId: number
) => {
  const result = await pool.query(
    `
    SELECT s.*
    FROM students s
    INNER JOIN student_classes sc
      ON s.id = sc.student_id
    WHERE sc.class_id = $1;
    `,
    [classId]
  );

  return result.rows;
};

export const addTeacherClass = async (
  classId: number,
  teacherId: number
) => {
  const result = await pool.query(
    `
    INSERT INTO teacher_classes
    (teacher_id, class_id)
    VALUES ($1, $2)
    RETURNING *;
    `,
    [teacherId, classId]
  );

  return result.rows[0];
};

export const deleteTeacherClass = async(
  classId: number,
  teacherId: number
) => {
  const result = await pool.query(
    `
    DELETE FROM teacher_classes
    WHERE teacher_id = $1
      AND class_id = $2
    RETURNING *;
    `,
    [teacherId, classId]
  );
  return result.rows[0];
}

export const getTeacherClass = async (
  classId: number
) => {
  const result = await pool.query(
    `
    SELECT t.*
    FROM teachers t
    INNER JOIN teacher_classes tc
      ON t.id = tc.teacher_id
    WHERE tc.class_id = $1;
    `,
    [classId]
  );

  return result.rows;
};
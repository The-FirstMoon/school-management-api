import pool from "../config/db";
import { AddTeacherDto, EditTeacherDto } from "../dtos/teacher.dto";
import { Teacher } from "../types/teacher.type";

export const addTeacher = async (teacher: AddTeacherDto) => {
  const { name, salary, level } = teacher;

  const result = await pool.query(
    `
    INSERT INTO teachers
    (name, salary, level)
    VALUES ($1, $2, $3)
    RETURNING *;
    `,
    [name, salary, level]
  );

  return result.rows[0];
};

export const getTeachers = async () => {
  const result = await pool.query(`
    SELECT *
    FROM teachers
    ORDER BY id;
  `);

  return result.rows;
};

export const getTeacher = async (id: number) => {
  const result = await pool.query(
    `
    SELECT *
    FROM teachers
    WHERE id = $1;
    `,
    [id]
  );

  return result.rows[0];
};

export const editTeacher = async (
  // id: number,
  teacher: EditTeacherDto
) => {
  const { id, name, salary, level } = teacher;

  const result = await pool.query(
    `
    UPDATE teachers
    SET
      name = COALESCE($1,name),
      salary = COALESCE($2,salary),
      level = COALESCE($3,level),
      updated_at = CURRENT_TIMESTAMP
    WHERE id = $4
    RETURNING *;
    `,
    [name, salary, level, id]
  );

  return result.rows[0];
};

export const editSalary = async (
  id: number,
  salary: number
) => {
  const result = await pool.query(
    `
    UPDATE teachers
    SET
      salary = $1,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = $2
    RETURNING *;
    `,
    [salary, id]
  );

  return result.rows[0];
};

export const deleteTeacher = async (id: number) => {
  const result = await pool.query(
    `
    DELETE FROM teachers
    WHERE id = $1
    RETURNING *;
    `,
    [id]
  );

  return result.rows[0];
};
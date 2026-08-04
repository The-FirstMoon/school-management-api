import pool from "../config/db";

export async function createClassStudentsTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS class_students (
      class_id INTEGER NOT NULL,
      student_id INTEGER NOT NULL,

      PRIMARY KEY (class_id, student_id),

      FOREIGN KEY (class_id)
        REFERENCES classes(id)
        ON DELETE CASCADE,

      FOREIGN KEY (student_id)
        REFERENCES students(id)
        ON DELETE CASCADE
    );
  `);

  console.log("Class-Student table is ready.");
}
import pool from "../config/db";

export async function createClassTeachersTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS class_teachers (
      class_id INTEGER NOT NULL,
      teacher_id INTEGER NOT NULL,

      PRIMARY KEY (class_id, teacher_id),

      FOREIGN KEY (class_id)
        REFERENCES classes(id)
        ON DELETE CASCADE,

      FOREIGN KEY (teacher_id)
        REFERENCES teachers(id)
        ON DELETE CASCADE
    );
  `);

  console.log("Class-Teacher table is ready.");
}
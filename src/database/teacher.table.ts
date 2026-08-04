import pool from "../config/db";

export async function createTeacherTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS teachers (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      salary NUMERIC NOT NULL,
      level VARCHAR(10) NOT NULL CHECK (level IN ('BS', 'MS', 'PHD')),
      create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log("Teachers table is ready.");
}
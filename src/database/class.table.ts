import pool from "../config/db";

export async function createClassTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS classes (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log("Classes table is ready.");
}
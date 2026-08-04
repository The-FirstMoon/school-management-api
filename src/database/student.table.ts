import pool from "../config/db";

export async function createStudentTable() {

    await pool.query(`
      CREATE TABLE IF NOT EXISTS students (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        dob DATE NOT NULL,
        roll_number VARCHAR(50) UNIQUE NOT NULL,
        grade VARCHAR(20) NOT NULL,
        fee NUMERIC NOT NULL,
        is_fee_paid BOOLEAN NOT NULL DEFAULT FALSE,
        create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("Students table is ready.");
  
}
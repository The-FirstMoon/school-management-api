import { createStudentTable } from "./student.table";
import { createTeacherTable } from "./teacher.table";
import { createClassTable } from "./class.table";
import { createClassStudentsTable } from "./class_student.table";
import { createClassTeachersTable } from "./class_teacher.table";


export async function initializeDatabase() {
    await createStudentTable();
    await createTeacherTable();
    await createClassTable();
    await createClassStudentsTable();
    await createClassTeachersTable(); 

    console.log("Database initialized.");
}
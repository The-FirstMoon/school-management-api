
/*
feature its name school
it has 3 features student, teacher and class 
each one has its own router, validaters and types
conect to dp postgress sql
right endpoint with post man
Routers of student:
addStudent
deleteStudent
editSTudent
getStudent
getStudents
Id
name
dob
rollnumber
grade
fee
isFeePaid
craeteDate
updateDate


Routers of teacher:
addTeacher
deleteTeacher
editTeacher
getTeachers
getteacher
editSalary
id 
name
salary
level {bs,ms,phd}
craeteDate
updateDate


Router of class:
addClass
deleteClass
editClass
getClass
getClasses
getStudentClasses
getTeacherClass
addTeacherClass
addStudentClass
delteStudentClass
deletStudenClass
id
name
enroldStudents an array
assainedTeacher an array
craeteDate
updateDate

*/

import dotenv from "dotenv";
import app from "./app";
import pool from "./config/db";
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// app.listen(PORT, async () => {
//   try {
//     await pool.query("SELECT NOW()");
//     console.log("Database Connected");
//   } catch (err) {
//     console.log("Database Failed");
//   }

//   console.log(`Server running on port ${PORT}`);
// });
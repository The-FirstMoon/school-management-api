import { Request, Response } from "express";
import * as studentService from "../services/student.services";
import { asyncHandler } from "../middleware/asyncHandler";
import { QueryResult } from "pg";
import { Student } from "../types/student.type";
import { AddStudentDto, EditStudentDto } from "../dtos/student.dto";
export const addStudentInfo= async (req: Request, res: Response)=>{
  // res.writeHead(200, {'content-type' : 'text/html'});
  const html = `
  <form action = "/student/add" method="post">

  <h1>Write Student Info</h1>
  <br><br>

  <label>Student name</label>
  <input type="text" name="name">
  <br><br>

  <label>Student dob</label>
  <input type="date" name="dob">
  <br><br>

  <label>Student roll number</label>
  <input type="text" name="rollNumber">
  <br><br>

  <label>Student grade</label>
  <input type="text" name="grade">
  <br><br>

  <label>Student fees</label>
  <input type="Number" name="fee">
  <br><br>

  <label>Student fees paid?</label>
  <input type="checkbox" name="isFeePaidString">
  <br><br>

  <button type="submit">Submit</button>
  </form>
  `
 
  res.send(html);
}

export const addStudent = async (req: Request<{},{},AddStudentDto>, res: Response) => {

   req.body.fee=Number(req.body.fee)
    const student = await studentService.addStudent(/*req,res,*/req.body);
    res.status(201).json({
      message: "Student added successfully.",
      student,
    });
};


export const getStudents = asyncHandler(
  async (req: Request, res: Response) => {
    const students = await studentService.getStudents();

    res.status(200).json(students);
  }
);

export const getStudent = async (req: Request, res: Response) => {
  
    const id = Number(req.params.id);

    const student = await studentService.getStudent(id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found.",
      });
    }

    res.status(200).json(student);
  
};

export const editStudent = async (req: Request<{},{},EditStudentDto>, res: Response) => {

    //const id = Number(req.params.id);

    const student = await studentService.editStudent( req.body);

    res.status(200).json({
      message: "Student updated successfully.",
      student,
    });
 
};

export const deleteStudent = async (req: Request, res: Response) => {
  
    const id = Number(req.params.id);

    await studentService.deleteStudent(id);

    res.status(200).json({
      message: "Student deleted successfully.",
    });
  
};
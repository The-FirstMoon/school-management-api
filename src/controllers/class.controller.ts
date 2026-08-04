import { Request, Response } from "express";
import * as classService from "../services/class.services";
import { AddClassDto, EditClassDto } from "../dtos/class.dto";

export const addClass = async (req: Request<{},{},AddClassDto>, res: Response) => {
  
    const newClass = await classService.addClass(req.body);

    res.status(201).json({
      message: "Class added successfully.",
      class: newClass,
    });
  
};

export const getClasses = async (req: Request, res: Response) => {
  
    const classes = await classService.getClasses();

    res.status(200).json(classes);
 
};

export const getClass = async (req: Request, res: Response) => {
  
    const id = Number(req.params.id);

    const newClass = await classService.getClass(id);

    if (!newClass) {
      return res.status(404).json({
        message: "Class not found.",
      });
    }

    res.status(200).json(newClass);
 
};

export const editClass = async (req: Request<{},{},EditClassDto>, res: Response) => {
  
    //const id = Number(req.params.id);

    const updated = await classService.editClass(req.body);

    res.status(200).json({
      message: "Class updated successfully.",
      class: updated,
    });
  
};

export const deleteClass = async (req: Request, res: Response) => {
  
    const id = Number(req.params.id);

    await classService.deleteClass(id);

    res.status(200).json({
      message: "Class deleted successfully.",
    });
  
};

export const addStudentClass = async (req: Request, res: Response) => {
 
    const classId = Number(req.body.classId);
    const studentId = Number(req.body.studentId);

    await classService.addStudentClass(classId, studentId);

    res.status(200).json({
      message: "Student added to class.",
    });
  
};

export const deleteStudentClass = async (req: Request, res: Response) => {
  
    const classId = Number(req.params.classId);
    const studentId = Number(req.params.studentId);
    //console.log("HIi@@@@@@@@@@@")
    //delete doesnt have body you stupied
    await classService.deleteStudentClass(classId, studentId);

    res.status(200).json({
      message: "Student removed from class.",
    });
 
};

export const getStudentClasses = async (req: Request, res: Response) => {
  
    const classId = Number(req.params.classId);

    const students = await classService.getStudentClasses(classId);

    res.status(200).json(students);

};

export const addTeacherClass = async (req: Request, res: Response) => {
  
    const classId = Number(req.body.classId);
    const teacherId = Number(req.body.teacherId);

    await classService.addTeacherClass(classId, teacherId);

    res.status(200).json({
      message: "Teacher assigned successfully.",
    });
  
};

export const deleteTeacherClass = async (req:Request, res:Response) => {
  const classId = Number(req.params.classId);
  const teacherId = Number(req.params.teacherId);

  await classService.deleteTeacherClass(classId, teacherId);

  res.status(200).json({
    message: "Teahcer removed from class."
  })
}

export const getTeacherClass = async (req: Request, res: Response) => {
  
    const classId = Number(req.params.classId);

    const teachers = await classService.getTeacherClass(classId);

    res.status(200).json(teachers);
 
};
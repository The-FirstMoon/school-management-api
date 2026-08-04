import { Request, Response } from "express";
import * as teacherService from "../services/teacher.services";
import { AddTeacherDto, EditTeacherDto } from "../dtos/teacher.dto";

export const addTeacher = async (req: Request<{},{},AddTeacherDto>, res: Response) => {
  
    const teacher = await teacherService.addTeacher(req.body);

    res.status(201).json({
      message: "Teacher added successfully.",
      teacher,
    });
  
};

export const getTeachers = async (req: Request, res: Response) => {
  
    const teachers = await teacherService.getTeachers();

    res.status(200).json(teachers);
 
};

export const getTeacher = async (req: Request, res: Response) => {
  
    const id = Number(req.params.id);

    const teacher = await teacherService.getTeacher(id);

    if (!teacher) {
      return res.status(404).json({
        message: "Teacher not found.",
      });
    }

    res.status(200).json(teacher);
  
};

export const editTeacher = async (req: Request<{},{},EditTeacherDto>, res: Response) => {
 
    const id = Number(req.body.id);

    const teacher = await teacherService.editTeacher(/*id,*/ req.body);

    res.status(200).json({
      message: "Teacher updated successfully.",
      teacher,
    });
 
};

export const editSalary = async (req: Request, res: Response) => {
  
    const id = Number(req.params.id);
    const { salary } = req.body;

    const teacher = await teacherService.editSalary(id, salary);

    res.status(200).json({
      message: "Salary updated successfully.",
      teacher,
    });
 
};

export const deleteTeacher = async (req: Request, res: Response) => {
  
    const id = Number(req.params.id);

    await teacherService.deleteTeacher(id);

    res.status(200).json({
      message: "Teacher deleted successfully.",
    });
 
};
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);

  if (err.code === "23505") {
    if (err.constraint === "students_roll_number_key") {
      return res.status(409).json({
        message: "Roll number already exists",
      });
    }
  }

  return res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
};
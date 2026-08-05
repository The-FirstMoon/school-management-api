import { Request, Response, NextFunction } from "express";

export const apiKeyAuth = (req: Request , res: Response, next: NextFunction) =>{
    const apiKey = req.headers['x-api-key'];
    if(!apiKey || apiKey !== process.env.API_KEY){
      const error = new Error("Invalid API key");
      (error as any).status = 401;
      throw error;
    }
    next();
}   
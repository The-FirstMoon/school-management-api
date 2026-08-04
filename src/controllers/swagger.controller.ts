import { swaggerSpec } from '../config/swagger';
import { Request, Response } from 'express';

export const swaggerAPI = (req : Request, res : Response) =>{
    res.json(swaggerSpec)
}
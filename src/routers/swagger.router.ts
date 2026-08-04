import { Router } from "express";
import { swaggerAPI } from "../controllers/swagger.controller";


const router = Router();

router.get("/",swaggerAPI)
export default router;
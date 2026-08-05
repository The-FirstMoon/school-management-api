import { Router } from "express";
import { validate } from "../middleware/validate";
import { editTeacherSchema, teacherSchema } from "../validators/teacher.validator";
import {
  addTeacher,
  deleteTeacher,
  editTeacher,
  editSalary,
  getTeacher,
  getTeachers,
} from "../controllers/teacher.controller";
import { apiKeyAuth } from "../middleware/apiKeyAuth";

const router = Router();

// Create
/**
 * @swagger
 * /teacher:
 *   post:
 *     security: 
 *      - ApiKeyAuth: []
 *     summary: Add a teacher
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               salary:
 *                 type: integer
 *               level:
 *                 type: string
 *     responses:
 *       201:
 *         description: Teacher created
 */
router.post("/", apiKeyAuth, validate(teacherSchema), addTeacher);

// Read
/**
 * @swagger
 * /teacher:
 *   get:
 *     summary: Get all teachers
 *     responses:
 *       200:
 *         description: Returns all teachers
 */
router.get("/", getTeachers);
/**
 * @swagger
 * /teacher/{id}:
 *   get:
 *     summary: Get one teacher
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Teacher ID
 *     responses:
 *       200:
 *         description: Teacher found
 *       404:
 *         description: Teacher not found
 */
router.get("/:id", getTeacher);

// Update
/**
 * @swagger
 * /teacher/edit:
 *   put:
 *     security: 
 *      - ApiKeyAuth: []
 *     summary: Edit a teacher
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *               salary:
 *                 type: integer
 *               level:
 *                 type: string
 *     responses:
 *       201:
 *         description: Teacher edited
 */
router.put("/edit", apiKeyAuth, validate(editTeacherSchema), editTeacher);
router.patch("/:id/salary", editSalary);

// Delete
/**
 * @swagger
 * /teacher/{id}:
 *   delete:
 *     security: 
 *      - ApiKeyAuth: []
 *     summary: delete one teacher
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Teacher ID
 *     responses:
 *       200:
 *         description: Teacher deleted
 *       404:
 *         description: Teacher not deleted
 */
router.delete("/:id", deleteTeacher);

export default router;
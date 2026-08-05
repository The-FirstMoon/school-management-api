import { Router } from "express";
import { validate } from "../middleware/validate";
import { editStudentSchema, studentSchema } from "../validators/student.validator";
import {
  addStudent,
  addStudentInfo,
  deleteStudent,
  editStudent,
  getStudent,
  getStudents,
} from "../controllers/student.controller";
import { Api_KeyAuth } from "../middleware/Api_KeyAuth.middleware";

const router = Router();

// Create
/**
 * @swagger
 * /student/add:
 *   post:
 *     security: 
 *      - ApiKeyAuth: []
 *     summary: Add a student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               dob:
 *                 type: date
 *               rollNumber:
 *                 type: string
 *               grade:
 *                 type: string
 *               fee:
 *                 type: integer
 *               isFeePaid:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Student created
 */
router.post("/add", Api_KeyAuth, validate(studentSchema), addStudent);
/**
 * @swagger
 * /student/addInfo:
 *   get:
 *     summary: Outuput simple frontend
 *     responses:
 *       200:
 *         description: Simple fronted outputed
 */
router.get("/addInfo", /*validate(studentSchema),*/ addStudentInfo)

// Read
/**
 * @swagger
 * /student:
 *   get:
 *     summary: Get all students
 *     responses:
 *       200:
 *         description: Returns all students
 */
router.get("/", getStudents);

/**
 * @swagger
 * /student/{id}:
 *   get:
 *     summary: Get one student
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Student ID
 *     responses:
 *       200:
 *         description: Student found
 *       404:
 *         description: Student not found
 */
router.get("/:id", getStudent);

/**
 * @swagger
 * /student/edit:
 *   put:
 *     security: 
 *      - ApiKeyAuth: []
 *     summary: Edit a student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               dob:
 *                 type: date
 *               rollNumber:
 *                 type: string
 *               grade:
 *                 type: string
 *               name:
 *                 type: string
 *               fee:
 *                 type: integer
 *               isFeePaid:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Student edited
 */
router.put("/edit", Api_KeyAuth, validate(editStudentSchema),  editStudent);

// Delete
/**
 * @swagger
 * /student/{id}:
 *   delete:
 *     security: 
 *      - ApiKeyAuth: []
 *     summary: delete one student
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Student ID
 *     responses:
 *       200:
 *         description: Student deleted
 *       404:
 *         description: Student not deleted
 */
router.delete("/:id", Api_KeyAuth, deleteStudent);

export default router;
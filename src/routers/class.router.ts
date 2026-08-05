import { Router } from "express";
import { validate } from "../middleware/validate";
import { classSchema } from "../validators/class.validator";
import {
  addClass,
  addStudentClass,
  addTeacherClass,
  deleteClass,
  deleteTeacherClass,
  deleteStudentClass,
  editClass,
  getClass,
  getClasses,
  getStudentClasses,
  getTeacherClass,
} from "../controllers/class.controller";
import { Api_KeyAuth } from "../middleware/Api_KeyAuth.middleware";
//import { deleteTeacherClass } from "../services/class.services";

const router = Router();

// CRUD
/**
 * @swagger
 * /class/add:
 *   post:
 *     security: 
 *      - ApiKeyAuth: []
 *     summary: Add a class
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Class created
 */
router.post("/add", Api_KeyAuth, validate(classSchema), addClass);

/**
 * @swagger
 * /class:
 *   get:
 *     summary: Get all classes
 *     responses:
 *       200:
 *         description: Returns all classes
 */
router.get("/", getClasses);
/**
 * @swagger
 * /class/{id}:
 *   get:
 *     summary: Get one class
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Class ID
 *     responses:
 *       200:
 *         description: Class found
 *       404:
 *         description: Class not found
 */
router.get("/:id", getClass);

/**
 * @swagger
 * /class/edit:
 *   put:
 *     security: 
 *      - ApiKeyAuth: []
 *     summary: Edit a class
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id: 
 *                 type: integar
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Class edited
 */
router.put("/edit", Api_KeyAuth, validate(classSchema), editClass);

/**
 * @swagger
 * /class/{id}:
 *   delete:
 *     security: 
 *      - ApiKeyAuth: []
 *     summary: delete one Class
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Class ID
 *     responses:
 *       200:
 *         description: Class deleted
 *       404:
 *         description: Class not deleted
 */
router.delete("/:id",Api_KeyAuth, deleteClass);

// Student <-> Class
/**
 * @swagger
 * /class/enroll-student:
 *   post:
 *     security: 
 *      - ApiKeyAuth: []
 *     summary: Add a student to class<->student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               classId:
 *                 type: integer
 *               studentId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Student added 
 *       404:
 *         description: Student not found
 */
router.post("/enroll-student", Api_KeyAuth, addStudentClass);

/**
 * @swagger
 * /class/{classId}/student/{studentId}:
 *   delete:
 *     security: 
 *      - ApiKeyAuth: []
 *     summary: delete one Class-Student
 *     parameters:
 *       - in: path
 *         name: classId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Class ID
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Student ID
 *     responses:
 *       200:
 *         description: Class-Student deleted
 *       404:
 *         description: Class-Student not deleted
 */
router.delete("/:classId/student/:studentId", Api_KeyAuth, deleteStudentClass);
/**
 * @swagger
 * /class/{classId}/students:
 *   get:
 *     summary: Get all students in one class
 *     parameters:
 *       - in: path
 *         name: classId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Class ID
 *     responses:
 *       200:
 *         description: Students return
 *       404:
 *         description: Class not found
 */
router.get("/:classId/students", getStudentClasses);

// Teacher <-> Class
/**
 * @swagger
 * /class/add-teacher:
 *   post:
 *     security: 
 *      - ApiKeyAuth: []
 *     summary: Add a teacher to class<->teacher
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               classId:
 *                 type: integer
 *               teachertId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Teacher added 
 *       404:
 *         description: Teacher not found
 */
router.post("/add-teacher", Api_KeyAuth, addTeacherClass);

/**
 * @swagger
 * /class/{classId}/teacher/{teacherId}:
 *   delete:
 *     security: 
 *      - ApiKeyAuth: []
 *     summary: delete one Class-Teacher
 *     parameters:
 *       - in: path
 *         name: classId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Class ID
 * 
 *       - in: path
 *         name: teacherId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Teacher ID
 *     responses:
 *       200:
 *         description: Class-Teacher deleted
 *       404:
 *         description: Class-Teacher not deleted
 */
router.delete("/:classId/teacher/:teacherId", Api_KeyAuth, deleteTeacherClass)
/**
 * @swagger
 * /class/{classId}/teachers:
 *   get:
 *     summary: Get all teachers in one class
 *     parameters:
 *       - in: path
 *         name: classId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Class ID
 *     responses:
 *       200:
 *         description: Teachers return
 *       404:
 *         description: Class not found
 */
router.get("/:classId/teachers", getTeacherClass);

export default router;
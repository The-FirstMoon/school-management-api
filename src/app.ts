import express from "express";
import { swaggerUiServe, swaggerUiSetup } from './config/swagger';
import { apiReference } from "@scalar/express-api-reference";

const PORT = process.env.PORT || 3000;
// import http from "http";

import studentRouter from "./routers/student.router";
import teacherRouter from "./routers/teacher.router";
import classRouter from "./routers/class.router";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes

app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);
app.use("/class", classRouter);


app.use("/api", swaggerAPI);
app.use('/api-docs', swaggerUiServe, swaggerUiSetup);

// const swaggerOptions = {
//   definition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'My Node.js API Documentation',
//       version: '1.0.0',
//       description: 'Interactive API documentation powered by Scalar and Swagger JSDoc',
//     },
//     servers: [
//       {
//         url: `http://localhost:${PORT}`,
//       },
//     ],
//   },
//   // Paths to files containing OpenAPI definitions (comments)
//   apis: ['./server.js'], 
// };

// // 2. Automatically generate the Swagger JSON object
// const swaggerSpec = swaggerJsdoc(swaggerOptions);

// // 3. Serve the raw Swagger JSON (Optional, good for debugging)
// app.get('/swagger.json', (req, res) => {
//   res.setHeader('Content-Type', 'application/json');
//   res.send(swaggerSpec);
// });

// // 4. Mount the Scalar UI and pass the generated Swagger JSON content
// app.use(
//   '/docs',
//   apiReference({
//     spec: {
//       content: swaggerSpec, // <-- Your generated Swagger JSON goes here
//     },
//   })
// );


// Default route
app.get("/", (req, res) => {
  res.json({
    message: "School API is running",
  });
});


import { errorHandler } from "./middleware/error.middleware";
import { swaggerAPI } from "./controllers/swagger.controller";

app.use(errorHandler);
export default app;
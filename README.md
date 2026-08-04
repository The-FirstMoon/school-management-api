# School Management API

A RESTful API built with Express.js, TypeScript, PostgreSQL, and Zod.

## Features

### Student
- Add Student
- Edit Student
- Delete Student
- Get Student
- Get Students

### Teacher
- Add Teacher
- Edit Teacher
- Delete Teacher
- Get Teacher
- Get Teachers
- Edit Salary

### Class
- Add Class
- Edit Class
- Delete Class
- Get Class
- Get Classes
- Enroll Student
- Remove Student
- Assign Teacher
- Remove Teacher
- Get Students in Class
- Get Teachers in Class

## Technologies

- TypeScript
- Express.js
- PostgreSQL
- Zod
- Swagger

## Installation

```bash
npm install
```

Create a `.env` file:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=school
```

Run the server:

```bash
npm run dev
```

## API Documentation

Swagger UI:

```
http://localhost:3000/api-docs
```

Swagger JSON:

```
http://localhost:3000/swagger
```
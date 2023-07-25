import express from "express";
import { addEnrolment, deleteEnrolment } from "../controller/users.js"

const router = express.Router();

// ENROL IN CLASS
router.post("/class/addEnrolment", addEnrolment)

// DELETE ENROLLED CLASS
router.delete("/class/deleteEnrolment", deleteEnrolment)


export default router;
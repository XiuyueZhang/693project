import express from "express";
import { addEnrolment, deleteEnrolment } from "../controller/users.js"
import { isUser } from "../controller/auth.js";

const router = express.Router();

// ENROL IN CLASS
router.post("/class/addEnrolment", isUser, addEnrolment)

// DELETE ENROLLED CLASS
router.delete("/class/deleteEnrolment", isUser, deleteEnrolment)


export default router;
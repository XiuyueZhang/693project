import express from "express";
import { addEnrolment, deleteEnrolment, getEnrolment } from "../controller/users.js"
import { isUser, verifyToken } from "../controller/auth.js";

const router = express.Router();

// GET ENROLLED CLASSES
router.get("/enrolment/:userId", verifyToken, isUser, getEnrolment)

// ENROL IN CLASS
router.post("/class/addEnrolment", verifyToken, isUser, addEnrolment)

// DELETE ENROLLED CLASS
router.delete("/class/deleteEnrolment", verifyToken, isUser, deleteEnrolment)


export default router;
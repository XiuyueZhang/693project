import express from "express";
import { addClass, updateClass, updateClassStatus } from "../controller/admin.js";
import { verifyToken, isAdmin } from "../controller/auth.js";

const router = express.Router();

// ADD, UPDATE, DELETE CLASSES
router.post("/class/add", verifyToken, isAdmin, addClass);
router.patch("/class/update/:classId", verifyToken, isAdmin, updateClass);
router.patch("/class/updateStatus/:classId", verifyToken, isAdmin, updateClassStatus)

export default router;
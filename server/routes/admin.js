import express from "express";
import { addClass, updateClass, deleteClass } from "../controller/admin.js"

const router = express.Router();

// ADD, UPDATE, DELETE CLASSES
router.post("/class/add", addClass);
router.patch("/class/update/:classId", updateClass);
router.delete("/class/delete/:classId", deleteClass)

export default router;
import express from "express";
import { addClass, updateClass, deleteClass } from "../controller/admin.js";
import { isAdmin } from "../controller/auth.js";

const router = express.Router();

// ADD, UPDATE, DELETE CLASSES
router.post("/class/add", isAdmin, addClass);
router.patch("/class/update/:classId", isAdmin, updateClass);
router.delete("/class/delete/:classId", isAdmin, deleteClass)

export default router;
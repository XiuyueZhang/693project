import express from "express";
import { homepageFeed, userRegister, userLogin, classList, classDetail }  from "../controller/general.js";

const router = express.Router();

// HOMEPAGE
router.get("/", homepageFeed)

// AUTHETICATION
router.post("/register", userRegister)
router.post("/login", userLogin)

// CLASSES VIEW
router.get("/classlist", classList)
router.get("/:classId", classDetail)

export default router;
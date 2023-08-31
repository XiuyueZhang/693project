import express from "express";
import { homepageFeed, userRegister, userLogin, classDetail, healthCheck }  from "../controller/general.js";
import { getUserInfo } from "../controller/auth.js";

const router = express.Router();

// HOMEPAGE
router.get("/", homepageFeed)
router.get("/user/info", getUserInfo)

// AUTHETICATION
router.post("/register", userRegister)
router.post("/login", userLogin)

// CLASSES VIEW
// router.get("/classlist", classList)
router.get("/classes/:classId", classDetail)

// Health check
router.get("/healthcheck", healthCheck)

export default router;
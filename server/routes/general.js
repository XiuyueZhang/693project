import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";
import { homepageFeed, userRegister, userLogin }  from "../controller/general.js";

const router = express.Router();

// HOMEPAGE
router.get("/", homepageFeed)

// AUTHETICATION
// Register
router.post("/register", userRegister)
router.post("/login", userLogin)

// CLASSES VIEW
router.get("/list", async (req, res) => {
    // get classes list
  let collection = await db.collection("records");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:classId", async (req, res) => {
    // get selected class info
  let collection = await db.collection("records");
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

export default router;
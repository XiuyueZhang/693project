import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// HOMEPAGE
router.get("/", async (req, res) => {
    // get classes list
    // get user profile
  let collection = await db.collection("records");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// AUTHETICATION
// This section will help you create a new record.
router.post("/register", async (req, res) => {
    let newDocument = {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    };
    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  });
  
router.post("/login", async (req, res) => {
    let newDocument = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
    };
    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
});

// CLASSES
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
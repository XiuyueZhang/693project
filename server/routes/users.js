import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// UPDATE CLASS BY ID
router.post("/class/add/:classId", async (req, res) => {
    let newDocument = {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      };
      let collection = await db.collection("records");
      let result = await collection.insertOne(newDocument);
      res.send(result).status(204);
});

// DELETE CLASS BY ID
router.delete("/class/delete/:classId", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("records");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;
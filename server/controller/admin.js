import db from "../db/conn.js";
import { ObjectId } from "mongodb";

// ADD, UPDATE, DELETE CLASSES
const addClass = async (req, res) => {
    const {
        title,
        level,
        videoPath,
        category,
        isActive,
    } = req.body;
    let collection = await db.collection("classes");

    const classToInsert = {
        _id: new ObjectId(),
        title,
        level,
        videoPath,
        category,
        isActive,
    };

    let result = await collection.insertOne(classToInsert);
    res.send(result).status(204);
};

// This section will help you update a record by id.
const updateClass = async (req, res) => {
    const query = { _id: req.params.classId };  //???ObjectId
    const updates = {
        $set: {
            title: req.body.title,
            level: req.body.level,
            videoPath: req.body.videoPath,
            category: req.body.category,
            isActive: req.body.isActive,
        }
    };

    let collection = await db.collection("classes");
    let result = await collection.updateOne(query, updates);

    res.send(result).status(200);
};

// This section will help you delete a record
const deleteClass = async (req, res) => {
    const query = { _id: req.params.id };

    const collection = db.collection("classes");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
};

export { addClass, updateClass, deleteClass };
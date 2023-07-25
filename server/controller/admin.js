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

// UPDATE CLASS BY ID
const updateClass = async (req, res) => {
    const query = { _id: new ObjectId(req.params.classId) }; 
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

// DELETE CLASS BY ID
const deleteClass = async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("classes");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
};

export { addClass, updateClass, deleteClass };
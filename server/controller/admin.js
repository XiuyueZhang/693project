import { ObjectId } from "mongodb";
import { addClassById, updateClassById, deleteClassById } from "../persistence/admin.js"

// ADD, UPDATE, DELETE CLASSES
const addClass = async (req, res) => {
    const {
        title,
        level,
        videoPath,
        category,
        isActive,
    } = req.body;

    const classToInsert = {
        _id: new ObjectId(),
        title,
        level,
        videoPath,
        category,
        isActive,
    };

    const response = await addClassById(classToInsert);
    res.send(response).status(204);
};

// UPDATE CLASS BY ID
const updateClass = async (req, res) => {
    const isValidClassId = isValidObjectId(req.params.classId)
    if (isValidClassId) {
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

        const response = await updateClassById(query, updates);
        res.send(response).status(200);
    } else {
        res.status(404).send("Class not found");
    }
};

// VALIDATE classId
function isValidObjectId(str) {
    try {
        const objectId = new ObjectId(str);
        return true;
    } catch (error) {
        return false;
    }
}

// DELETE CLASS BY ID
const deleteClass = async (req, res) => {
    const isValidClassId = isValidObjectId(req.params.classId)
    if (isValidClassId) {
        const query = { _id: new ObjectId(req.params.classId) };

        const response = await deleteClassById(query);
        res.send(response).status(200);
    } else {
        res.status(404).send("Class not found");
    }


};

export { addClass, updateClass, deleteClass };
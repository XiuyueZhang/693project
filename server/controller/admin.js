import { ObjectId } from "mongodb";
import { addClassById, updateClassById, updateActiveStatusClassById, findClassByTitle } from "../persistence/admin.js"
import { checkClassIdExist } from "../persistence/users.js"

// ADD, UPDATE, DELETE CLASSES
const addClass = async (req, res) => {
    const {
        title,
        level,
        videoPath,
        category,
        isActive,
    } = req.body;

    // Check if class exists
    const isClassExists = await findClassByTitle(title, videoPath)
    if (!isClassExists) {
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
    } else {
        res.status(424).send("The class may already exist, please check");
    }
};

// UPDATE CLASS BY ID
const updateClass = async (req, res) => {
    const isValidClassId = isValidObjectId(req.params.classId)
    if (isValidClassId) {
        // Check if classId exists
        const queryId = new ObjectId(req.params.classId)
        const isClassIdExists = checkClassIdExist(queryId)
        // If classId exists
        if (isClassIdExists) {
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
            // Update class info
            const response = await updateClassById(query, updates);
            res.send(response).status(200);
        } else {
            res.status(404).send("Class not found");
        }
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

// DEACTIVATE/REACTIVATE CLASS BY ID
const updateClassStatus = async (req, res) => {
    const isValidClassId = isValidObjectId(req.params.classId)
    if (isValidClassId) {
        // Check if classId exists
        const queryId = new ObjectId(req.params.classId)
        const isClassIdExists = await checkClassIdExist(queryId)
        console.log(isClassIdExists)
        // If classId exists and isActive===true
        if (isClassIdExists) {
            // Deactive class
            const query = { _id: new ObjectId(req.params.classId) };
            const updates = {
                $set: {
                    isActive: !isClassIdExists.isActive
                }
            };
            const response = await updateActiveStatusClassById(query, updates);
            console.log(response)
            res.send(response).status(200);
        }

    } else {
        res.status(404).send("Class not found");
    }
};


export { addClass, updateClass, updateClassStatus };
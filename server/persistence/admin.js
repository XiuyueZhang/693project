import db from "../db/conn.js";

const collection = db.collection("classes");

const addClassById = async (classToInsert) => {
    const result = await collection.insertOne(classToInsert);
    return result;
}

const updateClassById = async (query, updates) => {
    const result = await collection.updateOne(query, updates);
    return result;
}

const updateActiveStatusClassById = async (query, updates) => {
    const result = await collection.updateOne(query, updates);
    return result;
}

const findClassByTitle = async (title = "", videoPath = "") => {
    const titleResult = await collection.findOne({ title: title })
    const videoPathResult = await collection.findOne({ videoPath: videoPath })

    if (titleResult || videoPathResult) {
        return true;
    } else {
        return false;
    }
}

export { addClassById, updateClassById, updateActiveStatusClassById, findClassByTitle }
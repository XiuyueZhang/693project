import db from "../db/conn.js";

const collection = db.collection("classes");

const addClassById = async(classToInsert) => {
    let result = await collection.insertOne(classToInsert);
    return result;
}

const updateClassById = async(query, updates) => {
    let result = await collection.updateOne(query, updates);
    return result;
}

const deleteClassById = async(query) => {
    let result = await collection.deleteOne(query);
    return result;
}

export { addClassById, updateClassById, deleteClassById }
import db from "../db/conn.js";

const collection = db.collection("enrolments");

const enrolClassById = async(enrolmentToInsert) => {
    const result = await collection.insertOne(enrolmentToInsert);
    return result;
}

const deleteEnrolledClassById = async(query) => {
    const result = await collection.deleteOne(query);
    return result;
}

const findEnrolmentById = async (userId, classId) => {
    const query = {
        userId: userId, 
        classId: classId
    };
    const result = await collection.findOne(query);
    return result;
}

const checkUserIdExist = async (queryId) => {
    const query = {
        _id: queryId
    }
    const userCollection = db.collection("users");
    const result = await userCollection.findOne(query);
    return result;
}

const checkClassIdExist = async (queryId) => {
    const query = {
        _id: queryId
    }
    const classCollection = db.collection("classes");
    const result = await classCollection.findOne(query);
    return result;
}

export { enrolClassById, deleteEnrolledClassById, findEnrolmentById, checkUserIdExist, checkClassIdExist }
import db from "../db/conn.js";

const collection = db.collection("enrolments");

const enrolClassById = async(enrolmentToInsert) => {
    const result = await collection.insertOne(enrolmentToInsert);
    return result;
}

const deleteEnrolledClassById = async(query) => {
    let result = await collection.deleteOne(query);
    return result;
}

export { enrolClassById, deleteEnrolledClassById }
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const getClassList = async () => {
    let classesCollection = await db.collection("classes");
    let classesResults = await classesCollection.find({}).toArray();
    return classesResults;
}

const getUserInfo = async () => {
    let userCollection = await db.collection("users");
    let userResults = await userCollection.find({}).toArray();
    return userResults;
}

const getEnrolmentInfo = async () => {
    let enrolmentsCollection = await db.collection("enrolments");
    let enrolmentsResults = await enrolmentsCollection.find({}).toArray();
    return enrolmentsResults
}

const findUser = async (email) => {
    let collection = await db.collection("users");
    // check if the user email exists in DB
    const user = await collection.findOne({ email: email });
    return user
}

const insertUser = async (newUser) => {
    let collection = await db.collection("users");
    await collection.insertOne(newUser);
}

export { getClassList, getUserInfo, getEnrolmentInfo, findUser, insertUser }
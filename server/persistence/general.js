import db from "../db/conn.js";

// CLASSES
const getClassList = async () => {
    let classesCollection = await db.collection("classes");
    let classesResults = await classesCollection.find({isActive:true}).toArray();
    return classesResults;
}

const getClassDetail = async (query) => {
    let classesCollection = await db.collection("classes");
    let classesResults = await classesCollection.findOne(query);
    return classesResults;
}

// USERS
const getUserInfoById = async (userId) => {
    let userCollection = await db.collection("users");
    let userInfoResults = await userCollection.find({_id: userId}).toArray();
    return userInfoResults;
}

const getUserInfo = async () => {
    let userCollection = await db.collection("users");
    let userResults = await userCollection.find({}).toArray();
    return userResults;
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

// ENROLMENTS
const getEnrolmentInfo = async () => {
    let enrolmentsCollection = await db.collection("enrolments");
    let enrolmentsResults = await enrolmentsCollection.find({}).toArray();
    return enrolmentsResults
}

export { getClassList, getClassDetail, getUserInfo, getEnrolmentInfo, findUser, insertUser, getUserInfoById }
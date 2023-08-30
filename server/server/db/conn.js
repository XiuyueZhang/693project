import { MongoClient } from "mongodb";
import { users, classes, enrolments } from "./data.js";

const connectionString = process.env.ATLAS_URI || "";

// const client = new MongoClient(connectionString);
const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, writeConcern: { w: "majority" } });



let conn;
try {
  conn = await client.connect();
  console.log("Connected to MongoDB Atlas.");
} catch (e) {
  console.error(e);
} 

let db = conn.db("CLOUDTECH-DATABASE");

// ADD DATA ONLY ONCE
// Insert users data
// const usersCollection = db.collection('users');
// const usersResult = await usersCollection.insertMany(users);
// console.log(`${usersResult.insertedCount} users inserted.`);

// // Insert classes data
// const classesCollection = db.collection('classes');
// const classesResult = await classesCollection.insertMany(classes);
// console.log(`${classesResult.insertedCount} classes inserted.`);

// // Insert enrolment data
// const enrolmentsCollection = db.collection('enrolments');
// const enrolmentsResult = await enrolmentsCollection.insertMany(enrolments);
// console.log(`${enrolmentsResult.insertedCount} enrolments inserted.`);


export default db;

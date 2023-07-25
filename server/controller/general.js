import db from "../db/conn.js";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const homepageFeed = async (req, res) => {
    // get user profile
    let userCollection = await db.collection("users");
    let userResults = await userCollection.find({}).toArray();

    // get classes list
    let classesCollection = await db.collection("classes");
    let classesResults = await classesCollection.find({}).toArray();

    // get enrolments list
    let enrolmentsCollection = await db.collection("enrolments");
    let enrolmentsResults = await enrolmentsCollection.find({}).toArray();

    // Send user, classes and enrolments data in a single response object
    const responseData = {
        users: userResults,
        classes: classesResults,
        enrolments: enrolmentsResults
    };

    res.status(200).json(responseData);
};

const userRegister = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
    } = req.body;
    
    let collection = await db.collection("users");

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = {
      firstName,
      lastName,
      email,
      password: passwordHash,
    }

    await collection.insertOne(newUser);
    const response = userFormatResponse(newUser)
    res.send(response).status(204);
};

const passwordCheck = async (passwordPassedIn, passwordInDB) => {
    const isMatch = await bcrypt.compare(passwordPassedIn, passwordInDB);
    return isMatch;
}

const userLogin = async (req, res) => {
    const {
        email,
        password,
    } = req.body;
    
    let collection = await db.collection("users");

    const user = await collection.findOne({ email: email });
    // If user not found
    if (!user) return res.status(404).json({ msg: "Username or password does not exist. " });
    // User is found, check password
    const isMatch = passwordCheck(password, user.password);
    if(!isMatch) return res.status(404).json({ msg: "Username or password is not valid. " });

    // If password match, get token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const response = userFormatResponse(user, token)
    res.status(200).json({ response });
};

const userFormatResponse = (user, token) => {
    const response = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: token || ""
    }
    return response;
}

export { homepageFeed, userRegister, userLogin };
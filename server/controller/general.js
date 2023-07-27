import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { getClassList, getClassDetail, getUserInfo, getEnrolmentInfo, findUser, insertUser } from "../persistence/general.js"


// HOMEPAGE FEED
const homepageFeed = async (req, res) => {
    // get user profile
    const userResults = await getUserInfo();
    // get classes list
    const classesResults = await getClassList();
    // get enrolments list
    const enrolmentsResults = await getEnrolmentInfo();

    // Send user, classes and enrolments data in a single response object
    const responseData = {
        users: userResults,
        classes: classesResults,
        enrolments: enrolmentsResults
    };

    res.status(200).json(responseData);
};

// REGISTER, LOGIN
const userRegister = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
    } = req.body;
    // Validate firstName and lastName are strings
    if (typeof firstName !== "string" || typeof lastName !== "string") {
        return res.status(400).json({ msg: "First name and last name must be strings. " });
    }

    const isValidate = validateReq(email, password);
    if (isValidate.msg === "ok") {
        // check if the user email exists in DB
        const user = await findUser(email);
        if (!user) {
            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(password, salt);

            const newUser = {
                firstName,
                lastName,
                email,
                password: passwordHash,
                role: "user",
            }

            await insertUser(newUser);
            const response = userFormatResponse(newUser)
            res.send(response).status(204);
        } else {
            res.status(424).json({ msg: "Email already exists. Please log in. " });
        }
    } else {
        return res.status(400).json({ msg: isValidate.msg });
    }

};

const userLogin = async (req, res) => {
    const {
        email,
        password,
    } = req.body;
    const isValidate = validateReq(email, password);
    if (isValidate.msg === "ok") {
        const user = await findUser(email);
        // If user not found
        if (!user) return res.status(404).json({ msg: "Username or password does not exist. " });
        // User is found, check password
        const isMatch = await passwordCheck(password, user.password);
        if (!isMatch) return res.status(404).json({ msg: "Username or password is not valid. " });
        else {
            // If password matches, get token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const response = userFormatResponse(user, token);
            res.status(200).json({ response });
        }
    } else {
        return res.status(400).json({ msg: isValidate.msg });
    }
};

// FUNCTIONS FOR LOGIN AND REGISTER
const passwordCheck = async (passwordPassedIn, passwordInDB) => {
    const isMatch = await bcrypt.compare(passwordPassedIn, passwordInDB);
    return isMatch;
}

const validateReq = (email, password) => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return {msg: "Invalid email format. "}
    }

    // Validate password length
    if (password.length <= 5) {
        return { msg: "Password must be more than 5 characters. " };
    }
    return {msg: "ok"}
}

const userFormatResponse = (user, token) => {
    const response = {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        token: token || "",
    }
    return response;
}


// CLASSES
const classList = async (req, res) => {
    // get classes list
    let response = await getClassList();
    res.send(response).status(200);
};

const classDetail = async (req, res) => {
    const isValidId = isValidObjectId(req.params.classId)
    if (isValidId) {
        let query = { _id: new ObjectId(req.params.classId) };
        // get selected class info
        let response = await getClassDetail(query);
        if (!response) res.send("Class not found").status(404);
        else res.send(response).status(200);
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

export { homepageFeed, userRegister, userLogin, classList, classDetail };
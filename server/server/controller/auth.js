import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import { getUserInfoById } from "../persistence/general.js";

// VERIFY TOKEN
export const verifyToken = async (req, res, next) => {
    try {
        let token = req.header("Authorization");

        if (!token) {
            return res.status(403).send({
                data: null,
                error: "Please log in."
            });
        }

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(500).send({
            data: null,
            error: "Please log in."
        });
    }
};

// VERIFY TOKEN AND GET USER INFO WHEN PAGE LOADING
export const getUserInfo = async (req, res) => {
    try {
        let token = req.header("Authorization");

        if (!token) {
            return res.status(403).send({
                data: null,
                error: "Please log in."
            });
        }

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;

        // Get user info
        const decoded = jwt.decode(token);
        const userId = new ObjectId(decoded.id);
        const userInfoResponse = await getUserInfoById(userId);

        res.send({
            data: {
                id: userInfoResponse[0]._id,
                firstName: userInfoResponse[0].firstName,
                lastName: userInfoResponse[0].lastName,
                email: userInfoResponse[0].email,
                role: userInfoResponse[0].role
            },
            error: null
        })
    } catch (err) {
        res.status(500).send({
            data: null,
            error: "Please log in."
        });
    }
};

// VERIFY ROLE
export const isAdmin = async (req, res, next) => {
    try {
        let role = req.header("role");
        if (role === "admin") {
            next();
        } else {
            res.status(403).send({
                data: null,
                error: "Access denied."
            });
        }
    } catch (err) {
        res.status(500).json({
            data: null,
            error: err.message
        });
    }
};

export const isUser = async (req, res, next) => {
    try {
        let role = req.header("role");
        if (role === "user") {
            next();
        } else {
            res.status(403).send({
                data: null,
                error: "Access denied."
            });
        }
    } catch (err) {
        res.status(500).json({
            data: null,
            error: err.message
        });
    }
};


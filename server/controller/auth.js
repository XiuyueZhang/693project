import jwt from "jsonwebtoken";

// VERIFY TOKEN
const verifyToken = async (req, res, next) => {
    try {
      let token = req.header("Authorization");
  
      if (!token) {
        return res.status(403).send("Please log in");
      }
  
      if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length).trimLeft();
      }
  
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified;
      next();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// VERIFY ROLE
export const isAdmin = async (req, res, next) => {
    verifyToken();

    try {
        let role = req.header("role");
        if(role === "admin"){
            next();
        } else {
            res.status(403).send("Access denied");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const isUser = async (req, res, next) => {
    verifyToken();

    try {
        let role = req.header("role");
        if(role === "user"){
            next();
        } else {
            res.status(403).send("Access denied");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
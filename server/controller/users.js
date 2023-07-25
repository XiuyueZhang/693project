import db from "../db/conn.js";
import { ObjectId } from "mongodb";
import { enrolClassById, deleteEnrolledClassById } from "../persistence/users.js"

// ADD, DELETE CLASSES
const addEnrolment = async (req, res) => {
  const { userId, classId } = req.body;
  const isValidIdUser = isValidObjectId(userId);
  const isValidIdClass = isValidObjectId(classId);

  if(isValidIdUser && isValidIdClass){
      const enrolmentToInsert = {
          userId, 
          classId,
      };

      const response = await enrolClassById(enrolmentToInsert);
      res.send(response).status(204);
    } else {
        res.status(404).send("User or class not found");
    }
    
};

// VALIDATE ID
function isValidObjectId(str) {
    try {
        const objectId = new ObjectId(str);
        return true;
    } catch (error) {
        return false;
    }
}

// DELETE CLASS BY ID
const deleteEnrolment = async (req, res) => {
    const { userId, classId } = req.body;
    const isValidIdUser = isValidObjectId(userId);
    const isValidIdClass = isValidObjectId(classId);

    if(isValidIdUser && isValidIdClass){
      const userQueryId = new ObjectId(userId);
      const classQueryId = new ObjectId(classId);
      
      const query = { userId: userQueryId, classId: classQueryId };
      const response = deleteEnrolledClassById(query);
        res.send(response).status(200);
    }else {
        res.status(404).send("User or class not found");
    }
};

export { addEnrolment, deleteEnrolment };
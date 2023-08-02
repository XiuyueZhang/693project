import { ObjectId } from "mongodb";
import { enrolClassById, deleteEnrolledClassById, findEnrollmentByUserId, findEnrolmentById, checkUserIdExist, checkClassIdExist } from "../persistence/users.js"

// GET ENROLMENT
const getEnrolment = async(req, res) => {
    let { userId } = req.params;
    const isValidIdUser = isValidObjectId(userId);
    if(isValidIdUser){
        userId = new ObjectId(userId);
        console.log("wozhixingle")
        const EnrolledClassesList = await findEnrollmentByUserId(userId);
        let enrolledClassList = [];
        if(EnrolledClassesList){
            console.log(EnrolledClassesList)
            for (let classItem of EnrolledClassesList){
                console.log(classItem.classId)
                // enrolledClassList.push(classItemInfo)
            }
            console.log(enrolledClassList)
            res.status(200).send(EnrolledClassesList);
        } else{
            res.status(200).send("No enrolled classes yet")
        }
    }
}

// ADD, DELETE CLASSES
const addEnrolment = async (req, res) => {
    const { userId, classId } = req.body;
    const isValidIdUser = isValidObjectId(userId);
    const isValidIdClass = isValidObjectId(classId);

    if (isValidIdUser && isValidIdClass) {
        console.log("is valid ID")
        const queryUserId = new ObjectId(userId);
        const queryClassId = new ObjectId(classId);

        const isExistingUserValidId = await isExistingUserId(queryUserId);
        const isExistingClassValidId = await isExistingClassId(queryClassId);

        if (isExistingUserValidId && isExistingClassValidId) {
            // Check if the userId, classId pair exists
            const enrolment = await findEnrolmentById(queryUserId, queryClassId);
            if (!enrolment) {
                const enrolmentToInsert = {
                    userId: queryUserId,
                    classId: queryClassId
                };

                const response = await enrolClassById(enrolmentToInsert);
                res.status(201).send(response); // 201 (Created) for success response
            } else {
                res.status(409).send("You have already added the class"); // 409 (Conflict) for duplicate enrolment
            }
        } else {
            res.status(404).send("User or class does not exist");
        }
    } else {
        res.status(400).send("Invalid userId or classId");
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

// CHECK MATCHING USERID AND CLASSID
async function isExistingUserId(id) {
    try {
        const queryId = new ObjectId(id)
        const isExistingUserId = await checkUserIdExist(queryId);
        if (isExistingUserId) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}
async function isExistingClassId(id) {
    try {
        const queryId = new ObjectId(id)
        const isExistingClassId = await checkClassIdExist(queryId);
        if (isExistingClassId) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

// DELETE CLASS BY ID
const deleteEnrolment = async (req, res) => {
    const { userId, classId } = req.body;
    const isValidIdUser = isValidObjectId(userId);
    const isValidIdClass = isValidObjectId(classId);

    if (isValidIdUser && isValidIdClass) {
        const queryUserId = new ObjectId(userId);
        const queryClassId = new ObjectId(classId);

        // CHECK USERID AND CLASSID EXISTS
        const isExistingUserValidId = await isExistingUserId(queryUserId);
        const isExistingClassValidId = await isExistingClassId(queryClassId);
        if(isExistingUserValidId && isExistingClassValidId){
            // CHECK IF ENROLMENT EXISTS
            const isEnrolmentExists = await findEnrolmentById(queryUserId, queryClassId);
            if(isEnrolmentExists){
                const query = { userId: queryUserId, classId: queryClassId };
                const response = await deleteEnrolledClassById(query);
                res.send(response).status(200);
            } else{
                res.status(404).send("Oops, you have not enrolled in this class");
            }
        } else {
            res.status(404).send("User or class does not exist");
        }
    } else {
        res.status(404).send("User or class not found");
    }
};

export { addEnrolment, deleteEnrolment, getEnrolment };
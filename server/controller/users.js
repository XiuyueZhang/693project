import { ObjectId } from "mongodb";
import { enrolClassById, deleteEnrolledClassById, findEnrollmentByUserId, findEnrolmentById, checkUserIdExist, checkClassIdExist,
    findEnrollmentClassItemByClassId } from "../persistence/users.js"

// GET ENROLMENT
const getEnrolment = async(req, res) => {
    let { userId } = req.params;
    const isValidIdUser = isValidObjectId(userId);
    if(isValidIdUser){
        userId = new ObjectId(userId);
        const enrolledClassesList = await findEnrollmentByUserId(userId);
        let enrolledClassitemDetailList = [];
        if(enrolledClassesList){
            for (let classItem of enrolledClassesList){
                // enrolledClassList.push(classItemInfo)
                const classItemInfo = await findEnrollmentClassItemByClassId(classItem.classId);
                enrolledClassitemDetailList.push(classItemInfo)
            }
            res.status(200).send({
                data: enrolledClassitemDetailList,
                error:null
            });
        } else if(enrolledClassesList === []){
            res.status(200).send({
                data: enrolledClassitemDetailList,
                error: null,
                msg: "The use has not enrolled in any classes"
            })
        }
    }
}

// ADD, DELETE CLASSES
const addEnrolment = async (req, res) => {
    const { userId, classId } = req.body;
    const isValidIdUser = isValidObjectId(userId);
    const isValidIdClass = isValidObjectId(classId);

    if (isValidIdUser && isValidIdClass) {
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
                res.status(201).send({
                    data: response,
                    error: null
                }); // 201 (Created) for success response
            } else {
                res.status(409).send({
                    data: null,
                    error: "You have already added the class."
                }); // 409 (Conflict) for duplicate enrolment
            }
        } else {
            res.status(404).send({
                data: null, 
                error: "User or class does not exist."
            });
        }
    } else {
        res.status(400).send({
            data: null,
            error: "Invalid userId or classId."
        });
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
                res.send({
                    data: response,
                    error: null
                }).status(200);
            } else{
                res.status(404).send({
                    data: null,
                    error: "Oops, you have not enrolled in this class."
                });
            }
        } else {
            res.status(404).send({
                data: null,
                error:"User or class does not exist."
            });
        }
    } else {
        res.status(404).send({
            data: null,
            error: "User or class not found."
        });
    }
};

export { addEnrolment, deleteEnrolment, getEnrolment };
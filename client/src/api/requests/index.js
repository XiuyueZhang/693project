import api from "../config";

export const loginRequest = async(loginInfo) => {
    const response = await api.post('/login',{
        email: loginInfo.email,
        password: loginInfo.password
    });
    return response;
}

export const registerRequest = async(registerInfo) => {
    const response = await api.post('/register',{
        firstName:  registerInfo.firstName,
        lastName:  registerInfo.lastName,
        email: registerInfo.email,
        password: registerInfo.password
    });
    return response;
}

export const getHomepageContentRequest = async () => {
    const response = await api.get('/');
    return response;
    
}

export const getSelectedClassInfoRequest = async (classId) => {
    const response = await api.get(`/classes/${classId}`);
    return response;
}

export const getEnrolledClassInfoRequest = async (userId) => {
    if(api.defaults.headers.hasOwnProperty("Authorization")){
        const response = await api.get(`/user/enrolment/${userId}`);
        console.log("axios get response,", response )
        return response;
    }
}

export const userEnrollClassRequest = async(userId, classId) => {
    const response = await api.post("/user/class/addEnrolment", {
        userId:`${userId}`,
        classId: `${classId}`,
    });
    return response;
}

export const userRemoveClassRequest = async(userId, classId) => {
    const response = await api.delete("/user/class/deleteEnrolment", {
        data: {
            userId,
            classId,
        },
    });
    return response;
}



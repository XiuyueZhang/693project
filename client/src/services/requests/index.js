import api from "../config";

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



import api from "../config"

export const getHomepageContentRequest = async () => {
    const response = await api.get('/');
    return response;
}

export const getSelectedClassInfoRequest = async (classId) => {
    const response = await api.get(`/classes/${classId}`);
    return response;
}



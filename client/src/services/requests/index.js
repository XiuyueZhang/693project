import api from "../config"

export const getHomepageContentRequest = async () => {
    const response = await api.get('/');
    return response;
}



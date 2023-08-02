import axios from "axios";

const token = localStorage.getItem("token");
// Parse the JSON data
const user = JSON.parse(localStorage.getItem("user")); 

let api = null;

if (token && user) {
    api = axios.create({
        baseURL: "http://localhost:5050/",
        headers: {
            "Authorization": `Bearer ${token}`,
            "role": user.role,
        },
    });
} else {
    api = axios.create({
        baseURL: "http://localhost:5050/",
    });
}

export default api;

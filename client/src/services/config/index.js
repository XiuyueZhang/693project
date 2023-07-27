import axios from "axios";

const token = localStorage.getItem("token")
const user = localStorage.getItem("user")

const api = axios.create({
    baseURL: "http://localhost:5050/",
   });

//    If token and user not null, set header
if(token && user){
    const api = axios.create({
        baseURL: "http://localhost:5050/",
        headers:{
            "Authorization": `Bearer ${token}`,
            "role": user.role,
        }
    });
}



export default api;
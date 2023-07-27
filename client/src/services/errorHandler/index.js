import api from "../config";
import { useNavigate } from "react-router-dom";

const AxioErrorHandler = () => {
    const navigate = useNavigate();

    api.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        const status = error.response.status;
        const message = error.response.data.message;

        if (status === "400") {
            return Promise.reject(error), alert("error:", message)
        } else if (status === "403") {
            return (
                Promise.reject(error),
                alert("You do not have permission to receive the data")
            )
        } else if (status === "404") {
            return Promise.reject(error)
        } else if (status === "429") {
            return (
                Promise.reject(error),
                alert("Too many requests")
            )
        } else if (status === "401") {
            localStorage.clear();
            navigate("/login")

            return Promise.reject(error)
        }
        return
    })

    return <></>

}
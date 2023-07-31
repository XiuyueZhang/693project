import React from 'react';
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const NeedAuth = (props) => {
    const user = useSelector((state) => state.auth.user);
    const location = useLocation();

    if (user) {
        return user.role === "admin" ? props.children : <Navigate to={"/login"} />
    } else {
        return <Navigate
            to={"/login"} replace
            state={{preLocation: location}}
        />
    }

}

export default NeedAuth;
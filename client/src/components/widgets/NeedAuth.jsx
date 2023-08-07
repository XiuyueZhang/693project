import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loading from '../../scenes/loadingpage';

const NeedAuth = (props) => {
    const user = useSelector((state) => state.auth.user);
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const delay = 1000;
  
      const timer = setTimeout(() => {
        setLoading(false);
      }, delay);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);
  
    if (loading) {
      return <Loading />; // Show loading page
    }


    if (user) {
        return user.role === "admin" ? props.children : <Navigate to={"/login"} />
    } else {
        return <Navigate
            to={"/login"} replace
            state={{ preLocation: location }}
        />
    }

}

export default NeedAuth;
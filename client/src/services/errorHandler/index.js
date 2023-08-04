const createAxioErrorHandler = (navigate) => {
    const responseInterceptor = {
        onSuccess: (response) => response,
        onError: (error) => {
            const status = error.response.status;
            let message = error.response.data.message;

            if (status === 400) {
                alert("Error: " + message);
            } else if (status === 403) {
                message = "Please log in.";
            } else if (status === 429) {
                message = "Too many requests";
            } else if (status === 401) {
                localStorage.clear();
                navigate("/login");
            }

            return message;
        },
    };

    return {
        responseInterceptor,
    };
};

export default createAxioErrorHandler;

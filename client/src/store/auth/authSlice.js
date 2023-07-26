import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged: false,
    token: "",
    user: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin(state, action) {
            state.isLogged = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        setLogout(state, action) {
            state.isLogged = false;
            state.token = "";
            state.user = null;
        },
    }
})

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer


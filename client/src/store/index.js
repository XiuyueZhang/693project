import { combineReducers, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  classes: []
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setClassList: (state, action) => {
      state.classes = action.payload.classes;
    }
  },
});

const reducers = combineReducers({
  auth: authSlice.reducer
})

export const { setMode, setLogin, setLogout, setClassList } =
  authSlice.actions;
export default reducers;
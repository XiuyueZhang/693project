import { combineReducers, createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const settingsSlice = createSlice({
  name: "settings",
  initialState:{
    mode: "light",
  },
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const classSlice = createSlice({
  name: "classes",
  initialState:{
    allClasses: [],
  },
  reducers: {
    setClassList: (state, action) => {
      state.allClasses = action.payload.allClasses;
    }
  },
});

const reducers = combineReducers({
  auth: authSlice.reducer,
  settings: settingsSlice.reducer,
  classes: classSlice.reducer
})

export const { setMode } =
  settingsSlice.actions;
export const { setLogin, setLogout } =
  authSlice.actions;
export const { setClassList } =
  classSlice.actions;

export default reducers;
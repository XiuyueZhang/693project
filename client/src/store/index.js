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
    filteredClasses:[],
    selectedClass:null,
  },
  reducers: {
    setClassList: (state, action) => {
      state.allClasses = action.payload.allClasses;
    },
    setfilteredClassList:(state, action) => {
      state.filteredClasses = action.payload.filteredClasses;
    },
    setSelectedClass: (state, action) => {
      state.selectedClass = action.payload.selectedClass;
    },
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
export const { setClassList, setfilteredClassList,setSelectedClass } =
  classSlice.actions;

export default reducers;
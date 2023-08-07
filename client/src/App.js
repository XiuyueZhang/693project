import './App.css';
import Home from './scenes/homepage';
import Login from './scenes/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import ClassList from './components/class/ClassList';
import ClassDetail from './components/class/ClassDetail';
import NeedAuth from './components/widgets/NeedAuth';
import AdminAddClass from './scenes/admin/AddClass';
import { getUserInfoRequest } from './api/requests';
import { setLogin } from './store';

function App() {
  const mode = useSelector((state) => state.settings.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const loggedInUserInfo = useCallback(async (token) => {
    const response = await getUserInfoRequest(token);

    dispatch(setLogin({
      user: response.data,
      token
    }))
  }, [dispatch]);


  useEffect(() => {
    if (token) {
      loggedInUserInfo(token);
    }
  }, [token, loggedInUserInfo])


  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='/' element={<ClassList />}></Route>
              <Route path='/classes/:classId' element={<ClassDetail />}></Route>
            </Route>
            <Route
              path="/login"
              element={<Login />}
            />
            <Route path='/admin/class/update/:classId' element={<NeedAuth><AdminAddClass /></NeedAuth>} />
            <Route path='/admin/class/add' element={<NeedAuth><AdminAddClass /></NeedAuth>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

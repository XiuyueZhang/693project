import './App.css';
import Home from './scenes/homepage';
import Login from './scenes/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import ClassList from './components/class/ClassList';
import ClassDetail from './components/class/ClassDetail';
import NeedAuth from './components/widgets/NeedAuth';
import AdminHomepage from './scenes/admin/Homepage';
import { getUserInfoRequest } from './api/requests';
import { setLogin } from './store';

function App() {
  const mode = useSelector((state) => state.settings.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const loggedInUserInfo = async (token) => {
    const response = await getUserInfoRequest(token);

    dispatch(setLogin({
      user: response.data,
      token
    }))
  }

  useEffect(() => {
    if (token) {
      loggedInUserInfo(token);
    }
  }, [token])


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
            <Route path='/admin' element={<NeedAuth><AdminHomepage /></NeedAuth>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

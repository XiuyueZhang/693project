import './App.css';
import Home from './scenes/homepage';
import Login from './scenes/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import ClassList from './components/class/ClassList';
import ClassDetail from './components/class/ClassDetail';

function App() {
  const mode = useSelector((state) => state.settings.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='/' element={<ClassList/>}></Route>
              <Route path='/classes/:classId' element={<ClassDetail/>}></Route>
            </Route>
            <Route
              path="/login"
              element={<Login /> }
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

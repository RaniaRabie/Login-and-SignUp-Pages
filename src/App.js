// src/App.js

import React from "react";
import Login from "./pages/login/Login";
import TopBar from "./components/TopBar";
import ForgotPassword from "./pages/login/Forget Password/ForgotPassword";
import SetNewPassword from "./pages/login/Forget Password/SetNewPassword";
import SignUp from "./pages/login/SignUp";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { getDesignTokens } from "Themes";
import { Box } from "@mui/material";

function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = React.useState(
    localStorage.getItem("currentMode") || "light"
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <div>
      {/* The TopBar will be visible on all pages */}

      <TopBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        setMode={setMode} />

<Box sx={{  mt: "64px" }}>
    <Outlet />
  </Box>


      {/* <footer /> if you have a Footer, you can include it here */}
    </div>
  );
}
export default App;

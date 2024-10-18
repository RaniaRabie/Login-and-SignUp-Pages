import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import ForgotPassword from "./pages/login/Forget Password/ForgotPassword";
import SetNewPassword from "./pages/login/Forget Password/SetNewPassword";
import RoadmapList from "./Home/RoadmapList";
import Roadmap from "./roadmap/Roadmap";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<RoadmapList />} /> {/* Default route */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/SetNewPassword" element={<SetNewPassword />} />
      <Route path="roadmap/:id" element={<Roadmap />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="863819354066-fafo7lel76kd78g15q5bf391t0mrvmuj.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

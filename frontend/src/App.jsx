import React, { useEffect } from "react";
import Navbar from "../src/assets/components/Navbar.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./assets/pages/HomePage.jsx";
import SignUpPage from "./assets/pages/SignUpPage.jsx";
import LoginPage from "./assets/pages/LoginPage.jsx";
import SettingsPage from "./assets/pages/SettingsPage.jsx";
import ProfilePage from "./assets/pages/ProfilePage.jsx";
import { useAuthStore } from "./assets/store/useAuthStore.js";
import { Loader } from "lucide-react";
import { ToastContainer } from "react-toastify";
import { useThemeStore } from "./assets/store/useThemeStore.js";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
  const { theme } = useThemeStore();
  console.log({ onlineUsers });

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  console.log(authUser);

  return (
    <div data-theme={theme}>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route path="/settings" element={<SettingsPage />} />
        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
        />
      </Routes>

      {/* ✅ Bắt buộc có dòng này để toast hoạt động */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default App;

import { Route, Routes, useLocation } from "react-router";
import MainLayout from "./UI/layouts/MainLayout";

import AppHeader from "./UI/layouts/AppHeader";
import Login from "./UI/pages/Login";
import Register from "./UI/pages/Register";
import Dashboard from "./UI/pages/Dashboard";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  const isAuth = true;

  useEffect(() => {
    if (isAuth == false) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;

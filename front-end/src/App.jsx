import { Route, Routes, useLocation } from "react-router";
import MainLayout from "./UI/layouts/MainLayout";

import AppHeader from "./UI/layouts/AppHeader";
import Login from "./UI/pages/Login";
import Register from "./UI/pages/Register";
import Dashboard from "./UI/pages/Dashboard";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Projects from "./UI/pages/Projects";
import CreateProject from "./UI/pages/CreateProject";

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
          <Route path="/projects" element={<Projects/>} />
          <Route path="/create-project" element={<CreateProject/>} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;

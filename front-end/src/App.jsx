import { Route, Routes, useLocation } from "react-router"
import MainLayout from "./UI/layouts/MainLayout"
import Dashboard from "./UI/pages/Dashboard";
import AppHeader from "./UI/layouts/AppHeader";
import Login from "./UI/pages/Login";
import Register from "./UI/pages/Register";


function App() {
  const { pathname } = useLocation();
  const isAuthPage=pathname === "/login" || pathname === "register"
  

  return (
    <>
    {isAuthPage ?(
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    ):(
      
    <MainLayout >
   
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      

    </Routes>
    </MainLayout >

    )

    }

   


     
    </>
  )
}

export default App

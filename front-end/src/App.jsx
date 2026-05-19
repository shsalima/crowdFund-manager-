import { Route, Routes, useLocation } from "react-router"
import MainLayout from "./UI/layouts/MainLayout"
import Dashboard from "./UI/pages/Dashboard";


function App() {
  const { pathname } = useLocation();
  

  return (
    <>
   



    <MainLayout >
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      

    </Routes>
    </MainLayout >
     
    </>
  )
}

export default App

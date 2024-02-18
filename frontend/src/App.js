import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import CustomerRoutes from "./Routers/CustomerRoutes";
import AdminRoutes from "./Routers/AdminRoutes";
// import NotFound from "./Pages/Notfound";
import { useEffect, useState } from "react";  // Import useState
import SignIn from "./pages/LoginPage/SignIn";
import SignUp from "./pages/LoginPage/SignUp";
import Admin from "./Admin/Admin";

function App() {
  const [user, setUser] = useState(null);
  const jwt = localStorage.getItem("jwtTokenData"); // get from localStorage.

  useEffect(() => {
    const fetchUserData = async (jwt) => {
      try {
        // Assume you have an API endpoint for fetching user data
        const response = await fetch(`/api/user/${jwt}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const getUserData = async () => {
      if (jwt) {
        await fetchUserData(jwt);
      }
    };

    getUserData();
  }, [jwt]);

  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
      {/* //  {user?.role == "ADMIN" && ( */}
          <Route path="/admin/*" element={<Admin />} />
        {/* // }) */}
      </Routes></BrowserRouter>
      
    </div>
  );
}

export default App;

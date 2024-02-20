import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRoutes from './Routers/CustomerRoutes';
import Routers from './Routers/Routers';
import Admin from './Admin/Admin';

function App() {
  const [user, setUser] = useState(null);
  const jwt = localStorage.getItem('jwtTokenData');

  // Retrieve userData directly from localStorage
  const userData = JSON.parse(localStorage.getItem('data'));

  useEffect(() => {
    const fetchUserData = async (jwt) => {
      try {
        const response = await fetch(`/api/user/${jwt}`);
        const userData = await response.json();
        setUser(userData);
        // Save userData to localStorage
        localStorage.setItem('userData', JSON.stringify(userData));
      } catch (error) {
        console.error('Error fetching user data:', error);
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
          {userData && userData.user.role == 'ADMIN' && <Route path="/admin/*" element={<Admin />} />}
          <Route path="/*" element={<Routers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

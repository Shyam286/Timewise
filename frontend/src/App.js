
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './customer/components/Footer/Footer';
// import Product from './customer/components/Product/Product';
import SignIn from './pages/LoginPage/SignIn';

export default function App() {
  return (
    <div className='bg-yellow-100'>



      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signin" element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>

  )
}
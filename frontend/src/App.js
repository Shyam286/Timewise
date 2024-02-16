
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './customer/components/Footer/Footer';
// import Product from './customer/components/Product/Product';
import SignIn from './pages/LoginPage/SignIn';
import SignUp from './pages/LoginPage/SignUp';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
    <div className='bg-yellow-100'>



      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>

  )
}

import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import Footer from './customer/components/footer/Footer';
import Product from './customer/components/Product/product/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className='bg-yellow-100'>


      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>

  )
}
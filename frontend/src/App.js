
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';

export default function App() {
  return (
    <div className='bg-yellow-100'>

      
          <Navigation/>
          <div>
             {/* <HomePage/> */}
             <Product/> 
          </div>
          <Footer/>
    </div>

  )
}

import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
// import Product from './customer/components/Product/Product';
import SignIn from './pages/LoginPage/SignIn';

export default function App() {
  return (
    <div className='bg-yellow-100'>

      
          <Navigation/>
          <div>
             {/* <HomePage/> */}
             {/* <Product/>  */}
             <SignIn/>
             {/* <SignUp/> */}
             

          </div>
          <Footer/>
    </div>

  )
}
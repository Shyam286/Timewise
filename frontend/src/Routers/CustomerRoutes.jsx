import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "../customer/components/Navigation/Navigation";
import HomePage from "../pages/HomePage/HomePage";
// import ProductDetails from "../customer/components/Product/ProductDetails/ProductDetails";
// import Cart from "../customer/Components/Cart/Cart";
import Footer from "../customer/components/Footer/Footer";
import SignIn from "../pages/LoginPage/SignIn";
import SignUp from "../pages/LoginPage/SignUp";
import Product from "../customer/components/Product/Product/Product";
// import Cart from "../customer/Components/Cart/Cart";
// import ProductDetails from "../customer/Components/Product/ProductDetails/ProductDetails";
// import Product from "../customer/components/Product/product/Product";
// import Contact from "../Pages/Contact";
// import TearmsCondition from "../Pages/TearmsCondition";
// import PrivacyPolicy from "../Pages/Pr ivacyPolicy";
// import About from "../Pages/About";
// import Homepage from "../Pages/Homepage";
// import Navigation from "../customer/Components/Navbar/Navigation";
// import Cart from "../customer/Components/Cart/Cart";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import {Button} from "@mui/material";
// import { customTheme, customerTheme } from "../Admin/them/customeThem";
// import Order from "../customer/Components/orders/Order";
// import OrderDetails from "../customer/Components/orders/OrderDetails";
// import Checkout from "../customer/Components/Checkout/Checkout";
// import Footer from "../customer/components/Footer/Footer";
// import PaymentSuccess from "../customer/Components/paymentSuccess/PaymentSuccess";
// import RateProduct from "../customer/Components/ReviewProduct/RateProduct";

const CustomerRoutes = () => {
    const location = useLocation();
    
  
    // Only show Navigation component when not on the NotFound page
    const showNavigation = location.pathname !== "*";

    // const path=["/","/home","/about","/privacy-policy","/terms-condition","/contact","/men",`/product/${productId}`]
  return (
    <div>
    
    {/* <ThemeProvider theme={customerTheme}> */}
    {showNavigation && <Navigation />}
     <Routes>
     <Route path="/signin" element={<SignIn />}></Route>
     <Route path="/signup" element={<SignUp />}></Route>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/products" element={<Product/>}></Route>
        {/* <Route path="/about" element={<About />}></Route>
        <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-condition" element={<TearmsCondition />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route> */}
        {/* <Route path="/product/:productId" element={<ProductDetails />}></Route> */}
        {/* <Route path="/cart" element={<Cart />}></Route> */}
        {/* <Route path="/account/order" element={<OrderDetails />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        <Route path="/account/rate/:productId" element={<RateProduct />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>
    {/* </ThemeProvider> */}
      
    </div>
  );
};

export default CustomerRoutes;

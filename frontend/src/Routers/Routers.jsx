// import { Navigation } from "mdi-material-ui";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../customer/components/Navigation/Navigation";
import HomePage from "../pages/HomePage/HomePage";
import Product from "../customer/components/Product/product/Product";
import ProductDetails from "../customer/Components/Product/ProductDetails/ProductDetails";
import Cart from "../customer/Components/Cart/Cart";
import DemoAdmin from "../Admin/Views/DemoAdmin";
import SignIn from "../pages/LoginPage/SignIn";
import SignUp from "../pages/LoginPage/SignUp";
import Admin from "../Admin/Admin";



const Routers = () => {
  return (
    <div>
        <div>
             <Navigation/>
        </div>
       <div className="">
        <Routes>

        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        {/* <Route path="/about" element={<About/>}></Route>
        <Route path="/privaciy-policy" element={<PrivacyPolicy/>}></Route>
        <Route path="/terms-condition" element={<TearmsCondition/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route> */}
        <Route path="/men" element={<Product/>}></Route>
        <Route path="/product/:productId" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      

        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/demo" element={<DemoAdmin/>}></Route>

      </Routes>
       </div>
      
    </div>
  );
};

export default Routers;

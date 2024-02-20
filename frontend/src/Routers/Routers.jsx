import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../customer/components/Navigation/Navigation";
import HomePage from "../pages/HomePage/HomePage";
import Product from "../customer/components/Product/Product/Product";
import ProductDetails from "../customer/components/Product/ProductDetails/ProductDetails";
import Cart from "../customer/components/Cart/Cart";
import SignIn from "../pages/LoginPage/SignIn";
import SignUp from "../pages/LoginPage/SignUp";
import DeliveryAddressForm from "../customer/components/Checkout/DeliveryAddressForm";
import OrderSummary from "../customer/components/Checkout/OrderSummary";
import CartItem from "../customer/components/Cart/CartItem";
import CreateProduct from "../customer/components/Create/CreateProduct";
import Admin from "../Admin/Admin";
import NotFoundPage from "../pages/NotFoundPage/NotFound";
import Checkout from "../customer/components/Checkout/Checkout";

const Routers = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart/:cartId" element={<Cart />} />
          <Route path="/checkout/:cartId" element={<Checkout/>} />
          <Route path="/add/address" element={<DeliveryAddressForm />} />
          <Route path="/ordersummary/:id" element={<OrderSummary />} />
          <Route path="/cartitem" element={<CartItem />} />
          <Route path="/createproduct" element={<CreateProduct />} />
          <Route path="/*" element={<NotFoundPage/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Routers;

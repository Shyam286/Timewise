import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

const Cart = () => {
  const { cartId } = useParams();
  const [cart, setCart] = useState([]);
  
  const apiUrl = `http://localhost:8082/api/public/user/cart/${cartId}`;

  useEffect(() => {
   try{
      const res = axios.get(apiUrl)
      setCart(res.cart)
      console.log("DATA", cart)
  }catch (error) {
    console.error('Error adding product to cart:', error);
  }
  }, [cartId]); // Make sure to include cartId in the dependency array to trigger the effect when cartId changes

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="lg:col-span-2 lg:px-5 bg-white">
          {Array.isArray(cart) &&
            cart.map((productItem) => (
              <CartItem key={productItem.id} product={productItem} />
            ))}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black ">
                <span>Price </span>
                <span>₹</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-700">-₹</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-700">Free</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="text-green-700">₹</span>
              </div>
            </div>

            <Button
              variant="contained"
              type="submit"
              sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
            >
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
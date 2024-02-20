import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import CartItem from '../Cart/CartItem';

const OrderSummary = () => {
  const { cartId } = useParams();
  const [cart, setCart] = useState({ id: 0, userId: 0, name: '', totalPrice: 0, product: [] });
  const [userAddress, setUserAddress] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartResponse = await axios.get(`http://localhost:8082/api/public/user/cart/${cartId}`);
        setCart(cartResponse.data);

        // Fetch user address
        const userId = cartResponse.data.userId;
        const addressResponse = await axios.get(`http://localhost:8082/api/public/user/address/${userId}`);
        setUserAddress(addressResponse.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCart();
  }, [cartId]);

  useEffect(() => {
    setOrderPlaced(true);
    // This effect runs only once after the component mounts
    const timeoutId = setTimeout(() => {
      Navigate('/');
    }, 5000);

    // Clear the timeout if the component unmounts or if you want to cancel it for any reason
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return (
    <div>
      {orderPlaced && (
        <div className="bg-green-100 border-b-4 border-green-500 p-3 text-green-700 text-center font-semibold">
          Your order is placed!
        </div>
      )}

      <div className="lg:grid grid-cols-3 lg:px-16 relative mt-4">
        <div className="lg:col-span-2 lg:px-5 bg-white">
          {Array.isArray(cart.product) &&
            cart.product.map((productItem) => (
              <CartItem key={productItem.id} item={productItem} />
            ))}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div>
                <h2 className="text-xl font-bold mb-2">Delivery Address</h2>
                {userAddress && (
                  <div>
                    <p>{userAddress.street}, {userAddress.buildingName}</p>
                    <p>{userAddress.city}, {userAddress.state}, {userAddress.country} - {userAddress.pincode}</p>
                  </div>
                )}
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{cart.totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-700">₹{/* Add discount logic here */}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-700">Free</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="text-green-700">₹{cart.totalPrice}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

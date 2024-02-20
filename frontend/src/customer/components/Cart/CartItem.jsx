import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";

const CartItem = ({ item }) => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.image1}
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.title}</p>
          <p className="opacity-70 mt-2">Brand: {item.brand} </p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="font-semibold">₹{item.discountedPrice}</p>
            <p className="opacity-50 line-through">₹{item.price}</p>
            <p className="font-semibold text-lg text-green-600">{Math.floor(((item.price-item.discountedPrice)/item.price)*100)}% off</p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">

      </div>

      {/* <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
        <Button>Remove</Button>
      </div> */}
    </div>
  );
};

export default CartItem;

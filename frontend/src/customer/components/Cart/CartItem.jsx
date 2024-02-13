import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";


const CartItem = ({ item,showButton }) => {

  return (
  <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
          <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
            <img
            className="w-full h-full object-cover object-top"
            src="https://transform.octanecdn.com/crop/700x650/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_832196805.png"
            alt=""
            />
      </div>
        
        
        
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Bugatti</p>
          <p className="opacity-70">Size: L ,White</p>
          <p className="opacity-70 mt-2">Seller: jacob & co. </p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹5000</p>
            <p className="font-semibold text-lg">
              ₹4500
            </p>
            <p className="text-green-600 font-semibold">
               5 % off
            </p>
          </div>
          </div>
         </div>


        <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton >
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm"></span>
          <IconButton >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        </div>


        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          
        <Button >
          remove
        </Button>
        </div>
     
     
    

  </div>
  );
};

export default CartItem;

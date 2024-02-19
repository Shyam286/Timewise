import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";


  
const CartItem = ({ item }) => {

  //const { removeFromCart, updateCartItem } = useState(null); 

  // const handleRemove = () => {
  //   removeFromCart(item.productId); 
   
  //   axios.delete(`http://localhost:8082/api/public/carts/1/products/${item.productId}`)
  //     .then(response => {
  //       console.log('Item removed from backend:', response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error removing item from backend', error);
  //     });
  // };

  // const handleQuantityChange = (quantity) => {
  //   updateCartItem(item.productId, quantity); // Call the updateCartItem function from your CartContext
  //   // Additionally, you can make an API call to update the item quantity in the backend
  //   axios.put(`http://localhost:8082/api/public/carts/1/products/${item.productId}/quantity/${quantity}`)
  //     .then(response => {
  //       console.log('Item quantity updated in backend:', response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error updating item quantity in backend', error);
  //     });
  // };

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
          <p className="font-semibold">{item.title}</p>
          <p className="opacity-70 mt-2">Brand :{item.brand} </p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹{item.productPrice}</p>
            <p className="font-semibold text-lg">
              ₹{item.discount}
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

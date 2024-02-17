import React from 'react'
import AddressCard from '../adreess/AdreessCard'
import { Grid , Box ,Button } from '@mui/material'
import OrderTraker from './OrderTracker'
import { deepPurple } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";

const OrderDetails =() => {
return (


    <div className="px-5 lg:px-20 ">
       
           <div>
           <h1 className="font-bold text-xl py-7">Delivery Address</h1>
                <AddressCard />
           </div>
              
            <div className='py-20'>
                <OrderTraker activeStep={3} />
            </div>
           
            <Grid  conatiner className='space-x-5 '>
                {[1,1,1].map((item) => <Grid item  className="shadow-xl rounded-md p-5 border" sx={{ alignItems: "center", justifyContent: "space-between" }} >
  
                <Grid item xs={6}>
                  <div className='flex items-center space-x-4'>
                  <img
                    className="w-[5rem] h-[5rem] object-cover object-top"
                    src="https://media.richardmille.com/wp-content/uploads/2020/01/19100510/richard-mille-rm-006-tourbillon-felipe-massa-45262.jpg?dpr=1&width=2000"
                    alt="" />
                  
                    <div className="space-y-2 ml-5">
                         <p className="font-semibold"> Watch Bugatti</p>
                         <p className="space-x-5 opacity-50 text-xs font-semibold">
                        <span>Color: Silver Black</span> 
                        <span>Size: M</span> </p>
                    
                    <p>Seller: Jacob</p>
                    <p>₹4500</p>
                    </div>
                  </div>
                </Grid>

                <Grid item >
                    <Box sx={{ color: deepPurple[500] }}  className="flex items-center cursor-pointer" >
                    <StarIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-2xl"/> <span>Rate & Review Product</span>
                    </Box>  
                </Grid>

               
              
            </Grid>)}
                

            
            </Grid>  
                
    </div>
)
  
}

export default OrderDetails
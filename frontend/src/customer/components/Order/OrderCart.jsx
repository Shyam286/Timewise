import React from 'react'
import { Grid } from '@mui/material'
import AdjustTwoToneIcon from '@mui/icons-material/AdjustTwoTone';
 
const randomSrc = "https://media.richardmille.com/wp-content/uploads/2020/01/19100510/richard-mille-rm-006-tourbillon-felipe-massa-45262.jpg?dpr=1&width=2000"

const OrderCart =() => {
  return (
    <div className='p-2.5 shadow-sm shadow-green-400 hover:border-violet-900 border'>
        <Grid container spacing={2} sx ={{justifyContent : "space-between"}} >
                
                
                <Grid item xs ={6} >
                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src ="https://media.richardmille.com/wp-content/uploads/2020/01/19100510/richard-mille-rm-006-tourbillon-felipe-massa-45262.jpg?dpr=1&width=2000" />
                            <div className='ml-5' space-y-2>
                                <p className=''>CALIBRE RM002-V2</p>
                                <p className='opacity-50 text-xs font-semibold'>Color : Black</p>
                            </div>

                           

                    </div>
                </Grid>


                <Grid item xs ={2}>
                    <p>₹9999</p>
          
                </Grid>
                
                


                <Grid item xs={4}>
                    {true && <p>
                        <AdjustTwoToneIcon  sx ={{width:"15px", height:"15px" }} className='text-green-600 mr-2'/>
                        <span>
                            Delivered On September 25
                        </span>
                    </p> }

                    {false && <p>
                        <span>
                            Expected Delivery on September 30
                        </span>
                    </p> }
                </Grid>




        </Grid>

    </div>
  )
}

export default OrderCart
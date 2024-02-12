import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import logo from '../../../images/logo.png'; // Import logo directly

const Footer = () => {
  return (
    <div>
      <Grid
        className='bg-black text-white text-center mt-10 p-10'
        container
        sx={{ bgcolor: 'black', color: 'white', py: 3 }}
      >
        <img className='p-5 h-[10rem]' src={logo} alt='Logo' sx={{'padding-left':"10px"}}/>
        <Grid item xs={12} sm={6} md={3} >
            
          
          <Typography className="pb-50" variant='h6'>
            Timewise
          </Typography>
          <div>
            <Button className="pb-5" variant='h6'>
              About
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

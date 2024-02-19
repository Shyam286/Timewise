
import React from 'react';
import { Grid, Box, Button, TextField } from '@mui/material';
import axios from 'axios'; // Import Axios library
import BasicInfoCard from '../BasicInfo/BasicInfoCard';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const DeliveryAddressForm = () => {

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = JSON.parse(localStorage.getItem("data"));
    const userIdTemp = userData.user.id;
    const address = {
      userId:  userIdTemp,
      street: data.get('street'),
      buildingName: data.get('buildingName'),
      city: data.get('city'),
      state: data.get('state'),
      pincode: data.get('pincode'),
    };

    try {
      // Make a POST request to your server endpoint with the address data
      const response = await axios.post('http://localhost:8082/api/public/user/address/add', address);
      
      // Handle the response if needed
      console.log('Server response:', response.data);
      toast.success("Address added successfully!!");
      navigate(`/checkout/${userIdTemp}`)

      //${cartId}

    } catch (error) {
      // Handle errors
      console.error('Error sending address data:', error.message);
    }
  };

  return (
    <div>
     <Grid container spacing={4}>
        
        <Grid item xs={12} lg={5}>
            <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
            <div className="p-5 py-7 border-b cursor-pointer" >
              <BasicInfoCard />
              <Button
              sx={{ mt: 2 }}
              size="large"
              variant="contained"
              color="primary"
               > Deliverd Here
              </Button>
            </div>
          </Box>
        </Grid>

        <Grid item xs={12} lg={7}>
        <Box className="border rounded-md shadow-md p-5">
          <h2 className="p-2">Enter Address:</h2>
          <form onSubmit={handleSubmit} >
            <Grid container spacing={3}>
              
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid> */}
              
              <Grid item xs={12}>
                <TextField
                  required
                  id="street"
                  name="street"
                  label="Street"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  id="buildingName"
                  name="buildingName"
                  label="Building Name"
                  fullWidth
                />
              </Grid>



              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="pincode"
                  name="pincode"
                  label="Pincode / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                />
              </Grid>

              
              <Grid item xs={12}>
                <Button
                  sx={{ padding: ".9rem 1.5rem" }}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Deliver Here
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
    </div>
  )
};

export default DeliveryAddressForm;

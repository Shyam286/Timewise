import React, { useState } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';

const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create FormData object to send image file along with other data
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);

    // Here you can perform any validation or send the data to the server to create the product
    console.log('Product Data:', formData);

    // You can also reset the form fields after submission
    setProductName('');
    setDescription('');
    setPrice('');
    setImage(null);
  };

  return (
    <Box className=''>
      <Typography variant='h1'>Create Product</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Product Name"
          variant="outlined"
          value={productName}
          onChange={handleProductNameChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={handleDescriptionChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Price"
          variant="outlined"
          value={price}
          onChange={handlePriceChange}
          fullWidth
          margin="normal"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
          id="upload-image"
        />
        <label htmlFor="upload-image">
          <Button
            variant="contained"
            component="span"
            color="primary"
            size="large"
          >
            Upload Image
          </Button>
        </label>
        {image && <Typography>{image.name}</Typography>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          Create
        </Button>
      </form>
    </Box>
  );
}

export default CreateProduct;

import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateProductForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        brand: '',
        description: '',
        price: '',
        discountedPrice: '',
        quantity: '',
        image1: '',
        image2: '',
        image3: '',
        color: '',
        category: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const apiUrl = `http://localhost:8082/api/admin/add`;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send the form data to the backend using Axios
            const response = await axios.post(apiUrl, formData);

            // Display a success message using react-toastify
            toast.success('Product created successfully!', {
                position: 'top-right',
                autoClose: 3000, // Close the notification after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            // Clear the form after successful submission
            setFormData({
                title: '',
                brand: '',
                description: '',
                price: '',
                discountedPrice: '',
                quantity: '',
                image1: '',
                image2: '',
                image3: '',
                color: '',
                category: '',
            });
        } catch (error) {
            // Handle errors and display an error message if needed
            console.error('Error creating product:', error.message);
            toast.error('Error creating product. Please try again.');
        }
    };


    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Create Product Form</h2>
            <form onSubmit={handleSubmit}>
    
                <div className="grid grid-cols-2 gap-4">

                    {/* Brand */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>

                    {/* Brand */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Brand:</label>
                        <input
                            type="text"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
    
                    {/* Description */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Description:</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            maxLength="250"
                            className="mt-1 p-2 w-full border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
    
                    {/* Price */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Price:</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
    
                    {/* Discounted Price */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Discounted Price:</label>
                        <input
                            type="number"
                            name="discountedPrice"
                            value={formData.discountedPrice}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
    
                    {/* Quantity */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Quantity:</label>
                        <input
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
    
                    {/* Image 1 Link */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Image 1 Link:</label>
                        <input
                            type="text"
                            name="image1"
                            value={formData.image1}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
    
                    {/* Image 2 Link */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Image 2 Link:</label>
                        <input
                            type="text"
                            name="image2"
                            value={formData.image2}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
    
                    {/* Image 3 Link */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Image 3 Link:</label>
                        <input
                            type="url"
                            name="image3"
                            value={formData.image3}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
    
                    {/* Color */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Color:</label>
                        <input
                            type="text"
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
    
                    {/* Category */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Category:</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                </div>
    
                <div className="mb-4">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        
                    >
                        Create Product
                    </button>
                </div>
            </form>
    
            {/* Toast container for displaying success messages */}
            <ToastContainer />
        </div>
    );
    
    
};

export default CreateProductForm;

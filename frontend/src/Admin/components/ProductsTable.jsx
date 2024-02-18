import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsTable = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5); // Adjust the number of products per page

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/public/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error.message);
            }
        };

        fetchProducts();
    }, []);

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleEdit = async (productId, updatedQuantity) => {
        try {
            await axios.put(`/api/products/${productId}`, { quantity: updatedQuantity });
            // Assuming your backend updates the product quantity successfully
            // You can also update the local state or refetch products from the server
            console.log(`Successfully updated product with ID ${productId}`);
        } catch (error) {
            console.error('Error updating product:', error.message);
        }
    };

    const handleDelete = async (productId) => {
        try {
            await axios.delete(`/api/products/${productId}`);
            // Assuming your backend deletes the product successfully
            // You can also update the local state or refetch products from the server
            console.log(`Successfully deleted product with ID ${productId}`);
        } catch (error) {
            console.error('Error deleting product:', error.message);
        }
    };

    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">Products Table</h2>

            {/* Display the table of products */}
            <table className="w-full border border-collapse">
                <thead>
                    <tr>
                        <th className="border p-2">Product ID</th>
                        <th className="border p-2">Title</th>
                        <th className="border p-2">Small Image</th>
                        <th className="border p-2">Brand</th>
                        <th className="border p-2">Quantity</th>
                        <th className="border p-2">Discounted Price</th>
                        <th className="border p-2">Price</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.map((product) => (
                        <tr key={product.id} className="border">
                            <td className="border p-2">{product.id}</td>
                            <td className="border p-2">{product.title}</td>
                            <td className="border p-2">
                                <img src={product.smallImage1} alt={product.title} className="w-16 h-16 object-cover" />
                            </td>
                            <td className="border p-2">{product.brand}</td>
                            <td className="border p-2">
                                <input
                                    type="number"
                                    value={product.quantity}
                                    onChange={(e) => handleEdit(product.id, e.target.value)}
                                    className="w-16 p-1 border"
                                />
                            </td>
                            <td className="border p-2">{product.discountedPrice}</td>
                            <td className="border p-2">{product.price}</td>
                            <td className="border p-2">
                                <button
                                    onClick={() => handleEdit(product.id, product.quantity)}
                                    className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(product.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="mt-4">
                {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className="bg-gray-300 px-3 py-1 mr-2 rounded"
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductsTable;

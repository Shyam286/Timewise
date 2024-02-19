import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrdersTable = () => {
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(5); // Adjust the number of orders per page
    const apiUrl = `http://localhost:8082/api/admin/orders`;
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(apiUrl);
                console.log(response.data)
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error.message);
            }
        };

        fetchOrders();
    }, []);

    // Pagination logic
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            await axios.put(`/api/orders/${orderId}`, { status: newStatus });
            // Assuming your backend updates the order status successfully
            // You can also update the local state or refetch orders from the server
            console.log(`Successfully updated order with ID ${orderId} - New Status: ${newStatus}`);
        } catch (error) {
            console.error('Error updating order status:', error.message);
        }
    };

    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">Orders Table</h2>

            {/* Display the table of orders */}
            <table className="w-full border border-collapse">
  <thead>
    <tr>
      <th className="border p-2">Order ID</th>
      <th className="border p-2">Email</th>
      <th className="border p-2">Order Date</th>
      <th className="border p-2">Status</th>
      <th className="border p-2">Payment</th>
      <th className="border p-2">Total Amount</th>
    </tr>
  </thead>
  <tbody>
    {currentOrders.map((order) => (
      <React.Fragment key={order.orderId}>
        <tr className="border">
          <td className="border p-2">{order.id}</td>
          <td className="border p-2">{order.email}</td>
          <td className="border p-2">{order.orderDate}</td>
          <td className="border p-2">
            <select
              value={order.orderStatus}
              onChange={(e) => handleStatusChange(order.orderId, e.target.value)}
              className="w-32 p-1 border"
            >
              {/* Add your status options here */}
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </td>
          <td className="border p-2">{order.payment}</td>
          <td className="border p-2">{order.totalAmount}</td>
        </tr>

        <tr>
          <td colSpan="6">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Product</th>
                  <th className="border p-2">Quantity</th>
                  <th className="border p-2">Price</th>

                  {/* Add more headers if needed */}
                </tr>
              </thead>
              <tbody>
                {order.orderItems.map((item) => (
                  <tr key={item.productId} className="border">
                    <td className="border p-2">{item.product.title}</td>
                    <td className="border p-2">{item.quantity}</td>
                    <td className="border p-2">{item.product.discountedPrice}</td>

                    {/* Add more cells if needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      </React.Fragment>
    ))}
  </tbody>
</table>
            {/* Pagination */}
            <div className="mt-4">
                {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }, (_, index) => (
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

export default OrdersTable;

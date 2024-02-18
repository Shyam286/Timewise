import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomersTable = () => {
    const [customers, setCustomers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [customersPerPage] = useState(5); // Adjust the number of customers per page

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get('/api/customers');
                setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching customers:', error.message);
            }
        };

        fetchCustomers();
    }, []);

    // Pagination logic
    const indexOfLastCustomer = currentPage * customersPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
    const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">Customers Table</h2>

            {/* Display the table of customers */}
            <table className="w-full border border-collapse">
                <thead>
                    <tr>
                        <th className="border p-2">User ID</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {currentCustomers.map((customer) => (
                        <tr key={customer.userId} className="border">
                            <td className="border p-2">{customer.userId}</td>
                            <td className="border p-2">{customer.name}</td>
                            <td className="border p-2">{customer.email}</td>
                            <td className="border p-2">{customer.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="mt-4">
                {Array.from({ length: Math.ceil(customers.length / customersPerPage) }, (_, index) => (
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

export default CustomersTable;

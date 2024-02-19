import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Assuming you use react-router-dom for navigation

const UserProfile = () => {
    // Get user from local storage
    const user = JSON.parse(localStorage.getItem('user'));

    // Get the history object for redirection
    const history = useHistory();

    // Function to get the first letter of the name
    const getFirstLetter = (name) => {
        return name ? name[0].toUpperCase() : '';
    };

    useEffect(() => {
        // Check if user is not found in local storage
        if (!user) {
            // Redirect to signin page
            history.push('/signin');
        }
    }, [user, history]);

    if (!user) {
        // If user is still not found after redirect, return null or render a loading message
        return null;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500">
            <div className="bg-white p-8 rounded-md shadow-md">
                <h2 className="text-3xl font-extrabold mb-4 text-gray-800">User Profile</h2>
                <div className="flex items-center mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white mr-4">
                        {getFirstLetter(user.name)}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">{user.name}</h3>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                </div>
                <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">User Details</h4>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>{`Age: ${user.age}`}</li>
                        <li>{`Address: ${user.address}`}</li>
                        {/* Add more user details as needed */}
                    </ul>
                </div>
                <Link
                    to="/edit-profile" // Adjust the route based on your application structure
                    className="inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Edit Profile
                </Link>
            </div>
        </div>
    );
};

export default UserProfile;

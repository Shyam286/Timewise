import React from "react";

const BasicInfoCard = () => {
  // Retrieve user data from localStorage
  const userData = JSON.parse(localStorage.getItem("data"));

  return (
    <div>
      <div className="space-y-3">
        {/* Display user's name */}
        <p className="font-semibold">{`${userData.user.firstname} ${userData.user.lastname}`}</p>

        {/* Display user's address
        <p>{`${userData.address}, ${userData.city} - ${userData.zipCode}`}</p> */}

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          {/* Display user's phone number */}
          <p>{userData.user.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoCard;

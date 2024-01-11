import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User1 = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [id]);

  return (
    <div>
      <h1 className="bg-gray-500 text-white text-center text-2xl">-User Details-</h1>
      {userData ? (
        <div>
          <h1 className="text-center text-green-900 text-3xl">User is: {userData.name}</h1>
          <p>Email: {userData.email}</p>
          {/* Render other user data fields */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

// export default User1;


// Both are same but this one is with .then.catch
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const User = () => {
//   const { id } = useParams();
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Make an HTTP request to your backend API
//     fetch(`/api/users/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         // Update the component state with user data
//         setUserData(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });
//   }, [id]);

//   return (
//     <div>
//       <h1 className="bg-gray-500 text-white text-center text-2xl">-User Details-</h1>
//       {userData ? (
//         <div>
//           <h1 className="text-center text-green-900 text-3xl">User is: {userData.name}</h1>
//           <p>Email: {userData.email}</p>
//           {/* Render other user data fields */}
//           </div>
//           ) : (
//             <p>Loading user data...</p>
//           )}
//         </div>
//       );
//     };
    
//     export default User;
     
//===============================================important (Attention here)=============================================
// If you have a backend with user details in a database and want to fetch user details from a URL, you need to set up a backend API to handle these requests. The API should be responsible for querying the database and providing user details in response to the client's requests.

// Here's a general outline of the steps you would need to follow:

// Set Up Backend API:

// Create a backend API using a server-side framework or technology of your choice (e.g., Node.js with Express, Django, Ruby on Rails, etc.).
// Implement an endpoint or route for fetching user details based on user IDs. For example, you could have an endpoint like /api/users/:id that takes the user ID as a parameter.
// Backend Database:

// Ensure that your backend is connected to the database where user details are stored.
// Frontend Code (React):

// Use a library like axios or the built-in fetch function to make HTTP requests to your API from your React frontend.
// Here's an example of how you can fetch user details in your React component:

// javascript

import React, { useState, useEffect } from "react";
import axios from "axios"; // You may need to install this library

const User2 = () => {
  const [userData, setUserData] = useState(null);
  const userId = "Mayank"; // Replace with the actual user ID you want to fetch

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`); // Replace with your API endpoint
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div>
      <h2>User Details</h2>
      {userData ? (
        <div>
          <p>User: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Render other user data fields */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default User2;
// In this code, we use the axios library to make a GET request to your API endpoint (e.g., /api/users/:id) and retrieve the user details.

// Make sure you have your backend API set up correctly to handle these requests and return the user details from the database. Additionally, you should replace "Mayank" with the actual user ID you want to fetch.
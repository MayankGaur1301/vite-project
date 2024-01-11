import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="bg-gray-500 text-white text-center text-2xl">-User Details-</h1>
      <h1 className="text-center text-green-900 text-3xl">User is: {id}</h1>
    </div>
  );
};

export default User;
 
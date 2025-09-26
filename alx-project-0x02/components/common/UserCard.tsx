import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="mb-1 text-gray-700">Email: {email}</p>
      <div className="text-sm text-gray-500">
        <div>Address:</div>
        <div>{address.street}, {address.suite}</div>
        <div>{address.city}, {address.zipcode}</div>
      </div>
    </div>
  );
};

export default UserCard;

"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import LoaderSpinner from "../components/loaderspinner/LoaderSpinner";

const User = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoaderSpinner />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen p-4 bg-gray-100">
        <p>Error loading data: {error.message}</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen p-4 bg-gray-100">
        <p>No data to show</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* User List Section */}
      <div className="w-full md:w-[40%] bg-gray-50 border-r border-gray-200">
        <div className="p-4 h-screen flex flex-col">
          <h3 className="text-center text-3xl font-bold mb-4">User List</h3>
          <div className="overflow-y-auto flex-1">
            <UserList
              users={users}
              selectedUser={selectedUser}
              onSelectUser={setSelectedUser}
            />
          </div>
        </div>
      </div>

      {/* User Details Section */}
      <div className="flex-1 p-4 bg-gray-50">
        <h3 className="text-center text-3xl font-bold mb-4">User Details</h3>
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
          <UserDetails user={selectedUser} />
        </div>
      </div>
    </div>
  );
};

export default User;

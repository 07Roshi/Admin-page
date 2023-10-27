import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage = ({ users }) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-cyan-400 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-5">
          {users.map((user) => (
            <div key={user.id} className="relative flex flex-col items-center justify-center p-4 bg-white bg-opacity-70 rounded shadow transform transition duration-500 ease-in-out hover:scale-105 hover:bg-gray-200">
              <img src={user.image} alt={user.name} className="object-cover w-full h-32 rounded mb-4" />
              <h3 className="text-lg font-semibold mb-2">{user.name}</h3>
              <p className="text-gray-700">Role: {user.role}</p>
              <Link to={`/user-detail/${user.id}`} className="mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-800">View</Link>
            </div>
          ))}
        </div>
    </div>
  );
};

export default AdminPage;

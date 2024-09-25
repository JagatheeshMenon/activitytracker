import React from "react";

function SideBarDetail({ handleLogin }) {
  return (
    <div className="w-64 bg-gray-800 h-screen p-4 text-white relative z-10">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul>
        <li className="mb-2 p-2 rounded hover:bg-gray-600">Dashboard</li>
        <li className="mb-2 p-2 rounded hover:bg-gray-600">Profile</li>
        <li className="mb-2 p-2 rounded hover:bg-gray-600">Settings</li>
        <li className="mb-2 p-2 rounded hover:bg-gray-600">
          {" "}
          <button onClick={handleLogin}>Login</button>
        </li>
      </ul>
    </div>
  );
}

export default SideBarDetail;

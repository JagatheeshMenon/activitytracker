import React from "react";

function SideBarDetail({ handleLogin }) {
  return (
    <div className="w-64 bg-gray-800 h-screen p-4 text-white relative z-10">
      <h2 className="text-xl font-bold mb-4">My Achievements</h2>
      <ul>
        <li className="mb-2 p-2 rounded hover:bg-gray-600">Dashboard</li>
        <li className="mb-2 p-2 rounded hover:bg-gray-600">Projects</li>
        <li className="mb-2 p-2 rounded hover:bg-gray-600">Contact</li>
        <li className="mb-2 p-2 rounded hover:bg-gray-600">About me</li>
        <li className="mb-2 p-2 rounded hover:bg-gray-600">
          {" "}
          <button onClick={handleLogin}>Login</button>
        </li>
      </ul>
    </div>
  );
}

export default SideBarDetail;

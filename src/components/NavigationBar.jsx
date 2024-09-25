import React from "react";

function NavigationBar({ handleLogin }) {
  return (
    <div className="flex flex-col w-full">
      <nav className="bg-blue-600 text-white p-4 fixed w-[calc(100%-16rem)] left-65 top-0">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Navbar</h1>
          <ul className="flex space-x-4">
            <li className="hover:bg-blue-500 p-2 rounded">Home</li>
            <li className="hover:bg-blue-500 p-2 rounded">About</li>
            <li className="hover:bg-blue-500 p-2 rounded">Contact</li>
            <li className="hover:bg-blue-500 p-2 rounded">
              <button onClick={handleLogin}>Login</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;

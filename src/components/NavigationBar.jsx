import React from "react";

function NavigationBar({ handleLogin }) {
  const profileToggle = () => {
    console.log("Profile icon clicked");
    // Logic for profile dropdown or any other functionality
  };

  return (
    <div className="flex flex-col w-full">
      <nav className="bg-blue-900 text-white p-4 fixed w-full left-0 top-0">
        <div className="flex justify-between items-center">
          {/* Navbar Title */}
          <h1 className="text-2xl font-bold">Demographics</h1>

          {/* Navigation Links */}
          <ul className="flex space-x-4 items-center">
            {/* GitHub Link */}
            <li className="hover:bg-blue-500 p-2 rounded">
              <a
                href="https://github.com/JagatheeshMenon"
                className="text-white no-underline hidden md:block lg:block"
              >
                Github
              </a>
            </li>

            {/* Profile Section */}
            <li className="flex items-center space-x-2">
              {/* Profile Image */}
              <img
                onClick={profileToggle}
                className="inline-block h-8 w-8 rounded-full cursor-pointer"
                src="https://picsum.photos/210"
                alt="Profile"
              />
              {/* Username */}
              <span className="hover:bg-blue-500 p-2 rounded">Jagatheesh</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;

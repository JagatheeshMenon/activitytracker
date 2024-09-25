import "./App.css";
import SideBarDetail from "./components/SideBarDetail";
import NavigationBar from "./components/NavigationBar";
import { useState } from "react";
import { Logindialog } from "./components/Logindialog";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track whether the popup is shown

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn); // Toggle the popup when clicking the login button
  };

  const handleClose = () => {
    setIsLoggedIn(false); // Close the popup when clicking the close button
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <SideBarDetail handleLogin={handleLogin} />
      <NavigationBar />
      {/* Render the login popup when isLoggedIn is true */}
      {isLoggedIn && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <Logindialog handleClose={handleClose} /> {/* Pass handleClose */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

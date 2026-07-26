import { useState } from "react";
import "./App.css";

import Greeting from "./components/Greeting";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div className="container">
      <Greeting isLoggedIn={isLoggedIn} />

      {button}

      <hr />

      {isLoggedIn ? (
        <div>
          <h2>Flight Ticket Booking</h2>

          <p>You can now book your flight tickets.</p>
        </div>
      ) : (
        <div>
          <h2>Flight Details</h2>

          <p>Guests can browse available flights.</p>

          <ul>
            <li>Chennai → Delhi</li>
            <li>Bangalore → Mumbai</li>
            <li>Hyderabad → Kolkata</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
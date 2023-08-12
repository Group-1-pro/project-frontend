import React from 'react';
import { useAuth } from '../contexts/auth';

const Navbar = () => {
  const auth = useAuth(); // Use the useAuth hook

  const handleLogout = () => {
    auth.logout(); // Call the logout function from the authentication context
    // You might also want to redirect the user to the login page or home page
    // after successful logout
  };

  return (
    <div>
      <header className="header">
        <h1 className="headerLogo">
          <a className="headerTitle" href="/">
            WanderHands
          </a>
        </h1>
        <ul className="main-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          {auth.tokens ? (
            <li>
              <a href="#" onClick={handleLogout}>
                Logout
              </a>
              <li><a href="/favorites">Profile</a></li>
            </li>
          ) : (
            <>
              <li><a href="/login">Login</a></li>
              <li><a href="/signup">Sign Up</a></li>
            </>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Navbar;

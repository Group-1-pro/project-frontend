import React, { useState } from 'react';
import { useAuth } from '@/contexts/auth';
import { useRouter } from 'next/router';

const Navbar = () => {
  const auth = useAuth();
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAuthDropdown, setShowAuthDropdown] = useState(false);

  const handleLogout = async () => {
    await auth.logout();
    router.push('/');
  };

  const handleProfileClick = () => {
    router.push('/profile'); // Redirect to the profile page
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleAuthDropdownToggle = () => {
    setShowAuthDropdown(!showAuthDropdown);
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
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/about">About</a></li>

          {auth.user ? (
            <li className="profile-dropdown">
              <a href="#" onClick={handleDropdownToggle} className="profile-link">
                {auth.user.username} {showDropdown ? '▲' : '▼'}
              </a>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="/profile" onClick={handleProfileClick}>
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li className="auth-dropdown">
              <a href="#" onClick={handleAuthDropdownToggle} className="profile-link">
                Account {showAuthDropdown ? '▲' : '▼'}
              </a>
              {showAuthDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="/login">Login</a>
                  </li>
                  <li>
                    <a href="/signup">Sign Up</a>
                  </li>
                </ul>
              )}
            </li>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Navbar;

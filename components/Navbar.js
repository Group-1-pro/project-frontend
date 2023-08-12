import React, { useState } from 'react';
import { useAuth } from '@/contexts/auth';
import { useRouter } from 'next/router';

const Navbar = () => {
  const auth = useAuth();
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

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
            <>
              <li><a href="/login">Login</a></li>
              <li><a href="/signup">Sign Up</a></li>
            </>
          )}
        </ul>
      </header>
      <style jsx>{`
        .main-nav {
          list-style: none;
          display: flex;
          gap: 20px;
        }

        .profile-link {
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .profile-dropdown {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background-color: #fff;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          list-style: none;
          padding: 8px 0;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          width: 120px;
          z-index: 1;
        }

        .dropdown-menu li {
          padding: 8px;
        }
      `}</style>
    </div>
  );
};

export default Navbar;

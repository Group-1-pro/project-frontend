import React, { useState } from 'react';
import { useAuth } from '@/contexts/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';



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
      <header className='header'>
        <h1 className='headerLogo'>
          <Link className='headerTitle' href='/' >
            <img src='/lesspading-removebg-preview.png' className='headerImgLogo' />
          </Link>
        </h1>
        <ul className='main-nav'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/blogs'>Blogs</Link></li>
          <li><Link href='/about'>About</Link></li>

          {auth.user ? (
            <li className='profile-dropdown'>
              <Link href='#' onClick={handleDropdownToggle} className='profile-link'>
                {auth.user.username} {showDropdown ? '▲' : '▼'}
              </Link>
              {showDropdown && (
                <ul className='dropdown-menu'>
                  <li>
                    <Link href='/profile' onClick={handleProfileClick}>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link href='#' onClick={handleLogout}>
                      Logout
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li className='auth-dropdown'>
              <Link href='#' onClick={handleAuthDropdownToggle} className='profile-link'>
                Account {showAuthDropdown ? '▲' : '▼'}
              </Link>
              {showAuthDropdown && (
                <ul className='dropdown-menu'>
                  <li>
                    <Link href='/login'>Login</Link>
                  </li>
                  <li>
                    <Link href='/signup'>Sign Up</Link>
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

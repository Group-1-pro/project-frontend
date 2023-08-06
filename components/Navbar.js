import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">WanderHands</h1>
        <ul className="flex space-x-4 text-white">
          <li>
            <Link href="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">About Us</Link>
          </li>
          <li>
            <Link href="/favorites" className="nav-link">Favorites</Link>
          </li>
          <li>
            <Link href="/login" className="nav-link">Login</Link>
          </li>
          <li>
            <Link href="/signup" className="nav-link">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

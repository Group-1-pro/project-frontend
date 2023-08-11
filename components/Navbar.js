import React from 'react';


const Navbar = () => {
  return (

    <div>

      <header class="header">

        <h1 class="headerLogo"><a class="headerTitle" href="/">WanderHands</a></h1>

        <ul class="main-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/favorites">Profile</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Sign Up</a></li>
        </ul>

      </header>

    </div>

  );
};

export default Navbar;

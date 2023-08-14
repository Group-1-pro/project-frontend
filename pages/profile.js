import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import FavoritesList from '@/components/FavoritesList';
import PostUser from '@/components/PostUser';
import { useAuth } from 'contexts/auth.js';
import LoginForm from '@/components/LoginForm';
import { Typography, Divider, Fab } from '@material-ui/core';
import Footer from '@/components/Footer';

export default function FavoritesPage() {
  const { login, user } = useAuth();
  const [loginChecked, setLoginChecked] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const favoritesListRef = useRef(null);

  useEffect(() => {
    setLoginChecked(true);

    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmitLoginForm = (formData) => {
    console.log('Submitted login form data:', formData);
    login(formData.username, formData.password);
  };

  const handleFavoritesClick = () => {
    if (favoritesListRef.current) {
      favoritesListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <div className="relative"></div>
      <ul className="list-reset flex font-bold">
        <li className="cursor-pointer px-4 border-l text-grey-darkest">
          My Posts
        </li>
        <li className="cursor-pointer px-4 border-l text-blue" onClick={handleFavoritesClick}>
          My Favorites
        </li>
      </ul>
      {console.log(user)}
      {loginChecked ? (
        user ? (
          <main>
          <div className="section">
            <Typography variant="h4" color="green" gutterBottom className="section-title">
              My Posts
            </Typography>
            <Divider className="divider" />
            <PostUser />
          </div>
    
          <div className="section">
            <Typography variant="h4" color="green" gutterBottom className="section-title">
              Favorites
            </Typography>
            <Divider className="divider" />
            <FavoritesList />
          </div>
        </main>

        ) : (
          <LoginForm onSubmit={handleSubmitLoginForm} />
        )
      ) : null}
      {showScrollButton && ( // Conditionally render the scroll-up button
        <Fab
          color="primary"
          size="small"
          className="scroll-up-button"
          onClick={handleScrollUp}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
          }}
        >
          ↑ 
        </Fab>
      )}
      <Footer/>  
    </>
  );
}

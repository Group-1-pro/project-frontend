import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FavoritesList from '@/components/FavoritesList';
import PostUser from '@/components/PostUser';
import { useAuth } from 'contexts/auth.js';
import LoginForm from '@/components/LoginForm';
import { Typography, Divider } from '@material-ui/core';


export default function FavoritesPage() {
  const { login, user } = useAuth();
  const [loginChecked, setLoginChecked] = useState(false);

  useEffect(() => {
    setLoginChecked(true);
  }, []);

  const handleSubmitLoginForm = (formData) => {
    // Perform any actions with the form data here, like logging in or fetching user data
    console.log('Submitted login form data:', formData);

    // Call your login function here passing the formData.username and formData.password
    login(formData.username, formData.password);
  };

  return (
    <>
      <Navbar />
      {console.log(user)}
      {loginChecked ? (
        user ? (
          <main>
          <div className="section">
            <Typography variant="h4" color="green" gutterBottom className="section-title">
              Your Posts
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
      {/* <Footer /> */}
    </>
  );
}

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
  const [activeTab, setActiveTab] = useState('myPosts');
  const favoritesListRef = useRef(null);
  const postUserRef = useRef(null);

  useEffect(() => {
    setLoginChecked(true);

    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 0);
      setActiveTab(null); // Disable click effect when scrolling up
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

  const handleTabClick = (tab) => {
    if (tab === 'myFavorites' && favoritesListRef.current) {
      favoritesListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (tab === 'myPosts' && postUserRef.current) {
      postUserRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveTab(tab); // Update active tab
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <div className="relative mx-[21px]" style={{ padding: '2rem 0' }}>
        <div>
          <div style={{ display: 'flex', position: 'relative', backgroundColor: '#fff', boxShadow: '0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15)', padding: '0.75rem', borderRadius: '99px' }}>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '54px',
                width: '200px',
                fontSize: '1.25rem',
                fontWeight: 500,
                borderRadius: '99px',
                cursor: 'pointer',
                transition: 'color 0.15s ease-in',
                color: activeTab === 'myPosts' ? '#185ee0' : 'inherit',
              }}
              onClick={() => handleTabClick('myPosts')}
            >
              My Posts
            </span>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '54px',
                width: '200px',
                fontSize: '1.25rem',
                fontWeight: 500,
                borderRadius: '99px',
                cursor: 'pointer',
                transition: 'color 0.15s ease-in',
                color: activeTab === 'myFavorites' ? '#185ee0' : 'inherit',
              }}
              onClick={() => handleTabClick('myFavorites')}
            >
              My Favorites
            </span>
          </div>
        </div>
      </div>

      {loginChecked ? (
        user ? (
          <main>
            <div className="section mx-[21px] bg-white" ref={postUserRef} style={{ boxShadow: '0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15)', borderRadius: '50px' }}>
              <Typography variant="h4" color="initial" gutterBottom className="section-title">
                My Posts
              </Typography>
              <Divider className="divider" />
              <PostUser />
            </div>

            <div className="section mx-[21px] bg-white" ref={favoritesListRef} style={{ boxShadow: '0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15)', borderRadius: '50px' }}>
              <Typography variant="h4" color="initial" gutterBottom className="section-title">
                Favorites
              </Typography>
              <Divider className="divider" />
              <div>
                <FavoritesList />
              </div>
            </div>
          </main>
        ) : (
          <LoginForm onSubmit={handleSubmitLoginForm} />
        )
      ) : null}
      {showScrollButton && (
        <Fab
          color="default"
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
      <Footer />
    </>
  );
}

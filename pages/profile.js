import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import FavoritesList from '@/components/FavoritesList';
import PostUser from '@/components/PostUser';
import { useAuth } from 'contexts/auth.js';
import LoginForm from '@/components/LoginForm';
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
          <div className="tab-container">
            <span
              onClick={() => handleTabClick('myPosts')}
              className={`tab ${activeTab === 'myPosts' ? 'active' : ''}`}
            >
              My Posts
            </span>
            <span
              onClick={() => handleTabClick('myFavorites')}
              className={`tab ${activeTab === 'myFavorites' ? 'active' : ''}`}
            >
              My Favorites
            </span>
          </div>
        </div>
      </div>

      {loginChecked ? (
        user ? (
          <main>
            <div className="section mx-[21px] bg-white" ref={postUserRef}>
              <h4 className="section-title">My Posts</h4>
              <div className="divider" />
              <PostUser />
            </div>

            <div className="section mx-[21px] bg-white" ref={favoritesListRef}>
              <h4 className="section-title">Favorites</h4>
              <div className="divider" />
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
        <button
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
        </button>
      )}
      <Footer />
    </>
  );
}

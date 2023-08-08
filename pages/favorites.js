// favorite page

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FavoritesList from '@/components/FavoritesList';
import PostForm from '@/components/PostForm';

const FavoritesPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="mt-8 text-4xl font-bold text-center">Favorites</h1>
        <FavoritesList />
        <PostForm />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default FavoritesPage;
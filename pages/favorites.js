// favorite page

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FavoritesList from '@/components/FavoritesList';
import PostUser from '@/components/PostUser';
const FavoritesPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="text-4xl font-bold text-center mt-8">Favorites</h1>
        <FavoritesList />
        <PostUser />
      </main>
      <Footer />
    </>
  );
};

export default FavoritesPage;
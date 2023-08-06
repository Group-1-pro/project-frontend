// favorite page

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FavoritesList from '@/components/FavoritesList';

const FavoritesPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="text-4xl font-bold text-center mt-8">Favorites</h1>
        <FavoritesList />
      </main>
      <Footer />
    </>
  );
};

export default FavoritesPage;
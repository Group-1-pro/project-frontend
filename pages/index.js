import React from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Home_page from './home';
import Image from 'next/image'; // Import the next/image component
import icon from '../public/icon.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Wanderhands</title>
      </Head>

      <Navbar />

      <main>
        <Home_page />
      </main>

      <Footer />

    </>
  );
}

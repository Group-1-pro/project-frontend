import React from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Home_page from './home';


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

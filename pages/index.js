import React from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Home_page from './home';
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <Head>
       <link href="../public/logo.png" sizes="100%" />
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

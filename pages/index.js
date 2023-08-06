import React from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PostForm from '@/components/PostForm';
export default function Home() {
  return (
    <>
      
      <Navbar />
      <main>
        <h1 className="text-6xl font-bold text-center">WanderHands</h1>
      </main>
      <Footer />
    </>
  );
}

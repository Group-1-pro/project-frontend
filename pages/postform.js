import React from 'react';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer'; 
import PostForm from '@/components/PostForm';

const SignupPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <PostForm />
        
      </main>
      <Footer />
    </>
  );
};

export default SignupPage;

import React from 'react';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer'; 
import LoginForm from '@/components/LoginForm'; 

const SigninPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="text-4xl font-bold text-center mt-8">Sign In</h1>
        <LoginForm />
      </main>
      <Footer />
    </>
  );
};

export default SigninPage;


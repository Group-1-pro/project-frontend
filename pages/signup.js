import React from 'react';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer'; 
import SignupForm from '@/components/SignupForm'; 

const SignupPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="text-4xl font-bold text-center mt-8">Sign Up</h1>
        <SignupForm />
      </main>
      <Footer />
    </>
  );
};

export default SignupPage;

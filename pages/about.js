// about us page 
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutUs from '@/components/Aboutus';




const AboutPage = () => {
  
  return (
    <>
      <Navbar />
      <main>
        <h1 className="mt-8 text-4xl font-bold text-center">About Us</h1>
        <AboutUs />
        
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
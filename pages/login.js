import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';
import { useAuth } from '@/contexts/auth';


const SigninPage = () => {
  const { login, logout, user } = useAuth();
  const handleSubmitLoginForm = (formData) => {
    // Perform any actions with the form data here, like logging in or fetching user data
    console.log('Submitted login form data:', formData);
    login(formData.username, formData.password);
  };
  return (
    <>
      <Navbar />
      <main>
        <h1 className="text-4xl font-bold text-center mt-8">Log In</h1>
        <LoginForm onSubmit={handleSubmitLoginForm} />
      </main>
      <Footer />
    </>
  );
};

export default SigninPage;


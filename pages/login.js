import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/auth';
import Cookies from 'js-cookie'; // Import the Cookies library
import LoginForm from '@/components/LoginForm';
import Footer from '@/components/Footer';

const LoginPage = () => {
  const auth = useAuth();
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  };

  useEffect(() => {
    // Check if there are tokens in cookies
    if (auth.tokens) {
      router.push('/');
    }
  }, [auth.tokens]);

  const handleLogin = async (formData) => {
    try {
      await auth.login(formData.username, formData.password);
      Cookies.set('tokens', JSON.stringify(auth.tokens)); // Store tokens in cookies
      router.push('/');
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <LoginForm onSubmit={handleLogin} />
      <Footer />
    </>

  );
};

export default LoginPage;

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/auth';
import Cookies from 'js-cookie'; // Import the Cookies library
import LoginForm from '@/components/LoginForm';

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
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#edf2f7', position: 'relative' }}>
      

      {/* Home icon */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          backgroundColor: 'transparent',
          cursor: 'pointer',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={handleHomeClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 9l9-7 9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6M7 12h10"
          />
        </svg>
      </div>

      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          padding: '2rem',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        {auth.error && <p>{auth.error}</p>}
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;

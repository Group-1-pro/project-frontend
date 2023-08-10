import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/auth';
import LoginForm from '@/components/LoginForm';

const LoginPage = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Check if there are tokens in cookies
    if (auth.tokens) {
      router.push('/');
    }
  }, [auth.tokens]);

  // useEffect(() => {
  //   // If there are tokens in cookies, automatically login the user
  //   if (!auth.tokens && Cookies.get('tokens')) {
  //     auth.loginWithStoredTokens(); // Implement this function in your AuthProvider
  //   }
  // }, []); // Only run this effect once, on component mount

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
    <div>
      <h2>Login</h2>
      {auth.error && <p>{auth.error}</p>}
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;

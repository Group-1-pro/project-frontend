import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/auth';
import { useRouter } from 'next/router';

const SignUpPage = () => {
  const auth = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    const result = await auth.signUp(username, email, password);
    if (result.success) {
      router.push('/login');
    } else {
      console.error("Sign-up failed:", result.error);
    }
  };

  const handleHomeClick = () => {
    router.push('/');
  };

  return (
    <div className="md:flex md:h-screen">
      <div className="md:w-1/2 bg-gradient-to-tr">
        {/* Your logo elements and styling can go here */}
      </div>
      <div className="flex items-center justify-center py-10 bg-white md:w-1/2">
        <form className="w-full max-w-md p-6 bg-white rounded-lg shadow">
          <h1 className="mb-1 text-2xl font-bold text-gray-800">Sign Up</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">
            It's quick and easy.
          </p>
          <div className="flex items-center px-3 py-2 mb-4 border-2 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd" />
            </svg>
            <input className="pl-2 font-semibold text-gray-600 border-none outline-none"
              type="text" name="" id="" placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="flex items-center px-3 py-2 mb-4 border-2 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input className="pl-2 font-semibold text-gray-600 border-none outline-none"
              type="text" name="" id="" placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="flex items-center px-3 py-2 border-2 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd" />
            </svg>
            <input className="pl-2 font-semibold text-gray-600 border-none outline-none"
              type="password" name="" id="" placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button
            onClick={handleSignUp}
            type="submit"
            className="block w-full py-2 mt-4 mb-2 font-semibold text-white bg-indigo-600 rounded-2xl"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="absolute top-0 left-0 mt-4 ml-4 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
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
    </div>
  );
};

export default SignUpPage;

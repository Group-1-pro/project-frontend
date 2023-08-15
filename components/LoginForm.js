import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LoginForm({ onSubmit }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="md:flex md:h-screen">
      <div className="flex items-center justify-center py-10 md:w-1/2">
        <a href="/" className="mx-auto">
          <img src="/lesspading-removebg-preview.png" alt="Logo" className="w-32 h-auto" />
        </a>
      </div>
      <div className="flex items-center justify-center py-10 md:w-1/2">
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] w-90">
          <div className="bg-white p-8 rounded-2xl shadow w-full max-w-[500px]">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">LOGIN</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="username" className="text-gray-600">Username</label>
                <div className="flex items-center border-2 rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                    className="pl-2 font-semibold text-gray-600 border-none outline-none w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="password" className="text-gray-600">Password</label>
                <div className="flex items-center border-2 rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="pl-2 font-semibold text-gray-600 border-none outline-none w-full"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="block w-full py-2 mt-4 font-semibold text-white bg-[#7E1717] rounded-2xl"
              >
                Login
              </button>

              <p className="text-center text-gray-700">
                Don't have an account?{' '}
                <Link href="/signup" className="text-blue-500 underline cursor-pointer">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

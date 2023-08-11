import React, { useState } from 'react';
import Link from 'next/link';

export default function LoginForm({ onSubmit, onClose }) {
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
    // Pass the form data to the parent component (Home) using the onSubmit prop
    onSubmit(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-lg font-semibold text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full p-2 mb-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-lg font-semibold text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-2 mb-2 border rounded"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-2 text-white transition-colors bg-blue-500 rounded hover:bg-blue-600"
            >
              Log In
            </button>
          </div>
          <p className="mt-2 text-center text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup">
              <span className="text-blue-500 hover:underline">Sign Up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

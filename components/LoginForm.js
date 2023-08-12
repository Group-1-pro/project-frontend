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
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 80px)', // Adjust to leave some space at the top
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '0.5rem',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '500px', // Increase the maximum width
        }}
      >
        <h1
          style={{
            color: '#374151',
            fontWeight: 'bold',
            fontSize: '1.8rem', // Increase font size
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          LOGIN
        </h1>

        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '1.5rem', // Increase margin
            }}
          >
            <label
              htmlFor="username"
              style={{
                marginBottom: '0.5rem',
                color: '#4A5568',
              }}
            >
              Username
            </label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                border: '2px solid #E5E7EB',
                borderRadius: '1rem',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                style={{
                  paddingLeft: '0.5rem',
                  outline: 'none',
                  border: 'none',
                }}
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
              />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '1.5rem', // Increase margin
            }}
          >
            <label
              htmlFor="password"
              style={{
                marginBottom: '0.5rem',
                color: '#4A5568',
              }}
            >
              Password
            </label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                border: '2px solid #E5E7EB',
                borderRadius: '1rem',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                style={{
                  paddingLeft: '0.5rem',
                  outline: 'none',
                  border: 'none',
                }}
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
              />
            </div>
          </div>

          <button
            type="submit"
            style={{
              background: '#4F46E5',
              padding: '0.75rem 1.5rem', // Increase padding
              borderRadius: '1rem',
              color: 'white',
              fontWeight: 'bold',
              marginBottom: '1rem',
              cursor: 'pointer',
            }}
          >
            Login
          </button>

          <p
            style={{
              marginTop: '1.5rem', // Increase margin
              textAlign: 'center',
              color: '#718096',
            }}
          >
            Don't have an account?{' '}
            <Link href="/signup">
              <span
                style={{
                  color: '#4A90E2',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                Sign Up
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

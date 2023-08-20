import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';


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

  const handleHomeClick = () => {
    router.push('/');
  };

  return (
    <div className='md:flex md:h-screen'>
      <div className='flex items-center justify-center py-10 md:w-1/2'>
        {/* Your logo elements and styling can go here */}
        <Link href='/'>

          <Image src='/lesspading-removebg-preview.png' alt='Wander Hands Logo'
          width={600}
          height={800}/>
        </Link>
      </div>
      <div className='flex items-center justify-center py-10 md:w-1/2'>
        <form className='w-full max-w-md p-6 bg-white rounded-lg shadow' onSubmit={handleSubmit}>
          <h1 className='mb-1 text-2xl font-bold text-[#7E1717]'>Login</h1>

          {/* Username input */}
          <div className='flex items-center px-3 py-2 mb-4 border-2 rounded-2xl'>
            <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 text-gray-400' viewBox='0 0 20 20' fill='currentColor'>
              <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
            </svg>
            <input
              className='pl-2 font-semibold text-gray-600 border-none outline-none'
              type='text'
              id='username'
              name='username'
              value={formData.username}
              onChange={handleInputChange}
              placeholder='Username'
              style={{
                paddingLeft: '0.5rem',
                outline: 'none',
                border: 'none',
                width: '-webkit-fill-available',
                borderRadius: '0.5rem',
              }}
            />
          </div>

          {/* Password input */}
          <div className='flex items-center px-3 py-2 border-2 rounded-2xl'>
            <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 text-gray-400' viewBox='0 0 20 20' fill='currentColor'>
              <path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
            </svg>
            <input
              className='pl-2 font-semibold text-gray-600 border-none outline-none'
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              placeholder='Password'
              style={{
                paddingLeft: '0.5rem',
                outline: 'none',
                border: 'none',
                width: '-webkit-fill-available',
                borderRadius: '0.5rem',
              }}
            />
          </div>

          {/* Submit button */}
          <button
            type='submit'
            className='block w-full py-2 mt-4 mb-2 font-semibold text-white bg-[#7E1717] rounded-2xl'
          >
            LOGIN
          </button>

          {/* Sign Up link */}
          <p className='text-center text-gray-700'>
            Don't have an account ?{' '}
            <Link href='/signup'>Sign Up</Link>
          </p>
        </form>
      </div>

      {/* Home button */}
      <div className='absolute top-0 left-0 mt-4 ml-4 cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          onClick={handleHomeClick}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M3 9l9-7 9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
          />
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6M7 12h10' />
        </svg>
      </div>
    </div>
  );
}

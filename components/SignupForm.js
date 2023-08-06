import React from 'react';

const SignupForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here

    
  };

  return (
    <form className="w-8/12 p-6 mx-auto my-8 bg-gray rounded-lg shadow-md" onSubmit={handleSubmit}>
      <fieldset className="flex flex-col" autoComplete="off">
        <label htmlFor="username" className="mt-2">Username</label>
        <input name="username" className="mt-2 p-2 rounded" placeholder="User Name" />
        <label htmlFor="email" className="mt-2">Email</label>
        <input type="email" name="email" className="mt-2 p-2 rounded" placeholder="Email" />
        <label htmlFor="password" className="mt-4">Password</label>
        <input type="password" name="password" className="p-2 rounded" placeholder="Password" />
        <button className="px-6 py-3 mt-6 font-bold text-white bg-blue-300 rounded-lg shadow-md hover:bg-blue-400" type="submit">
          Sign Up
        </button>
      </fieldset>
    </form>
  );
};

export default SignupForm;

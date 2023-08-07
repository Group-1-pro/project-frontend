import React, { useState } from 'react';

export default function LoginForm({ onSubmit }) {
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
    <form className="w-3/4 p-4 mx-auto my-8 bg-gray-400 text-black-70" onSubmit={handleSubmit}>
      <h2 className="text-4xl text-center mb-6 text-black-200">Welcome</h2>
      <div className="flex mb-4">
        <label className="text-lg font-semibold">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          className="flex-auto px-2 py-1 bg-white border border-gray-300 rounded-l"
          required
        />
      </div>
      <div className="flex mb-4">
        <label className="text-lg font-semibold">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="flex-auto px-2 py-1 bg-white border border-gray-300 rounded-l"
          required
        />
      </div>
      <div className="flex justify-center"> 
      <button type="submit" className="px-12 py-5  text-black-100 hover:bg-white-800 hover:text-white transition-colors">
        Log In
      </button>
     </div>
    </form>
  );
}
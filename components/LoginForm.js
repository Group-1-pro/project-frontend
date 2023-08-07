import React from 'react';


export default function LoginForm({ onLogin }) {
  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   onLogin(event.target.username.value, event.target.password.value);
  // }

  return (
    <form className="w-8/12 p-6 mx-auto my-8 bg-white-300 rounded-lg shadow-md" >
      <fieldset className="flex flex-col" autoComplete="off">
        <label htmlFor="username" className="mt-2">Username</label>
        <input name="username" className="mt-2 p-2 rounded" placeholder="User Name" />
        <label htmlFor="password" className="mt-4">Password</label>
        <input type="password" name="password" className="p-2 rounded" placeholder="Password" />
        <button className="px-6 py-3 mt-6 font-bold text-white bg-blue-400 rounded-lg shadow-md hover:bg-blue-500" type="submit">
          Log In
        </button>
      </fieldset>
    </form>
  );
}


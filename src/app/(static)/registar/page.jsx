"use client"
import Link from "next/link";
import { useContext, useState } from 'react';
import { UserContext } from "@/app/context/UserProvider";
import { ThemeContext } from "@/app/context/ThemeContext";

export default function Registar() {
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [userpassword, setUserpassword] = useState('');
  const { registerUser, error, success } = useContext(UserContext);
  const { mode} = useContext(ThemeContext)
  const toggleColor = {
    background: `${mode === 'dark' ? '#eeeeee44' : '#33333355'}` ,
    color: `${mode === 'dark' ? '#eee' : '#333'}`
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser({
        name: username,
        email: useremail,
        password: userpassword,
        shoping: [],
        favorite: []
    });
  };
  return (
    <div className="flex justify-center items-center w-52 h-dvh">
      <form onSubmit={handleSubmit} style={toggleColor} className='flex flex-col justify-center items-center gap-5 h-[70%] px-[5%] rounded-xl' >
        <h2 className="text-white font-bold text-2xl">Sign Up</h2>
        <fieldset className='border rounded-lg overflow-hidden'>
          <legend className='ms-4'>Name</legend>
          <input
          className="text-black ps-2 border border-black rounded-lg" 
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="name"
          required />
        </fieldset>
        <fieldset className='border rounded-lg overflow-hidden'>
          <legend className='ms-4'>Email</legend>
          <input
          className="text-black ps-2 border border-black rounded-lg" 
          type="email"
          value={useremail}
          onChange={(e) => setUseremail(e.target.value)} 
          name="email" 
          required />
        </fieldset>
        <fieldset className='border rounded-lg overflow-hidden'>
          <legend className='ms-4'>Password</legend>
          <input
          className="text-black ps-2 border border-black rounded-lg" 
          type="password"
          value={userpassword}
          onChange={(e) => setUserpassword(e.target.value)} 
          name="password" 
          required />
        </fieldset>
        <input type="submit" className="text-white bg-green-500 px-4 rounded-lg border" value="Create"  />
        <Link href="/login">Login</Link>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </form>
    </div>
  );
}
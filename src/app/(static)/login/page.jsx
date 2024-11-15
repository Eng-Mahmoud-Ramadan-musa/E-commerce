"use client"
import { ThemeContext } from "@/app/context/ThemeContext";
import { UserContext } from "@/app/context/UserProvider";
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from 'next/navigation'
export default function Login() {
  const router = useRouter();
  const [useremail , setUseremail] = useState('')
  const [userpass , setUserpass] = useState('')
  const { users , setUser } = useContext(UserContext);
  const [error, setError] = useState('');
  const { mode} = useContext(ThemeContext)
  const toggleColor = {
    background: `${mode === 'dark' ? '#eeeeee44' : '#33333355'}` ,
    color: `${mode === 'dark' ? '#eee' : '#333'}`
  }



  const handlecheck = async (e) => {
    e.preventDefault();
    const userCheck = await users.find(person => person.email === useremail && person.password === userpass)
    if (userCheck != null)
     {
      await setUser({...userCheck});
      setError('');
      router.push('/');
    } else {
      setError('المستخدم غير موجود ')
    } 
    
    setUseremail('')
    setUserpass('')
};
  return (
    <div className="flex justify-center items-center w-52 h-dvh">
      <form onSubmit={handlecheck} style={toggleColor} className='flex flex-col justify-center items-center gap-5 h-[70%] px-[5%]  bg-opacity-20 rounded-xl'>
       <h2 className="text-white font-bold text-2xl">login</h2>
                <fieldset className=' border rounded-lg overflow-hidden'>
                <legend className='ms-4'>Email</legend>
                <input className="text-black ps-2 font-bold" type="email" name="email" required value={useremail} onChange={(e) => setUseremail(e.target.value)} />
                </fieldset>
                <fieldset className=' border rounded-lg overflow-hidden'>
                <legend className='ms-4'>password</legend>
                <input className="text-black ps-2 font-bold" type="password" name="password" required value={userpass} onChange={(e) => setUserpass(e.target.value)} />
                </fieldset>
              <button type="submit" className="text-white bg-green-500 px-4 rounded-lg border">Login</button>
              <div className="w-full flex justify-between items-center">
              <small>password forget?</small>
              <Link href="/registar" > Registar</Link>
              </div>
              {error && <p className="text-red-500">{error}</p>}
            </form>
    </div>
  )
}

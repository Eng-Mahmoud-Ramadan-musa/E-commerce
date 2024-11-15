
"use client"
import { ThemeContext } from "@/app/context/ThemeContext";
import Link from "next/link";
import { useContext } from "react";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { dataLinks } from "./data";

export default function Contact() {
  const { mode} = useContext(ThemeContext)
  const toggleColor = {
    background: `${mode === 'dark' ? '#eeeeee44' : '#33333355'}` ,
    color: `${mode === 'dark' ? '#eee' : '#333'}`
  }
// تحديد عدد السلايدات بناءً على حجم الشاشة


  return (
    <div style={toggleColor}  className=" py-4 rounded-xl w-full flex flex-col mb-4 overflow-hidden justify-between items-center px-2 gap-3">
      <h2 className="text-white mb-3 bg-green-500 px-3 font-bold rounded-lg">contact Us</h2>
        <div style={{borderBottom: `2px solid ${toggleColor.background}`}} className="w-full h-full flex flex-col items-center ">
          <h3>links</h3>
          <div className="flex flex-wrap justify-center items-center gap-1 py-4 w-full">
          { dataLinks.map((link ,i)=>
            <Link key={i} className="w-1/3 sm:w-1/4 lg:w-1/5 ps-[10% ] hover:text-green-600 font-semibold duration-300 " href={link.url} >{link.value}</Link>
          )}
            </div>
        </div>
      <div className="w-5/6 h-full flex flex-col justify-between sm:flex-row gap-4">
          <form  action="" className="flex flex-col items-center gap-3  w-full lg:w-1/2 p-2 mt-auto">
            <input type="email" name="" className="w-full rounded-lg ps-3 text-black" />
            <input type="password" name="" className="w-full rounded-lg ps-3 text-black" />
            <textarea name="" className="w-full rounded-lg ps-3 text-black" rows={2}></textarea>
            <input type="submit" value="send" className="text-white bg-red-500 px-3 rounded-lg border " />
          </form>
        <div className="w-full sm:w-1/3 h-full ps-3 flex flex-col gap-3 mt-4 ">
          <div className="flex items-center gap-2 font-bold"><IoIosMail /><span className="w-full overflow-hidden text-nowrap text-ellipsis">mahmoudramadanmusa95@gmail.com</span></div>
          <div className="flex items-center gap-2 font-bold"><FaPhoneFlip /><span>+20 <small>01016625130</small></span></div>
          <div className="flex items-center gap-2 font-bold"><FaLocationDot /><span className="w-full overflow-hidden text-nowrap text-ellipsis">egypt - beheira - damanhour</span></div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { ThemeContext } from "@/app/context/ThemeContext";
import { useContext } from "react";
import {MdDarkMode,CiLight} from "@/app/icons/icons"

export default function Mode() {
    const { mode , toggle} = useContext(ThemeContext)
  return (
    <div onClick={toggle} className="relative flex justify-between gap-1 items-center border border-green-500 rounded-xl">
      <CiLight />
      <MdDarkMode className="text-[gold]" />
      <div 
        className="absolute top-0 w-1/2 h-full cursor-pointer bg-green-500 rounded-full"
        style={mode !== 'dark' ? {left: '1px'} : {right: '1px'}}
      />
    </div>    
  )
}  



"use client"
import { useContext } from "react";
import Image from "next/image";
import { social_media } from "./data";
import { ThemeContext } from "@/app/context/ThemeContext";

export default function Footer() {
  const { mode } = useContext(ThemeContext);
  const borderTop = { borderTop: `1px solid ${mode === 'dark' ? '#fff' : '#333'}` };
  
  return (
    <div style={borderTop} className="flex justify-between items-center py-2 font-bold px-[5%]">
      <p>© mahmoud ramadan</p>
      <div className="flex gap-2">
        {social_media.map(media => (
          <Image 
            key={media.id} 
            src={`/images/icons/${media.name}.png`} 
            width={25} 
            height={25} 
            className="opacity-60 hover:opacity-100 duration-200 ease-in" 
            alt={`hexashop ${media.name} link`} 
          />
        ))}
      </div>
    </div>
  );
}
"use client"
import Image from "next/image";
import Carousel from "../carousel/Carousel";
import RenderStars from "../stars/RenderStars";
import { useEffect, useState } from 'react';
import {users} from './dataUsers'
export default function Rating() {


  const [visibleSlides, setVisibleSlides] = useState(3); // القيمة الافتراضية
  const [slideWidth, setSlideWidth] = useState('33.33%'); // القيمة الافتراضية

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
        setSlideWidth('100%');
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
        setSlideWidth('50%');
      } else {
        setVisibleSlides(3);
        setSlideWidth('33.33%');
      }
    };

    // تعيين الحجم عند التحميل
    handleResize();

    // إضافة مستمع لتغيير الحجم
    window.addEventListener('resize', handleResize);
    
    // تنظيف المستمع عندUnmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h2 className="text-white mb-3 bg-green-500 px-3 font-bold rounded-lg">Rating Customer</h2>
      <div className='w-full h-96 p-2'>
        <Carousel images={users} pointSlide={visibleSlides}>              
          {users.map((user, index) => (
            <div key={index} className={`relative flex flex-col px-2 justify-between items-center`} style={{ width: slideWidth, height: '16rem' }}>
              <div className="w-36 h-36 rounded-full border-4 overflow-hidden">
                <Image 
                  src={user.img}
                  alt={`User ${user.name}`} 
                  className="h-full w-full object-cover" 
                />
              </div>
              <h3 className="font-bold">{user.name}</h3>
              <p className="opacity-60 px-4 overflow-hidden text-nowrap text-ellipsis w-full">{user.description}</p>
              <div className="flex justify-center items-center gap-1">Rating: <RenderStars rate={user.rate} /></div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
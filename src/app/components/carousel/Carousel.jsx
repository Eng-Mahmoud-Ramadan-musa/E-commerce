"use client";
import { ThemeContext } from '@/app/context/ThemeContext';
import { useContext, useState } from 'react';

const Carousel = ({ images, children, pointSlide = 1 }) => { // تعيين القيمة الافتراضية إلى 1
  const [currentIndex, setCurrentIndex] = useState(0);
  const { mode } = useContext(ThemeContext);
  const border = `${mode === 'dark' ? '#fff' : '#111'}`;
  
  // التأكد من أن pointSlide هو عدد صحيح وموجب
  const count = Math.ceil(images.length / pointSlide);
  const counts = [];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % count); // إرجاع القيمة الجديدة
  };

  const thisSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? count - 1 : prevIndex - 1
    );
  };

  // بدء الحلقة من 0
  for (let i = 0; i < count; i++) {
    counts.push(i);
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto px-4">
      <div className="overflow-hidden rounded-lg w-full">
        <div
          className={`flex transition-transform duration-300 w-[${(count * 100) / count}%]`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} // ضبط التحويل
        >
          {children}
        </div>
      </div>
      <div className="absolute bottom-0 translate-y-6 left-1/2 z-20 -translate-x-1/2 flex justify-center cursor-pointer items-center min-w-full h-5 gap-2">
        {counts.map((x, i) => (
          <span
            key={i}
            onClick={() => thisSlide(i)} // تمرير الفهرس الصحيح
            style={{
              background: currentIndex === i ? '#333' : '#eee',
              border: `1px double ${border}`,
            }}
            className="w-5 h-2 rounded-lg z-20"
          />
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-3 font-bold text-2xl top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full">
        &lt;
      </button>
      <button onClick={nextSlide} className="absolute right-3 font-bold text-2xl top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full">
        &gt;
      </button>
    </div>
  );
};

export default Carousel; // يجب أن يكون في نهاية الملف
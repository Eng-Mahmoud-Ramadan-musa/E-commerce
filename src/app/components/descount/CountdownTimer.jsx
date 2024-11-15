"use client";
import { useState, useEffect, useCallback } from 'react';

export default function CountdownTimer(props) {
  const calculateTimeLeft = useCallback(() => {
    if (!props.targetDate) {
      return {}; // إرجاع كائن فارغ إذا كانت القيمة غير صالحة
    }

    const difference = +new Date(props.targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)) < 10 ? "0" + Math.floor(difference / (1000 * 60 * 60 * 24)) : Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24) < 10 ? "0" + Math.floor((difference / (1000 * 60 * 60)) % 24) : Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60) < 10 ? "0" + Math.floor((difference / 1000 / 60) % 60) : Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60) < 10 ? "0" + Math.floor((difference / 1000) % 60) : Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft; // إرجاع timeLeft هنا
  });

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [calculateTimeLeft]); // إضافة مصفوفة فارغة

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className='flex flex-col justify-center'>
        <span className='text-center font-wallpoet animate-pulse bg-red-400 px-1 text-white rounded-lg font-bold' style={{ fontFamily: "Handjet", fontSize: "24px" }}>
          {timeLeft[interval]} {/* استخدام span بدلاً من h3 */}
        </span>
        <span className='text-center text-black px-1 font-medium'>
          <small>{interval}</small>
        </span>
      </div>
    );
  });

  return (
    <div className='flex justify-center items-center gap-1 p-2'>
      {timerComponents.length ? timerComponents : <p>{`time's up!`}</p>}
    </div>
  );
}
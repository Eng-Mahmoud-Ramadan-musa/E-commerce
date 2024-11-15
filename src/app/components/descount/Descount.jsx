import CountdownTimer from './CountdownTimer';
import Carousel from '../carousel/Carousel'
import {Images} from './data'
import Image from 'next/image';
import Link from 'next/link';
export default function Descount() {
  return (
    <div className=" relative overflow-hidden capitalize flex flex-col-reverse sm:flex-row gap-4 sm:gap-0 py-5 sm:justify-between items-center h-screen mb-10">
        <div className="flex flex-col justify-start sm:justify-center w-full gap-4">
            <h2 className='font-bold text-green-500'>deals of the week</h2>
            <p className='font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis obcaecati possimus saepe eius, atque excepturi numquam asperiores esse dolore aliquam?</p>
            <Link href={'/descount'} className="bg-green-500 cursor-pointer w-fit px-3 rounded-lg text-center font-bold  text-white">bye now</Link>
            <div>
                <h4>{`hurry,before it's too late!`}</h4>
                <div className='border bg-blue-200 dark:bg-slate-400 py-4 rounded-xl flex justify-center'>
                    <CountdownTimer targetDate="2024-12-31T23:59:59" suppressHydrationWarning />
                </div>
            </div>
        </div>
        <div className='w-full'>
          <Carousel images={Images}>              
          {Images.map((img, index) => (
            <div key={index} className="relative flex justify-center items-center min-w-full h-64"> {/* تحديد ارتفاع الحاوية */}
              <Image 
                src={img}
                alt={`slide ${index}`} 
                className="h-full w-4/6" // استخدم object-cover
              />
            </div>
          ))}
              </Carousel>
        </div>
    </div>
  )
}

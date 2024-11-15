import Image from "next/image";
import hero from '@/../public/images/svg/undraw_undraw_undraw_undraw_undraw_undraw_undraw_shopping_bags_2ude_-1-_mnw3_-2-_q7y0_muk6_-2-_l1mh_-2-_m4xj_wqq4.svg'
import Link from "next/link";
export default function Hero() {
  return (
<div className="relative mt-2 bg-slate-400 bg-opacity-40 h-[85dvh] rounded-xl overflow-hidden flex flex-col-reverse sm:flex-row justify-center sm:justify-between items-center px-[5%]">
      <div className="w-full h-1/2 sm:h-full z-10 flex flex-col justify-center gap-8 ps-5">
        <h1 className="w-full text-4xl font-bold text-green-500">fashion</h1>
        <p className="w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et numquam molestiae atque vitae repellendus quasi?</p>
        <Link href='#products' className="bg-green-500 text-center cursor-pointer w-20 rounded-lg text-white font-bold">bye now</Link>
        </div>
        <div  className="sm:w-1/2 h-1/2 sm:h-full">
            <Image src={hero} alt="hero shoping" className="w-full mt-5 h-[90%]" />
        </div>
    </div>
  )
}

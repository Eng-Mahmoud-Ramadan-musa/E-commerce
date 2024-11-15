import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";
import RenderStars from "../stars/RenderStars";
import ButtonAdd from "../buttonAdd/ButtonAdd";
// eslint-disable-next-line react/prop-types
export default function CardProducts({id,title,category,image,rating,descount,price,stock}) {

const {mode} = useContext(ThemeContext)
const borderStyle = {
    border: `1px solid ${mode == 'dark' ? '#fff' : '#222'}`
};

return (
    <div style={borderStyle} className='divControl relative w-60 items-start p-2 rounded-xl duration-300 ease-in-out'>
     <Link href={`/product/${id}`} key={id} className=" ">
    <Image src={image} width={220} height={50} alt={title} />
    <h2 className="text-lg font-bold text-nowrap text-ellipsis overflow-hidden">{title}</h2>
    {stock && <h3 className="text-sm font-semibold opacity-70">stock: {stock}</h3>}
    {rating && 
    <h3 className="text-sm font-semibold flex gap-1 items-center">rating: <RenderStars rate={rating} /> </h3>
    }
    { descount 
    ? <span className="flex justify-between items-center px-2">
        <del className="text-sm font-semibold text-red-500 opacity-70">price: {price} $</del>
        <h3 className="bg-green-500 px-1 rounded-lg">{(price -(price * descount / 100)).toFixed(1)} $</h3>
    </span> 
    : <h3 className="text-sm font-semibold opacity-70">price: {price} $</h3>
    }
     </Link>
<ButtonAdd product={{id,title,category,image,rating,descount,price,stock}} />
    </div>
  )
}

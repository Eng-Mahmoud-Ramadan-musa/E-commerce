/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import RenderStars from "@/app/components/stars/RenderStars";
import Image from "next/image"
import { useEffect,useState } from "react";
import ButtonAdd from "@/app/components/buttonAdd/ButtonAdd";
import L0ading from "@/app/components/loading/LOading";

async function fetchData(id) {
  let res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}
export default function product({params}) {
  const [photo, setPhoto] = useState(null);
  const [data, setData] = useState(null);

  async function initializeData() {
    const fetchedData = await fetchData(params.id);
    setData(fetchedData);
    setPhoto(fetchedData.thumbnail);
  }

  useEffect(() => {
    initializeData();
  }, []);

  function changeImage(update) {
    setPhoto(update);
  }

  if (!data) {
    return <L0ading />;
  }


  return (
    <div className="relative px-[5%] flex flex-col sm:flex-row justify-between items-center w-full h-[82vh]">
      <div className="relative w-full sm:w-1/2 h-1/3 sm:h-full">
        <Image src={photo} layout="fill" objectFit="cover" priority   alt={data.title} />
      </div>
      <div className="w-full sm:w-1/2 h-2/3 sm:h-full flex flex-col ps-3 gap-2 justify-center">
        <h2 className="text-2xl font-bold text-nowrap text-ellipsis overflow-hidden">{data.title}</h2>
        <h3 className="text-sm opacity-60 font-semibold">category: {data.category}</h3>
        <ul className="flex gap-2">
            {data.images.map((img , x) => <li className="relative w-20 h-20 border rounded-lg object-contain cursor-pointer" onClick={() => changeImage(img)} key={x}><Image src={img}  width={70} height={70}  alt={data.title} /></li>)}
        </ul>
        <p className="text-xs h-8 overflow-hidden">{data.description}</p>
        <h3 className="text-sm font-semibold">stock: {data.stock}</h3>
        <h3 className=" font-semibold flex gap-1 items-center text-lg">rating: <RenderStars rate={data.rating} /> </h3>  
        <h3 className="text-sm font-semibold">price: {data.price} $</h3>
      </div>
      <ButtonAdd product={data} />

    </div>
  )
}

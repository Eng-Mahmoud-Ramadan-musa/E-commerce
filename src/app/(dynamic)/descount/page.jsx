"use client";
import CardProducts from "@/app/components/card/CardProducts";
import { StateContext } from "@/app/context/StateProvider";
import { useContext } from "react";

export default function Descount() {
  const { state } = useContext(StateContext);

  return (
    <div className="py-5 w-full gap-2 flex justify-center flex-wrap items-center px-[5%]">
      {state.products.map(product => (
        <CardProducts
          key={product.id}
          id={product.id}
          title={product.title}
          category={product.category}
          image={product.thumbnail}
          rating={product.rating}
          discount={product.discountPercentage}
          price={product.price}
          stock={product.stock}
          descount={product.discountPercentage}
        />
      ))}
    </div>
  )
}

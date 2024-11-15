"use client";
import { StateContext } from "@/app/context/StateProvider";
import { useContext } from "react";
import CardProducts from "../card/CardProducts";
import L0ading from "../loading/LOading";

export default function Products() {
  const { state } = useContext(StateContext);
  if (!state.products) {
    return <L0ading />
  } 
  return (
    <div id="products" className="py-5 w-full gap-2 flex justify-center flex-wrap items-center px-[5%]">
      {state.filteredProducts.map(product => (
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
        />
      ))}
    </div>
  );
}
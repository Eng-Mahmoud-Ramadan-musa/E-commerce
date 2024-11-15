"use client";
import CardProducts from "@/app/components/card/CardProducts";
import { StateContext } from "@/app/context/StateProvider";
import { useContext } from "react";

export default function Favorites() {
  const { state } = useContext(StateContext);

  // التأكد من أن favoriteItems موجودة وهي مصفوفة
  if (!state.favoriteItems || state.favoriteItems.length === 0) {
    return (
      <div className="w-full text-white h-[80vh] flex justify-center items-center">
        no favorites products
      </div>
    );
  }

  return (
    <div className="py-5 w-full gap-2 flex justify-center flex-wrap items-center px-[5%]">
      {state.favoriteItems.map(product => (
        <CardProducts
          key={product.id} 
          id={product.id}
          title={product.title}
          category={product.category}
          image={product.image}
          rating={product.rating}
          discount={product.discountPercentage}
          price={product.price}
          stock={product.stock}
          descount={product.discountPercentage} // تأكد من صحة الاسم
        />
      ))}
    </div>
  );
}
"use client"
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { StateContext } from "@/app/context/StateProvider";
import CardProducts from "@/app/components/card/CardProducts";
import L0ading from "../../components/loading/LOading";

export default function Search() {
  const { state } = useContext(StateContext);
  const router = useRouter();


  const isSearchPage = router.pathname === '/search'; // استبدل '/search' بالمسار الفعلي

  // إذا كنت في صفحة البحث، استعرض جميع المنتجات
  const productsToDisplay = state.textSearch === '' || isSearchPage ? state.products : state.searchProducts;
  
  if (!productsToDisplay) {
    return <L0ading />
  } 
  // تحقق مما إذا كنت في صفحة ا
  return (
    <div className="py-5 w-full gap-2 flex justify-center flex-wrap items-center px-[5%]">
      {productsToDisplay.map(product => (
        <CardProducts
          key={product.id}
          id={product.id}
          image={product.thumbnail}
          title={product.title}
          category={product.category}
          rating={product.rating}
          discount={product.discountPercentage}
          price={product.price}
          stock={product.stock}
          descount={product.discountPercentage}
        />
      ))}
    </div>
  );
};
 
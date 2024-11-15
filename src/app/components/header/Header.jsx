"use client";
import Link from "next/link";
import { MdFavoriteBorder,IoIosSearch,FaRegUser, IoMdCart, IoIosLogOut } from "@/app/icons/icons";
import Mode from "../mode/Mode";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "@/app/context/StateProvider";
import { UserContext } from "@/app/context/UserProvider";

export function getCountProducts(items) {
  return items.length;
}

export default function Header() {
  const [total, setTotal] = useState(0);
  const { state, dispatch } = useContext(StateContext);
  const { user , setUser } = useContext(UserContext);

  // تحديث قيمة البحث في حالة البحث
  const handleSearch = (e) => {
    const val = e.target.value || '';
    dispatch({
      type: "SET_SEARCH_TERM",
      payload: val,
    });
  };

  // تحديث العدد الإجمالي للعناصر في السلة
  useEffect(() => {
    const totalCount = () => {
      setTotal(state.cartItems.reduce((x, item) => x + item.count, 0));
    };
    totalCount();
  }, [state.cartItems]);

  return (
    <div className="flex justify-between items-center py-2 px-[5%] fixed top-0 bg-inherit w-full border-b z-50">
      <Link href='/' className="text-[gold] font-bold text-2xl">store</Link>
      <Link href='/search' className="flex items-center border border-black overflow-hidden rounded-lg w-1/3">
        <input 
          type="text" 
          value={state.textSearch} 
          onChange={handleSearch} 
          className="dark:text-black ps-2 w-full" 
          placeholder="Search..."
        />
        <IoIosSearch className="text-2xl dark:text-black dark:bg-white text-center p-0 font-bold" />
      </Link>
      <div className="flex items-center gap-2 text-xl">
        <Mode />
        <Link href='/faviorts' className='relative rounded-lg'>
          <MdFavoriteBorder />
          <small className='absolute bg-green-500 rounded-full w-4 h-4 text-sm flex items-center justify-center border -top-2 -right-2 text-white'>
            {getCountProducts(state.favoriteItems)}
          </small>
        </Link>
        <Link href='/shoping' className='relative rounded-lg'>
          <IoMdCart />
          <small className='absolute bg-green-500 rounded-full w-4 h-4 text-sm flex items-center justify-center border -top-2 -right-2 text-white'>
            {total}
          </small>
        </Link>
        <Link href="/login" className="w-5 h-6 border flex justify-center items-center overflow-hidden rounded-full ">
        {user != null ? 
            <h3 className="text-sm">{user.name.charAt(0)}</h3>
            : 
            <FaRegUser className="w-3 h-4" />
          }
          </Link>
        <IoIosLogOut className="text-white bg-red-500 px-1 text-2xl rounded-e-md cursor-pointer" onClick={() => setUser(null)} />
      </div>
    </div>
  );
}
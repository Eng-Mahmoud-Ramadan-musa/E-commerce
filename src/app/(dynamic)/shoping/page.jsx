"use client"
import { StateContext } from "@/app/context/StateProvider";
import Image from "next/image";
import { useContext } from "react";
import { TiPlus,FaMinus } from "@/app/icons/icons";
import { ThemeContext } from "@/app/context/ThemeContext";
export default function Shoping() {
  const { state, dispatch } = useContext(StateContext);
  const { mode} = useContext(ThemeContext)
  const borderBottom = mode === 'dark' ? '#eee' : '#333';
  
    const minsToShopping = (product) => {
      dispatch({
        type: 'REMOVE_FROM_SHOPPING',
        payload: product
      });
    };
  
    const plusToShopping = (product) => {
      dispatch({
        type: 'ADD_TO_SHOPPING',
        payload: product
      });
    };
    if (!state.cartItems || state.cartItems.length === 0) {
      return (
        <div className="w-full text-white h-[80vh] flex justify-center items-center">
          no shoping products
        </div>
      );
    }
  return (
      <div className="py-5 w-full gap-2 flex justify-center flex-wrap items-center px-[5%]" >
        <div className='w-10/12 flex justify-between items-center' style={{borderBottom: `1px solid ${borderBottom}`}}>
          <h3 className='text-center w-full'>image</h3>
          <h3 className='text-center w-full'>price</h3>
          <h3 className='text-center w-full'>count</h3>
          <h3 className='text-center w-full'>total</h3>
        </div>
        {state.cartItems.map(product => {
          return (
            <div key={product.id} className='w-10/12 h-16 flex justify-between items-center' style={{borderBottom: `1px solid ${borderBottom}`}}>
              <div className='relative text-center h-full w-full overflow-hidden'><Image src={product.image} className="mx-auto" alt={product.title} width={70} height={90} /></div>
              <div className='text-center w-full'><h3>{product.price}</h3></div>
              <div className='flex justify-between items-center w-full border py-px'>
                <button className='w-full' onClick={() => minsToShopping(product)}><FaMinus className='mx-auto' /></button>
                <h3 className='text-center w-full bg-green-500 text-white rounded-full'>{product.count}</h3>
                <button className='w-full' onClick={() => plusToShopping(product)}><TiPlus className='mx-auto' /></button>
              </div>
              <div className='text-center w-full'><h3>{(product.price * product.count).toFixed(1)}</h3></div>
            </div>
          );
        })}
      </div>
  );
}
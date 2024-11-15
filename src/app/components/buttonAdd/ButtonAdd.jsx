
import { MdFavoriteBorder,IoIosAddCircle } from "@/app/icons/icons";
import { StateContext } from "@/app/context/StateProvider";
import { UserContext } from "@/app/context/UserProvider";
import { useRouter } from 'next/navigation'
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";

export default function ButtonAdd({ product }) {
    const { id, title, category, image, rating, descount, price, stock } = product;
    const router = useRouter()
    const {state, dispatch} = useContext(StateContext);
    const {user} = useContext(UserContext)
    const {mode} = useContext(ThemeContext)

    const isFavorite = state.favoriteItems.some(e => e.id === id);
    const bgControl = {
        background: `${mode === 'dark' ? '#ffffff33' : '#22222255'}`,
    };

    const handleUserAction = (actionCallback) => {
        if (user) {
            actionCallback();
        } else {
            router.push('/login');
        }
    };
    
    const addToShopping = () => {
        handleUserAction(() => {
            dispatch({
                type: 'ADD_TO_SHOPPING',
                payload: { id, title, category, image, rating, descount, price, stock, count: 1 }
            });
        });
    };

const addToFavorite = () => {
    handleUserAction(() => {
        if (isFavorite) {
            dispatch({ type: 'REMOVE_TO_FAVORITE', payload: { id } });
        } else {
            dispatch({
                type: 'ADD_TO_FAVORITE',
                payload: { id, title, category, image, rating, descount, price, stock }
            });
        }
    });
};
  return (
    <div style={bgControl} className='sm:hidden flex flex-col absolute top-4 right-1 text-xl bg-opacity-40 p-1 rounded-lg z-30'>
    <button className='hover:bg-green-500 rounded-full p-1 text-white z-30' onClick={addToShopping} ><IoIosAddCircle /></button>
    <button style={{background: isFavorite === true ? '#f00' : ''}} className='hover:bg-red-500 rounded-full p-1 text-white z-30' onClick={addToFavorite} ><MdFavoriteBorder /></button>
    </div>
  )
}

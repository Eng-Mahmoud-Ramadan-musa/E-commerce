"use client"
import { StateContext } from "@/app/context/StateProvider";
import { ThemeContext } from "@/app/context/ThemeContext";
import { useRef, useEffect, useState, useContext } from "react"

export default function Nav() {
  const { mode} = useContext(ThemeContext)
  const [pColor, setPColor] = useState();
  const [sColor, setSColor] = useState();
  const navRef = useRef(null)
  const { state, dispatch } = useContext(StateContext);
  const styleNav = {
    borderBottom: `1px solid ${mode === 'dark' ? '#fff' : '#222'}`,
    background: `${mode !== 'dark' ? '#fff' : '#333'}`
  }
  const handleFilter = (category) => {
    if (category === 'all') {
      dispatch({
        type: 'FILTER_BY_CATEGORY',
        payload: 'all'
      });
    } else {
      dispatch({
        type: 'FILTER_BY_CATEGORY',
        payload: category
      });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navTop = navRef.current.getBoundingClientRect().top;
        if (navTop <= 70) {
          setPColor('#fff');
          setSColor('#198754');
        } else {
          setPColor('#198754');
          setSColor('#fff')
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  return (
    <div style={styleNav} className='flex items-center justify-center sticky top-12 z-40 py-1 border-b'>
      <ul ref={navRef} className='flex gap-2 '>
        {['all', 'beauty', 'fragrances', 'furniture', 'groceries'].map((category) => (
            <li key={category} className="cursor rounded-tr-full rounded-bl-full overflow-hidden" style={{backgroundColor: pColor}}>
              <button onClick={() => handleFilter(category)} style={{ color: sColor === '#198754' ? '#198754' : '#fff' }} className={` font-bold capitalize hover px-2 ${state.category === category ? 'active' : ''}`}>{category}</button>
            </li>
          ))}
      </ul>
    </div>
  )
}

"use client";
/* eslint-disable react/prop-types */
import { createContext, useReducer, useEffect, useState } from "react";
import { initialState, reducer } from "./Reducer";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [loading, setLoading] = useState(true); // حالة التحميل
    const [error, setError] = useState(null); // حالة الخطأ

    const fetchData = async () => {
        try {
            setLoading(true); // بدء التحميل
            const res = await fetch("https://dummyjson.com/products");
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const result = await res.json();
            dispatch({
                type: "SET_PRODUCTS",
                payload: result.products,
            });
        } catch (err) {
            setError(err.message); // حفظ الخطأ في الحالة
            console.error("Error fetching data:", err);
        } finally {
            setLoading(false); // إنهاء التحميل
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div className="w-full h-dvh flex justify-center items-center font-bold">Loading...</div>; // عرض مكون التحميل
    }

    if (error) {
        return <div>Error: {error}</div>; // عرض رسالة الخطأ
    }

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
};

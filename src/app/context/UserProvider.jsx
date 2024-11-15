"use client";
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [users, setUsers] = useState([]); // قائمة المستخدمين
    const [user, setUser] = useState(null); //  المستخدم
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();


    useEffect(() => {
        // جلب البيانات من localStorage عند تحميل المكون
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers)); // تعيين المستخدمين من localStorage
        } else {
            setUsers([])
        }
    }, []);

    const registerUser = (user) => {
        // تحقق مما إذا كان المستخدم موجودًا
        if (users.some(person => person.email === user.email)) {
            setError('المستخدم موجود بالفعل');
            setSuccess('');
        } else {
            const updatedUsers = [...users, user]; // إضافة المستخدم الجديد
            setUsers(updatedUsers); // تحديث الحالة
            setError('');
            setTimeout(() => {
                router.push('/login');
            }, 500);
            setSuccess('تم إنشاء المستخدم بنجاح!');
            localStorage.setItem('users', JSON.stringify(updatedUsers)); // حفظ القائمة المحدثة في اللوكال استorage
        }
    };

    return (
        <UserContext.Provider value={{ registerUser, error, success ,users , setUser , user}}>
            {children}
        </UserContext.Provider>
    );
}
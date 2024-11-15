import React from "react";
import Head from "next/head"; // استيراد مكون Head
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import "./globals.css";
import { ThemeProvider } from "@/app/context/ThemeContext";
import { StateProvider } from "@/app/context/StateProvider";
import UserProvider from "@/app/context/UserProvider"; // تأكد من المسار الصحيح

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Discover the Best Products Online - Your Ultimate Shopping Destination</title> {/* عنوان الصفحة */}
        <meta name="description" content="This is a product page." /> {/* وصف الصفحة */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* لجعل الموقع متجاوب */}
        <meta name="robots" content="index, follow" /> {/* توجيه لمحركات البحث */}
        <link rel="canonical" href="https://yourwebsite.com" /> {/* رابط الكانوني */}
        <meta name="keywords" content="products, online shopping, electronics, fashion, affordable prices, best deals, buy online, product categories" /> {/* كلمات رئيسية */}
        {/* يمكنك إضافة المزيد من التاجات حسب الحاجة */}
      </Head>
      <body className={`capitalize flex flex-col justify-between h-[100dvh]`}>
        <ThemeProvider>
          <UserProvider>
            <StateProvider>
              <Header />
              <div className="flex flex-col mt-16 min-h-[87dvh] px-[5%] sm:min-h-[80dvh] items-center justify-start">
                {children}
              </div>
              <Footer />
            </StateProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
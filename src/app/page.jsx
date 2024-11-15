import Hero from "@/app/components/hero/Hero";
import Descount from "@/app/components/descount/Descount";
import Products from "@/app/components/products/Products";
import Nav from "@/app/components/navbar/Nav";
import Rating from "./components/rating/Rating";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <div className="flex flex-col h-auto w-full">
      <Hero />
        <Descount />
        <Nav />
        <Products />
        <Rating />
        <Contact />
    </div>
  );
}

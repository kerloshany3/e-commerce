import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";

export default function Home() {
  return (
    <>
      
      <Hero></Hero>
      <ProductSection></ProductSection>
      <Footer></Footer>
    </>
    
  );
}

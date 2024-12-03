import React from "react";
import Header from "../components/layout/header";
import Hero from "../components/home/hero";
import About from "../components/home/about";
import AboutSwiper from "../components/home/aboutSwiper";
import WhyZimon from "../components/home/whyZimon";
import vector1 from "../images/why-zimon-vector-1.png";
import vector2 from "../images/why-zimon-vector-2.png";
import FAQ from "../components/home/faq";
import StartNow from "../components/home/startNow";
import Footer from "../components/layout/footer";
export default function Home() {
  return (
    <>
      <div className="container md:p-6">
        <Header />
        <Hero />
        <About />
      </div>
      <div className="max-w-[1400px]">
        <AboutSwiper />
      </div>
      <div className="bg-custom-blue-dark relative">
        <img src={vector1} alt="Vector" className="absolute right-0 hidden md:block" />
        <img
          src={vector2}
          alt="Vector"
          className="absolute left-0 top-[200px] hidden md:block"
        />
        <div className="container relative z-10 p-6">
          <WhyZimon />
        </div>
      </div>
      <div className="bg-custom-blue-white relative">
        <div className="container relative z-10  p-6">
          <FAQ />
        </div>
      </div>
      <div className="container md:p-6">
        <StartNow />
      </div>
      <Footer />
    </>
  );
}

import React from "react";
import Header from "../components/layout/header";
import Hero from "../components/home/hero";
import About from "../components/home/about";
import WhyZimon from "../components/home/whyZimon";
import vector1 from "../images/why-zimon-vector-1.png";
import vector2 from "../images/why-zimon-vector-2.png";
import FAQ from "../components/home/faq";
import StartNow from "../components/home/startNow";
import Footer from "../components/layout/footer";
import AboutCardRow from "../components/home/aboutCardRow";
import MobileAboutSwiper from "../components/home/mobileAboutSwiper";
import logo from "../images/logo-min-xl.png";

export function Head() {
  return (
    <>
      <title>Zimón | Dile Zimón! a tu nuevo futuro financiero</title>
      <meta
        name="description"
        content="Zimón! te ofrece créditos rápidos y flexibles con montos pequeños, ideales para esas necesidades inmediatas o proyectos personales. Con Zimón!, olvídate de trámites complicados, filas interminables y papeleos engorrosos. ¡Todo lo manejas desde la app en minutos!"
      />
      <meta property='og:image' content={logo} />
      <meta name="image" content={logo} />
    </>
  );
}
export default function Home() {
  return (
    <>
      <div className="container md:p-6">
        <Header />
        <div className="mt-32">
          <Hero />
          <div id="about">
            <About />
          </div>
        </div>
      </div>
      <div id="how-it-works">
        <div className="max-w-[1400px] hidden xl:block">
          <AboutCardRow />
        </div>
        <div className="container p-6 xl:hidden">
          <MobileAboutSwiper />
        </div>
      </div>
      <div className="bg-custom-blue-dark relative">
        <img
          src={vector1}
          alt="Vector"
          className="absolute right-0 hidden md:block"
        />
        <img
          src={vector2}
          alt="Vector"
          className="absolute left-0 top-[200px] hidden md:block"
        />
        <div className="container relative z-10 p-6" id="why-zimon">
          <WhyZimon />
        </div>
      </div>
      <div className="bg-custom-blue-white relative" id="questions">
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

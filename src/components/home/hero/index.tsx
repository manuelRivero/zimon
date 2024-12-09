import React from "react";
import banner from "./../../../images/hero-zimon.png";
import bannerResponsive from "./../../../images/hero-responsive.png";
import BaseButton from "../../shared/baseButton";
export default function Hero() {
  return (
    <div className="relative px-6 py-14 md:px-24 rounded-2xl overflow-hidden">
      <div className="relative z-10 md:max-w-[400px]">
        <h2 className="text-lg md:hidden text-custom-white mb-4 max-w-[200px]">
          DILE ZIMON A TU NUEVO FUTURO FINANCIERO
        </h2>
        <h2 className="text-lg md:text-2xl text-custom-white mb-4 max-w-[200px] md:max-w-none">
          ¡Es hora de decir{" "}
          <span className="text-custom-blue-dark">Zimón!</span>
        </h2>
        <h1 className="text-4xl md:text-5xl text-custom-white  mb-4">
          Obtén tu crédito por hasta
        </h1>
        <h1 className="text-4xl md:text-5xl text-custom-blue-dark  mb-10 md:mb-0">
          $5,000 mil pesos de volada
        </h1>
         
        <div className="flex md:block justify-center">
          <BaseButton
            title="¡Obtén el tuyo ahora!"
            backgroundColorClassName="bg-custom-blue-dark"
          />
        </div>
      </div>
      <img
        src={banner}
        alt={"Banner"}
        className="hidden sm:block w-full h-full object-cover absolute top-0 left-0"
      />
      <img
        src={bannerResponsive}
        alt={"Banner"}
        className=" sm:hidden w-full  h-full object-cover absolute top-0 left-0"
      />
    </div>
  );
}

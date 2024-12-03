import React from "react";
import banner from "./../../../images/start-now-banner.png";
import logo from "./../../../images/logo-zimon-white.png";
import bannerResponsive from "./../../../images/start-now-banner-responsive.png";
import appGallery from "./../../../images/app-gallery.png";
import googlePay from "./../../../images/google-play.png";
import logoMin from "./../../../images/logo-min-xl.png";
import BaseButton from "../../shared/baseButton";

export default function StartNow() {
  return (
    <div className="relative px-6 pt-14 md:px-12">
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
          <h1 className="text-3xl md:text-3xl text-custom-white  mb-0 leading-0">
            ¡EMPIEZA HOY CON
          </h1>

          <img src={logo} alt="Logo" className="self-center" />
        </div>
        <div className="flex justify-between flex-col md:flex-row ">
          <div className="order-2 md:order-1">
            <h3 className="text-lg text-custom-white mb-2">
              Descarga la app en:
            </h3>
            <div className="flex flex-col gap-6 justify-end">
              <img
                src={googlePay}
                style={{ maxWidth: "140px" }}
                alt="Enlace a google play"
              />
              <img
                src={appGallery}
                style={{ maxWidth: "140px" }}
                alt="Enlace a app gallery"
              />
            </div>
          </div>
          <div className="flex-1  justify-center order-1 md:order-2 mt-[160px] md:mt-0 mb-6 md:mb-0">
          <h1 className=" md:max-w-[300px] md:ml-40 text-center text-3xl md:text-3xl text-custom-white  mb-0 leading-0">
          Nosotros te ayudamos a que tu futuro financiero diga “Zi”
          </h1>

          </div>
        </div>
         
        <div className="mt-12 hidden md:block">
          <img src={logoMin} alt="Logo" />
        </div>
      </div>
      <img
        src={banner}
        alt={"Banner"}
        className="hidden md:block w-full absolute top-0 left-0 h-full"
      />
      <img
        src={bannerResponsive}
        alt={"Banner"}
        className=" md:hidden w-full absolute top-0 left-0 h-full"
      />
    </div>
  );
}

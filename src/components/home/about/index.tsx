import React from "react";
import image from "./../../../images/about-image.png";
import appGallery from "./../../../images/app-gallery.png";
import googlePay from "./../../../images/google-play.png";

export default function About() {
  return (
    <div className="mt-24 p-6">
      <h1 className="max-w-[200px] md:max-w-none m-auto text-4xl md:text-5xl text-custom-blue-dark  mb-10 text-center">
        ¿Qué es Zimón?
      </h1>

      <div className="flex flex-wrap md:flex-nowrap gap-6 mt-8">
        <div className="md:flex-shrink-0">
          <img src={image} alt="Acerca de Zímon" />
        </div>
        <div className="max-w-[511px]">
          <h3 className="text-lg text-custom-blue-dark mb-8 text-right">
            ZIMON ¡TU COMPA FINANCIERO DIGITAL QUE TE AYUDA!
          </h3>
          <h2 className="text-3xl text-custom-blue-dark mb-4 text-right">
            <span className="text-custom-blue">  Zimón</span>, es tu{" "}
            <span className="text-custom-blue">crédito</span>, que se{" "}
            <span className="text-custom-blue">renueva automáticamente </span>
            con tus pagos <span className="text-custom-blue">chiquitos</span> y
            semanales. ¡Úsalo cuando quieras y como quieras!
          </h2>
          <div>
          <h3 className="text-lg text-custom-blue-dark mb-2 text-right">
            Descarga la app en:
          </h3>
          <div className="flex gap-6 justify-end">
          <img src={googlePay} style={{maxWidth: '140px'}} alt="Enlace a google play" />
          <img src={appGallery} style={{maxWidth: '140px'}} alt="Enlace a app gallery" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

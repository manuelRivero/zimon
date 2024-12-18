import React from "react";
import inIcon from "../../../images/in-icon.png";
import fbIcon from "../../../images/fb-icon.png";
import instaIcon from "../../../images/instagram-icon.png";
import tiktokIcon from "../../../images/tik-tok-icon.png";
import logo from "../../../images/logo-zimon-white.png";

export default function Footer() {
  const handleClick = (target: string) => {
    const targetElement = document.getElementById(target);
    const headerElement = document.getElementById("header");
    // targetElement?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    window.scrollTo({
      left: 0,
      top: targetElement?.offsetTop! - headerElement?.offsetHeight!,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-custom-blue-dark py-[82px] md:py-[100px] px-[45px]">
      <div className="container grid grid-cols-1 md:grid-cols-3">
        <div>
          <h6 className="text-custom-white text-lg">Contacto</h6>
          <p className="text-custom-white">soporte@zimon.com.mx</p>
          <p className="text-custom-white">+52 5639073349</p>
          <div className="flex gap-4 mt-4">
          <img src={fbIcon} alt="facebook" />
          <img src={instaIcon} alt="instagram" />
          <img src={tiktokIcon} alt="instagram" />
          <img src={inIcon} alt="in" />
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <a className="text-custom-white block" onClick={() => handleClick("about")} >¿Qué es Zimón?</a>
          <a className="text-custom-white block" onClick={() => handleClick("how-it-works")} >¿Cómo funciona?</a>
          <a className="text-custom-white block" onClick={() => handleClick("why-zimon")} >¿Por que Zimón?</a>
          <a className="text-custom-white block" onClick={() => handleClick("questions")} >Preguntas frecuentes</a>
        </div>
        <div className="mt-4 md:mt-0">
          <h6 className="text-custom-white text-lg">Políticas y Terminos</h6>
          <a href="https://zimon.mx/home/terms" target="_blank" className="block text-custom-white">Políticas de privacidad</a>
          <a href="https://zimon.mx/home/privacy" target="_blank" className="block text-custom-white">Terminos y condiciones</a>
          <img src={logo} className="my-4" alt="Logo Zimón" />
          <p className="text-custom-white">© 2024 ZIMÓN CRÉDITOS</p>
          <p className="text-custom-white">King David Mobile SAPI de CV</p>
          <p className="text-custom-white">Todos los Derechos Reservados.</p>
        </div>
      </div>
    </footer>
  );
}

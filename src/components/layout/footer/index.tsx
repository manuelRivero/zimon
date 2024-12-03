import React from "react";
import inIcon from "../../../images/in-icon.png";
import fbIcon from "../../../images/fb-icon.png";
import logo from "../../../images/logo-zimon-white.png";

export default function Footer() {
  return (
    <footer className="bg-custom-blue-dark py-[82px] md:py-[100px] px-[45px]">
      <div className="container grid grid-cols-1 md:grid-cols-3">
        <div>
          <h6 className="text-custom-white text-lg">Contacto</h6>
          <p className="text-custom-white">soporte@zimon.mx</p>
          <p className="text-custom-white">+52 56 39 07 33 49</p>
          <div className="flex gap-4 mt-4">
            <img src={inIcon} alt="instagram" />
            <img src={fbIcon} alt="facebook" />
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <h6 className="text-custom-white text-lg">Zimón</h6>
          <p className="text-custom-white">¿Qué es Zimón?</p>
          <p className="text-custom-white">¿Cómo funciona?</p>
          <p className="text-custom-white">¿Por que Zimón?</p>
          <p className="text-custom-white">Preguntas frecuentes</p>
        </div>
        <div className="mt-4 md:mt-0">
          <h6 className="text-custom-white text-lg">Políticas y Terminos</h6>
          <p className="text-custom-white">Políticas de privacidad</p>
          <p className="text-custom-white">Terminos y condiciones</p>
          <p className="text-custom-white">Marco legal</p>
          <p className="text-custom-white">CAT</p>
          <img src={logo} className="my-4" alt="Logo Zimón" />
          <p className="text-custom-white">© 2024 ZIMÓN CRÉDITOS</p>
          <p className="text-custom-white">King David Mobile SAPI de CV</p>
          <p className="text-custom-white">Todos los Derechos Reservados.</p>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import logo from "../../../images/logo-zimon.svg";
import BaseButton from "../../shared/baseButton";
import MobileMenu from "../mobileMenu";

export default function Header() {
  return (
    <header className="p-2 md:p-0">
      <nav className="flex justify-between border px-8 md:px-10 py-3.5 mt-14 rounded-full items-center mb-14">
        <div>
          <img src={logo} alt="Logo Zimón" />
        </div>
        <div className="hidden md:flex justify-between items-center gap-6">
          <a> ¿Qué es Zimón?</a>
          <a>¿Cómo funciona?</a>
          <a>¿Por que Zimón?</a>
          <a>FAQ</a>
          <BaseButton
            title="¡Obtén tu crédito!"
            backgroundColorClassName="bg-custom-blue-dark"
          />
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}

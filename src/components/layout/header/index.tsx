import React from "react";
import logo from "../../../images/logo-zimon.svg";
import BaseButton from "../../shared/baseButton";
import MobileMenu from "../mobileMenu";

export default function Header() {
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
    <header
      id="header"
      className="p-2 md:p-0 fixed top-0 left-0 w-full z-50 bg-white"
    >
      <nav className="flex justify-between border px-8 md:px-10 py-3.5 mt-6 mb-6 container rounded-full items-center">
        <div>
          <img src={logo} alt="Logo Zimón" />
        </div>
        <div className="hidden md:flex justify-between items-center gap-6">
          <a className="cursor-pointer" onClick={() => handleClick("about")}>
            ¿Qué es Zimón?
          </a>
          <a
            className="cursor-pointer"
            onClick={() => handleClick("how-it-works")}
          >
            ¿Cómo funciona?
          </a>
          <a
            className="cursor-pointer"
            onClick={() => handleClick("why-zimon")}
          >
            ¿Por qué Zimón?
          </a>
          <a
            className="cursor-pointer"
            onClick={() => handleClick("questions")}
          >
            FAQ
          </a>
          <BaseButton
            href="https://play.google.com/store/apps/details?id=com.kdm.apps.zmn&hl=en-US&ah=9FOzuJZd_sOViIAYAq-TNqJcDF0&pli=1 "
            title="¡Obtén tu crédito!"
            backgroundColorClassName="bg-custom-blue-dark"
          />
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}

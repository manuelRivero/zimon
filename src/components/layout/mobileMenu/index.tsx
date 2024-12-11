import React, { useState } from "react";
import BaseButton from "../../shared/baseButton";
import menuIcon from "../../../images/menu-icon.png";

export default function MobileMenu() {
  const [open, setOpen] = useState<boolean>(false);

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
    <div className="relative ">
      <div
        className="bg-custom-blue-dark p-2 rounded-sm"
        onClick={() => setOpen(!open)}
      >
        <img src={menuIcon} alt={"menu"} />
      </div>
      {open && (
        <div className="bg-white shadow-lg rounded-md w-[250px] p-4 absolute right-0 bottom-0 transform translate-y-full z-20">
          <a
            className="cursor-pointer block p-2"
            onClick={() => handleClick("about")}
          >
            ¿Qué es Zimón?
          </a>
          <a
            className="cursor-pointer block p-2"
            onClick={() => handleClick("how-it-works")}
          >
            ¿Cómo funciona?
          </a>
          <a
            className="cursor-pointer block p-2"
            onClick={() => handleClick("why-zimon")}
          >
            ¿Por que Zimón?
          </a>
          <a
            className="cursor-pointer block p-2"
            onClick={() => handleClick("questions")}
          >
            FAQ
          </a>
          <div className="flex justify-center mt-2">
            <BaseButton
              href="https://play.google.com/store/apps/details?id=com.kdm.apps.zmn&hl=en-US&ah=9FOzuJZd_sOViIAYAq-TNqJcDF0&pli=1 "
              title="¡Obtén tu crédito!"
              backgroundColorClassName="bg-custom-blue-dark"
            />
          </div>
        </div>
      )}
    </div>
  );
}

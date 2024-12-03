import React, { useState } from "react";
import BaseButton from "../../shared/baseButton";
import menuIcon from "../../../images/menu-icon.png";

export default function MobileMenu() {
  const [open, setOpen] = useState<boolean>(false);
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
          <a className="block p-2"> ¿Qué es Zimón?</a>
          <a className="block p-2">¿Cómo funciona?</a>
          <a className="block p-2">¿Por que Zimón?</a>
          <a className="block p-2">FAQ</a>
          <div className="flex justify-center mt-2">
            <BaseButton
              title="¡Obtén tu crédito!"
              backgroundColorClassName="bg-custom-blue-dark"
            />
          </div>
        </div>
      )}
    </div>
  );
}

import React, { PropsWithChildren, useState } from "react";
import logo from "./../../../images/logo-zimon-min.png";

interface Props extends PropsWithChildren {
  title: string;
}

export default function AccordionBody({ title, children }: Props) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <div
        className="bg-custom-blue rounded-full flex gap-10 items-center p-6 cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <img src={logo} alt="logo" />
        <h5 className="text-2xl text-custom-white">{title}</h5>
      </div>
      {active ? children : null}
    </>
  );
}

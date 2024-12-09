import React, { useState } from "react";
import { motion } from "motion/react";

interface Props {
  title: JSX.Element;
  description: JSX.Element;
  image: JSX.Element;
  logo: string;
  backgoundColor: string;
}
export default function MobileAboutCard({
  title,
  description,
  image,
  backgoundColor,
  logo,
}: Props) {

  return (
    <div
      className={` ${backgoundColor} rounded-lg p-4 overflow-hidden relative h-[500px]`}
    >
      <div className="flex flex-col justify-between">
        <div>
          <div>{title}</div>
          <div
          >
            {description}
            <div className="w-20 mt-2">
              <img src={logo} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="max-w-[280px]"
      >
        {image}
      </div>
    </div>
  );
}

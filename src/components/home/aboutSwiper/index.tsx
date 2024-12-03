import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AboutSwiperCard from "../aboutSwiperCard";
import { motion } from "motion/react";

import line1 from "./../../../images/line-orange.png";
import line2 from "./../../../images/line-blue.png";
import image1 from "./../../../images/swiper-card-1.png";
import image2 from "./../../../images/swiper-card-2.png";
import image3 from "./../../../images/swiper-card-3.png";
import logo1 from "./../../../images/logo-zimon-min.png";
import logo2 from "./../../../images/logo-zimon-min-pink.png";
import logo3 from "./../../../images/logo-zimon-min-blue.png";

import "swiper/css";

export default function AboutSwiper() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  return (
    <div className="p-6 flex gap-10 justify-center">
      <AboutSwiperCard
        active={activeSlide === 0}
        backgoundColor="bg-custom-blue"
        title={
          <div>
            <h2
              className="text-3xl text-custom-blue-dark mb-4"
              style={{ maxWidth: "230px" }}
            >
              1.
            </h2>
            <h2
              className="text-3xl text-custom-blue-dark mb-4"
              style={{ maxWidth: "230px" }}
            >
              Pídele a Zimón tu{" "}
              <span className="text-custom-white">crédito </span>
              en <span className="text-custom-white">minutos</span>
            </h2>
          </div>
        }
        description={
          <>
            <p>Con tus siguientes datos:</p>
            <ul className="list-disc m-0 p-0">
              <li className="ml-6">teléfono</li>
              <li className="ml-6">correo</li>
              <li className="ml-6">identificación</li>
            </ul>
          </>
        }
        image={
          <div className=" relative flex flex-col justify-end overflow-hidden h-full">
            <img src={image1} alt="Imagen" className="relative z-10 " />
          </div>
        }
        logo={logo1}
      />

      <AboutSwiperCard
        active={activeSlide === 1}
        backgoundColor="bg-custom-orange"
        title={
          <div>
            <h2
              className="text-3xl text-custom-blue-dark mb-4"
              style={{ maxWidth: "300px" }}
            >
              2.
            </h2>
            <h2
              className="text-3xl text-custom-blue-dark mb-4"
              style={{ maxWidth: "230px" }}
            >
              Zimón te responde en minutos{" "}
              <span className="text-custom-white">minutos</span>
            </h2>
          </div>
        }
        description={
          <>
            <p style={{ maxWidth: "220px" }}>
              Sabemos que no te gusta esperar... ¡Así, de rapidito te decimos si
              fuiste aprobado!
            </p>
          </>
        }
        image={
          <div className=" relative flex flex-col justify-end overflow-hidden h-full">
            <img src={image2} alt="Imagen" className="relative z-10 " />
          </div>
        }
        logo={logo2}
      />
      <AboutSwiperCard
        active={activeSlide === 2}
        backgoundColor="bg-custom-white"
        title={
          <div>
            <h2
              className="text-3xl text-custom-blue-dark mb-4"
              style={{ maxWidth: "300px" }}
            >
              3.
            </h2>
            <h2
              className="text-3xl text-custom-blue-dark mb-4"
              style={{ maxWidth: "230px" }}
            >
              <span className="text-custom-blue">Pagos chiquitos</span> en
              cuotas semanales
            </h2>
          </div>
        }
        description={
          <>
            <p style={{ maxWidth: "220px" }}>
              Zi, liquidas cada desembolso, tu crédito se renueva
              automáticamente
            </p>
          </>
        }
        image={
          <div className=" relative flex flex-col justify-end overflow-hidden h-full">
            <img src={image3} alt="Imagen" className="relative z-10 " />
          </div>
        }
        logo={logo3}
      />
    </div>
  );
}

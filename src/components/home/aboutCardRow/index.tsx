import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AboutSwiperCard from "../aboutCard";
import { motion } from "motion/react";

import line1 from "./../../../images/line-orange.png";
import line2 from "./../../../images/line-blue.png";
import image1 from "./../../../images/swiper-card-1.png";
import image2 from "./../../../images/swiper-card-2.png";
import image3 from "./../../../images/swiper-card-3.png";
import image4 from "./../../../images/swiper-card-4.png";
import logo1 from "./../../../images/logo-zimon-min.png";
import logo2 from "./../../../images/logo-zimon-min-pink.png";
import logo3 from "./../../../images/logo-zimon-min-blue.png";

import "swiper/css";

export default function AboutCardRow() {
  return (
    <div className="p-6 flex gap-10 justify-center">
      <AboutSwiperCard
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
          <div style={{ maxWidth: "200px" }}>
            <p>Con tus siguientes datos:</p>
            <ul className="list-disc m-0 p-0">
              <li className="ml-6">teléfono</li>
              <li className="ml-6">correo</li>
              <li className="ml-6">identificación</li>
            </ul>
          </div>
        }
        image={
          <div className=" relative flex flex-col justify-end overflow-hidden h-full">
            <img src={image1} alt="Imagen" className="relative z-10 " />
          </div>
        }
        logo={logo1}
      />

      <AboutSwiperCard
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
        backgoundColor="bg-custom-pink"
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
              Desembolsa el dinero{" "}
              <span className="text-custom-white">que necesitas</span>
            </h2>
          </div>
        }
        description={
          <>
            <p style={{ maxWidth: "220px" }}>
            Usa tu crédito de poquito en poquito o retiralo todo, y solo pagas lo que usas.
            </p>
          </>
        }
        image={
          <div className=" relative flex flex-col justify-end overflow-hidden h-full">
            <img src={image4} alt="Imagen" className="relative z-10 " />
          </div>
        }
        logo={logo3}
      />
      <AboutSwiperCard
        backgoundColor="bg-custom-white"
        title={
          <div>
            <h2
              className="text-3xl text-custom-blue-dark mb-4"
              style={{ maxWidth: "300px" }}
            >
              4.
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

import React from "react";
import image1 from "./../../../images/why-zimon-image-1.png";
import image2 from "./../../../images/why-zimon-image-2.png";
import image3 from "./../../../images/why-zimon-image-3.png";
import image4 from "./../../../images/why-zimon-image-4.png";
import image5 from "./../../../images/why-zimon-image-5.png";
export default function WhyZimon() {
  return (
    <div className="mt-24 py-24">
      <h1 className="text-5xl text-custom-white  mb-10 text-center ">
        ¿Por qué elegir Zimón?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 mb-20">
        <div className="flex items-center">
          <div>
            <h2 className="text-3xl text-custom-blue mb-4 text-center">
              Zi, rápidito y fácil:
            </h2>
            <h2 className="text-2xl text-custom-white mb-4 text-center font-Inter">
              Sin trámites complicados, Zimón te responde en pocos minutos.
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={image1} alt="image" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 mb-20">
        <div className="flex justify-center ">
          <img src={image2} alt="image" />
        </div>
        <div className="flex items-center order-first md:order-last">
          <div>
            <h2 className="text-3xl text-custom-blue mb-4 text-center">
              Zimón 100% digital: 
            </h2>
            <h2 className="text-2xl text-custom-white mb-4 text-center font-Inter">
              Controla todo desde tu app, sin sucursales ni papeleo.
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 mb-20">
        <div className="flex items-center">
          <div>
            <h2 className="text-3xl text-custom-blue mb-4 text-center">
              Pagos chiquitos: 
            </h2>
            <h2 className="text-2xl text-custom-white mb-4 text-center font-Inter">
              Para que puedas manejar tu dinero más comodamente.
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={image3} alt="image" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 mb-20">
        <div className="flex justify-center">
          <img src={image4} alt="image" />
        </div>
        <div className="flex items-center order-first md:order-last">
          <div>
            <h2 className="text-3xl text-custom-blue mb-4 text-center">
              Zimón aumenta tu límite: 
            </h2>
            <h2 className="text-2xl text-custom-white mb-4 text-center font-Inter">
              Con pagos puntuales, puedes llegar hasta los{" "}
              <strong>$5,000 pesos.</strong>
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 mb-20">
        <div className="flex items-center">
          <div>
            <h2 className="text-3xl text-custom-blue mb-4 text-center">
            Beneficios Zi liquidas antes: 
            </h2>
            <h2 className="text-2xl text-custom-white mb-4 text-center font-Inter">
            ¡Ahorras en intereses!
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={image5} alt="image" />
        </div>
      </div>
    </div>
  );
}

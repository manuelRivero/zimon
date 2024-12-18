import React, { useState } from "react";
import image from "../../../images/FAQ-image.png";
import chevron from "../../../images/chevron-down.svg";
import AccordionBody from "../../shared/accordionBody";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

export default function FAQ() {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 justify-around items-center">
        <div className="leading-1 mt-10">
          <h2 className="text-4xl mb-0 text-custom-blue-dark mb-0 text-center">
            Preguntas
          </h2>
          <h2 className="text-4xl text-custom-blue-dark mb-0 text-center">
            frecuentes
          </h2>
        </div>
        <img src={image} alt="Imagen" />
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-[647px]">
          <div className="mb-6">
            <AccordionBody title="Conoce más de Zimón">
              <Accordion>
                <AccordionItem
                  header={({ state: { isEnter } }) => (
                    <div className="flex justify-between w-full">
                      ¿Qué es Zimon?
                      <img
                        className={`ml-auto transition-transform duration-200 ease-out ${
                          isEnter && "rotate-180"
                        }`}
                        src={chevron}
                        alt="Chevron"
                      />
                    </div>
                  )}
                  buttonProps={{
                    className: ({ isEnter }) => `flex w-full text-left`,
                  }}
                  contentProps={{
                    className: "transition-height duration-200 ease-out",
                  }}
                  className="p-6 border rounded-xl mb-6 mt-12"
                >
                  <p className="mt-4 font-normal font-Inter" style={{fontWeight: 400}}>
                    Zimón es tu compa financiero que te echa la mano cuando
                    necesitas un empujoncito. Somos una plataforma 100% digital
                    que te da acceso a una línea de crédito para que hagas
                    desembolsos parciales o totales cuando lo necesites, sin
                    complicaciones. De esta manera, solo pagas por el monto que
                    uses. ¿Lo mejor? Cada que terminas de pagar lo que usaste,
                    tu línea de crédito se renueva automáticamente. Todo lo
                    manejas desde tu celular, con pagos semanales "chiquitos" y
                    sin tener que hacer trámites eternos. ¡Dile Zimón a tu nuevo
                    futuro financiero!
                  </p>
                </AccordionItem>
                <AccordionItem
                  header={({ state: { isEnter } }) => (
                    <div className="flex justify-between w-full">
                      ¿Cuál es el mínimo y límite de crédito que puedo obtener?
                      <img
                        className={`ml-auto transition-transform duration-200 ease-out ${
                          isEnter && "rotate-180"
                        }`}
                        src={chevron}
                        alt="Chevron"
                      />
                    </div>
                  )}
                  buttonProps={{
                    className: ({ isEnter }) => `flex w-full text-left`,
                  }}
                  contentProps={{
                    className: "transition-height duration-200 ease-out",
                  }}
                  className="p-6 border rounded-xl mb-6"
                >
                  <p className="mt-4 font-normal font-Inter" style={{fontWeight: 400}}>
                    En Zimón, el crédito se adapta a ti. El monto mínimo con el
                    que puedes comenzar es modesto, pero suficiente para darte
                    un empujoncito: ¡desde $1,000 pesitos! Y, si todo fluye,
                    puedes llegar hasta los $5,000 pesos con el tiempo. Al ser
                    una línea de crédito, tu escoges si quieres desembolsar en
                    uno o múltiples préstamos. De esta forma solo pagas por lo
                    que usas.
                  </p>
                </AccordionItem>
                <AccordionItem
                  header={({ state: { isEnter } }) => (
                    <div className="flex justify-between w-full">
                      ¿Cómo puedo aumentar mi límite de crédito?
                      <img
                        className={`ml-auto transition-transform duration-200 ease-out ${
                          isEnter && "rotate-180"
                        }`}
                        src={chevron}
                        alt="Chevron"
                      />
                    </div>
                  )}
                  buttonProps={{
                    className: ({ isEnter }) => `flex w-full text-left`,
                  }}
                  contentProps={{
                    className: "transition-height duration-200 ease-out",
                  }}
                  className="p-6 border rounded-xl mb-6"
                >
                  <p className="mt-4 font-normal font-Inter" style={{fontWeight: 400}}>
                    ¡Ah, la pregunta del millón! Para aumentar tu límite de
                    crédito con Zimón, todo empieza con ser súper puntual. Cada
                    semana tienes que hacer esos pagos chiquitos y al corriente.
                    Si sigues al pie de la letra, no solo te conviertes en un
                    cliente estrella, sino que también tus posibilidades de
                    obtener un aumento suben. // Ojo: aunque tu buen
                    comportamiento es clave, también consideramos otros
                    factores. Así que, aunque no te podemos asegurar el aumento,
                    ¡ser responsable con tus pagos te pone un paso más cerca de
                    esos 5,000 pesitos!
                  </p>
                </AccordionItem>
                <AccordionItem
                  header={({ state: { isEnter } }) => (
                    <div className="flex justify-between w-full">
                      ¿Puedo tener más de un crédito activo al mismo tiempo?
                      <img
                        className={`ml-auto transition-transform duration-200 ease-out ${
                          isEnter && "rotate-180"
                        }`}
                        src={chevron}
                        alt="Chevron"
                      />
                    </div>
                  )}
                  buttonProps={{
                    className: ({ isEnter }) => `flex w-full text-left`,
                  }}
                  contentProps={{
                    className: "transition-height duration-200 ease-out",
                  }}
                  className="p-6 border rounded-xl mb-6"
                >
                  <p className="mt-4 font-normal font-Inter" style={{fontWeight: 400}}>
                    Zimón te da chance de hacer varios desembolsos dentro de tu
                    límite de crédito. Es decir, si tienes, por ejemplo, un
                    límite de $1,000 pesos, puedes hacer varios retiros hasta
                    llegar a ese monto. Cada retiro, se convierte en un préstamo
                    con su propio plazo y fecha de pago, de esta forma puedes
                    manejar tus desembolsos como mejor te convenga, siempre y
                    cuando no te pases de tu límite. ¡Flexibilidad al máximo!
                  </p>
                </AccordionItem>
              </Accordion>
            </AccordionBody>
          </div>
          <div className="mb-6">
            <AccordionBody title="Solicitud de Crédito con Zimón">
              <Accordion>
                <AccordionItem
                  header={({ state: { isEnter } }) => (
                    <div className="flex justify-between w-full">
                      ¿Cómo realizar un retiro de mi crédito desde la aplicación
                      de Zimón?
                      <img
                        className={`ml-auto transition-transform duration-200 ease-out ${
                          isEnter && "rotate-180"
                        }`}
                        src={chevron}
                        alt="Chevron"
                      />
                    </div>
                  )}
                  buttonProps={{
                    className: ({ isEnter }) => `flex w-full text-left`,
                  }}
                  contentProps={{
                    className: "transition-height duration-200 ease-out",
                  }}
                  className="p-6 border rounded-xl mb-6 mt-12"
                >
                  <p className="mt-4 font-normal font-Inter" style={{fontWeight: 400}}>
                    Zimón lo que busca es alivianarte al instante, por eso
                    realizar un retiro es súper fácil. Así es como lo haces:
                    <br />
                    1. Abre tu aplicación de Zimón.
                    <br />
                    2. Selecciona la opción de "Retirar".
                    <br />
                    3. Elige cuánto dinero quieres retirar (puede ser parcial o
                    total, mientras no excedas tu límite de crédito).
                    <br />
                    4. Confirma los detalles, y ¡boom! El dinero se envía
                    directo a la cuenta CLABE que registraste.
                    <br />Y listo, ¡ya tienes tu desembolso disponible! Así de
                    sencillo y rápido.
                  </p>
                </AccordionItem>
                <AccordionItem
                  header={({ state: { isEnter } }) => (
                    <div className="flex justify-between w-full">
                      ¿Cómo solicitar un crédito en Zimon?
                      <img
                        className={`ml-auto transition-transform duration-200 ease-out ${
                          isEnter && "rotate-180"
                        }`}
                        src={chevron}
                        alt="Chevron"
                      />
                    </div>
                  )}
                  buttonProps={{
                    className: ({ isEnter }) => `flex w-full text-left`,
                  }}
                  contentProps={{
                    className: "transition-height duration-200 ease-out",
                  }}
                  className="p-6 border rounded-xl mb-6"
                >
                  {" "}
                  <p className="mt-4 font-normal font-Inter" style={{fontWeight: 400}}>
                    Solicitar un crédito con Zimón es casi tan fácil como pedir
                    una pizza (¡y casi igual de rápido!). Solo necesitas seguir
                    los simples pasos:
                    <br />
                    1. Descarga la app de Zimón desde la playstore o nuestra
                    página web.
                    <br /> 2. Llena el formulario con tu número de teléfono,
                    correo electrónico, identificación oficial y, muy
                    importante, tu cuenta CLABE para que podamos depositarte.
                    <br />
                    3. Al completar tu solicitud, te diremos si tu crédito fue
                    aprobado y por que monto en menos de 10 segundos. ¡Rápido,
                    ¿no?!
                    <br /> Y listo, ¡a disfrutar de tu crédito con Zimón!
                  </p>
                </AccordionItem>
                <AccordionItem
                  header={({ state: { isEnter } }) => (
                    <div className="flex justify-between w-full">
                      ¿En cuanto tiempo tengo respuesta después de ingresar mi
                      solicitud de crédito?
                      <img
                        className={`ml-auto transition-transform duration-200 ease-out ${
                          isEnter && "rotate-180"
                        }`}
                        src={chevron}
                        alt="Chevron"
                      />
                    </div>
                  )}
                  buttonProps={{
                    className: ({ isEnter }) => `flex w-full text-left`,
                  }}
                  contentProps={{
                    className: "transition-height duration-200 ease-out",
                  }}
                  className="p-6 border rounded-xl mb-6"
                >
                  <p className="mt-4 font-normal font-Inter" style={{fontWeight: 400}}>
                    ¡Rapidísimo! En Zimón no me gusta hacerte esperar. Después
                    de que ingresas tu solicitud de crédito, te doy una
                    respuesta en un máximo de 10 segundos. Sí, así de rápido. 😎
                    Ya sea que seas aprobado o no, siempre te enteras al
                    instante. ¡Es como si el crédito te guiñara un ojo en tiempo
                    récord!
                  </p>
                </AccordionItem>
                <AccordionItem
                  header={({ state: { isEnter } }) => (
                    <div className="flex justify-between w-full">
                      ¿Por qué se rechazó mi solicitud de crédito?
                      <img
                        className={`ml-auto transition-transform duration-200 ease-out ${
                          isEnter && "rotate-180"
                        }`}
                        src={chevron}
                        alt="Chevron"
                      />
                    </div>
                  )}
                  buttonProps={{
                    className: ({ isEnter }) => `flex w-full text-left`,
                  }}
                  contentProps={{
                    className: "transition-height duration-200 ease-out",
                  }}
                  className="p-6 border rounded-xl mb-6"
                >
                  <p className="mt-4 font-normal font-Inter" style={{fontWeight: 400}}>
                    Si tu solicitud de crédito fue rechazada, no te preocupes,
                    ¡puede pasar! En Zimón utilizamos una combinación de datos
                    alternativos para evaluar tu perfil, no solo tu historial
                    crediticio. A veces, esos factores hacen que no podamos
                    aprobar tu solicitud en este momento, pero no significa que
                    sea definitivo.
                    <br />
                    La buena noticia es que puedes volver a intentarlo después
                    de 90 días. En muchos casos, usuarios previamente rechazados
                    logran ser aprobados después, ya sea por cambios en su
                    perfil o mejoras en nuestro modelo de evaluación. ¡Así que
                    no te desanimes, todavía hay oportunidad!
                  </p>
                </AccordionItem>
              </Accordion>
            </AccordionBody>
          </div>
          <div className="mb-6">
            <AccordionBody title="Pago de tu crédito a Zimón">
              <Accordion>
                <AccordionItem
                  header={({ state: { isEnter } }) => (
                    <div className="flex justify-between w-full">
                      ¿Cuánto tiempo tengo para pagar mi crédito en Zimón?
                      <img
                        className={`ml-auto transition-transform duration-200 ease-out ${
                          isEnter && "rotate-180"
                        }`}
                        src={chevron}
                        alt="Chevron"
                      />
                    </div>
                  )}
                  buttonProps={{
                    className: ({ isEnter }) => `flex w-full text-left`,
                  }}
                  contentProps={{
                    className: "transition-height duration-200 ease-out",
                  }}
                  className="p-6 border rounded-xl mb-6 mt-12"
                >
                  <p className="mt-4 font-normal font-Inter" style={{fontWeight: 400}}>
                    Zimón te da chance de pagar con calma 😉. Tienes entre 12 y
                    16 semanas para liquidar cada uno de los desembolsos que
                    realices , con pagos semanales "chiquitos" que se ajustan a
                    tu bolsillo.
                    <br />
                    Así que, dependiendo del plazo que te haya sido asignado al
                    completar tu solicitud, puedes ir haciendo pagos semanales
                    mientras disfrutas de lo que compraste sin preocupaciones.
                    ¡Todo está diseñado para que sea manejable y sin presiones!
                  </p>
                </AccordionItem>
                <AccordionItem
                  header={({ state: { isEnter } }) => (
                    <div className="flex justify-between w-full">
                      ¿Puedo elegir el plazo a pagar de mi crédito?
                      <img
                        className={`ml-auto transition-transform duration-200 ease-out ${
                          isEnter && "rotate-180"
                        }`}
                        src={chevron}
                        alt="Chevron"
                      />
                    </div>
                  )}
                  buttonProps={{
                    className: ({ isEnter }) => `flex w-full text-left`,
                  }}
                  contentProps={{
                    className: "transition-height duration-200 ease-out",
                  }}
                  className="p-6 border rounded-xl mb-6"
                >
                  <p className="mt-4 font-normal font-Inter" style={{fontWeight: 400}}>
                    Por ahora, el plazo para pagar tu crédito en Zimón se asigna
                    automáticamente cuando recibes tu oferta. Dependiendo de tu
                    situación, te asignaremos un plazo de 12, 14 o 16 semanas, y
                    todos tus futuros desembolsos se difieren a ese mismo plazo.
                    <br />
                    Así que, aunque no puedes elegir el plazo por el momento, no
                    te preocupes: Zimón siempre busca darte un tiempo adecuado
                    para que los pagos semanales sean manejables.
                  </p>
                </AccordionItem>
                <AccordionItem
                  header={({ state: { isEnter } }) => (
                    <div className="flex justify-between w-full">
                      ¿Cómo realizo mi pago?
                      <img
                        className={`ml-auto transition-transform duration-200 ease-out ${
                          isEnter && "rotate-180"
                        }`}
                        src={chevron}
                        alt="Chevron"
                      />
                    </div>
                  )}
                  buttonProps={{
                    className: ({ isEnter }) => `flex w-full text-left`,
                  }}
                  contentProps={{
                    className: "transition-height duration-200 ease-out",
                  }}
                  className="p-6 border rounded-xl mb-6"
                >
                  <p className="mt-4 font-normal font-Inter" style={{fontWeight: 400}}>
                    Realizar tu pago en Zimón es tan fácil como hacer una
                    transferencia bancaria. Aquí te explico cómo funciona:
                    <br /> Abre la app de Zimón y da click en el botón "Pagar".
                    <br />
                    Podrás visualizar los datos necesarios como CLABE,
                    beneficiario y referencia que usarás para hacer la
                    transferencia desde la aplicación de tu banco.
                    <br /> Abre tu app de banco, realiza la transferencia
                    bancaria (SPEI) usando la CLABE y la referencia
                    proporcionada, ¡y listo!
                    <br /> Así de sencillo: solo transfieres desde tu cuenta
                    bancaria principal y cumples con tu pago semanal. ¡No hay
                    pierde!
                  </p>
                </AccordionItem>
                <AccordionItem
                  header={({ state: { isEnter } }) => (
                    <div className="flex justify-between w-full">
                      ¿Puedo liquidar anticipadamente?
                      <img
                        className={`ml-auto transition-transform duration-200 ease-out ${
                          isEnter && "rotate-180"
                        }`}
                        src={chevron}
                        alt="Chevron"
                      />
                    </div>
                  )}
                  buttonProps={{
                    className: ({ isEnter }) => `flex w-full text-left`,
                  }}
                  contentProps={{
                    className: "transition-height duration-200 ease-out",
                  }}
                  className="p-6 border rounded-xl mb-6"
                >
                  <p className="mt-4 font-normal font-Inter" style={{fontWeight: 400}}>
                    ¡Claro que puedes liquidar anticipadamente en Zimón! Siempre
                    tendrás acceso a tu saldo insoluto, que es el monto total
                    que debes para terminar de pagar tu crédito. Si decides
                    liquidarlo antes de tiempo, te ahorras los intereses de los
                    pagos futuros que aún no se han amortizado.
                    <br />
                    Así que, si tienes la oportunidad de pagar antes, ¡adelante!
                    Terminas más rápido y ahorras un dinerito extra.
                  </p>
                </AccordionItem>
              </Accordion>
            </AccordionBody>
          </div>
        </div>
      </div>
    </div>
  );
}

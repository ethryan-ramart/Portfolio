import React from "react";

export default function PresentationCard() {
  return (
    <div className="h-full md:w-8/12 absolute top-0 left-0 p-4 md:p-8 flex flex-col justify-start  ">
      <div className="ola z-10"></div>
      <h1 className="text-3xl md:text-xl lg:text-5xl font-bold text-white mb-4 md:mb-5 z-10">
        🖐🏼 Hola, Soy Leonel Ramirez
      </h1>
      <p className=" max-w-md break-normal text-md md:text-lg lg:text-2xl text-white z-20">
        Me concidero mucho más que un simple desarrollador front-end;
        <br />
        Soy un arquitecto de experiencias en línea que fusiona la tecnología con
        la creatividad.
      </p>
      <img
        src="assets/images/rostro.png"
        className="absolute bottom-0 -right-3/4 w-11/12 md:h-full md:auto object-cover z-50 hidden md:flex"
      />
    </div>
  );
}

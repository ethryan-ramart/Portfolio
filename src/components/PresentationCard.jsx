import React from "react";

export default function PresentationCard() {
  return (
    <div className="h-full md:w-8/12 absolute top-0 left-0 p-4 md:p-8 flex flex-col justify-start  md:justify-end">
      <h1 className="text-3xl md:text-xl lg:text-5xl font-bold text-white mb-4 md:mb-5">
        Hola, soy Leonel Ramirez
      </h1>
      <p className="text-md md:text-lg lg:text-2xl text-white">
        Soy un creador digital apasionado con un amor inquebrantable por tejer
        magia en la web. Soy mucho más que un simple desarrollador front-end;
        soy un arquitecto de experiencias en línea que fusiona la tecnología con
        la creatividad.
      </p>
    </div>
  );
}


"use client"

import { CustomButton, Hero } from "@/components";
import AllComponents from "@/components/AllComponents";
import { useState } from "react";

//Funcion asincrona porque espera respuesra de una api
export default function Home() {

  const [ShowCars, setShowCars] = useState(false);

  const handleChange = () => {
    setShowCars(!ShowCars);
  }

  return (
    <main className='overflow-hidden'>
      {/* En este componente se renderiza el titulo h1
      al igual que las imagenes principales */}
      <Hero />
      <div className='w-full flex-center gap-5 mt-10'>
                <CustomButton
                    title='Show Cars Available'
                    btnType='button'
                    containerStyles='bg-primary-blue rounded-full text-white'
                    handleClick = {handleChange}
                />
                {ShowCars && <p>sirve</p>}
        </div>
    </main>
  );
}
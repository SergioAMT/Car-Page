"use client"
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {

  //La funcion handleScroll crea una constante con el id discover
  //Y verifica si este existe y no es nulo ya que depende de la peticion a la API
  // de ser asi, el metodo scrollIntoView desliza la pantalla hasta la seccion
  // behavior smooth hace que el movimiento sea suave
  // const handleScroll = () => {
  //   const nextSection = document.getElementById("discover");

  //   if (nextSection) {
  //     nextSection.scrollIntoView({ behavior: "smooth" });
  //   }}

    return (
      <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
          <h1 className='hero__title'>
            Find, book, or rent a car -- quickly and easily
          </h1>


          <p className='hero__subtitle'>
            Streamline your car rental experience with our effortless booking process
          </p>

          {/* Botton reutilizable que se le pasa en handleclick la funcion handlescroll */}
          {/* <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
          /> */}
        </div>

        <div className='hero__image-container'>
          <div className='hero__image'>
            <Image src="/hero.png" alt='hero'
              fill className='object-contain' />
          </div>
          <div className='hero__image-overlay' />

        </div>

      </div>
    )
  }

  export default Hero
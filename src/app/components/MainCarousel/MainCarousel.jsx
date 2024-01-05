'use client'

import {useState } from "react"
import { lato } from "../../fonts"
import Image from 'next/image'
import ButtonComponent from '../ButtonComponent/ButtonComponent'


const carrusel2 = '/img/carrusel/carrusel-2.jpg'
const carrusel1 = '/img/carrusel/carrusel-1.webp'


const imagesCarousel = [{
    id: 0,
    title: 'Allons-y!',
    imgUrl: carrusel1,
},{
    id: 1,
    title: 'The Giggle',
    imgUrl: carrusel2,

}]

export default function MainCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  
    const nextImage = () => {
      const newIndex = (currentImageIndex + 1) % imagesCarousel.length;
      setCurrentImageIndex(newIndex);
    };
  
    const prevImage = () => {
      const newIndex = (currentImageIndex - 1 + imagesCarousel.length) % imagesCarousel.length;
      setCurrentImageIndex(newIndex);
    };
  
    return (
      
      <div className="relative md:w-full mx-auto overflow-hidden">
        <div className="relative w-full md:h-[864px] h-[722px] bg-cover bg-center md:mx-auto">
          
          <Image 
          src={`${imagesCarousel[currentImageIndex].imgUrl}`}
          alt="background Image"
          fill
          style={{
            objectFit: 'cover'
            
          }}
          className="w-full h-full md:h-full md:w-48"
          />
          <div className="absolute md:top-[16rem] md:left-24 m-6 top-[17rem]">

          <h1 className={`${lato.className} md:text-8xl text-5xl font-extrabold`}>{imagesCarousel[currentImageIndex].title}</h1>
          </div>
          
          
          <div className="absolute md:bottom-[20rem] bottom-[16.5rem] md:left-[6.5rem] m-2">
          <ButtonComponent data-cy="ver-ahora-button" to='https://www.doctorwho.tv/' text='Ver ahora' customClass="py-5 px-16 text-3xl"/>
          </div>
        </div>
        
        <div className="absolute md:bottom-9 md:right-28 bottom-2 right-4">
          <button onClick={prevImage} data-cy="prev-image" className="border-solid border-[3px] border-white p-2 m-3 cursor-pointer rounded-full hover:bg-customYellow hover:border-customYellow"></button>
          <button onClick={nextImage} data-cy="next-image" className="border-solid border-[3px] border-white p-2 m-3 cursor-pointer rounded-full hover:bg-customYellow hover:border-customYellow"></button>
          <button className="border-solid border-[3px] border-white p-2 m-3 cursor-pointer rounded-full hover:bg-customYellow hover:border-customYellow"></button>
          <button className="border-solid border-[3px] border-white p-2 m-3 cursor-pointer rounded-full hover:bg-customYellow hover:border-customYellow"></button>
          <button className="border-solid border-[3px] border-white p-2 m-3 cursor-pointer rounded-full hover:bg-customYellow hover:border-customYellow"></button>
        </div>
      </div>
    )
}


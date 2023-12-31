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
      <div className="relative w-full mx-auto overflow-hidden">
        <div className="relative w-full h-[890px] bg-cover bg-center">
          
          <Image 
          src={`${imagesCarousel[currentImageIndex].imgUrl}`}
          alt="background Image"
          fill
          style={{
            objectFit: 'cover'
          }}
          />
          <div className="absolute top-[18rem] left-[9rem]">

          <h1 className={`${lato.className} text-8xl font-extrabold`}>{imagesCarousel[currentImageIndex].title}</h1>
          </div>
          
          
          <div className="absolute bottom-[21.5rem] left-[9rem]">
          <ButtonComponent to='https://www.doctorwho.tv/' text='Ver ahora'/>
          </div>
        </div>
        
        <div className="absolute bottom-[35px] right-[7rem]">
          <button onClick={prevImage} className="border-solid border-[3px] border-white p-2 m-3 cursor-pointer rounded-full hover:bg-customYellow hover:border-customYellow"></button>
          <button onClick={nextImage} className="border-solid border-[3px] border-white p-2 m-3 cursor-pointer rounded-full hover:bg-customYellow hover:border-customYellow"></button>
          <button className="border-solid border-[3px] border-white p-2 m-3 cursor-pointer rounded-full hover:bg-customYellow hover:border-customYellow"></button>
          <button className="border-solid border-[3px] border-white p-2 m-3 cursor-pointer rounded-full hover:bg-customYellow hover:border-customYellow"></button>
          <button className="border-solid border-[3px] border-white p-2 m-3 cursor-pointer rounded-full hover:bg-customYellow hover:border-customYellow"></button>
        </div>
      </div>
    )
}


'use client'

import {useState } from "react"
import styles from './index.module.css'
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
      <div className={styles["container__carousel"]}>
        <div className={styles["image__carousel"]} >
          
          <Image 
          src={`${imagesCarousel[currentImageIndex].imgUrl}`}
          alt="background Image"
          fill
          style={{
            objectFit: 'cover'
          }}
          />
          <div className={styles["image__carousel-h1"]}>

          <h1 className={lato.className}>{imagesCarousel[currentImageIndex].title}</h1>
          </div>
          
          
          <div className={styles["btn__component"]}>
          <ButtonComponent to='https://www.doctorwho.tv/' text='Ver ahora'/>
          </div>
        </div>
        
        <div className={styles["btns__carousel"]}>
          <button onClick={prevImage}></button>
          <button onClick={nextImage}></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    )
}


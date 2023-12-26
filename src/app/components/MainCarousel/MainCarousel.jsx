'use client'

import { useEffect, useState, useRef } from "react"
import './index.css'
import Image from "next/image"

import carrusel1 from '../../../assets/img/carrusel/carrusel-1.webp'
import carrusel2 from '../../../assets/img/carrusel/carrusel-2.jpg'


const imagesCarousel = [{
    id: 0,
    title: 'The Giggle',
    imgUrl: carrusel1,
},{
    id: 1,
    title: 'Allons-y!',
    imgUrl: carrusel2,

}]

export default function MainCarousel() {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth"
      });
    }

  }, [currentIndex]);


  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === imagesCarousel.length - 1;
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1);
      }
    }
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="main__container">
      <div className="slider__container">
        {/* <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
        <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div> */}
        <div className="images__container">
          <ul ref={listRef}>
            {
              imagesCarousel.map((item) => {
                return <li key={item.id}>
                  <Image src={item.imgUrl} width={500} height={280} alt="como !?"/>
                </li>
              })
            }
          </ul>
        </div>
        <div className="dots__container">
          {
            imagesCarousel.map((_, idx) => (
              <div key={idx}
                className={`dot__container-item ${idx === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(idx)}>
                &#9865;
              </div>))
          }
        </div>
      </div>
    </div >
  )
}
import ConoceA from "./ConoceA";
import Image from "next/image";
import './index.css'

export default function page() {
    return (
        <div className="about__main">
            <div className='about__imgs'>
                <Image 
                src='/img/symbols/persistencia.png'
                width={510}
                height={510}
                alt='Persistencia Simbolo'
                className="about__imgs-persistencia"/>
                <Image 
                src='/img/symbols/resistencia.png'
                width={750}
                height={750}
                alt='Resistencia Simbolo'
                className="about__imgs-resistencia"/>
            </div>
            
            <ConoceA/>
        </div>
    )
}


import ConoceA from "./ConoceA";
import Image from "next/image";


export default function page() {
    return (
        <div className="md:mx-24 flex flex-row relative">
            <div className='z-10'>
                <Image 
                src='/img/symbols/persistencia.png'
                width={323.149}
                height={323.149}
                alt='Persistencia Simbolo'
                className="absolute -left-20 bottom-[36rem] md:-bottom-14 md:-left-18 md:w-[510px] md:h-[510px] w-[423.149px] h-[423.149px]"/>
                <Image 
                src='/img/symbols/resistencia.png'
                width={366.703}
                height={366.703}
                alt='Resistencia Simbolo'
                className="absolute bottom-[45rem] -right-28 md:bottom-7 md:right-48 md:w-[750px] md:h-[750px] w-[466.7px] h-[466.7px]"/>
            </div>
            <ConoceA className='z-20'/>
        </div>
    )
}


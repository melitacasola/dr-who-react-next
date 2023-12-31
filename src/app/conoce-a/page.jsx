import ConoceA from "./ConoceA";
import Image from "next/image";


export default function page() {
    return (
        <div className="mx-[6rem] flex flex-row">
            <div className=''>
                <Image 
                src='/img/symbols/persistencia.png'
                width={510}
                height={510}
                alt='Persistencia Simbolo'
                className="absolute bottom-9 left-[2rem]"/>
                <Image 
                src='/img/symbols/resistencia.png'
                width={750}
                height={750}
                alt='Resistencia Simbolo'
                className="absolute bottom-[5rem] right-[18rem]"/>
            </div>
            <ConoceA/>
        </div>
    )
}


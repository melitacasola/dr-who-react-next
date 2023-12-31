import SocialNetworks from '../SocialNetworks/SocialNetworks'
import Image from 'next/image'
import logoCadena from '../../../../public/logos/logo-cadena.png'

export default function Footer() {
    return(
        <footer className="bg-bgGeneral fixed bottom-0 left-0 w-full flex flex-row justify-between items-center border-t-2 border-solid border-white h-20 px-28">
            <Image
            src={logoCadena}
            alt='cadena de dr. Who'
            width={35}
            height={34}/>
            <SocialNetworks />
        </footer>
    )
}
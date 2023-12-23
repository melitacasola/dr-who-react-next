import SocialNetworks from '../SocialNetworks/SocialNetworks'
import './index.css'
import Image from 'next/image'
import logoCadena from '../../../assets/img/logos/logo-cadena.png'

export default function Footer() {
    return(
        <footer className='footer__container'>
            <Image
            src={logoCadena}
            width={35}
            height={34}/>
            <SocialNetworks />
        </footer>
    )
}
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import styles from './index.module.css'
import Image from 'next/image'
import logoCadena from '../../../assets/img/logos/logo-cadena.png'

export default function Footer() {
    return(
        <footer className={styles['footer__container']}>
            <Image
            src={logoCadena}
            alt='cadena de dr. Who'
            width={35}
            height={34}/>
            <SocialNetworks />
        </footer>
    )
}
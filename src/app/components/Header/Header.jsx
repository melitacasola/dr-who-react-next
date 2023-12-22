import Link from 'next/link'
import './index.css'
import { Montserrat } from 'next/font/google'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import Logo from '../Logo/Logo'



const montserrat = Montserrat({ weight: '600',
subsets: ['latin'],})

const links = [{
    label: 'Conoce a',
    route: '/conoce-a'
}, {
    label: 'Doctores',
    route: '/doctores'
}, {
    label: 'Contacto',
    route: '/contacto'
}]



export default function Header() {
    
    return(
        <header className='header__container'>
            <nav>
                <ul className='navigation' >
                    {
                        links.map(({label, route}) => (
                            <li key={route} className={montserrat.className}>
                                <Link href={route}>
                                    {label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

            </nav>
            <Logo />
            <SocialNetworks /> 
            
        </header>
    )
}
import Link from 'next/link'
import { SearchContext } from '../../layout'
import styles from './index.module.css'
import { montserrat } from '../../fonts'
import SearchComponent from '../SearchComponent/SearchComponent'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import Logo from '../Logo/Logo'



const links = [{
    label: 'Conoce a',
    route: '/conoce-a'
}, {
    label: 'Doctores',
    route: '/doctors'
}, {
    label: 'Contacto',
    route: '/contact'
}]



export default function Header() {
    
    return(
        <SearchContext.Consumer>
        {({ setSearchResults }) => (
        <header className={styles['header__container']}>
            <nav>
                <ul className={styles['navigation']}>
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
            <SearchComponent setSearchResults={setSearchResults}/>
            <SocialNetworks /> 
            
        </header>
        )}
        </SearchContext.Consumer>
    )
}
import Link from 'next/link'
import { SearchContext } from '../../layout'
// import styles from './index.module.css'
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
        <header className='bg-bgGeneral flex justify-between items-center h-[9rem] px-[7rem]'>
            <nav>
                <ul className="flex list-none gap-10 text-xl font-bold">
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
            <div className="flex justify-around items-center">

                <Logo />
                <SearchComponent setSearchResults={setSearchResults}/>
            </div>
            <SocialNetworks /> 
            
        </header>
        )}
        </SearchContext.Consumer>
    )
}
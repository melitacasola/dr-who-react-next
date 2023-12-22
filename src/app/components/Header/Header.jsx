import Link from 'next/link'
import './index.css'

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
        <header className='navigation'>
            <nav>
                <ul>
                    {
                        links.map(({label, route}) => (
                            <li key={route}>
                                <Link href={route}>
                                    {label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

            </nav>
            
        </header>
    )
}
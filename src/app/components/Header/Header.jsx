
import { SearchContext } from '../../layout'
import NavBar from '../NavBar/NavBar'

import SearchComponent from '../SearchComponent/SearchComponent'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import Logo from '../Logo/Logo'




export default function Header() {

    return(
        <SearchContext.Consumer>
        {({ setSearchResults }) => (
        <header className='bg-bgGeneral flex md:flex-row justify-between items-center md:h-[9rem] md:px-[7rem] px-8 h-auto'>
            <div className="order-2 md:order-1">
                <NavBar/>
            </div>

            <div className="md:flex justify-around items-center md:order-1">
                <Logo />
                <div className='hidden md:block'>
                <SearchComponent setSearchResults={setSearchResults}/>
                </div>

            </div>

            <SocialNetworks customClass="hidden md:block md:order-2 "/> 
            
        </header>
        )}
        </SearchContext.Consumer>
    )
}
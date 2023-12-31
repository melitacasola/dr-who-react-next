
import { SearchContext } from '../../layout'
import NavBar from '../NavBar/NavBar'

import SearchComponent from '../SearchComponent/SearchComponent'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import Logo from '../Logo/Logo'




export default function Header() {

    return(
        <SearchContext.Consumer>
        {({ setSearchResults }) => (
        <header className='bg-bgGeneral flex justify-between items-center h-[9rem] px-[7rem]'>
            <NavBar/>

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
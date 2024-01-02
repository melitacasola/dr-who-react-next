import { useState } from 'react';
import Link from 'next/link';
import { montserrat } from '../../fonts';
import Image from 'next/image';
import SearchComponent from '../SearchComponent/SearchComponent';
import SocialNetworks from '../SocialNetworks/SocialNetworks';

const links = [
  {
    label: 'Conoce a',
    route: '/conoce-a',
  },
  {
    label: 'Doctores',
    route: '/doctors',
  },
  {
    label: 'Contacto',
    route: '/contact',
  },
];

const NavBar = () => {

  const [navBar, setNavBar] =useState(false)

  return(
    <div>
    <nav className="bg-bgGeneral top-0 right-0 w-full fixed z-10">
      <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="md:py-5 md:block">
          <div className="md:hidden flex items-center">
            <button
              className="p-2 text-gray-700 ml-auto"
              onClick={() => setNavBar(!navBar)}
            >
              {navBar ? (
                <Image 
                  src='/icons/material-symbols_close.svg' width={58} height={58} alt="NavBar close" 
                />
              ) : (
                <Image 
                  src='/icons/material-symbols_menu.svg' width={58} height={58} alt='menu paginas'
                />
              )}
            </button>
          </div>
        </div>
        <div className={`flex-1  w-full mt-0 md:flex md:pb-0 md:mt-0 ${
          navBar ? 'md:p-0 flex-col w-full bg-bgGeneral' : 'hidden'
        }`}>
          <ul className="flex flex-col items-center justify-center md:flex-row list-none gap-8 md:gap-12 text-xl font-bold bg-bgGeneral">
            {links.map(({ label, route }) => (
              <li key={route} className={montserrat.className}>
                <Link href={route}>
                  {label}
                </Link>
              </li>
            ))}
            <li className="md:hidden">
              <SearchComponent/>
            </li>
            <li className="md:hidden">
              <SocialNetworks customClass="flex"/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
};

export default NavBar;

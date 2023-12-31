import { useState } from 'react';
import Link from 'next/link';
import { montserrat } from '../../fonts';
import Image from 'next/image';
import Logo from '../Logo/Logo';

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
    <nav className="bg-black items-center left-0 right-0 z-10">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
                )
              }
              </button>
            </div>
          </div>
        </div>
        <div className={`flex-1 justify-self-center pb-3 mt-0 md:flex md:pb-0 md:mt-0 ${
                navBar ? 'p-12 md:p-0 flex-col' : 'hidden'
              }`}>
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

        </div>
      </div>
    </nav>
    
  </div>
  )
};

export default NavBar;

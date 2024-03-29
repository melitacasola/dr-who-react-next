'use client'

import Image from 'next/image';
import { useState } from 'react'

import { montserrat } from '../../fonts';
import { useRouter } from 'next/navigation';

const SearchComponent = () => {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        router.push(`/doctors?search=${searchQuery}`)
        setSearchQuery('')
    }

    return (
        <div className="md:ml-20 ">
            <form onSubmit={handleSearch} id='idSearch' className="flex flex-row justify-between items-center p-2 md:m-3">
                <Image
                    src='/icons/material-symbols-light_search.svg'
                    width={46}
                    height={46}
                    alt='buscador'
                    className="md:w-6 md:h-6 mr-4"
                    
                />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar"
                    id='drSearch'
                    className={`bg-bgGeneral md:text-xl text-3xl w-32 text-white placeholder:text-white font-semibold border-none ${montserrat.className}`}
                />
            </form>
        </div>
    );
}

export default SearchComponent;



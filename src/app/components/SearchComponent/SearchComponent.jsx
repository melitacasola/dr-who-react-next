'use client'

import Image from 'next/image';
import { useState, useContext } from 'react'
import doctorsData from '../../../assets/doctors.json'
import { SearchContext } from '../../layout';
import { montserrat } from '../../fonts';

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const {setSearchResults} = useContext(SearchContext)

    const handleSearch = (e) => {
        e.preventDefault()
        const query = searchQuery.toLowerCase().trim()

        const filteredResults = doctorsData.doctors.filter(({doctor, actor}) =>
        actor.toLowerCase().includes(query) || doctor.toLowerCase().includes(query)
        ) //doctor.actor.toLowerCase().includes(searchQuery.toLowerCase().trim())
        setSearchResults(filteredResults);
    }

    return (
        <div className="inline ml-20">
            <form onSubmit={handleSearch} className="flex flex-row justify-between items-center p-2 m-3">
                <Image
                    src='/icons/material-symbols-light_search.svg'
                    width={24}
                    height={24}
                    alt='buscador'
                    className="mr-2"
                    
                />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar"
                    className={`bg-bgGeneral text-xl text-white placeholder:text-white font-semibold border-none ${montserrat.className}`}
                />
            </form>
        </div>
    );
}

export default SearchComponent;



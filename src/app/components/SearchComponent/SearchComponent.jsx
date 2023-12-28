'use client'

import Image from 'next/image';
import { useState, useContext } from 'react'
import doctorsData from '../../../assets/doctors.json'
import { SearchContext } from '../../layout';

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const {setSearchResults} = useContext(SearchContext)

    const handleSearch = (e) => {
        e.preventDefault();
        
        const filteredResults = doctorsData.doctors.filter((doctor) =>
            doctor.actor.toLowerCase().includes(searchQuery.toLowerCase().trim())
        );
        setSearchResults(filteredResults);
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <Image
                    src='/icons/material-symbols-light_search.svg'
                    width={24}
                    height={24}
                    alt='buscador'
                />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar"
                />
            </form>
        </div>
    );
}

export default SearchComponent;



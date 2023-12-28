'use client'
import Image from 'next/image';
import { useState } from 'react';
// import '../../../../public/icons/material-symbols-light_search.svg'

const SearchComponent = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = () => {
        onSearch(searchQuery)
    }

    return (
        <div>
        <Image
            src='/icons/material-symbols-light_search.svg'
            width={24}
            height={24}
            alt='buscador'
            onClick={handleSearch}/>
        <input
            type="text"
            value={searchQuery}
            placeholder='Buscar'
            onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        </div>
    )
}

export default SearchComponent

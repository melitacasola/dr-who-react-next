'use client'

import Image from 'next/image';
import { useState, useContext } from 'react'
import doctorsData from '../../../assets/doctors.json'
import { SearchContext } from '../../layout';
import styles from './index.module.css'
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
        <div className={styles["search__container"]}>
            <form onSubmit={handleSearch} className={styles["search__container-form"]}>
                <Image
                    src='/icons/material-symbols-light_search.svg'
                    width={24}
                    height={24}
                    alt='buscador'
                    className={styles["search__container-img"]}
                    
                />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar"
                    className={`${styles["search__container-input"]} ${montserrat.className}`}
                />
            </form>
        </div>
    );
}

export default SearchComponent;



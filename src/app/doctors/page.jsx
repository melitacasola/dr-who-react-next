'use client'
import { useContext } from 'react'
import { SearchContext } from '../layout'
import doctorsData from '../../assets/doctors.json'
import DoctorsCards from './DoctorsCards'
import { lato } from '../fonts'

export default function DoctorsPage(){
    const { searchResults } = useContext(SearchContext);
    
    return(
        <main className="md:px-20 px-12 py-0">
            <h2 className={`${lato.className} md:text-6xl my-8 md:p-8 md:m-8 text-5xl`}>Doctores</h2>
            {searchResults.length > 0 ? (
                <DoctorsCards doctors={searchResults}/>
            ) : (
                <DoctorsCards doctors={doctorsData.doctors}/>
            )}
        </main>
    );
}
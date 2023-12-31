'use client'
import { useContext } from 'react'
import { SearchContext } from '../layout'
import doctorsData from '../../assets/doctors.json'
import DoctorsCards from './DoctorsCards'
import { lato } from '../fonts'

export default function DoctorsPage(){
    const { searchResults } = useContext(SearchContext);
    
    return(
        <main className="px-20 py-0">
            <h2 className={`${lato.className} text-6xl pt-8 m-3`}>Doctores</h2>
            {searchResults.length > 0 ? (
                <DoctorsCards doctors={searchResults}/>
            ) : (
                <DoctorsCards doctors={doctorsData.doctors}/>
            )}
        </main>
    );
}
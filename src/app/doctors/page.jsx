'use client'
import { useContext } from 'react'
import { SearchContext } from '../layout'
import doctorsData from '../../assets/doctors.json'
import DoctorsCards from './DoctorsCards'
import { lato } from '../fonts' 
import './index.css'

export default function DoctorsPage(){
    const { searchResults } = useContext(SearchContext);
    
    return(
        <main className="main__doctors">
            <h2 className={lato.className}>Doctores</h2>
            {searchResults.length > 0 ? (
                <DoctorsCards doctors={searchResults}/>
            ) : (
                <DoctorsCards doctors={doctorsData.doctors}/>
            )}
        </main>
    );
}
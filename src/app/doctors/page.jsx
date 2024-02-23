
import doctorsData from '../../assets/doctors.json'
import DoctorsCards from '../components/DoctorsCards/DoctorsCards'
import { lato } from '../fonts'
import filterData  from '../../utils/searchUtils'


export default function DoctorsPage({ searchParams }){
    const searchParam = searchParams.search;
    const filteredDoctors = filterData(doctorsData, searchParam);

    
    return(
        <main className="md:px-20 px-12 py-0">
            <h2 className={`${lato.className} md:text-6xl my-8 md:p-8 md:m-8 text-5xl`}>Doctores</h2>
            
            {filteredDoctors.length > 0 ? (
                <DoctorsCards doctors={filteredDoctors}/>
            ) : (
                <DoctorsCards doctors={doctorsData.doctors}/>
            )}
        </main>
    );
}
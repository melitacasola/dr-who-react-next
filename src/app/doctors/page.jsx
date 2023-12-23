import DoctorsCards from './DoctorsCards'
import { lato } from '../fonts' 
import './index.css'


export default async function DoctorsPage(){

    return(
        <main className="main__doctors">
            <h2 className={lato.className}>Doctores</h2>
            <DoctorsCards/>
            
        </main>
    )
}

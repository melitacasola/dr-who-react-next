import doctorsData from '../../assets/doctors.json'
import Image from 'next/image';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent'

const DoctorsCards = () => {
    return (
      <section className='section__doctors'>
        
          <ul>
            {doctorsData.doctors?.map((doctor) => (
              <li key={doctor.id} className="section__doctors-card">
                <Image 
                src={`${doctor.image}`}
                alt={`Imagen del ${doctor.doctor}`}
                width={290}
                height={390}
                className='section__doctors-img'
                />
                <div className="section__doctors-text">
                  <h3>{doctor.doctor}</h3>
                  <p>{doctor.actor}</p>
                  <p>{doctor.screen_time}</p>
                </div>
              <ButtonComponent to="https://nextjs.org/docs/pages/api-reference/components/link" text="Ir a Otra Página"/>

              </li>
            ))}
          </ul>
        
      </section>
    );
  };
  
  export default DoctorsCards;
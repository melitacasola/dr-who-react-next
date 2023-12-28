import Image from 'next/image';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent'
import { lato } from '../fonts';

const DoctorsCards = ({doctors}) => {
    return (
      <section className='section__doctors'>
        
          <ul>
            {doctors?.map((doctor) => (
              <li key={doctor.id} className="section__doctors-card">
                <Image 
                src={`${doctor.image}`}
                alt={`Imagen del ${doctor.doctor}`}
                width={290}
                height={390}
                className='section__doctors-img'
                />
                <div className="section__doctors-text">
                  <h3 className={lato.className}>{doctor.doctor}</h3>
                  <p className='section__doctors-text-p'>{doctor.actor}</p>
                  <p>{doctor.screen_time}</p>
                </div>
                <div className='section__doctors-btn'>

                <ButtonComponent to="https://www.doctorwho.tv" text="Ver más" />
                </div>

              </li>
            ))}
          </ul>
        
      </section>
    );
  };
  
  export default DoctorsCards;
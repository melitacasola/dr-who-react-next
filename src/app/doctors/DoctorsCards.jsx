import Image from 'next/image';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent'
import { lato } from '../fonts';

const DoctorsCards = ({doctors}) => {
    return (
      <section className='mb-28 flex-1'>
        
          <ul className='grid grid-cols-4 grid-rows-5 gap-x-20 gap-y-20 flex-1'>
            {doctors?.map((doctor) => (
              <li key={doctor.id} className="relative mb-20">
                <div className='flex flex-col h-full'>
                  <Image 
                  src={`${doctor.image}`}
                  alt={`Imagen del ${doctor.doctor}`}
                  width={314}
                  height={459.168}
                  className='object-cover w-full h-full mt-10'
                  />
                  <div className="grid gap-x-8 gap-y-4 mt-10">
                    <h3 className={`${lato.className} text-4xl mt-10`}>{doctor.doctor}</h3>
                    <p className='text-4xl italic mt-10'>{doctor.actor}</p>
                    <p className='text-4xl mt-10'>{doctor.screen_time}</p>
                  </div>
                </div>
                <div className='my-12 mt-12'>
                <ButtonComponent to='https://www.doctorwho.tv/' text='Ver más' isLarge={false} customClass="py-[1rem] px-16"/>
                </div>
              </li>
            ))}
          </ul>
        
      </section>
    );
  };
  
  export default DoctorsCards;
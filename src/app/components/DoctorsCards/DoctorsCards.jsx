import Image from 'next/image';
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { lato } from '../../fonts';

const DoctorsCards = ({doctors}) => {
    return (
    <section className='md:ml-[4.5rem] ml-4 flex-1'>
        
        <ul className='md:grid grid-cols-4 grid-rows-5 md:gap-x-20 gap-y-20 flex-1'>
            {doctors?.map((doctor) => (
            <li key={doctor.id} className="relative md:mb-20">
                <div className='md:flex flex-col h-full'>
                <Image 
                  src={`${doctor.image}`}
                  alt={`Imagen del ${doctor.doctor}`}
                  width={314}
                  height={459.168}
                  className='md:object-cover md:w-full md:h-[459.168px]'
                />
                <div className="grid md:gap-x-8 md:gap-y-12 gap-y-8 mt-9 md:mt-12">
                    <h3 className={`${lato.className} text-4xl`}>{doctor.doctor}</h3>
                    <p className='text-3xl italic'>{doctor.actor}</p>
                    <p className='text-3xl '>{doctor.screen_time}</p>
                </div>
                </div>
                <div className='my-12 md:my-0'>
                <ButtonComponent to='https://www.doctorwho.tv/' text='Ver más' isLarge={false} customClass="py-3 px-16 text-3xl"/>
                </div>
                
            </li>
            ))}
        </ul>
        
    </section>
    );
};

export default DoctorsCards;
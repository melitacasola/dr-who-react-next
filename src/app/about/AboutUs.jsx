import ButtonComponent from '../components/ButtonComponent/ButtonComponent'
import Image from 'next/image'
import { lato } from '../fonts'

const AboutUs = () => {

    return (
        <section className='md:flex justify-between gap-[6.3rem]'>
            
            <article className='flex flex-col items-center m-5 mb-28'>
                <h2 className={`${lato.className} relative text-5xl leading-[3.5rem] md:text-6xl md:pt-10 text-center md:m-3 md:-left-10`}>Conoce a ... decimotercera doctor</h2>
                <div className='md:p-10 md:mx-5 text-3xl flex items-center flex-col text-center md:mb-20 mb-12'>
                <Image 
                src='/img/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg'
                width={306}
                height={411}
                alt='Décimotercer Doctor Jodie Whittaker'
                className='my-12 md:hidden h-[411px] object-cover z-20'
                /><p className='md:relative md:-left-10 px-3 md:px-0 z-20'>

                    Lorem ipsum dolor sit amet consectetur. Convallis maecenas ac pharetra metus justo amet nunc amet. Hac pellentesque proin sapien duis natoque. Risus enim duis quis egestas non. Morbi ut potenti egestas id pharetra gravida interdum nam.
                </p>
                </div>

                <ButtonComponent to='https://www.doctorwho.tv/' text='Ver más' customClass="text-2xl md:px-36 md:text-3xl md:py-5 py-3 px-16 md:relative md:-left-10 z-20"/>
                
            </article>
            
            

            <article className='mb-[3.5rem] z-40'>
                <Image src='/img/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg'
                width={306}
                height={411}
                alt='Décimotercer Doctor Jodie Whittaker'
                className='hidden md:block md:h-[814px] md:w-[606px] md:max-w-[606px] object-cover'/>

            </article>


        </section>
    )
}

export default AboutUs

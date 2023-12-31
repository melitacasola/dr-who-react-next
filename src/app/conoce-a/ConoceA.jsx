import ButtonComponent from '../components/ButtonComponent/ButtonComponent'
import Image from 'next/image'
import { lato } from '../fonts'

const ConoceA = () => {

    return (
        <section className='flex justify-between gap-[6.3rem]'>
            
            <article className='flex flex-col items-center m-5'>
                <h2 className={`${lato.className} text-6xl pt-10 text-center m-3`}>Conoce a ... decimotercera doctor</h2>
                <p className='p-10 mx-5 text-3xl text-center mb-20'>Lorem ipsum dolor sit amet consectetur. Convallis maecenas ac pharetra metus justo amet nunc amet. Hac pellentesque proin sapien duis natoque. Risus enim duis quis egestas non. Morbi ut potenti egestas id pharetra gravida interdum nam.</p>

                <ButtonComponent to='https://www.doctorwho.tv/' text='Ver más' isLarge={true} customClass="tu-clase-adicional"/>
                
            </article>
            
            

            <article className='mb-[3.5rem] z-40'>
                <Image src='/img/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg'
                width={606}
                height={814}
                alt='Décimotercer Doctor Jodie Whittaker'
                className='h-[814px] w-[606px] max-w-[606px]'/>

            </article>


        </section>
    )
}

export default ConoceA

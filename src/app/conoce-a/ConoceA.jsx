import ButtonComponent from '../components/ButtonComponent/ButtonComponent'
import Image from 'next/image'
import { lato } from '../fonts'



const ConoceA = () => {

    return (
        <section className='about__section'>
            
            <article className='about__article'>
                <h2 className={lato.className}>Conoce a ... decimotercera doctor</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Convallis maecenas ac pharetra metus justo amet nunc amet. Hac pellentesque proin sapien duis natoque. Risus enim duis quis egestas non. Morbi ut potenti egestas id pharetra gravida interdum nam.</p>

                <ButtonComponent to='https://www.doctorwho.tv/' text='Ver más'/>
                
            </article>
            
            

            <article className='about__imgs-dr'>
                <Image src='/img/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg'
                width={606}
                height={814}
                alt='Décimotercer Doctor Jodie Whittaker'/>

            </article>


        </section>
    )
}

export default ConoceA

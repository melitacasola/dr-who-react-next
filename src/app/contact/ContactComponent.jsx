import Image from 'next/image'
import { lato } from '../fonts'
import ButtonComponent from '../components/ButtonComponent/ButtonComponent'
Image
import styles from "./index.module.css";

export default function ContactComponent() {
    
    return(
        <section className={styles['contact__section']}>
            <article className={styles['contact__article']}>

            <h2 className={lato.className}>Envia tu mensaje al Doctor</h2>

                <Image
                    src='/img/symbols/persistencia-2.png'
                    width={279.295}
                    height={279.295}
                    className={styles['contact__article-imgs1']}/>
                    
                    <Image
                    src='/img/symbols/resistencia.png'
                    width={544.602}
                    height={544.602}
                    className={styles['contact__article-imgs2']}/>

                    <Image
                    src='/img/symbols/vencer.png'
                    width={329.483}
                    height={329.483}
                    className={styles['contact__article-imgs3']}/>
                
            
                
            </article>

            <form action="" className={styles['contact__form']}>
                <label for="name"></label>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Nombre *"
                    required
                    className={`${styles['contact__form-name']} ${lato.className}`}
                />

                <label for="email"></label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="Email *"
                    required
                    className={`${styles['contact__form-email']} ${lato.className}`}
                />
                <label for="message"></label>
                <textarea
                    id="message" 
                    name="message"
                    placeholder="Mensaje *"
                    rows="4"
                    required
                    className={`${styles['contact__form-msg']} ${lato.className}`}
                ></textarea>
                <ButtonComponent to='#' text="Send" />
            </form>
        
    </section>
        

    )
}
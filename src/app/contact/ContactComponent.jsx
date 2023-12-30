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

            <article className={styles['contact__article-form']}>
                <form action="" className={styles['contact__form']}>
                    <label for="name">Nombre:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        placeholder="Escribe tu nombre"
                        required
                    />

                    <label for="email">Correo Electrónico:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        placeholder="Correo electrónico"
                        required
                    />
                    <label for="message">Mensaje:</label>
                    <textarea
                        id="message" 
                        name="message"
                        placeholder="Escribe tu mensaje aquí"
                        rows="4"
                        required
                    ></textarea>
                    <ButtonComponent to='#' text="send" />
                </form>
            </article>
        
    </section>
        

    )
}
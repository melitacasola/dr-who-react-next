import './index.css'
import ButtonComponent from '../components/ButtonComponent/ButtonComponent'

export default function ContactComponent() {
    
    return(
        <section className='contactsection'>
        <form>
            <div className='namecontainer'>
                <label htmlFor="name"></label>
                <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="Nombre "
                />
            </div>
            <div className='email__container'>
                <label htmlFor="email"></label>
                <input 
                type="text" 
                id="email" 
                name="email"
                placeholder="Email"
                />
            </div>
            <div className='message__container'>
                <label htmlFor="message"></label>
                <textarea
                type="text" 
                id="message" 
                name="message"
                placeholder="Mensaje *"
                />
            </div>
        </form>
        <ButtonComponent to='#' text="Enviar" />
    </section>
        

    )
}
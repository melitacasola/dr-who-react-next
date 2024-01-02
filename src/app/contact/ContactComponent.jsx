'use client'
import { useState } from 'react'
import Image from 'next/image'
import { lato } from '../fonts'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const contextClass ={
    success: "bg-blue-600",
    error: "bg-red-600",
}
export default function ContactComponent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const handleChange = (event) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.name && formData.email && formData.message) {
            console.log(`Nombre: ${formData.name} - Email: ${formData.email} - Mensaje: ${formData.message}`)
            return notifySuccess();
        } 
    }
    
    const notifySuccess = () => {
        toast.success('¡Su mensaje ha sido enviado correctamente!', {
            position: 'bottom-right',
            autoClose: 15000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,                 
        });
    };
    


    return(
        <section className='md:flex justify-between md:mt-8 md:pt-8 px-8'>
            <article className='md:w-1/2'>

            <h2 className={`${lato.className} md:text-[64px] md:mx-8 text-5xl font-bold text-center md:w-[742px] leading-[5rem]`}>Envia tu mensaje al <br />Doctor</h2>
            <div className='relative'> 
                <Image
                    src='/img/symbols/persistencia-2.png'
                    width={243.295}
                    height={243.295}
                    className='absolute md:top-3 -top-2 md:left-44 -left-7 md:h-[279.295px] md:w-[279.295px]'/>
                    
                    <Image
                    src='/img/symbols/resistencia.png'
                    width={450}
                    height={450}
                    className='absolute transform rotate-45 md:left-[22rem] left-28 -bottom-[25rem] md:-bottom-[35rem] md:h-[544.602px] md:w-[544.602px]'/>

                    <Image
                    src='/img/symbols/vencer.png'
                    width={253.836}
                    height={253.836}
                    className='absolute top-56 -left-12 md:left-40 md:top-72 md:h-[329.483px] md:w-[329.483px]'/>
            </div>
            </article>

            <form action="" onSubmit={handleSubmit} className='flex flex-col md:gap-y-0 gap-y-6 md:w-[575px] md:mr-24'>
                <label for="name"></label>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Nombre *"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`border-[3px] border-white bg-black text-white placeholder:text-white text-3xl md:h-[66px] md:mb-20 h-14 px-10 py-4 ${lato.className} z-10`}
                />

                <label for="email"></label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`border-[3px] border-white bg-black text-white placeholder:text-white text-3xl md:h-[66px] md:mb-20 h-14 px-10 py-4 ${lato.className} z-10`}
                />
                <label for="message"></label>
                <textarea
                    id="message" 
                    name="message"
                    placeholder="Mensaje *"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`border-[3px] border-white bg-black text-white placeholder:text-white text-3xl px-10 py-4 md:mb-16 h-13 md:h-[277px] ${lato.className} z-10`}
                ></textarea>
                <button type='submit' className={`flex md:w-72 w-60 md:h-16 h-14 text-2xl md:text-4xl justify-center items-center md:mb-24 mb-12 relative bg-customYellow px-12 rounded-full font-extrabold text-3xl md:text-4xl text-black z-0 ${lato.className}`}>Send</button>
                
                <ToastContainer style={{ height: "150px", width: "430px"}} bodyClassName={() => "text-xl font-white font-med block p-5"}/>
            </form>
        
    </section>
        

    )
}
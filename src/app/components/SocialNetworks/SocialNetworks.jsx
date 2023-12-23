import Image from "next/image"
import './index.css'
import facebookIcon from '../../../assets/img/icons/facebook.svg'
import xIcon from '../../../assets/img/icons/simple-icons_x.svg'
import instagramIcon from '../../../assets/img/icons/mdi_instagram.svg'
import tiktokIcon from '../../../assets/img/icons/ic_baseline-tiktok.svg'


export default function SocialNetworks() {
    
    return(
        <div className="social__networks" target="_blank">
            <a href="https://www.facebook.com/">
                <Image 
                src={facebookIcon}
                alt= "facebook Icon"
                width={24}
                height={24}
                />
            </a>
            <a href="https://twitter.com/?lang=es" target="_blank"><Image 
                src={xIcon}
                alt="x icon"
                width={24}
                height={24}
            /></a>
            <a href="https://www.instagram.com/" target="_blank"><Image 
                src={instagramIcon}
                alt="instagram icon"
                width={24}
                height={24}
            /></a>
            <a href="https://www.tiktok.com/es/" target="_blank"><Image 
                src={tiktokIcon}
                alt="tik tok icon"
                width={24}
                height={24}
            /></a>
        </div>
    )
}
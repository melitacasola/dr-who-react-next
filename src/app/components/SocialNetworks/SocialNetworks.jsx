import Image from "next/image"
import './index.css'
import facebookIcon from '../../../assets/img/icons/facebook.svg'
import xIcon from '../../../assets/img/icons/simple-icons_x.svg'
import instagramIcon from '../../../assets/img/icons/mdi_instagram.svg'
import tiktokIcon from '../../../assets/img/icons/ic_baseline-tiktok.svg'


export default function SocialNetworks() {
    
    return(
        <div className="social__networks">
            <a href="">
            <Image 
                src={facebookIcon}
                alt="Facebook icon"
                width={24}
                height={24}
            />
            </a>
            <a href=""><Image 
                src={xIcon}
                alt="x icon"
                width={24}
                height={24}
            /></a>
            <a href=""><Image 
                src={instagramIcon}
                alt="instagram icon"
                width={24}
                height={24}
            /></a>
            <a href=""><Image 
                src={tiktokIcon}
                alt="tik tok icon"
                width={24}
                height={24}
            /></a>
        </div>
    )
}
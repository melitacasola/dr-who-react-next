import Link from 'next/link';
import LogoImage from '../../../assets/img/logos/logo.png'
import Image  from 'next/image';
import './index.css'


export default function Logo() {
    return (
        <div className='logo__img'>
            <Link href='/' >
                <Image src={LogoImage} alt='Dr. Who Home' width={200} height={200} />
            </Link>
        </div>
    )
}
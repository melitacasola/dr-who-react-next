import Link from 'next/link';
import LogoImage from '../../../../public/logos/logo.png'
import Image  from 'next/image';



export default function Logo() {
    return (
        <div className="relative z-30 md:top-4">
            <Link href='/' >
                <Image src={LogoImage} alt='Dr. Who Home' width={200} height={200} className="md:h-48 md:w-48 h-24 w-24"/>
            </Link>
        </div>
    )
}
import Link from 'next/link';
import LogoImage from '../../../../public/logos/logo.png'
import Image  from 'next/image';



export default function Logo() {
    return (
        <div className="relative z-10 top-6">
            <Link href='/' >
                <Image src={LogoImage} alt='Dr. Who Home' width={200} height={200} className="h-48 w-48"/>
            </Link>
        </div>
    )
}
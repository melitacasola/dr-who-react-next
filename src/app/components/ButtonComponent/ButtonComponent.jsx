'use client'
import { lato } from '../../fonts';
import { useMediaQuery } from '@react-hook/media-query'

const ButtonComponent = ({ to, text, customClass }) => {

    const isMobile = useMediaQuery('(max-width: 767px)');
    const isLarge = isMobile ? false : true

    const buttonClasses = `relative bg-customYellow px-12 rounded-full font-extrabold text-3xl md:text-4xl text-black z-0 ${customClass}`

    return (
        <div className={lato.className}>
            <a href={to} target="_blank" className={buttonClasses}>
                {text}
            </a>
        </div>
    );
};

export default ButtonComponent;
import { lato } from '../../fonts';

const ButtonComponent = ({ to, text, customClass, isLarge }) => {
    const buttonClasses = `relative bg-customYellow py-5 px-12 rounded-full font-extrabold text-4xl text-black z-0 ${isLarge ? 'px-36' : ''} ${customClass}`;

    return (
        <div className={lato.className}>
            <a href={to} target="_blank" className={buttonClasses}>
                {text}
            </a>
        </div>
    );
};

export default ButtonComponent;
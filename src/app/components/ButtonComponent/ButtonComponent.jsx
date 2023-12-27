import styles from './index.module.css'
import { lato } from '../../fonts';

const ButtonComponent = ({ to, text }) => {

    return (
        <div className={lato.className}>
            <a href={to} target="_blank" className={styles["btn__component"]}>
                {text}
            </a>
        </div>
    );
};

export default ButtonComponent;
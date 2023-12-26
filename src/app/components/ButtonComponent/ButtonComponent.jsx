import './index.css'

const ButtonComponent = ({ to, text }) => {

    return (
        <div>
            <a href={to} target="_blank" className="btn__component">
                {text}
            </a>
        </div>
    );
};

export default ButtonComponent;
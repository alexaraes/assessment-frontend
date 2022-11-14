interface ButtonProps {
    text?: string;
    showHide: () => void;
}

const Button = ({ text, showHide }: ButtonProps) => {
    return <button onClick={() => showHide()} >{text}</button>
}

export default Button;
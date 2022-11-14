import styled from "styled-components";
import AddBox from "../icons/AddBox";
import Clock from "../icons/Clock";

interface ButtonProps {
    text?: string;
    showHide: () => void;
}

// there was no eye icons in the codebase, so I improvised with other icons for the purpose of the exercise
const Button = ({ text, showHide }: ButtonProps) => {
    return (
        <StyledButton onClick={() => showHide()} >
            <ButtonText>{text}</ButtonText>
            <Icon>
                {text === 'Show' ? (
                    <AddBox />
                ) : (
                    <Clock />
                )} 
            </Icon>
        </StyledButton>
    )
}

const StyledButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 500px;
    height: 200px;
    border: none;
    margin: 15px 0;
    border-radius: 15px;
    background-color: #2769ED;
    color: white;
    font-size: 32px;
    cursor: pointer;
`;

const ButtonText = styled.div`
    padding: 35px 0 0 30px;
`;

const Icon = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 15px;
`;

export default Button;
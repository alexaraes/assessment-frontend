import styled from "styled-components";
import AddBox from "../icons/AddBox";
import Clock from "../icons/Clock";
import { devices } from '../styles/mediaQueries';

interface ButtonProps {
    text?: string;
    showHide: (value: string | undefined) => void;
    value?: string;
}

// there was no eye icons in the codebase, so I improvised with other icons for the purpose of the exercise
const Button = ({ text, showHide, value }: ButtonProps) => {
    return (
        <StyledButton onClick={() => showHide(value)} >
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
    height: 200px;
    border: none;
    margin: 15px 0;
    border-radius: 15px;
    background-color: #2769ED;
    color: white;
    font-size: 32px;
    cursor: pointer;
    @media ${devices.mobile} {
        width: 350px;
    }
    @media ${devices.tablet} {
        width: 500px;
    }
    @media ${devices.laptop} {
        width: 500px;
    }
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
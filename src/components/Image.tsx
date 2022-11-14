import styled from 'styled-components';
import { Component } from '../types/types';
import { devices } from '../styles/mediaQueries';

interface ImageProps {
    component: Component;
}

const Image = ({component}: ImageProps) => {
    const { src, alt } = component.options;

    return <Container>
        <StyledImage  alt={alt} src={src} />
    </Container>
}


const Container = styled.div`
    background-color: #2769ED;
    border-radius: 15px;
    height: 200px;
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

const StyledImage = styled.img`
    height: 200px;
    border-radius: 15px;
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

export default Image;
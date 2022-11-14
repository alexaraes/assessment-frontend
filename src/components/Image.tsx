import styled from 'styled-components';
import { Component } from '../types/types';
import { devices } from '../styles/mediaQueries';

interface ImageProps {
    component: Component;
}

const Image = ({component}: ImageProps) => {
    const { src, alt } = component.options;
    console.warn(component);
    return <>
        <StyledImage src={src} alt={alt} />
    </>
}

const StyledImage = styled.img`
    @media ${devices.mobile} {
        width: 90%;
    }
    @media ${devices.tablet} {
        width: 40%;
    }
    @media ${devices.laptop} {
        width: 30%;
    }
`;

export default Image;
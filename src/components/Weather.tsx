import React from 'react';
import { useWeatherFetch } from "../hooks/useFetch";
import styled from 'styled-components';
import { Component } from '../types/types';
import { useEffect } from 'react';

interface WeatherProps {
    component: Component;
}

const Weather = ({component}: WeatherProps) => {
    console.warn(component);
    const {options} = component;
    const {lat, lon} = options;
    const {response, isLoading} = useWeatherFetch(lat, lon);
    const conditions = response?.conditionName;
    const location = response?.location;

    // useEffect(() => {
    //     if (lat && lon) {
            
    //     }
    // })
    
    return (
        <>
            {isLoading ? 
                (
                    <Container>IS LOADING</Container>
                ) 
                : (
                    <Container>
                        <div>{conditions} in {location}</div>
                    </Container>
                )
            }
        </>
    )
}

const LoadingContainer = styled.div`
    width: 100%
    height: 100%;
    margin: 10rem;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 1.25rem;
`;

export default Weather;
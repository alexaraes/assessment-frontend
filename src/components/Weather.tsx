import React from 'react';
import { useWeatherFetch } from "../hooks/useFetch";
import styled from 'styled-components';

interface WeatherProps {
    lat: string;
    lon: string;
}

const Weather = ({lat, lon}: WeatherProps) => {
    const {response, error, isLoading} = useWeatherFetch(lat, lon);
    console.warn(response?.conditionName);
    return (
        <>
            {isLoading ? 
                (
                    <Container>IS LOADING</Container>
                ) 
                : (
                    <Container>
                        <div></div>
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
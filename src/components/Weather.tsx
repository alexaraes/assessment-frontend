import { useWeatherFetch } from "../hooks/useFetch";
import styled from 'styled-components';
import { Component } from '../types/types';
// import { useEffect } from 'react';
import { devices } from '../styles/mediaQueries';
import Cloudy from "../icons/Cloudy";
import { useState } from "react";
import Rain from "../icons/Rain";

interface WeatherProps {
    component: Component;
}

const getWeatherIcon = (conditions: string) => {
    switch (conditions) {
        case 'cloudy':
            return <Cloudy />;
        case 'rain':
            return <Rain />;
    }
}

const Weather = ({component}: WeatherProps) => {
    const {options} = component;
    const {lat, lon} = options;
    const {response, isLoading} = useWeatherFetch(lat, lon);
    const conditions = response?.conditionName;
    const location = response?.location;
    const temperature = response?.temperature;
    const forecast = response?.upcomming;
    console.warn(forecast);
    
    return (
        <>
            {isLoading ? 
                (
                    <Container>IS LOADING</Container>
                ) 
                : (
                    <Container>
                        <LocationContainer>
                            <CityName>{location}</CityName>
                        </LocationContainer>
                        <CurrentWeatherContainer>
                            <IconContainer>{conditions && getWeatherIcon(conditions)}</IconContainer>
                            <TemperatureContainer>
                                <Temperature>{temperature}</Temperature>
                                <Conditions>{conditions}</Conditions>
                            </TemperatureContainer>
                        </CurrentWeatherContainer>
                        <ForecastContainer>
                                {forecast?.map((day, i) => {
                                    return (
                                        <DayContainer>
                                        <IconContainer key={i} >{getWeatherIcon(day.condition)}</IconContainer>
                                        <div key={i} >{day.day}</div>
                                        </DayContainer>
                                    )
                                })}
                            </ForecastContainer>
                        
                    </Container>
                )
            }
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    @media ${devices.mobile} {
        width: 90%;
    }
    @media ${devices.tablet} {
        width: 60%;
    }
    @media ${devices.laptop} {
        width: 50%;
    }
`;

const LocationContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CityName = styled.div`
    font-size: 14px;
`;

const CurrentWeatherContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const TemperatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Temperature = styled.div`
    font-size: 20px;
`;

const Conditions = styled.div`
    font-size: 12px;
`;

const IconContainer = styled.div`
    > svg {
        display: block;
        margin: auto;
        width: 50px;
        height: 50px;
    }
`;

const ForecastContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
`;

const DayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Weather;
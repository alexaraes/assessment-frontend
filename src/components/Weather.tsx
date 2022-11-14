import { useEffect } from "react";
import { useWeatherFetch } from "../hooks/useFetch";
import styled from 'styled-components';
import { Component } from '../types/types';
import { devices } from '../styles/mediaQueries';
import Cloudy from "../icons/Cloudy";
import Rain from "../icons/Rain";
import { useState } from "react";
import ClearDay from "../icons/ClearDay";

interface WeatherProps {
    component: Component;
}

const getWeatherIcon = (conditions: string) => {
    switch (conditions) {
        case 'cloudy':
            return <Cloudy />;
        case 'rain':
            return <Rain />;
        case 'clear':
            return <ClearDay />
    }
}

const defaultWeather = {
    condition: 'cloudy',
    conditionName: 'Cloudy',
    location: 'Buffalo, NY',
    temperature: 37,
    upcomming: [
        {day: 'Thu', condition: 'clear', conditionName: 'Clear'},
        {day: 'Fri', condition: 'cloudy', conditionName: 'Cloudy'},
        {day: 'Sat', condition: 'rain', conditionName: 'Rain'}
    ]
}

const Weather = ({component}: WeatherProps) => {
    const {options} = component;
    const {lat, lon} = options;
    const {response} = useWeatherFetch(lat, lon);
    const conditions = response?.condition || defaultWeather.condition;
    const conditionName = response?.conditionName || defaultWeather.conditionName;
    const location = response?.location || defaultWeather.location;
    const temperature = response?.temperature || defaultWeather.temperature;
    const forecast = response?.upcomming || defaultWeather.upcomming;
    console.warn(response);
    
    return (
        <Container>
            <LocationContainer>
                <CityName>{location}</CityName>
            </LocationContainer>
            <CurrentWeatherContainer>
                <IconContainer>{conditions && getWeatherIcon(conditions)}</IconContainer>
                <TemperatureContainer>
                    <Temperature>{temperature}</Temperature>
                    <SmallText>{conditionName}</SmallText>
                </TemperatureContainer>
            </CurrentWeatherContainer>
            <ForecastContainer>
                    {forecast?.map((day, i) => {
                        return (
                            <DayContainer>
                                <ForecastIcon key={i} >{getWeatherIcon(day.condition)}</ForecastIcon>
                                <SmallText key={i} >{day.day}</SmallText>
                            </DayContainer>
                        )
                    })}
                </ForecastContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    margin: 15px 0 0 0;
    background-color: white;
    border-radius: 15px;
    box-sizing: border-box;
    @media ${devices.mobile} {
        width: 100%;
    }
    @media ${devices.tablet} {
        width: 500px;
    }
    @media ${devices.laptop} {
        width: 500px;
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
    font-size: 30px;
`;

const SmallText = styled.div`
    font-size: 12px;
`;

const IconContainer = styled.div`
    > svg {
        display: block;
        margin: auto;
        width: 75px;
        height: 75px;
    }
`;

const ForecastContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
`;

const ForecastIcon = styled.div`
    > svg {
        display: block;
        margin: auto;
        width: 50px;
        height: 50px;
    }
`;

const DayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Weather;
import React from 'react';
import useFetch from "../hooks/useFetch";

interface CardProps {
    id: string;
}

const Card = ({id}: CardProps) => {
    const {response, error, isLoading} = useFetch(`/page/${id}`);
    console.log(response?.components);
    let lat, lon;
    if(response && response.components) {
        response.components.forEach((component) => {
            if (component.type === 'weather') {
                lat = component.options.lat;
                lon = component.options.lon;
            }
        })
    }

    useFetch(`/integration/weather?lat=${lat}&lon=${lon}`);

    return (
        <>
            {isLoading ? <div>IS LOADING</div> : <div>{id}</div>}
        </>
    )
}

export default Card;
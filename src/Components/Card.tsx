import React from 'react';
import useFetch from "../hooks/useFetch";

interface CardProps {
    id: string;
}

const Card = ({id}: CardProps) => {
    const {response, error, isLoading} = useFetch(id);
    console.log(response);

    return <div>{id}</div>
}

export default Card;
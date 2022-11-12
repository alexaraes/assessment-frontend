import React from 'react';

interface CardProps {
    id: string;
}

const Card = ({id}: CardProps) => {
    return <div>{id}</div>
}

export default Card;
import React from 'react';

interface ButtonProps {
    id: string;
}

const Button = ({id}: ButtonProps) => {
    return <div>{id}</div>
}

export default Button;
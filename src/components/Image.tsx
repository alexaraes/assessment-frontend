import { Component } from '../types/types';

interface ImageProps {
    component: Component;
}

const Image = ({component}: ImageProps) => {
    const { src, alt } = component.options;
    console.warn(component);
    return <div>
        <img src={src} alt={alt} />
    </div>
}

export default Image;
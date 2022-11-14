import { useEffect } from "react";
import { usePageFetch } from "../hooks/useFetch";
import { Component, PageType } from "../types/types";
import Weather from "./Weather";
import Image from "./Image";

interface PageProps {
    id: string;
}

const getComponentType = (response?: PageType) => {
    const lists = response?.lists;
    // just get the component ids from list with id 0
    const componentIds = lists?.map((list, i) => {
        if (list.id === 0) {
            return list.components;
        }
    })
    // return only the first array of component ids, all others are undefined
    return componentIds && componentIds[0];
}

const getComponents = (response?: PageType) => {
    const ids = getComponentType(response);
    let allComponents: Component[] = [];
    response?.components.map((component, i) => {
        ids?.map((id, i) => {
            if (component.id === id) {
                allComponents.push(component);
            }
        });
    });
    return allComponents;
}

const Page = ({id}: PageProps) => {
    const {response, error, isLoading} = usePageFetch(id);
    let lat, lon;
    if (response && response.components) {
        response.components.forEach((component) => {
            if (component.type === 'weather') {
                lat = component.options.lat;
                lon = component.options.lon;
            }
        })
    }

    useEffect(() => {
        const allComponents = getComponents(response);
        console.warn(allComponents);
    }, [response]);
    

    return (
        <div>
            <Image/>
            {lat && lon && <Weather lat={lat} lon={lon} />}
        </div>
    );
}

export default Page;
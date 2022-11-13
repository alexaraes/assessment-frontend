import { useEffect } from "react";
import { usePageFetch } from "../hooks/useFetch";
import { PageType } from "../types/types";
import Weather from "./Weather";

interface PageProps {
    id: string;
}



const getComponentType = (response?: PageType) => {
    const lists = response?.lists;
    const components = lists?.map((list, i) => {
        return list.components;
    })
    return components;
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
        console.warn(getComponentType(response));
    }, [response]);
    

    return (
        <div></div>
    );
}

export default Page;
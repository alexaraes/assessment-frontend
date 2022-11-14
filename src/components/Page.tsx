import { useEffect, useState } from "react";
import { usePageFetch } from "../hooks/useFetch";
import { Component, PageType } from "../types/types";
import Weather from "./Weather";
import Image from "./Image";
import styled from "styled-components";
import Rain from "../icons/Rain";

interface PageProps {
    id: string;
}

const getComponentType = (response?: PageType) => {
    const lists = response?.lists;
    // "You can assume the list with id 0 will always be the pages root."
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
    const [allComponents, setAllComponents] = useState<Component[]>();

    useEffect(() => {
        const filteredComponents = getComponents(response);
        setAllComponents(filteredComponents);
    }, [response]);
    
    return (
        <div>
            {allComponents?.map((component, i) => {
                return (
                    <Container>
                        {component.type === 'image' && <Image component={component} />}
                        {component.type === 'weather' && <Weather component={component} />}
                    </Container>
                )
            })}
            
        </div>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Page;
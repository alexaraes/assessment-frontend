import { useEffect, useState } from "react";
import { usePageFetch } from "../hooks/useFetch";
import { Component, PageType } from "../types/types";
import Weather from "./Weather";
import Image from "./Image";
import styled from "styled-components";
import Condition from "./Condition";
import Button from "./Button";

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
                return allComponents.push(component);
            }
        });
    });
    return allComponents;
}

const Page = ({id}: PageProps) => {
    const {response, isLoading} = usePageFetch(id);
    const [allComponents, setAllComponents] = useState<Component[]>();
    const [shouldShow, setShouldShow] = useState<boolean>(true);

    const showHide = () => {
        setShouldShow(!shouldShow)
    }

    useEffect(() => {
        const filteredComponents = getComponents(response);
        setAllComponents(filteredComponents);
        return () => {

        }
    }, [response]);
    
    return (
        <Container>
            {isLoading && <div>LOADING...</div>}
            {!isLoading && allComponents?.map((component, i) => {
                console.log(component);
                return (
                    <div key={i}>
                        {component.type === 'button' && <Button showHide={showHide} text={component.options.text} />}
                        {component.type === 'condition' && 
                            <Condition shouldShow={shouldShow}>
                                {component.options.variable === 'show_weather' && <Weather component={component} />}
                                {component.options.variable === 'location' && <Image component={component} />}
                                {component.options.variable === 'show_image' && <Image component={component} />}
                            </Condition>
                        }
                        {component.type === 'image' && <Image component={component} />}
                        {component.type === 'weather' && <Weather component={component} />}
                    </div>
                )
            })}
            
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #DBDBDB;
    height: 100vh;
    padding: 15px;
`;

export default Page;
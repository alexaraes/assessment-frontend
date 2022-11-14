export interface Component {
    id: number;
    type: string;
    options: {
        lat?: number;
        lon?: number;
        text?: string;
        value?: string;
        variable?: string;
        src?: string;
        alt?: string;
    };
}

export interface List {
    id: number;
    components: number[];
}

interface Variable {
    name: string;
    type: string;
    initialValue: string;
}

interface Upcoming {
    condition: string;
    conditionName: string;
    day: string;
}

export interface PageType {
    lists: List[];
    components: Component[];
    variables?: Variable[] // optional not used on page-one. Should be page specific.
}

export interface WeatherType {
    condition: string;
    conditionName: string;
    lat: string;
    location: string;
    lon: string;
    temperature: number;
    unit: string;
    upcomming: Upcoming[];
}


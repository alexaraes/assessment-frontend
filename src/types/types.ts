export interface Components {
    id: number;
    type: string;
    options: [key: string];
}

export interface Lists {
    id: number;
    components: number[];
}

interface Variables {
    name: string;
    type: string;
    initialValue: string;
}

export interface PageType {
    lists: Lists[];
    components: Components;
    variables?: Variables // optional not used on page-one. Should be page specific.
}
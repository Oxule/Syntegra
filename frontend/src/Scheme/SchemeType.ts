export interface Field {
    name: string;
    type: string;
    description?: string;
    nullable: boolean;
    default?: string;
}

export interface Scheme {
    id: string;
    name: string;
    fields: Field[];
}
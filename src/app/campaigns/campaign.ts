export interface Campaign {
    id: number;
    name: string;
    cpc: number;
    budget: number;
    scheduling: Scheduling;
}

export interface Scheduling {
    startDate: string;
    endDate: string;
}

export interface Content {
    id:number;
    campaign:number;
    url:string;
    title:string;
    brand_name:string;
    description:string;
    added_date:string;
}


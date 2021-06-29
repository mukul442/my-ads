export interface Campaign {
    id: number;
    name: string;
    bidType: string;
    cpc: number;
    budget: number;
    pacing: string;
    scheduling: Scheduling;
    targeting: Targeting;
    content: Content[];
}

export interface Scheduling {
    startDate: string;
    endDate: string;
}

export interface Targeting {
    trafficTypes: TrafficType;
    countryTarget: string;
    zipTarget: string;
    metroTarget: string;
    languageTarget: string;
}

interface TrafficType {
    adBlock: boolean;
    native: boolean;
    pushNotification: boolean;
}

export interface Content {
    id:number;
    campaign: number;
    url:string;
    title:string;
    brand_name:string;
    description:string;
    added_date:string;
}


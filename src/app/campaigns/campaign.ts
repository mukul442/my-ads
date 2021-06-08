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


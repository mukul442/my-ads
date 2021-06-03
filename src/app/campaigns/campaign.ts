export interface Campaign {
    id: number;
    name: string;
    cpc: number;
    budget: number;
    pacing: boolean | string;
    startDate: string | number;
    endDate: string | number;
}
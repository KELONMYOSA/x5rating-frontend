export interface IShop {
    id: number,
    title: string,
    coordinates: Array<number>,
    address: Map<string, string>,
    rating: number,
    aspects: Array<IAspect>,
}

export interface IAspect {
    id: number,
    text: string,
    count: number,
    positive: number,
    neutral: number,
    negative: number,
}
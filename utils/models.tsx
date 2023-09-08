export interface IShop {
    id: number,
    title: string,
    coordinates: Array<number>,
    address: Map<string, string>,
    rating: number,
}
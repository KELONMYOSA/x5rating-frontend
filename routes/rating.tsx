import {Handlers, PageProps} from "$fresh/server.ts";
import {IShop} from "../utils/models.tsx";

export const handler: Handlers<IShop[] | null> = {
    async GET(_, ctx) {
        const res = await fetch('http://81.200.148.178:8000/get_shops?limit=50&page=1')
        const shops = (await res.json()) as IShop[]
        if (!shops) {
            return ctx.render(null)
        }
        return ctx.render(shops)
    }
}

export default function Rating({data: shops}: PageProps<IShop[] | null>) {
    if (!shops) return <p>No shops data!</p>
    return (
        <div className="flex justify-center">
            <div className="w-4/5 mt-[50px]">{JSON.stringify(shops)}</div>
        </div>
    )
}
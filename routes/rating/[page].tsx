import {Handlers, PageProps} from "$fresh/server.ts";
import {IShop} from "../../utils/models.tsx";
import ShopCard from "../../islands/ShopCard.tsx";
import PageNavigation from "../../components/PageNavigation.tsx";

export const handler: Handlers<[IShop[], number] | null> = {
    async GET(_, ctx) {
        const res = await fetch(`http://81.200.148.178:8000/get_shops?limit=50&page=${ctx.params.page}&desc=false&only_x5=true`)
        const shops = (await res.json()) as IShop[]
        if (!shops) {
            return ctx.render(null)
        }
        return ctx.render([shops, ctx.params.page])
    }
}

export default function Rating({data}: PageProps<[IShop[], number] | null>) {
    const shops = data[0]
    const pageNum = data[1]
    if (!shops) return <p>No shops data!</p>
    return (
        <div className="flex justify-center items-start mt-[50px]">
            <div className="grid grow w-4/5">
                {shops.map((shop, index) => (
                    <ShopCard item={shop} key={index} page={pageNum}/>
                ))}
                <PageNavigation page={pageNum}/>
            </div>
        </div>
    )
}
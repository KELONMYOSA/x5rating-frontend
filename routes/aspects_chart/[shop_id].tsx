import {type Handlers} from "$fresh/server.ts";
import {renderChart} from "https://deno.land/x/fresh_charts/mod.ts";
import {IShop} from "../../utils/models.tsx";

export const handler: Handlers = {
    async GET(_, ctx) {
        const shop_id = ctx.params.shop_id.split("_", 2)[0]
        const page = ctx.params.shop_id.split("_", 2)[1]
        const res = await fetch(`http://81.200.148.178:8000/get_shops?limit=50&page=${page}&desc=false&only_x5=true`)
        const shops = (await res.json()) as IShop[]
        if (!shops) {
            return ctx.render(null)
        }
        const shop = shops.find(i => i.id == Number(shop_id))
        const labels = shop.aspects.map(aspect => aspect.text)
        const data = shop.aspects.map(aspect => Number(aspect.negative) / (Number(aspect.positive) + Number(aspect.negative) + Number(aspect.neutral)))
        return renderChart({
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                    label: "Доля негативных отзывов",
                    data: data,
                    backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                    borderColor: ['rgb(54, 162, 235)'],
                    borderWidth: 1
                }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    },
};
import { IShop } from '../utils/models.tsx'
import { useState } from 'preact/hooks'
import ratingColor from "../utils/ratingColor.ts";

interface ShopCardProps {
    item: IShop
}

export default function ShopCard({ item }: ShopCardProps) {
    const [details, setDetails] = useState(false)

    const toggle = () => setDetails((prev) => !prev)

    return (
        <button className="border rounded px-4 py-2 mb-2 flex flex-col justify-center bg-white" onClick={toggle}>
            <div className="flex flex-row w-full justify-between">
                <div className="grid grid-rows-2 justify-items-start items-center">
                    <h2 className="font-bold text-lg">{item.title}</h2>
                    <div>
                        <p className="text-left">{item.address.locality + ", " + item.address.street + ", " + item.address.house}</p>
                    </div>
                </div>
                <div className="w-20 self-center justify-self-end">
                    <h1 className={`font-bold text-lg text-[${ratingColor(item.rating)}]`}>{Number(item.rating.toFixed(2))}</h1>
                </div>
            </div>
            {details &&
                <div>
                    <p>Плюсы и минусы</p>
                </div>
            }
        </button>
    )
}
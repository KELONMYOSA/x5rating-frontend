import {IAspect, IShop} from '../utils/models.tsx'
import {useState} from 'preact/hooks'
import ratingColor from "../utils/ratingColor.ts";
import AspectCard from "../components/AspectCard.tsx";
import {Fragment} from "preact";

interface ShopCardProps {
    item: IShop,
    page: number
}

function aspectCards(aspects: IAspect[]) {
    if (aspects.length == 0) return "Недостаточно данных"
    return (
        <Fragment>
            {aspects.map((aspect, index) => (
                <AspectCard aspect={aspect} key={index}/>
            ))}
        </Fragment>
    )
}

export default function ShopCard({item, page}: ShopCardProps) {
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
                <Fragment>
                    <div className="w-full flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                        {aspectCards(item.aspects)}
                    </div>
                    <div>
                        <img
                            src={`/aspects_chart/${item.id}_${page}`}
                            className="mx-auto my-4"
                        />
                    </div>
                </Fragment>
            }
        </button>
    )
}
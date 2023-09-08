import {IAspect} from "../utils/models.tsx";

export default function AspectCard({aspect}: IAspect) {
    let bgColor = "bg-gray-50"
    if (aspect.positive > aspect.negative) bgColor = " bg-[#BDECB6]"
    if (aspect.positive < aspect.negative) bgColor = " bg-[#D9544D]"

    return (
        <div className={`border rounded  flex justify-center ${bgColor}`}>
            <div className="grid grid-rows-2 justify-items-center items-center">
                <p className="px-1 py-1 text-center font-bold">{aspect.text}</p>
                <p className="px-1 py-1 text-center">Положительных: {aspect.positive}</p>
                <p className="px-1 py-1 text-center">Отрицательных: {aspect.negative}</p>
            </div>
        </div>
    )
}
import {ArrowRightOutline, ArrowLeftOutline} from "https://esm.sh/preact-heroicons"

export default function PageNavigation({ page }: number) {
    let prevPage = page - 1
    if (page == 1) {
        prevPage = page
    }

    return (
        <div className="flex justify-center mx-4 my-4">
            <a className="border border-x5-green text-x5-green block rounded-sm font-bold py-4 px-6 mr-2 flex hover:bg-x5-green hover:text-white"
               href={prevPage}>
                <ArrowLeftOutline class="h-5 w-5"/>
            </a>
            <a className="border border-x5-green bg-x5-green text-white block rounded-sm font-bold py-4 px-6 ml-2 flex"
               href={Number(page) + 1}>
                <ArrowRightOutline class="h-5 w-5"/>
            </a>
        </div>
    )
}
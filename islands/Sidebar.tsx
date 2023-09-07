import classNames from "https://esm.sh/classnames";
import NavItems from "../components/NavItems.tsx";

type Props = {
    open: boolean;
    setOpen(open: boolean): void;
};

export default function Sidebar({open, setOpen}: Props) {
    return (
        <div
            className={classNames({
                "flex flex-col justify-between": true, // layout
                "bg-x5-green text-gray-50": true, // colors
                "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed": true, // positioning
                "md:h-[calc(100vh_-_64px)] h-full w-[200px]": true, // for height and width
                "transition-transform .3s ease-in-out md:translate-x-0": true, //animations
                "-translate-x-full ": !open, //hide sidebar to the left when closed
            })}
        >
            <nav className="md:sticky top-0 md:top-16">
                <ul className="py-2 flex flex-col gap-2">
                    <NavItems />
                </ul>
            </nav>
        </div>
    )
}
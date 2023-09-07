import {Bars3Outline} from "https://esm.sh/preact-heroicons";
import classNames from "https://esm.sh/classnames";

type Props = {
    onMenuButtonClick(): void;
};

export default function Navbar(props: Props) {
    return (
        <nav
            className={classNames({
                "bg-white text-gray-500": true, // colors
                "flex items-center": true, // layout
                "w-full fixed z-10 px-4 shadow-sm h-16": true, //positioning & styling
            })}
        >
            <img
                className="my-6"
                src="logo-colored.svg"
                width="100"
                height="100"
                alt="X5 Logo"
            />
            <div className="flex-grow"></div>
            <button className="md:hidden" onClick={props.onMenuButtonClick}>
                <Bars3Outline className="h-6 w-6"/>
            </button>
        </nav>
    )
}
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
                "w-full fixed z-10 pr-4 shadow-sm h-16": true, //positioning & styling
            })}
        >
            <a className="h-full" href="/">
                <img
                    className="h-full"
                    src="../logo-colored.svg"
                    alt="X5 Logo"
                />
            </a>
            <div className="flex-grow"></div>
            <button className="md:hidden" onClick={props.onMenuButtonClick}>
                <Bars3Outline className="h-6 w-6"/>
            </button>
        </nav>
    )
}
import {
    RectangleStackOutline,
    MapOutline,
} from "https://esm.sh/preact-heroicons";
import classNames from "https://esm.sh/classnames";

export type NavItem = {
    label: string;
    href: string;
    icon: preact.ReactNode;
};

export const NavItemsData: NavItem[] = [
    {
        label: "Рейтинг",
        href: "/rating",
        icon: <RectangleStackOutline className="w-6 h-6"/>,
    },
    {
        label: "Карта",
        href: "/map",
        icon: <MapOutline className="w-6 h-6"/>,
    },
];

export default function NavItems() {
    return (
        NavItemsData.map((item, index) => {
                return (
                    <a key={index} href={item.href}>
                        <li
                            className={classNames({
                                "text-white hover:bg-x5-green-hover": true, //colors
                                "flex gap-4 items-center ": true, //layout
                                "transition-colors duration-300": true, //animation
                                "rounded-md p-2 mx-2": true, //self style
                            })}
                        >
                            {item.icon} {item.label}
                        </li>
                    </a>
                )
            })
    )
}
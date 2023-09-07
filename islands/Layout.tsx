import {PropsWithChildren, useState} from "preact/compat";
import Navbar from "../components/Navbar.tsx";
import Sidebar from "../islands/Sidebar.tsx";

export default function Layout(props: PropsWithChildren) {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <div className="grid min-h-screen grid-rows-header bg-gray-100">
            <div className="bg-white shadow-sm z-10">
                <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
            </div>
            <div className="grid md:grid-cols-sidebar">
                <Sidebar open={showSidebar} />
                {props.children}
            </div>
        </div>
    )
}
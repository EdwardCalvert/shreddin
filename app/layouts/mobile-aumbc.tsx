import { Outlet } from "react-router";
import { useState } from "react";
import { Icon } from "@iconify/react";


export default function MobileAumbc() {


    const [activeState, setActiveState] = useState(0); // Track the active state

    const icons = [
        { icon: "bi:calendar-event", label: "Events" , link: "/"},
        { icon: "bi:cash-stack", label: "Settle up", link:"" },
        { icon: "bi:map", label: "Locations", link:"" },
        { icon: "bi:file-earmark-medical", label: "Med. info",link:"" },
        { icon: "bi:person-circle", label: "Profile",link:"" },
    ];
    return (
<div >
    <main>
    <Outlet />
    </main>
    <div className="fixed bottom-0 left-0 w-full bg-blue text-white pr-2 pl-2 pb-3 pt-1">
        {/* Slider Container */}
        <div className="grid grid-cols-5">
            {icons.map((item, index) => (
            <div
                key={index}
                className={`flex flex-col items-center z-10 cursor-pointer row-start-1 col-start-${index+1}`}
                onClick={() => setActiveState(index)}
            >
                <div
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 ${
                    activeState === index ? "text-white bg-gold" : "text-gray-400"
                }`}
                >
                    <Icon icon={item.icon} className="w-6 h-6" />
                    
                </div>
                {/* Text Label */}
                <span
                className={`mt-2 text-xs transition-opacity duration-300 ${
                    activeState === index ? "opacity-100" : "opacity-0"
                }`}
                >
                {item.label}
                </span>
            </div>
            ))}
        </div>
        </div>
</div>);
}

import { Outlet, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router";


export default function MobileAumbc() {

    const [activeState, setActiveState] = useState(-2); // Track the active state

    let location = useLocation()
    const icons = [
        { icon: "bi:calendar-event", label: "Events" , link: "/app/events", index: 0},
        { icon: "bi:cash-stack", label: "Settle up", link:"/app/settle-up", index:1 },
        { icon: "bi:map", label: "Locations", link:"/app/locations",index:2 },
        { icon: "bi:file-earmark-medical", label: "Med. info",link:"/app/medical",index: 3 },
        { icon: "bi:person-circle", label: "Profile",link:"/app/profile", index:4 },
    ];

    useEffect(()=>{
        icons.forEach(item => {
            if(location.pathname.startsWith(item.link)){
                setActiveState(item.index);
            }
        })
    },[location])
    return (
<div >
    <main className="mt-24 mb-24 z-10 max-w-screen-md mx-auto px-4">
        <Outlet />
    </main>
    <div className="fixed bottom-0 left-0 w-full bg-blue text-white pr-2 pl-2 pb-3 pt-1">
        <div className="grid grid-cols-5 max-w-screen-md mx-auto">
            {icons.map((item, index) => (
            <Link to={item.link}
                key={index}
                className={`flex flex-col items-center z-10 cursor-pointer row-start-1 col-start-${index+1}`}
                
            >
                <div
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 ${
                    activeState === index ? "text-white bg-gold" : "text-gray-400"
                }`}
                >
                    <Icon icon={item.icon} className="w-6 h-6" />
                    
                </div>
                <span
                className={`mt-2 text-xs transition-opacity duration-300 ${
                    activeState === index ? "opacity-100" : "opacity-0"
                }`}
                >
                {item.label}
                </span>
            </Link>
            ))}
        </div>
    </div>
</div>);
}

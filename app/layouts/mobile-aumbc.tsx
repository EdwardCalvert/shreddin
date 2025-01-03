import { Outlet } from "react-router";
import { useState } from "react";
import { Icon } from "@iconify/react";


export default function MobileAumbc() {

    const [activeTab, setActiveTab] = useState("tab1");
    const [activeState, setActiveState] = useState(0); // Track the active state

    const icons = [
        { icon: "bi:house", label: "Home" },
        { icon: "bi:calendar-event", label: "Calendar" },
        { icon: "bi:cash-stack", label: "Finance" },
        { icon: "bi:map", label: "Map" },
        { icon: "bi:file-earmark-medical", label: "Documents" },
        { icon: "bi:person-circle", label: "Profile" },
      ];
  return (
    <div>


<div className="flex flex-col items-center justify-center bg-gold p-4 min-h-120px">

            

<img src="./AUMBC_logo.png" alt="logo"  className="absolute top-4 right-4 w-16 "></img>
<div className="my-2" ><button className="absolute top-4 left-4 "><Icon icon="material-symbols:keyboard-arrow-left" /></button></div>
<div className="mt-4 font-bold ">
        {activeTab === "tab1" && <p>Past</p>}
        {activeTab === "tab2" && <p>Upcoming</p>}
    </div>
<div className="relative w-[calc(100%-8px)] flex items-center bg-gold-dark rounded-full p-2">
{/* Sliding Indicator */}
<div
className={`absolute  left-0 w-[calc(50%-2px)] h-[calc(100%-8px)] bg-gold rounded-full transition-all duration-300 ${
activeTab === "tab1" ? "translate-x-1" : "translate-x-full"
}`}
></div>

{/* Tab 1 */}
<button
className={`relative w-1/2  rounded-full text-center font-bold text-white z-10`}
onClick={() => setActiveTab("tab1")}
>
Past
</button>

{/* Tab 2 */}
<button
className={`relative w-1/2  rounded-full text-center font-bold text-white z-10`}
onClick={() => setActiveTab("tab2")}
>
Upcoming
</button>
</div>
</div>
      <main>
        <Outlet />
      </main>
    <div className="fixed bottom-0 left-0 w-full bg-blue text-white pr-2 pl-2 pb-1">
      {/* Slider Container */}
      <div className="relative flex justify-between items-center w-full mx-auto  ">
        {/* Moving Gold Circle */}
        <div 
        className="absolute top-0 -translate-y-1/2 w-11 h-11 bg-gold rounded-full transition-transform duration-300 " 
        style={{ transform: `translateX(   calc(${activeState*(100/icons.length)}% ))` }} ></div>

        {/* Icons */}
        {icons.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center z-10 cursor-pointe"
            onClick={() => setActiveState(index)}
          >
            <div
              className={`flex items-center justify-center w-14 h-14 rounded-full transition-colors duration-300 ${
                activeState === index ? "text-white" : "text-gray-400"
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
    </div>
  );
}

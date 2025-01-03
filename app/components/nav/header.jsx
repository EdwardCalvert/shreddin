import { useState } from "react";
import { Icon } from "@iconify/react";


export default function Nav({onTabChanged,tabs = [], historyEnabled, defaultTabIndex =0,  }){
    const [activeTab, setActiveTab] = useState(defaultTabIndex);
    return (
    <div className="fixed top-0 left-0 h-28 w-full flex flex-col items-center justify-center bg-gold p-4  text-white z-[100]">
        <img src="./AUMBC_logo.png" alt="logo"  className="absolute top-2 right-4 w-16 "></img>
        {historyEnabled &&  <button className="absolute top-5 left-4 "><Icon icon="material-symbols:keyboard-arrow-left" className="w-8 h-8"/></button>}
        <div className="absolute top-6 font-bold ">
            Events
        </div>
        { tabs.length > 0 &&
            <div className="absolute left-4 top-16 w-[calc(100%-2rem)] flex items-center bg-gold-dark rounded-full p-2">
            
            <div
                className={`absolute  left-1 h-[calc(100%-0.5rem)] bg-gold rounded-full transition-all duration-300 `} 
                style={{width : tabs.length === 3? "calc(33.33% - 2.5px)" : "calc(50% - 4px)", transform: `translateX(calc(${100*activeTab}%))`  }}
            >
            </div>

            {tabs.map( (tab, index)=>(
            <button key={index}
                className={`relative w-1/2  rounded-full text-center font-bold z-[101]`}
                onClick={() => {
                    setActiveTab(index);
                    onTabChanged(index);
                }}
                >
                {tab}
            </button>))}

        </div>
        }
        
    </div>);
}
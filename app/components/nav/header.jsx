import { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from 'react-router';

export default function Nav({onTabChanged,tabs = [], title, historyEnabled, defaultTabIndex =0,  }){
    const [activeTab, setActiveTab] = useState(defaultTabIndex);
    const navigate = useNavigate();
    return (<div className="fixed top-0 left-0 h-20 w-full flex flex-col items-center justify-center bg-gold   text-white z-[100]">
        
        <img src="/AUMBC_logo.png" alt="logo"  className="absolute top-1 right-4 w-12 "></img>
        {historyEnabled &&  <button className="absolute top-3 left-4 " onClick={() => navigate(-1)}><Icon icon="material-symbols:keyboard-arrow-left" className="w-8 h-8"/></button>}
        <div className="absolute top-3.5 font-bold ">
            {title}
        </div>
        { tabs.length > 0 &&
            <div className="absolute left-4 top-12 w-[calc(100%-2rem)] h-7 flex items-center bg-gold-dark rounded-full ">
            
            <div
                className={`absolute left-0  h-[calc(100%-0.5rem)] bg-gold rounded-full transition-all duration-300 p-3.5  outline-gold-dark outline outline-[1px] `} 
                style={{width : tabs.length === 3? "calc(33.33% )" : "calc(50%)", transform: `translateX(calc(${100*activeTab}%))`  }}
            >
            </div>

            {tabs.map( (tab, index)=>(
            <button key={index}
                className={`relative   rounded-full text-center font-bold z-[101]`}
                style={{width : tabs.length === 3? "calc(33.33% )" : "calc(50%)" }}
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
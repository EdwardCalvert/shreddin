import { Icon } from "@iconify/react";
import {EventInfoSeverity} from "@components/events/event-info-severity"



function getTypeStyle(type){
    if(type === EventInfoSeverity.Warning){
        return "bg-warn-red rounded-md"
    }
    else if(type === EventInfoSeverity.Info){
        return "bg-gold rounded-full"
    }
    else if(type === EventInfoSeverity.Pending){
        return "bg-sky-400 rounded-md"
    }
    else if(type === EventInfoSeverity.Urgent){
        return "bg-orange-500 rounded-md"
    }
    else{
        return "bg-success-green rounded-full"
    }
}

const EventInfoIcon = ({ icon, label, type=EventInfoSeverity.Warning, subText=null}) => (
    <>
        <div className="flex flex-row mb-1">
            <div className={` rounded-full p-1 ${getTypeStyle(type)}`}>
                <Icon icon={icon} className="text-white  w-6 h-6"/>
            </div>
            <p className={`${type==EventInfoSeverity.Warning? "font-semibold" :"" } ml-2 pt-1`}>{label}</p>
        </div>
        {subText&&
            <p className="pt-1">{subText}</p>
        }
        
    </>
);

export default EventInfoIcon;
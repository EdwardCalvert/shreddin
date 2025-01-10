import MainHeader from "../text/main-headder";
import { Icon } from "@iconify/react/dist/iconify.js";

//Object:
//Title 
export default function DebtItem({data}){
    console.log(data)
    return (
    <div className="relative bg-white w-full rounded-lg mb-4 min-h-[104px]">
        <div className="ml-4 py-1">
            <MainHeader>{data.eventName}</MainHeader>
            <p>{data.action}, {data.zones > 0 ? data.zones + " zone" + (data.zones > 1? "s," : ",") : ""} {data.date}</p>
            {data.paidDate && 
                <div className="flex flex-row pt-4">
                    <div className="bg-success-green rounded-full w-4 h-4 mt-1 ">
                        <Icon icon="bi:check-lg" className="text-white  w-4 h-4"/>
                    </div>
                    <p className="font-semibold ml-1 "> Paid, on 13/12/2024 </p>

                </div>
            }
            {data.pending&&
                <div className="flex flex-row pt-4">
                    <div className="bg-orange-500 rounded-sm w-4 h-4 mt-1 ">
                        <Icon icon="ri:info-i" className="text-white  w-4 h-4"/>
                    </div>
                    <p className="font-semibold ml-1 ">Excluded as attendance not recorded</p>

                </div>
            }
            {data.action == "Driver" &&
                <div className="flex flex-row pt-4">
                    <div className="bg-violet-400 rounded-sm w-4 h-4 mt-1 ">
                        <Icon icon="ri:info-i" className="text-white  w-4 h-4"/>
                    </div>
                    <p className="ml-1 ">4 goods × 3 zones ×2 × £0.25 </p>

                </div>
            }
            {data.action == "Driver" &&
                <div className="flex flex-row pt-4">
                    <div className="bg-violet-400 rounded-sm w-4 h-4 mt-1 ">
                        <Icon icon="lucide:fuel" className="text-white  w- h-4"/>
                    </div>
                    <p className="ml-1 ">Self-report </p>

                </div>
            }
            <div className={`absolute top-2 right-2 ${data.amount > 0? "bg-violet-400" : "bg-sky-400"} rounded-lg h-10 w-20  flex items-center justify-end `}>
                <p className="text-white pr-1"><span className="absolute left-0 text-right w-6">{data.amount > 0? "+" : ""}£</span>{Math.abs(data.amount).toFixed(2)}</p>
            </div>
        </div>
    </div>);
}
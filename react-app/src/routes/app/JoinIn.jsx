import Nav from "../../components/nav/header";
import MainHeader from "../../components/text/main-headder";
import {EventIcons} from  "@components/events/event-icons"
import { Icon } from "@iconify/react/dist/iconify.js";
import StickyBottomButton from "../../components/text/sticky-bottom-button";

let stuff = [
    {
        name:"I can help out",
        subheadding: "Help the club by joining the travel pool, and we will pay you for every bike and person you take as a thanks",
        icon : EventIcons.Driver,
    },
    {
        name:"I need a lift",
        subheadding: "We'll try and find space from the car pool for you",
        icon : EventIcons.Passenger,
    },
    {
        name:"Meet us at the car park",
        subheadding: "We will see you at Pitfichie Forest Car Park",
        icon : EventIcons.MakingOwnWay,
    },
    {
        name:"I'm going to cycle out",
        subheadding: "We will see you at Pitfichie Forest Car Park",
        icon : EventIcons.CyclingOut,
    }
]
export default function JoinIn(){
    return <div className="pb-24">
        <Nav title="Join in" historyEnabled={true}/>
        <div className="bg-white rounded-lg w-full min-h-24 p-2 mb-4">
            <MainHeader >Pitfichie</MainHeader>
            <ul>
                <li>3 zones</li>
                <li>Meet at: ASV Car park 1</li>
                <li>hh:mm dd/mm/2024</li>
            </ul>

        </div>


    {stuff.map((item, index) => (
        <label 
            key={item.name} 
            className="bg-white rounded-lg w-full min-h-24 mb-4 flex items-center justify-between p-4 cursor-pointer"
        > 
            <input 
                type="radio" 
                name="transport" 
                value={item.name} 
                className="hidden peer" 
            />
            <div className="rounded-full p-2 border-2 border-gray-00 peer-checked:bg-gold peer-checked:border-gold transition-all peer-checked:text-white text-gray-500 ">
                <Icon icon={item.icon} className="w-6 h-6 " />
            </div>
            <div className="flex-1 ml-4 ">
                <h3 className="font-semibold">{item.name}</h3>
                <p>{item.subheadding}</p>
            </div>

        </label>
    ))}

    <StickyBottomButton text="Submit" enabled={false}/>

    </div>
}
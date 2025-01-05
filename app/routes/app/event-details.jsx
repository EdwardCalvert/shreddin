import EventPhotocardTitleDate from "../../components/events/photocard-title-date"
import { Icon } from "@iconify/react/dist/iconify.js"
import Nav from "../../components/nav/header"
export default function EventDetails({locked}) {

    return <div>
        <Nav tabs={["deets","peeps","whips"]} historyEnabled={true} title={"Event details"} onTabChanged={()=>console.log("Tab changed")}/>
        <EventPhotocardTitleDate/>
        <p className="h-4">Meet at: <span className="font-semibold underline ">ASV Carpark 1 <Icon className="align-text-bottom inline w-4 h-4 ml-1 mb-0.5" icon="bi:map"/> </span> - 10:00</p>
        <p className="h-4">Park at: <span className="font-semibold underline ">Pitfichie forest carpark <Icon className="align-text-bottom inline w-4 h-4 ml-1 mb-0.5" icon="bi:map"/> </span></p>
        <p className="mt-1">We will be riding trails. Description etc</p>
    </div>
}

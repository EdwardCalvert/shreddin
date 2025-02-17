import Nav from "../../components/nav/header"
import StickyBottomButton from "../../components/text/sticky-bottom-button"
import { useState } from "react"
import Whips from "../../components/events/whips"
import Deets from "../../components/events/deets"
import Peeps from "../../components/events/peeps"
import { useNavigate } from "react-router"
import { useParams } from "react-router"
import useLocalStorage from "../../hooks/useLocalStorage"

export default function EventDetails() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [index, setIndex ] = useState(0);
    const display = {
        0:<Deets/> , 
        1: <Peeps/> ,
        2: <Whips/>,
    }

    return <div className="pb-24">
        <Nav tabs={["deets","peeps","whips"]} historyEnabled={true} title={"Event details"} onTabChanged={(e)=>setIndex(e)} defaultTabIndex={index}/>
        
        <div className="pb-24">
        {display[index]}
        </div>
        <StickyBottomButton text="Join in" onClick={()=> navigate(`/app/events/${id}/join-in`)}/>
    </div>
}

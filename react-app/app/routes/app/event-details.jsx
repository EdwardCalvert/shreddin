import Nav from "../../components/nav/header"
import StickyBottomButton from "../../components/text/sticky-bottom-button"
import { useState } from "react"
import Whips from "../../components/events/whips"
import Deets from "../../components/events/deets"
import Peeps from "../../components/events/peeps"

export default function EventDetails() {

    const [index, setIndex ] = useState(0);
    const display = {
        0:<Deets/> , 
        1: <Peeps/> ,
        2: <Whips/>,
    }

    return <div>
        <Nav tabs={["deets","peeps","whips"]} historyEnabled={true} title={"Event details"} onTabChanged={(e)=>setIndex(e)}/>
        
        <div className="pb-24">
        {display[index]}
        </div>
        <StickyBottomButton text="Sign up"/>
    </div>
}

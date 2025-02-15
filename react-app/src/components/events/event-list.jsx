import EventPhotocardTitleDate from "./event-photocard-title-date"
import { MockEvents } from "@components/events/mock-events"

function EventList(){
    return( 
    <div>
        {MockEvents.map(item =><EventPhotocardTitleDate locked={item.locked} key={item.key} datetime={item.datetime} title={item.title} status={item.status} imageUrl={item.imageUrl} id={item.key}/>)}
    </div>)
}

export default EventList
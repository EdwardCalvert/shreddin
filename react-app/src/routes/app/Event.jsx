import Nav from "../../components/nav/header";
import { useState } from "react";
import EventList from "../../components/events/event-list";
import { EVENT_STATUS_FLAGS } from "@components/events/event-status-flags";
import EventPhotocardTitleDate from "@components/events/event-photocard-title-date";


export default function Event() {
  const [index, setIndex ] = useState(1);
  const display = {
      0: <EventPhotocardTitleDate locked={false} key={"16"} datetime={new Date(2023, 11, 12)} title="Aboyne" status={EVENT_STATUS_FLAGS.EVENT_OCCURRED | EVENT_STATUS_FLAGS.EVENT_ATTENDED}  imageUrl="/512.png" id="16"/> , 
      1: <EventList/> ,
  }
  
  return (
    <div>
      <Nav  tabs={["Past","Upcoming"]} defaultTabIndex={index} onTabChanged={(e)=> setIndex(e)} title="Event"/>
      {display[index]}
    </div>
);
}

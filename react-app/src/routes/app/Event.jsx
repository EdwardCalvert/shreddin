import Nav from "../../components/nav/header";
import { useState } from "react";
import EventList from "../../components/events/event-list";


export default function Event() {
  const [index, setIndex ] = useState(1);
  const display = {
      0:<p>You have attended no past events</p> , 
      1: <EventList/> ,
  }
  
  return (
    <div>
      <Nav  tabs={["Past","Upcoming"]} defaultTabIndex={index} onTabChanged={(e)=> setIndex(e)} title="Event"/>
      {display[index]}
    </div>
);
}

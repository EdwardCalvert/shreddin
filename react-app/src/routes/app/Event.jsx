import Nav from "../../components/nav/header";
import EventPhotocardTitleDate from "../../components/events/event-photocard-title-date";
import MainHeader from "../../components/text/main-headder";



export default function Event() {
  return (
    <div>
  <Nav  tabs={["Past","Upcoming"]} defaultTabIndex={1} onTabChanged={(e)=> console.log("Tab changed!" +e )} title="Event"/>
  


  <EventPhotocardTitleDate locked={true}/>
  <EventPhotocardTitleDate locked={true}/>
  <p>There are no upcoming events</p>

  </div>
);
}

import Nav from "../../components/nav/header";
import EventItem from "../../components/events/event-item";
import PaddedContainer from "../../components/containers/padding";
import MainHeader from "../../components/text/main-headder";

export function meta({}) {
  return [
    { title: "Shreddin'" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function MobileHome() {
  return (
    <div>
  <Nav historyEnabled={true} tabs={["Past","Upcoming","Due"]} defaultTabIndex={1} onTabChanged={(e)=> console.log("Tab changed!" +e )}/>
  

<PaddedContainer>
  <EventItem locked={true}/>
  <EventItem locked={true}/>
</PaddedContainer>

  </div>
);
}

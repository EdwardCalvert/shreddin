import Nav from "../../components/nav/header";
import EventPhotocardTitleDate from "../../components/events/event-photocard-title-date";
import PaddedContainer from "../../components/containers/padding";
import MainHeader from "../../components/text/main-headder";



export default function Locations() {
  return (
    <div>
  <Nav  tabs={["Map","List"]} defaultTabIndex={1} onTabChanged={(e)=> console.log("Tab changed!" +e )} title="Locations"/>
  


    <p>List the locations here</p>

  </div>
);
}

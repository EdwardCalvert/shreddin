import Nav from "../../components/nav/header";
import EventPhotocardTitleDate from "../../components/events/photocard-title-date";
import PaddedContainer from "../../components/containers/padding";
import MainHeader from "../../components/text/main-headder";



export default function SettleUp() {
  return (
    <div>
  <Nav  tabs={["Due","Settled"]} defaultTabIndex={1} onTabChanged={(e)=> console.log("Tab changed!" +e )} title="Settle up"/>
  


    <p>Sort your debts here</p>

  </div>
);
}

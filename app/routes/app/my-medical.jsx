import Nav from "../../components/nav/header";
import EventPhotocardTitleDate from "../../components/events/photocard-title-date";
import PaddedContainer from "../../components/containers/padding";
import MainHeader from "../../components/text/main-headder";



export default function Profile() {
  return (
    <div>
  <Nav  tabs={[]} title="My emergency info" historyEnabled={true}/>
  


    <MainHeader> Emergency contact details</MainHeader>
    <p className="text-sm">In the unlikely event of an accident, information you put here will be used to ensure you get the best possible treatment. Completing it is completely optional. The data used here will only be used in the event of an emergency by comittee members. <br/> We suggest you include: an emergency contact name & telephone, any medical conditions etc </p>
    <input/> 
  </div>
);
}

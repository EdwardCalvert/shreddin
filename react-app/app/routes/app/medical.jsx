import Nav from "../../components/nav/header";
import EventPhotocardTitleDate from "../../components/events/event-photocard-title-date";
import PaddedContainer from "../../components/containers/padding";
import MainHeader from "../../components/text/main-headder";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router";


export default function Medical() {
  return (
    <div>
  <Nav  tabs={[]} title="Emergency info"/>
  
    <Link to="me"  > 
      <div className="w-full bg-white text-center rounded-lg ">
        <Icon icon="bi:file-medical" className="text-black w-24 h-24 m-auto pt-4"/>
        <p className="font-semibold text-lg ">Emergency contact details </p>
        <p className="text-sm">Save details that may help in an emergency</p>
        </div>
    </Link>

    <div className="w-full bg-white rounded-lg flex flex-row mt-4">
      <Icon icon="bi:eye" className="h-16 w-16 ml-4"/>
      <div className="ml-4 mr-1 mt-1">
        <p className="font-semibold ">View emergency contact details</p>
        <p className="text-sm">People will be notified when you view their record</p>
      </div>
    </div>


  </div>
);
}

import Nav from "../../components/nav/header";
import EventPhotocardTitleDate from "../../components/events/event-photocard-title-date";
import PaddedContainer from "../../components/containers/padding";
import MainHeader from "../../components/text/main-headder";
import axios from 'axios'; 


export default function Profile() {
  return (
    <div>
    <Nav  tabs={[]} title="Profile"/>
  
    <button onClick={()=> axios.post("https://localhost:7066/auth/auth?username=gfdg&password=sdfgsdfg",{withCredentials: true})}>Click me</button>
    <button onClick={()=> axios.get("https://localhost:7066/auth/de", { withCredentials: true })}>Click m2e</button>
    <button onClick={()=> axios.get("https://localhost:7066/auth/auth", { withCredentials: true })}>Click logogt</button>

    <p>Do profile stuff here</p>
    <p>Logout here</p>
    <p>My memebership status: Active</p>
    <p>Contact the treasurer to adjust</p>

  </div>
);
}

import Nav from "../../components/nav/header";
import EventPhotocardTitleDate from "../../components/events/event-photocard-title-date";
import PaddedContainer from "../../components/containers/padding";
import MainHeader from "../../components/text/main-headder";
import api from "../../services/api/api";
import {useState} from 'react';


export default function Profile() {


  const [text, setText] = useState([]);
  return (
    <div>
    <Nav  tabs={[]} title="Profile"/>
    {text.map((e) => <p>{e}</p>
    )}

<button onClick={() =>api.get("/auth/de").text( x => console.log(x))}>
Im a new button
</button>

<button onClick={() =>api.get("/auth/auth").text( x => console.log(x))}>
Log me out
</button>
    <button onClick={()=> {fetch("https://shreddin-api.coolify.edcalvert.net/auth/auth?username=gfdg&password=sdfgsdfg", {
  method: 'POST',
  credentials: 'include'
})
  .then((json) => {
    console.log('Gotcha');
    setText([...text, "Cheese"])
    console.log(text);
  }).catch((err) => {
    console.log(err);
});}}>    LOGIN </button>

<button onClick={()=> {fetch("https://localhost:7066/auth/de", {
  method: 'GET',
  credentials: 'include'
})
  .then((response) => response.json())
  .then((json) => {
    console.log('Gotcha');
  }).catch((err) => {
    console.log(err);
});}}>dasdfasdf2</button>

    <p>Do profile stuff here</p>
    <p>Logout here</p>
    <p>My memebership status: Active</p>
    <p>Contact the treasurer to adjust</p>

  </div>
);
}

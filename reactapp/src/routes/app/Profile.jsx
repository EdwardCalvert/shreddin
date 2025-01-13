import Nav from "../../components/nav/header";
import EventPhotocardTitleDate from "../../components/events/event-photocard-title-date";
import PaddedContainer from "../../components/containers/padding";
import MainHeader from "../../components/text/main-headder";
import api from "../../services/api/api";
import {useState} from 'react';
import axios from "axios";


export default function Profile() {


  const [text, setText] = useState([]);
  return (
    <div>
    <Nav  tabs={[]} title="Profile"/>
    {text.map((e) => <p>{e}</p>
    )}

<button onClick={() =>api.get("v1/auth/de").text( x => console.log(x))}>
Im a new button
</button>

<button onClick={() =>api.get("v1/auth/auth").text( x => console.log(x))}>
Log me out
</button>
    <button onClick={()=> {fetch("https://localhost:7066/api/v1/auth/auth?username=gfdg&password=sdfgsdfg", {
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

 <button className="m-2 bg-blue" onClick={async ()=> {
  await axios.post("https://localhost:7066/api/v1/auth/login",
    JSON.stringify({ Username: "username", Password:"string" }),
    {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    }
);
  }}>LOgin with axios</button>

<button onClick={()=> {fetch("https://localhost:7066/api/v1/auth/de", {
  method: 'GET',
  credentials: 'include'
})
  .then((response) => response.json())
  .then((json) => {
    console.log('Gotcha');
  }).catch((err) => {
    console.log(err);
});}}>Check if im logged in</button>

    <p>Do profile stuff here</p>
    <p>Logout here</p>
    <p>My memebership status: Active</p>
    <p>Contact the treasurer to adjust</p>

  </div>
);
}

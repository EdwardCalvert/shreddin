import Nav from "../../components/nav/header";
import {useState} from 'react';
import axios from "../../api/axios";


export default function Profile() {


  const [text, setText] = useState([]);
  return (
    <div>
    <Nav  tabs={[]} title="Profile"/>
    {text.map((e) => <p>{e}</p>
    )}

<button onClick={() =>api.get("/api/v1/auth/get-details").text( x => console.log(x))}>
Im a new button
</button>

<button onClick={() =>axios.get("/api/v1/auth/logout").text( x => console.log(x))}>
Log me out
</button>


<button onClick={()=> {fetch("https://localhost:7066/api/v1/auth/get-details", {
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

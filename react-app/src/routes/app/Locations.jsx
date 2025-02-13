import Nav from "../../components/nav/header";
import { useState } from "react";



export default function Locations() {
  const [index, setIndex ] = useState(1);
  const display = {
      0:<div>
          <img src="/map-demo.png"/>
          <p>Include map which shows the zones here</p>
        </div> , 
      1: <p>List the locations here</p> ,
  }
  return (
    <div>
      <Nav  tabs={["Map","List"]} defaultTabIndex={1} onTabChanged={(e)=> setIndex(e)} title="Locations"/>
  
      {display[index]}
      

      

  </div>
);
}

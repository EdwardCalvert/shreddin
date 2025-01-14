import Nav from "../../components/nav/header";
import Settled from "../../components/settle-up/settled";
import Due from "../../components/settle-up/due";
import { useState } from "react";


export default function SettleUp() {

  const display = {
    0 : <Settled/>,
    1: <Due/>
  }

  const [index, setIndex ] = useState(1)
  return (
    <div>
  <Nav  tabs={["Settled","Due"]} defaultTabIndex={index} onTabChanged={(e)=> setIndex(e)} title="Settle up"/>
  
    {display[index]}


  </div>
);
}

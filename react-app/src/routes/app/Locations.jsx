import Nav from "../../components/nav/header";



export default function Locations() {
  return (
    <div>
  <Nav  tabs={["Map","List"]} defaultTabIndex={1} onTabChanged={(e)=> console.log("Tab changed!" +e )} title="Locations"/>
  


    <p>List the locations here</p>

  </div>
);
}

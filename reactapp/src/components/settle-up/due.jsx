import DebtItem from "./debt-item";
import StickyBottomButton from "../text/sticky-bottom-button";

export default function Due(){
    return( 
    <div className="pb-24">
        <p>You owe the club <span className="font-bold text-2xl ">£3.00</span></p>
        <p>Pease pay in the following way: Fuel: £3.00, Trip Fees: £0.00</p>

        <DebtItem data={{amount: -3.00, eventName:"Pitfichie", date: "12/02/204", action: "Passenger", zones : 3,  }}/>

        <p>You are owed £3.00</p>
        <span className="text-gray-900">This is the sum off</span>
        <DebtItem data={{amount: -3.00, eventName:"Pitfichie", date: "12/02/204", action: "Passenger", zones : 3, paidDate: "13/12/2024",  }}/>
        <DebtItem data={{amount: -3.00, eventName:"Pitfichie", date: "12/02/204", action: "Passenger", zones : 3,  pending : true}}/>
        <DebtItem data={{amount: -3.00, eventName:"Fort William", date: "12/02/204", action : "Trip fee"}}/>
        <DebtItem data={{amount: 116.00, eventName:"Aboyne", date: "12/02/204", action: "Driver"}}/>
        <DebtItem data={{amount: 3.66, eventName:"Fort william", date: "12/02/204", action: "Driver", }}/>

        <StickyBottomButton text="Pay now"/>
    </div>);
}
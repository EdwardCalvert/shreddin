import EventPhotocardTitleDate from "./event-photocard-title-date";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
export default function Deets(){
    return (
        <React.Fragment>
            <EventPhotocardTitleDate/>
            <p className="h-4">Meet at: <span className="font-semibold underline ">ASV Carpark 1 <Icon className="align-text-bottom inline w-4 h-4 ml-1 mb-0.5" icon="bi:map"/> </span> - 10:00</p>
            <p className="h-4">Park at: <span className="font-semibold underline ">Pitfichie forest carpark <Icon className="align-text-bottom inline w-4 h-4 ml-1 mb-0.5" icon="bi:map"/> </span></p>
            <p className="mt-1">We will be riding trails. Description etc</p>
        </React.Fragment>);
}
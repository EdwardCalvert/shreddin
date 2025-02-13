import EventPhotocardTitleDate from "./event-photocard-title-date";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useParams } from 'react-router-dom';
import React from "react";
import { MockEvents } from "@components/events/mock-events"

export default function Deets(){


    let { id } = useParams();
    let event = MockEvents.filter(x => x.key === id)[0]

    function description(locked){
        if(!locked){
            return (
            <>
                <p className="h-4">Meet at: <span className="font-semibold underline ">ASV Carpark 1 <Icon className="align-text-bottom inline w-4 h-4 ml-1 mb-0.5" icon="bi:map"/> </span> - 10:00</p>
                <p className="h-4">Park at: <span className="font-semibold underline ">Pitfichie forest carpark <Icon className="align-text-bottom inline w-4 h-4 ml-1 mb-0.5" icon="bi:map"/> </span></p>
                <p className="mt-1">We will be riding trails. Description etc</p>
            </>)
        }
    }
    return (
        <React.Fragment>
            <EventPhotocardTitleDate   locked={event.locked}  datetime={event.datetime} title={event.title} status={event.status} warnings={event.warnings} imageUrl={event.imageUrl} id={event.key} linkActive={false}/>

            {description(event.locked)}
        </React.Fragment>);
}
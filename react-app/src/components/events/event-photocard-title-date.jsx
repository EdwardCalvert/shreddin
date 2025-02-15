import { Icon } from "@iconify/react/dist/iconify.js";
import MainHeader from "../text/main-headder";
import { Link  } from "react-router";
import { useEffect } from "react";
import { EventIcons } from "@components/events/event-icons";
import { EVENT_STATUS_FLAGS } from "./event-status-flags";
import {EventInfoSeverity} from "./event-info-severity"
import EventInfoIcon from "@components/events/event-info-icon"
import PropTypes from 'prop-types';

export default function EventPhotocardTitleDate({locked, datetime,title,imageUrl, status, id, linkActive=true}) {
    EventPhotocardTitleDate.propTypes ={
        locked: PropTypes.bool.isRequired,
        datetime: PropTypes.instanceOf(Date).isRequired,
        title: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        status: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        linkActive: PropTypes.bool
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="pb-4">
        <Link className={` ${locked|| !linkActive? "pointer-events-none":""}`} to={`/app/events/${id}`}> 
            <div className="relative w-full h-[calc(40vh)] ">
                <img
                    src={imageUrl}
                    className="rounded-lg w-full h-full object-cover top-0"
                />

                {locked &&
                <div>
                    <div className="absolute inset-0 bg-white opacity-30 w-full h-full m-auto rounded-lg"></div>
                    <Icon
                        icon="mdi:lock"
                        className="absolute inset-0 text-black w-20 h-20 m-auto"
                        
                    />
                </div>
                }
                
            </div>
            <MainHeader>{title}</MainHeader>
            <p className="font-semibold">{datetime?.toLocaleDateString("en-GB")}</p>
            {Boolean(status & EVENT_STATUS_FLAGS.MAXIMUM_CAPACITY)&& <EventInfoIcon icon={EventIcons.Info} label="Maximum capacity reached" type={EventInfoSeverity.Warning} subText="Make sure to sign up as a passenger to be on the waiting list" />}
            {Boolean(status & EVENT_STATUS_FLAGS.CANCELLED)&& <EventInfoIcon icon={EventIcons.Cross} label="Cancelled" type={EventInfoSeverity.Warning} />}
            {Boolean(status & EVENT_STATUS_FLAGS.RESCHEDULED)&& <EventInfoIcon icon={EventIcons.CrossedArrows} label="Re-scheduled" type={EventInfoSeverity.Warning} />}


            {Boolean(status & EVENT_STATUS_FLAGS.DRIVING)&& <EventInfoIcon icon={EventIcons.Driver} label="Thanks for driving" type={EventInfoSeverity.Info}/>}
            {Boolean(status & EVENT_STATUS_FLAGS.PASSENGER)&& <EventInfoIcon icon={EventIcons.Passenger} label="You should be getting a lift" type={EventInfoSeverity.Info} subText={"Make sure to be at ASV Carpark 1 for 10:00"} />}
            {Boolean(status & EVENT_STATUS_FLAGS.MAKING_OWN_WAY)&& <EventInfoIcon icon={EventIcons.MakingOwnWay} label="You are making your own way there" type={EventInfoSeverity.Info} />}
            {Boolean(status & EVENT_STATUS_FLAGS.PEDALING_OUT)&& <EventInfoIcon icon={EventIcons.CyclingOut} label="You are cycling out" type={EventInfoSeverity.Info} />}


            {Boolean(status & EVENT_STATUS_FLAGS.INTEREST_REGISTERED)&& <EventInfoIcon icon={EventIcons.Tick} label="Interest registered" type={EventInfoSeverity.Success} />}

            {Boolean(status & EVENT_STATUS_FLAGS.BOOKING_SCHEDULED)&& <EventInfoIcon icon={EventIcons.Info} label="Sign-up opens at: 19:00" type={EventInfoSeverity.Pending} />}
            {Boolean(status & EVENT_STATUS_FLAGS.BOOKING_OPEN)&& <EventInfoIcon icon={EventIcons.Clock} label="Sign-up closes at: 19:00" type={EventInfoSeverity.Urgent} />}

            {Boolean(status & EVENT_STATUS_FLAGS.EVENT_OCCURRED)&& <EventInfoIcon icon={EventIcons.History} label="Event occured" type={EventInfoSeverity.Warning} />}
            {Boolean(status & EVENT_STATUS_FLAGS.EVENT_ATTENDED)&& <EventInfoIcon icon={EventIcons.Tick} label="You attended this event" type={EventInfoSeverity.Success} />}
            {Boolean(status & EVENT_STATUS_FLAGS.EVENT_ABSENCE)&& <EventInfoIcon icon={EventIcons.RecordedAbsence} label="You signed up, but didn't attend" type={EventInfoSeverity.Urgent} />}


            {locked && 
            <div className="flex flex-row">
                <Icon icon="mdi:lock" className="w-10 h-10"/>
                <p>You must buy membership from AUSA before you can attend.<br/> Then contact the treasuer to unlock </p>
            </div>
            }
        </Link>
        </div>
    );
}

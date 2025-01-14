import { Icon } from "@iconify/react/dist/iconify.js";
import MainHeader from "../text/main-headder";
import { Link } from "react-router";
import { useEffect } from "react";

export default function EventPhotocardTitleDate({locked}) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Link className="mb-4" to="/app/events/details">
            <div className="relative w-full h-[calc(40vh)] ">
                <img
                    src="/murdo.jpg"
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
            <MainHeader >Pitfichie</MainHeader>
            <p className="font-semibold">12/12/2024</p>
            <div className="flex flex-row">
                <div className="bg-gold rounded-full p-1">
                <Icon icon="ion:car" className="text-white  w-6 h-6"/>
                </div>
                
                <p className="font-semibold ml-2 pt-1">Thanks for driving </p>
            </div>
            <div className="flex flex-row">
                <div className="bg-gold rounded-full p-1">
                <Icon icon="mdi:seat-passenger" className="text-white  w-6 h-6"/>
                </div>
                
                <p className="font-semibold ml-2 pt-1">You should be getting a lift</p>
            </div>
            <p className="pt-1">Make sure to be at ASV Carpark 1 for 10:00</p>
            <div className="flex flex-row">
                <div className="bg-gold rounded-full p-1">
                <Icon icon="bi:rocket-takeoff-fill" className="text-white  w-6 h-6"/>
                </div>
                
                <p className="font-semibold ml-2 pt-1">You are making your own way there</p>
            </div>
            <div className="flex flex-row">
                <div className="bg-gold rounded-full p-1">
                <Icon icon="bi:bicycle" className="text-white  w-6 h-6"/>
                </div>
                
                <p className="font-semibold ml-2 pt-1">You are pedalling out</p>
            </div>
            <div className="flex flex-row">
                <div className="bg-warn-red rounded-md p-1">
                <Icon icon="ri:info-i" className="text-white  w-6 h-6"/>
                </div>
                
                <p className="font-semibold ml-2 pt-1">Maximum capacity reached</p>
            </div>
            <div className="flex flex-row">
                <div className="bg-warn-red rounded-md p-1">
                <Icon icon="codex:cross" className="text-white  w-6 h-6"/>
                </div>
                
                <p className="font-semibold ml-2 pt-1">Cancelled</p>
            </div>
            <div className="flex flex-row">
                <div className="bg-warn-red rounded-md p-1">
                <Icon icon="tabler:arrows-shuffle" className="text-white  w-6 h-6"/>
                </div>
                
                <p className="font-semibold ml-2 pt-1">Re-scheduled</p>
            </div>
            <div className="flex flex-row">
                <div className="bg-success-green rounded-full p-1">
                <Icon icon="bi:check-lg" className="text-white  w-6 h-6"/>
                </div>
                
                <p className="font-semibold ml-2 pt-1">Interest registered</p>
            </div>
            {locked && 
            <div className="flex flex-row">
                <Icon icon="mdi:lock" className="w-10 h-10"/>
                <p>You must buy membership from AUSA before you can attend.<br/> Then contact the treasuer to unlock </p>
            </div>
            }
            {!locked && 
                <p>Font here</p>
            }
        </Link>
    );
}

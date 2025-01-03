import { Icon } from "@iconify/react/dist/iconify.js";
import MainHeader from "../text/main-headder";

export default function EventItem({locked}) {
    return (
        <div className="mb-4" >
            <div className="relative w-full h-[calc(40vh)]">
                <img
                    src="murdo.jpg"
                    className={`rounded-lg w-full h-full object-cover ${locked? "opacity-40" : ""}`}
                />
                {locked &&
                    <Icon
                    icon="mdi:lock"
                    className="absolute inset-0 text-black w-20 h-20 m-auto"
                />
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
            {locked && 
            <div className="flex flex-row">
                <Icon icon="mdi:lock" className="w-10 h-10"/>
                <p><a href="https://www.ausa.org.uk/sports/club/aumbc/" className="underline text-sky-600">You must buy membership from AUSA before you can attend.</a> <br/> Then contact the treasuer to unlock </p>
            </div>
            }
            {!locked && 
                <p>Font here</p>
            }
        </div>
    );
}

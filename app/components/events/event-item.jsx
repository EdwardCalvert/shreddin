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

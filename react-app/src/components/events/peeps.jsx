import MainHeader from "../text/main-headder";

export default function Peeps(){
    return(
        <div>
            <MainHeader>Sign-ups</MainHeader> 
            <div className="flex flex-row mb-4">
                <img
                    src="https://r2.shreddin.edcalvert.net/profile-photo/666cbf46-c2e6-4c64-a795-4a381183ef7b.webp"
                    className="rounded-full w-20 h-20 object-cover top-0 bg-white"
                    alt="Bob-ross"
                />
                <div className="ml-4 mt-8">
                <p className="font-semibold ">Joe Bloggs</p>
                <p>👍</p>
                </div>
            </div>
            <div className="flex flex-row mb-4">
                <img
                    src="https://r2.shreddin.edcalvert.net/profile-photo/666cbf46-c2e6-4c64-a795-4a381183ef7b.webp"
                    className="rounded-full w-20 h-20 object-cover top-0 bg-white"
                    alt="Bob-ross"
                />
                <div className="ml-4 mt-8">
                <p className="font-semibold ">John Doe</p>
                <p></p>
                </div>
            </div>

            <MainHeader className="mt-4">Those who've changed plans 🥲</MainHeader> 
            <div className="flex flex-row mb-4">
                <img
                    src="https://r2.shreddin.edcalvert.net/profile-photo/666cbf46-c2e6-4c64-a795-4a381183ef7b.webp"
                    className="rounded-full w-20 h-20 object-cover top-0 bg-white"
                    alt="Bob-ross"
                />
                <div className="ml-4 mt-8">
                <p className="font-semibold ">Josephene Bloggs</p>
                <p>🥲</p>
                </div>
            </div>

        </div>
    )

}
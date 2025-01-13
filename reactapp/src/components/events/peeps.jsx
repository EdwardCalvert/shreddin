import MainHeader from "../text/main-headder";

export default function Peeps(){
    return(
        <div>
            <MainHeader>Sign-ups</MainHeader> 
            <div className="flex flex-row mb-4">
                <img
                    src="/ross.jpg"
                    className="rounded-full w-20 h-20 object-cover top-0"
                    alt="Bob-ross"
                />
                <div className="ml-4 mt-8">
                <p className="font-semibold ">Bob Ross</p>
                <p>🚜</p>
                </div>
            </div>
            <div className="flex flex-row mb-4">
                <img
                    src="/ross.jpg"
                    className="rounded-full w-20 h-20 object-cover top-0"
                    alt="Bob-ross"
                />
                <div className="ml-4 mt-8">
                <p className="font-semibold ">Bob Ross</p>
                <p>🤣🤣🤣</p>
                </div>
            </div>

            <MainHeader className="mt-4">Those who've changed plans 🥲</MainHeader> 
            <div className="flex flex-row mb-4">
                <img
                    src="/murdo.jpg"
                    className="rounded-full w-20 h-20 object-cover top-0"
                    alt="Bob-ross"
                />
                <div className="ml-4 mt-8">
                <p className="font-semibold ">Skyeman</p>
                <p>🫡</p>
                </div>
            </div>

        </div>
    )

}
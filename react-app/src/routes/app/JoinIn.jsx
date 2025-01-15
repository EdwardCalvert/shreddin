import Nav from "../../components/nav/header";
import MainHeader from "../../components/text/main-headder";


let stuff = [
    {
        name:"Meet us at the car park",
        
    }
]
export default function JoinIn(){
    return <div>
        <Nav title="Join in" historyEnabled={true}/>
        <div className="bg-white rounded-lg w-full min-h-24 p-2 mb-4">
            <MainHeader >Pitfichie</MainHeader>
            <ul>
                <li>3 zones</li>
                <li>Meet at: ASV Car park 1</li>
                <li>hh:mm dd/mm/2024</li>
            </ul>

        </div>

        <div className="bg-white rounded-lg w-full h-24 mb-4">
            <input type="radio" name="transport" className="form-radio w-4 h-4 checked:bg-gold text-gold"/>
            <h3 className="font-semibold">Meet us at the car park</h3>
            <p>We will see you at <span className="font-medium">Pitfichie forest car park</span> </p>
        </div>

        <div className="bg-white rounded-lg w-full h-24 mb-4">
            <input type="radio" name="transport" className="form-radio w-4 h-4 checked:bg-gold text-gold"/>
            <h3 className="font-semibold">I'm going to cycle out</h3>
            <p>We will see you at <span className="font-medium">Pitfichie forest car park</span> </p>
        </div>
        <div className="bg-white rounded-lg w-full h-24 mb-4">
            <input type="radio" name="transport" className="form-radio w-4 h-4 checked:bg-gold text-gold"/>
            <h3 className="font-semibold">I can help out</h3>
            <p>Help the club by joining the travel pool, and we will pay you for every bike and person you take as a thanks</p>
        </div>
        <div className="bg-white rounded-lg w-full h-24 mb-4">
            <input type="radio" name="transport" className="form-radio w-4 h-4 checked:bg-gold text-gold"/>
            <h3 className="font-semibold">I need a lift</h3>
            <p>We'll try and find space from the car pool for you</p>
        </div>
    </div>
}
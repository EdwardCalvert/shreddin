import MainHeader from "../text/main-headder"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function Whips(){
    return (
    <div>
        <MainHeader>Car pool</MainHeader>

        <table className="table-auto">
            <tbody>
                <tr>
                    <td>Seating capacity</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>Bike capacity</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>Sign-ups capacity</td>
                    <td>10</td>
                </tr>
            </tbody>
        </table>
        <div className="flex flex-row">
            <img src="/cars/rack-car-hatchback.png" className="h-16 w-16" alt="car-picture"/>
            <div className="ml-2">
                <p className="font-semibold">History teacher</p>
                <div className="flex flex-row">
                    {[...Array(3)].map((x) =>
                        <Icon icon="bi:bicycle" className="m-[1px]" key={x} />
                    )}
                </div>
                
                <div className="flex flex-row">
                    {[...Array(3)].map((x) =>
                            <Icon icon="bi:person-fill" className="m-[1px]" key={x} />
                    )}
                </div>
            </div>
        </div>
    </div>)
}
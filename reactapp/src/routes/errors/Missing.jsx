import { Link } from "react-router-dom"

const Missing = () => {
    return (
        
        <article >
            <h1 className="text-blue text-3xl font-bold">Oops!</h1>
            <img src="/errors/missing_page.webp"/>
            <p>Page Not Found- I wonder why?</p>

            <Link to="/app/events" className=" bg-blue text-white rounded-md p-2 ">Go Home</Link>
        </article>
    )
}

export default Missing

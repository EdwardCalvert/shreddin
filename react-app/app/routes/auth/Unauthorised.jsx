import { useNavigate } from "react-router-dom"

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <section>
            <h1>Skill issue</h1>
            <br />
            <p>Your skill means you access to the requested page.</p>
            <div className="flexGrow">
                <button onClick={goBack} className="bg-blue rounded-md text-white p-1">Go Back</button>
            </div>
        </section>
    )
}

export default Unauthorized
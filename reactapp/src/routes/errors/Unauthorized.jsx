import { useNavigate } from "react-router-dom"

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <section>
            <h1 className="text-blue text-3xl font-bold">Unauthorized</h1>
            <br />
            <img src="/errors/skill_issue.webp"></img>
            <p>You are not skilled enough to view the page.</p>
            <button className="bg-blue text-white p-2 rounded-md" onClick={goBack}>Go Back</button>
        </section>
    )
}

export default Unauthorized

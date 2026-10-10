import DeveloperCard from "../../Components/DeveloperCard/DeveloperCard"
import "./Developer.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Developer() {
    const [developers, setDevelopers] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:3000/developers")
            .then((response) => {
                setDevelopers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);
    return (
        <div>
            <div className="developer-page">
                 <div className="project-btn">
                        <Link to={"/developerprofileform"}><button className="developer-add-btn">+ Add  Profile </button></Link>
                    </div>
                <hr />
                <div className="developers-container">

                    {developers.map((developer) => (

                        <DeveloperCard
                            key={developer.id}
                            developer={developer}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

import DeveloperCard from "../../Components/DeveloperCard/DeveloperCard"
import NavBar from "../../Components/NavBar/NavBar"
import "./Developer.css"
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";

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
                <NavBar content="Search Developer ..." />
                 <div className="project-btn">
                        <button className="developer-add-btn">+ Add  Profile </button>
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
            <Footer />
        </div>
    )
}

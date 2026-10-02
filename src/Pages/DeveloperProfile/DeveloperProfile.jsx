import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import "./DeveloperProfile.css";

export default function DeveloperProfile() {

    const { id } = useParams();

    const [developer, setDeveloper] = useState({});

    useEffect(() => {

        axios
            .get(`http://localhost:3000/developers/${id}`)
            .then((response) => {
                setDeveloper(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [id]);

    return (
        <div className="developer-profile">
            <section className="profile-header">

                <div className="profile-image-container">

                    <img
                        src={developer.profileImage}
                        alt={developer.name}
                        className="profile-image"
                    />

                </div>


                <div className="profile-info">

                    <h1>{developer.name}</h1>

                    <h3>{developer.role}</h3>

                    <p className="location">
                        <FaMapMarkerAlt />
                        {developer.location}
                    </p>

                    <p className="experience">
                        ⭐ {developer.experience}
                    </p>


                    <div className="profile-buttons">

                        <a
                            href={developer.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub />
                            GitHub
                        </a>

                        <a
                            href={developer.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>

                        <button>
                            Contact
                        </button>

                    </div>

                </div>

            </section>
            <section className="profile-details">
                <div className="about-box">

                    <h2>About</h2>

                    <p>
                        {developer.bio}
                    </p>

                </div>
                <div className="skills-box">

                    <h2>Skills</h2>

                    <div className="skills-list">

                        {developer.skills?.map((skill, index) => (

                            <span key={index}>
                                {skill}
                            </span>

                        ))}

                    </div>

                </div>

            </section>

        </div>
    );
}
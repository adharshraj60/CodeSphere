import { useNavigate } from "react-router-dom";
import "./DeveloperCard.css";

export default function DeveloperCard({ developer }) {
     const navigation =useNavigate()

     function handelchange(){
        navigation(`/developerprofile/${developer.id}`)
     }

    return (
        <div className="developer-card">

            <div className="developer-image">
                <img
                    src={developer.profileImage}
                    alt={developer.name}
                />
            </div>

            <div className="developer-details">

                <h3>{developer.name}</h3>

                <p className="developer-role">
                    {developer.role}
                </p>

                <p className="developer-location">
                    📍 {developer.location}
                </p>

                <p className="developer-bio">
                    {developer.bio}
                </p>

                <div className="developer-skills">
                    {developer.skills.map((skill, index) => (
                        <span key={index}>
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="developer-footer">

                    <p>
                        {developer.experience}
                    </p>

                    <p>
                        {developer.projects} Projects
                    </p>

                </div>

                <button className="profile-btn" onClick={handelchange}>
                    View Profile
                </button>

            </div>

        </div>
    );
}
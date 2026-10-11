import "./Project.css"
import { useEffect, useState } from "react"
import axios from "axios"
import ProjectCard from "../../Components/ProjectCard/ProjectCard"
import { Link } from "react-router-dom";

export default function Project() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/projects")
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    return (
        <div>
            <div className="project-page">
                    <div className="project-add-btn">
                        <Link to={"/addprojectform"}><button className="pro-btn">+ Add  Project </button></Link>
                    </div>
                    <hr />
                <div className="pro-list">
                    {
                        projects.map((project) => (

                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}

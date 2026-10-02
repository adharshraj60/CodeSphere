import "./ProjectCard.css";

export default function ProjectCard({ project }) {
    return (
        <div className="project-card">

            {/* Project Image */}
            <div className="project-image">
                <img
                    src={project.image}
                    alt={project.title}
                />
            </div>

            {/* Project Details */}
            <div className="project-content">

                <h3>{project.title}</h3>

                <p className="project-description">
                    {project.description}
                </p>

                <p className="project-category">
                    {project.category}
                </p>

                {/* Technologies */}
                <div className="project-technologies">

                    {project.technologies.map((technology, index) => (
                        <span key={index}>
                            {technology}
                        </span>
                    ))}

                </div>

                {/* Author */}
                <p className="project-author">
                    By {project.author}
                </p>

                {/* Footer */}
                <div className="project-footer">

                    <span>❤️ {project.likes}</span>

                    <span>👁️ {project.views}</span>

                    <span>{project.status}</span>

                </div>

                <button className="view-project-btn">
                    View Project
                </button>

            </div>

        </div>
    );
}
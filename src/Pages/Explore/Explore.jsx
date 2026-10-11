import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "./Explore.css";

export default function Explore() {

const [projects, setProjects] = useState([]);
const [search, setSearch] = useState("");

useEffect(() => {
    axios.get("http://localhost:3000/projects")
        .then((res) => {
            setProjects(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);

const filteredProjects = projects.filter((project) =>
    (project.title || project.name || "")
        .toLowerCase()
        .includes(search.toLowerCase())
);

return (
    <Container className="explore-page">

        <h1 className="text-center mt-4">Explore Projects</h1>

        <p className="text-center text-muted">
            Discover projects created by developers
        </p>
        {/* Search Bar */} 
        <Form.Control 
        type="text" 
        placeholder="Search projects..." 
        className="explore-search" 
        value={search} 
        onChange={(e) => 
        setSearch(e.target.value)} 
        />

        {/* Project Cards */}
        <Row className="mt-4 g-4">

            {filteredProjects.map((project) => (

                <Col md={6} lg={4} key={project.id}>

                    <Card className="project-card h-100">

                        <Card.Body>

                            <Card.Title>
                                {project.title || project.name}
                            </Card.Title>

                            <Card.Text>
                                {project.description}
                            </Card.Text>

                            <p>
                                <strong>Technologies:</strong>{" "}
                                {Array.isArray(project.technologies)
                                    ? project.technologies.join(", ")
                                    : project.technologies || "Not specified"}
                            </p>

                            <Link to={`/projectdetails/${project.id}`}>
                                <Button variant="primary">
                                    View Project
                                </Button>
                            </Link>

                        </Card.Body>

                    </Card>

                </Col>

            ))}

            {filteredProjects.length === 0 && (
                <p className="text-center mt-4">
                    No projects found.
                </p>
            )}

        </Row>

    </Container>
);
}

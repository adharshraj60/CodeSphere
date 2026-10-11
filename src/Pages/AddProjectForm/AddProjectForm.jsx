import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AddProjectForm.css";

export default function AddProjectForm() {

const [project, setProject] = useState({
    title: "",
    description: "",
    image: "",
    technologies: "",
    features: "",
    developer: "",
    status: "",
    github: "",
    liveDemo: ""
});

function handleChange(e) {
    const { name, value } = e.target;

    setProject((previousProject) => ({
        ...previousProject,
        [name]: value
    }));
}

function handleSubmit(e) {
    e.preventDefault();

    const projectDetails = {
        ...project,
        technologies: project.technologies
            .split(",")
            .map((tech) => tech.trim())
            .filter(Boolean),
        features: project.features
            .split("\n")
            .map((feature) => feature.trim())
            .filter(Boolean)
    };

    console.log("Project Details:", projectDetails);
}

return (
    <Container className="create-project-container py-5">

        <Card className="create-project-card shadow border-0 rounded-4">

            <Card.Body className="p-4 p-md-5">

                <h2 className="text-center fw-bold mb-2">
                    Create a Project
                </h2>

                <p className="text-center text-secondary mb-4">
                    Showcase your work with the CodeSphere community.
                </p>

                <Form onSubmit={handleSubmit}>

                    <h5 className="mb-3 text-primary">
                        Basic Information
                    </h5>

                    <Form.Group className="mb-3">
                        <Form.Label>Project Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={project.title}
                            onChange={handleChange}
                            placeholder="Enter project title"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Project Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            name="description"
                            value={project.description}
                            onChange={handleChange}
                            placeholder="Describe your project"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Project Image URL</Form.Label>
                        <Form.Control
                            type="url"
                            name="image"
                            value={project.image}
                            onChange={handleChange}
                            placeholder="https://example.com/project.jpg"
                        />
                    </Form.Group>

                    <hr className="my-4" />

                    <h5 className="mb-3 text-primary">
                        Project Details
                    </h5>

                    <Form.Group className="mb-3">
                        <Form.Label>Technologies Used</Form.Label>
                        <Form.Control
                            type="text"
                            name="technologies"
                            value={project.technologies}
                            onChange={handleChange}
                            placeholder="React, Node.js, MongoDB"
                            required
                        />
                        <Form.Text className="text-secondary">
                            Separate technologies with commas.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Key Features</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            name="features"
                            value={project.features}
                            onChange={handleChange}
                            placeholder={"User authentication\nResponsive design\nSearch functionality"}
                        />
                        <Form.Text className="text-secondary">
                            Enter each feature on a new line.
                        </Form.Text>
                    </Form.Group>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Developer Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="developer"
                                    value={project.developer}
                                    onChange={handleChange}
                                    placeholder="Enter developer name"
                                    required
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Project Status</Form.Label>
                                <Form.Select
                                    name="status"
                                    value={project.status}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">
                                        Select project status
                                    </option>
                                    <option value="Planning">
                                        Planning
                                    </option>
                                    <option value="In Progress">
                                        In Progress
                                    </option>
                                    <option value="Completed">
                                        Completed
                                    </option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <hr className="my-4" />

                    <h5 className="mb-3 text-primary">
                        Project Links
                    </h5>

                    <Form.Group className="mb-3">
                        <Form.Label>GitHub Repository</Form.Label>
                        <Form.Control
                            type="url"
                            name="github"
                            value={project.github}
                            onChange={handleChange}
                            placeholder="https://github.com/username/project"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Live Demo URL</Form.Label>
                        <Form.Control
                            type="url"
                            name="liveDemo"
                            value={project.liveDemo}
                            onChange={handleChange}
                            placeholder="https://yourproject.com"
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-end gap-3">

                        <Button
                            type="button"
                            variant="outline-secondary"
                            onClick={() => {
                                setProject({
                                    title: "",
                                    description: "",
                                    image: "",
                                    technologies: "",
                                    features: "",
                                    developer: "",
                                    status: "",
                                    github: "",
                                    liveDemo: ""
                                });
                            }}
                        >
                            Clear Form
                        </Button>

                        <Button
                            onClick={handleSubmit}
                            variant="primary"
                            className="px-4"
                        >
                            Create Project
                        </Button>

                    </div>

                </Form>

            </Card.Body>
        </Card>

    </Container>
);
}

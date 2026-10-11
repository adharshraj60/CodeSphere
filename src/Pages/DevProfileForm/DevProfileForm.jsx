import "./DevProfileForm.css"
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function DevProfileForm() {
    const [developer, setDeveloper] = useState({
        name: "",
        email: "",
        profileImage: "",
        role: "",
        skills: "",
        experience: "",
        about: "",
        github: "",
        linkedin: "",
        portfolio: "",
        location: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setDeveloper({
            ...developer,
            [name]: value
        });
    }

    function handleSubmit(e) {
    e.preventDefault();

    console.log("Developer Details:", developer);

    alert("Developer profile submitted successfully!");
}
    return (
        <div>
            <Container className="developer-profile-container py-5">

                <Card className="developer-profile-card shadow border-0 rounded-4">

                    <Card.Body className="p-4 p-md-5">

                        <h2 className="fw-bold text-center mb-2">
                            Create Developer Profile
                        </h2>

                        <p className="text-secondary text-center mb-4">
                            Tell the CodeSphere community about yourself.
                        </p>

                        <Form onSubmit={handleSubmit}>

                            <h5 className="section-heading mb-3">
                                Personal Information
                            </h5>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={developer.name}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </Form.Group>
                                </Col>

                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={developer.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>Profile Image URL</Form.Label>
                                <Form.Control
                                    type="url"
                                    name="profileImage"
                                    value={developer.profileImage}
                                    onChange={handleChange}
                                    placeholder="https://example.com/profile.jpg"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Professional Role</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="role"
                                    value={developer.role}
                                    onChange={handleChange}
                                    placeholder="e.g. MERN Stack Developer"
                                    required
                                />
                            </Form.Group>

                            <hr className="my-4" />

                            <h5 className="section-heading mb-3">
                                Professional Information
                            </h5>

                            <Form.Group className="mb-3">
                                <Form.Label>Technical Skills</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="skills"
                                    value={developer.skills}
                                    onChange={handleChange}
                                    placeholder="React, JavaScript, Node.js"
                                    required
                                />
                                <Form.Text className="text-secondary">
                                    Separate each skill with a comma.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Experience Level</Form.Label>
                                <Form.Select
                                    name="experience"
                                    value={developer.experience}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select experience level</option>
                                    <option value="Fresher">Fresher</option>
                                    <option value="Student">Student</option>
                                    <option value="Intern">Intern</option>
                                    <option value="Junior Developer">
                                        Junior Developer
                                    </option>
                                    <option value="Experienced">
                                        Experienced Developer
                                    </option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>About Me</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    name="about"
                                    value={developer.about}
                                    onChange={handleChange}
                                    placeholder="Describe your interests, experience, and goals..."
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="location"
                                    value={developer.location}
                                    onChange={handleChange}
                                    placeholder="e.g. Chennai, India"
                                />
                            </Form.Group>

                            <hr className="my-4" />

                            <h5 className="section-heading mb-3">
                                Developer Links
                            </h5>

                            <Form.Group className="mb-3">
                                <Form.Label>GitHub Profile</Form.Label>
                                <Form.Control
                                    type="url"
                                    name="github"
                                    value={developer.github}
                                    onChange={handleChange}
                                    placeholder="https://github.com/username"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>LinkedIn Profile</Form.Label>
                                <Form.Control
                                    type="url"
                                    name="linkedin"
                                    value={developer.linkedin}
                                    onChange={handleChange}
                                    placeholder="https://linkedin.com/in/username"
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>Portfolio Website</Form.Label>
                                <Form.Control
                                    type="url"
                                    name="portfolio"
                                    value={developer.portfolio}
                                    onChange={handleChange}
                                    placeholder="https://yourportfolio.com"
                                />
                            </Form.Group>

                            <div className="d-flex gap-3 justify-content-end">
                                <Button
                                    type="reset"
                                    variant="outline-secondary"
                                    onClick={() =>
                                        setDeveloper({
                                            name: "",
                                            email: "",
                                            profileImage: "",
                                            role: "",
                                            skills: "",
                                            experience: "",
                                            about: "",
                                            github: "",
                                            linkedin: "",
                                            portfolio: "",
                                            location: ""
                                        })
                                    }
                                >
                                    Clear Form
                                </Button>

                                <Button
                                    variant="primary"
                                    className="px-4"
                                    onClick={handleSubmit}
                                >
                                    Create Profile
                                </Button>
                            </div>

                        </Form>

                    </Card.Body>
                </Card>

            </Container>
        </div>
    )
}

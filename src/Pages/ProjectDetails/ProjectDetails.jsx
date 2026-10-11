import "./ProjectDetails.css"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {

    const [projectdetails, setProjectdetails] = useState({})
    const {id}= useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/projects/${id}`)
            .then((response) => {
                setProjectdetails(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id])

    return (
        <div className="pro-details-pg">
            <Card className="shadow border-0 rounded-4 overflow-hidden " id="pro-details-pg">

                <Card.Img
                    variant="top"
                    src={projectdetails.image}
                    style={{ height: "300px", objectFit: "cover" }}
                />

                <Card.Body className="p-4">

                    <Card.Title className="fs-2 fw-bold">
                        {projectdetails.title}
                    </Card.Title>

                    <Card.Text className="text-secondary">
                        {projectdetails.description}
                    </Card.Text>

                    <hr />

                    <h5 className="fw-bold">Technologies Used</h5>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                        {projectdetails.technologies?.map((tech,index)=>
                            <Badge className="p-2" key={index}>
                                {tech}
                            </Badge>
                        )}
                    </div>

                    <hr />

                    <h5 className="fw-bold">Key Features</h5>

                    <ul>
                        <li>User authentication</li>
                        <li>Responsive design</li>
                        <li>Project management</li>
                        <li>Search functionality</li>
                    </ul>

                    <hr />

                    <h5 className="fw-bold">Project Information</h5>

                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <p><strong>Developer:</strong>{projectdetails.author}</p>
                        </Col>

                        <Col xs={12} md={6}>
                            <p><strong>Status:</strong>{projectdetails.status}</p>
                        </Col>
                    </Row>

                    <h5 className="fw-bold">Project Links</h5>

                    <div className="d-flex flex-wrap gap-2 mt-3">
                       <a href={projectdetails.github}><Button variant="dark">GitHub</Button></a> 
                       <a href={projectdetails.liveDemo}><Button variant="primary">LiveDemo</Button></a> 
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}

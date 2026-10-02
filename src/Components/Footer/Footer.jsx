import React from 'react'
import "./Footer.css"
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <div className='footer'> 
        <Container>
            <Row>
                <Col xs={6} sm={6} lg={6} xl={3} xxl={3}>
                    <h3>  DevLaunch </h3> <hr /><br />
                    <p> Build. Connect. Launch.</p>  Build. Connect. Launch.<br />
                    <p>A platform for developers to showcase and discover projects.</p>
                </Col>
                <Col xs={6} sm={6} lg={6} xl={3} xxl={3}>
                    <h3>Explore </h3> <hr /> <br />
                    <p>Projects  </p> <br />
                    <p>Featured Projects</p> <br />
                    <p>Categories </p><br />
                    <p>Technologies </p>
                </Col>
                <Col xs={6} sm={6} lg={6} xl={3} xxl={3}>
                    <h3>Developers</h3> <hr /> <br />
                    <p>Find Developers</p><br />
                    <p> Developer Profiles</p> <br />
                    <p>About Us </p> <br />
                    <p>FAQ </p>
                </Col>
                <Col xs={6} sm={6} lg={6} xl={3} xxl={3}>
                    <h3>Connect</h3> <hr /> <br />
                    <p>GitHub </p><br />
                    <p>LinkedIn</p> <br />
                    <p>Contact</p> <br />
                    <p>Email</p>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col xs={6} sm={6} lg={6} xl={6} xxl={6}>
                <p>© 2026 CodeSphere </p>
                </Col>
                <Col xs={6} sm={6} lg={6} xl={6} xxl={6}>
                <p> Privacy Policy | Terms of Service</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
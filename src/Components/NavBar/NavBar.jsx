import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../assets/logo.png"
import "./NavBar.css"
import { FaUserCircle } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

export default function NavBar() {

  const location = useLocation();

  let placeholder = "";

  if (location.pathname === "/") {
    placeholder = "Search ...";
  }
  else if (location.pathname === "/developer") {
    placeholder = "Search Developer ...";
  }
  else if (location.pathname === "/project") {
    placeholder = "Search Project ...";
  }
   else if (location.pathname === "/explore") {
    placeholder = "Search ...";
  }
  else if (location.pathname === "/dashboard") {
    placeholder = "Search ...";
  }
  else if (location.pathname === "/login") {
    placeholder = "Search ...";
  }
  else if (location.pathname === "/register") {
    placeholder = "Search ...";
  }
  else if (location.pathname === "/developerprofile") {
    placeholder = "Search ...";
  }
  else if (location.pathname === "/projectdetails") {
    placeholder = "Search ...";
  }


  return (
    <Navbar expand="lg" >
      <Container fluid id='nav-container'>

        <Navbar.Brand href="#" >
          <img
            src={logo}
            alt="CodeSphere"
            width="70"
            height="70"
            />
          CodeSphere
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />

        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
        >
          <Offcanvas.Header closeButton className="nav-toggle-page">
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md" >
              CodeSPhere
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="nav-toggle-page">
            <Nav className="justify-content-end flex-grow-1 pe-3">

              <Nav.Link href="/" id='nav-navigations'>
                Home
              </Nav.Link>
              <hr />
              <Nav.Link href="/developer" id='nav-navigations'>
                Developer
              </Nav.Link>
              <hr />
              <Nav.Link href="/project" id='nav-navigations'>
                Projects
              </Nav.Link>
              <hr />
              <Nav.Link href="/explore" id='nav-navigations'>
                Explore
              </Nav.Link>
              <hr />
              <Nav.Link href="/login" id='nav-navigations'>
                  <FaUserCircle className="profile-icon"/>
              </Nav.Link>
            </Nav>

            <Form className="d-flex" >
              <Form.Control
                type="search"
                placeholder={placeholder}
                className="me-2"
                aria-label="Search"
                id='nav-search'
              />

              <Button variant="outline-secondary" id='nav-search-btn'>
                Search
              </Button>
            </Form>

          </Offcanvas.Body>
        </Navbar.Offcanvas>

      </Container>
    </Navbar>
  );
}

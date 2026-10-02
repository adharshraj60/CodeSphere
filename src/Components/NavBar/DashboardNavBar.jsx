import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/logo.png"
import { FaUserCircle } from "react-icons/fa";
import "./NavBar.css"

function NavBar() {
  return (
    <Navbar expand={false} >
      <Container fluid id='nav-container'>

        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="CodeSphere"
            width="70"
            height="70"
          />
          CodeSphere
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >

          <Offcanvas.Header closeButton className="nav-toggle-page">
            <Offcanvas.Title id="offcanvasNavbarLabel">
              CodeSPhere
            </Offcanvas.Title>
          </Offcanvas.Header>


          <Offcanvas.Body className="nav-toggle-page">
            <Form className="d-flex">

              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                id='nav-search'
              />

              <Button variant="outline-success" id='nav-search-btn'>
                Search
              </Button>

            </Form>
            <br />
            <Nav className="justify-content-end flex-grow-1 pe-3" >
              <Nav.Link href="/" id='nav-navigations'>
                Home
              </Nav.Link>
              <hr />
              <Nav.Link href="/developer" id='nav-navigations'>
                Developer
              </Nav.Link>
              <hr />
              <Nav.Link href="/Project" id='nav-navigations'>
                Projects
              </Nav.Link>
              <hr />
              <Nav.Link href="/explore" id='nav-navigations'>
                Explore
              </Nav.Link>
              <hr />
              <Nav.Link href="#" id='nav-navigations'>
                Settings
              </Nav.Link>
              <hr />
              <Nav.Link href="/login" id='nav-navigations'>
                Log-Out
              </Nav.Link>
              <hr />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

      </Container>
    </Navbar>
  );
}

export default NavBar;
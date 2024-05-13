import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">NoteHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav
          // className="me-auto my-2 my-lg-0"
          // style={{ maxHeight: "100px" }}
          // navbarScroll
          >
            <Nav.Link href="#action1">My Notes</Nav.Link>
            <NavDropdown title="Aditya Kachare" id="basic-nav-dropdown">
              <NavDropdown.Item href="">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

import HRK from './Assets/HRK.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NaviLink = () => {
  return (
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="HRK"
              src={HRK}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
          <Nav className="me-auto">
              <Nav.Link >Home</Nav.Link>
              <Nav.Link >Skills</Nav.Link>
              <Nav.Link >Projects</Nav.Link>
              <Nav.Link >Contact</Nav.Link>
          </Nav>
      </Navbar>
  )
}

export default NaviLink
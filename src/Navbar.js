import HRK from './Assets/HRK.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NaviLink = () => {
  return (
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand>
            <img
              alt="HRK"
              src={HRK}
              width="70"
              height="70"
              className="d-inline-block align-top"
              style={{borderRadius: '50px'}}
            />
          </Navbar.Brand>
        </Container>
          <Nav>
              <Nav.Link >Home</Nav.Link>
              <Nav.Link >Skills</Nav.Link>
              <Nav.Link >Projects</Nav.Link>
              <Nav.Link >Contact</Nav.Link>
          </Nav>
      </Navbar>
  )
}

export default NaviLink
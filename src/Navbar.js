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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
      </Navbar>
  )
}

export default NaviLink
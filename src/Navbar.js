import HRK from './Assets/HRK.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Github, Linkedin, FilePerson } from 'react-bootstrap-icons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Resume from './Assets/Resume.pdf'

const NaviLink = () => {

  const tooltipGithub = (props) => (
      <Tooltip id="link-tooltip" style={{color:'white'}} {...props}>Github</Tooltip>
  )
  const tooltipLinkedin = (props) => (
      <Tooltip id="link-tooltip" style={{color:'white'}} {...props}>LinkedIn</Tooltip>
  )
  const tooltipResume = (props) => (
      <Tooltip id="link-tooltip" style={{color:'white'}} {...props}>Resume</Tooltip>
  )

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
            <OverlayTrigger placement='bottom' overlay={tooltipGithub}>
              <a href="https://github.com/HyungKim0105" target="_blank" rel="noreferrer">
                <Github style={{color:'white',height:'30',width:'30',marginLeft:'0.5rem',marginRight:'0.5rem'}}/>
              </a>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={tooltipLinkedin}>
              <a href="https://www.linkedin.com/in/hyungkim0105" target="_blank" rel="noreferrer">
                <Linkedin style={{color:'white',height:'30',width:'30',marginRight:'0.5rem'}}/>
              </a>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={tooltipResume}>
              <a href={Resume} download="Resume.pdf">
                <FilePerson style={{color:'white',height:'30',width:'30',marginRight:'2rem'}}/>
              </a>
            </OverlayTrigger>
          </Nav>
      </Navbar>
  )
}

export default NaviLink
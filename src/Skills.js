import HTML5Logo from './Assets/HTML5_Badge.svg';
import CSSLogo from './Assets/Css-icon.svg';
import JavaScriptLogo from './Assets/JavaScript-logo.png';
import ReactLogo from './Assets/React-icon.png';
import BootStrapLogo from './Assets/Bootstrap-logo.png';
import PythonLogo from './Assets/Python-logo.png'
import GitLogo from './Assets/Git-Icon.png';
import GitHubLogo from './Assets/GitHub.png';
import Meta from './Assets/Meta-Front-End.png';
import PCAP from './Assets/Pcap.png';
import PCEP from './Assets/Pcep.png';
import GoogleIT from './Assets/GoogleIT.png';
import AwsCloud from './Assets/AWS-Cloud.png';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Skills = () => {
  return (
    <Container sytle={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center'}}>
      <Row style={{display: 'flex',justifyContent:'space-evenly'}}>
        <Card style={{height:'5rem',width:'7rem'}}>
          <img src={HTML5Logo} alt="HTML5Logo" />
          <p>HTML</p>
        </Card>
        <Card style={{height:'5rem',width:'7rem'}}>
          <img src={CSSLogo} alt="CSSLogo" />
          <p>CSS</p>
        </Card>
        <Card style={{height:'5rem',width:'7rem'}}>
          <img src={JavaScriptLogo} alt="JavaScriptLogo" />
          <p>JavaScript</p>
        </Card>
        <Card style={{height:'5rem',width:'7rem'}}>
          <img src={ReactLogo} alt="ReactLogo" />
          <p>React</p>
        </Card>
        <Card style={{height:'5rem',width:'7rem'}}>
          <img src={BootStrapLogo} alt="BootStrapLogo" />
          <p>BootStrap</p>
        </Card>
        <Card style={{height:'5rem',width:'7rem'}}>
          <img src={PythonLogo} alt="PythonLogo" />
          <p>Python</p>
        </Card>
        <Card style={{height:'5rem',width:'7rem'}}>
          <img src={GitLogo} alt="GitLogo" />
          <p>Git</p>
        </Card>
        <Card style={{height:'5rem',width:'7rem'}}>
          <img src={GitHubLogo} alt="GitHubLogo" />
          <p>GitHub</p>
        </Card>
      </Row>
      <Row style={{marginTop: '5rem', textAlign: 'center'}}>
        <h1>Certifications</h1>
      </Row>
      <Row style={{display: 'flex',justifyContent:'space-evenly', marginTop: '5rem'}}>
          <Card style={{height:'5rem',width:'7rem'}}>
            <img src={Meta} alt="Meta" />
            <p>Meta Front End</p>
          </Card>
          <Card style={{height:'5rem',width:'7rem'}}>
            <img src={PCAP} alt="PCAP" />
            <p>Python Certified Associate</p>
          </Card>
          <Card style={{height:'5rem',width:'7rem'}}>
            <img src={PCEP} alt="PCEP" />
            <p>Python Certified Entry</p>
          </Card>
          <Card style={{height:'5rem',width:'7rem'}}>
            <img src={GoogleIT} alt="GoogleIT" />
            <p>Google IT</p>
          </Card>
          <Card style={{height:'5rem',width:'7rem'}}>
            <img src={AwsCloud} alt="AwsCloud" />
            <p>AWS Cloud</p>
          </Card>
        </Row>
    </Container>
  )
}

export default Skills

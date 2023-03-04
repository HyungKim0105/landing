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
import Button from 'react-bootstrap/Button'

const Skills = () => {
  return (
    <Container sytle={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
      <Row style={{marginTop: '5rem', textAlign: 'center'}}>
        <h1>Skills</h1>
      </Row>
      <Row style={{display: 'flex',justifyContent:'space-evenly', marginTop: '5rem'}}>
        <Card style={{height:'15rem',width:'10rem', textAlign: 'center', border: 'none'}}>
          <Card.Img src={HTML5Logo} alt="HTML5Logo" style={{height: '8rem'}}/>
          <Card.Body>
            <Card.Title>HTML</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{height:'15rem',width:'10rem', textAlign: 'center', border: 'none'}}>
          <Card.Img src={CSSLogo} alt="HTML5Logo" style={{height: '8rem'}}/>
          <Card.Body>
            <Card.Title>CSS</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{height:'15rem',width:'10rem', textAlign: 'center', border: 'none'}}>
          <Card.Img src={JavaScriptLogo} alt="HTML5Logo"  style={{height: '8rem'}}/>
          <Card.Body>
            <Card.Title>JavaScript</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{height:'15rem',width:'10rem', textAlign: 'center', border: 'none'}}>
          <Card.Img src={ReactLogo} alt="HTML5Logo" style={{height: '8rem'}}/>
          <Card.Body>
            <Card.Title>React</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{height:'15rem',width:'10rem', textAlign: 'center', border: 'none'}}>
          <Card.Img src={BootStrapLogo} alt="HTML5Logo" style={{height: '8rem'}}/>
          <Card.Body>
            <Card.Title>BootStrap</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{height:'15rem',width:'10rem', textAlign: 'center', border: 'none'}}>
          <Card.Img src={PythonLogo} alt="HTML5Logo" style={{height: '8rem'}}/>
          <Card.Body>
            <Card.Title>Python</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{height:'15rem',width:'10rem', textAlign: 'center', border: 'none'}}>
          <Card.Img src={GitLogo} alt="HTML5Logo" style={{height: '8rem'}}/>
          <Card.Body>
            <Card.Title>Git</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{height:'15rem',width:'10rem', textAlign: 'center', border: 'none'}}>
          <Card.Img src={GitHubLogo} alt="HTML5Logo" style={{height: '8rem'}}/>
          <Card.Body>
            <Card.Title>GitHub</Card.Title>
          </Card.Body>
        </Card>
      </Row>
      <Row style={{ marginTop: '5rem', textAlign: 'center'}}>
        <h1>Certifications</h1>
      </Row>
      <Row style={{ display: 'flex',justifyContent:'space-evenly', marginTop: '5rem'}}>
          <Card style={{ height:'22rem', width:'11rem', border: 'none'}}>
            <Card.Img src={Meta} alt="Meta" />
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Title>Meta Front-End Developer Certificate</Card.Title>
            </Card.Body>
            <Button onClick={() => window.open('https://www.credly.com/badges/5c98a753-6a02-42d5-b2ec-1252cdc07aa6/public_url')}>Verify</Button>
          </Card>
          <Card style={{ height:'22rem',width:'11rem', border: 'none'}}>
            <Card.Img src={PCAP} alt="PCAP" />
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Title>PCAP</Card.Title>
              <Card.Text>Certified Associate in Python Programming</Card.Text>
            </Card.Body>
            <Button onClick={() => window.open('https://www.credly.com/badges/a4c12527-6769-4046-994e-015842616a02/public_url')}>Verify</Button>
          </Card>
          <Card style={{ height:'22rem', width:'11rem', border: 'none'}}>
            <Card.Img src={PCEP} alt="PCEP" />
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Title>PCEP</Card.Title>
              <Card.Text>Certified Entry Level Python Programmer</Card.Text>
            </Card.Body>
            <Button onClick={() => window.open('https://www.credly.com/badges/3e11e383-19c6-4514-af9f-039ab9451ae9/public_url')}>Verify</Button>
          </Card>
          <Card style={{ height:'22rem', width:'11rem', border: 'none'}}>
            <Card.Img src={GoogleIT} alt="GoogleIT" />
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Title>Google IT Support Certificate</Card.Title>
            </Card.Body>
            <Button onClick={() => window.open('https://www.credly.com/badges/be103cd0-b385-4225-b036-a54c5ec2a818/public_url')}>Verify</Button>
          </Card>
          <Card style={{ height:'22rem', width:'11rem', border: 'none'}}>
            <Card.Img src={AwsCloud} alt="AwsCloud" />
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Title>AWS Certified Cloud Practitioner</Card.Title>
            </Card.Body>
            <Button onClick={() => window.open('https://www.credly.com/badges/5bf1062c-f471-4c0a-8e81-3066d2307a56/public_url')}>Verify</Button>
          </Card>
        </Row>
    </Container>
  )
}

export default Skills

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

const Skills = () => {
  return (
    <div>
      <div>
        <img src={HTML5Logo} alt="HTML5Logo" />
        <p>HTML</p>
      </div>
      <div>
        <img src={CSSLogo} alt="CSSLogo" />
        <p>CSS</p>
      </div>
      <div>
        <img src={JavaScriptLogo} alt="JavaScriptLogo" />
        <p>JavaScript</p>
      </div>
      <div>
        <img src={ReactLogo} alt="ReactLogo" />
        <p>React</p>
      </div>
      <div>
        <img src={BootStrapLogo} alt="BootStrapLogo" />
        <p>BootStrap</p>
      </div>
      <div>
        <img src={PythonLogo} alt="PythonLogo" />
        <p>Python</p>
      </div>
      <div>
        <img src={GitLogo} alt="GitLogo" />
        <p>Git</p>
      </div>
      <div>
        <img src={GitHubLogo} alt="GitHubLogo" />
        <p>GitHub</p>
      </div>
      <div>
        <h1>Certifications</h1>
        <div>
          <div>
            <img src={Meta} alt="Meta" />
            <p>Meta Front End</p>
          </div>
          <div>
            <img src={PCAP} alt="PCAP" />
            <p>Python Certified Associate</p>
          </div>
          <div>
            <img src={PCEP} alt="PCEP" />
            <p>Python Certified Entry</p>
          </div>
          <div>
            <img src={GoogleIT} alt="GoogleIT" />
            <p>Google IT</p>
          </div>
          <div>
            <img src={AwsCloud} alt="AwsCloud" />
            <p>AWS Cloud</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

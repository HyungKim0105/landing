import './App.css';
import Home from './Home';
import Skills from './Skills'
import Contact from './Contact';
import Projects from './Projects';
import NaviLink from './Navbar';

function App() {
  return (
    <>
      <NaviLink />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

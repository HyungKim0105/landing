import Restaurant1 from './Assets/Restaurant1.jpg';
import Button from 'react-bootstrap/Button';



const Projects = () => {
  return (
    <div>
      <div>
        <img src={Restaurant1} alt="Restaurant1" />
      </div>
      <div>
        <div>
          <h1>Restaurant Landing Page</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, error.</p>
        </div>
        <div>
          <Button variant="outline-dark">Live</Button>
          <Button variant="outline-dark">Source</Button>
        </div>
      </div>
    </div>
  )
}

export default Projects
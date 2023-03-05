import Restaurant1 from './Assets/Restaurant1.png';
import Restaurant2 from './Assets/Restaurant2.png';
import Restaurant3 from './Assets/Restaurant3.png';
import Restaurant4 from './Assets/Restaurant4.png';
import Restaurant5 from './Assets/Restaurant5.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import HTML5 from './Assets/HTML5_Badge.svg'
import Figure from 'react-bootstrap/Figure'
import CSS from './Assets/Css-icon.svg';
import ReactIcon from './Assets/React-icon.png'
import Carousel from 'react-bootstrap/Carousel';

const Projects = () => {
  return (
    <Container style={{ width: '100%', display: 'flex', justifyContent: 'center', height: '100vh' }} id="project">
      <Card style={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center', border: 'none'}} >
        <h1>Projects</h1>
        <Row style={{ marginTop: '5rem', height: '50vh',display:'flex'}}>
          <Col style={{display: 'flex', alignItems:'center'}}>
            <Carousel fade variant="dark" style={{height:'25rem',width:'100%'}}>
              <Carousel.Item interval={2000}>
                <Card.Img src={Restaurant1} alt='Restaurant1'/>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Card.Img src={Restaurant2} alt='Restaurant2'/>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Card.Img src={Restaurant3} alt='Restaurant3'/>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Card.Img src={Restaurant4} alt='Restaurant4'/>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Card.Img src={Restaurant5} alt='Restaurant5'/>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col style={{display: 'flex', alignItems: 'center'}}>
            <Card.Body>
              <Card.Title as='h2' sytle={{}}>Restaurant Landing Page</Card.Title>
              <Card.Text as='p'>
                Mockup Korean Fried Chicken Restaurant Landing Page.
                Home page carousel and order page utilizes react hooks.
                Reservation page utilizes react hooks and react hook forms.
                contact page form validation was done using formik and yup.
              </Card.Text>
              <Figure style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '2rem', marginBottom: '2rem'}}>
                <Figure.Caption>Technology Used:</Figure.Caption>
                <Figure.Image src={HTML5} style={{ width: '2rem' }} />
                <Figure.Image src={CSS} style={{ width: '2rem' }} />
                <Figure.Image src={ReactIcon} style={{ width: '2rem' }} />
              </Figure>
              <Button style={{ width: '8rem', marginRight: '1rem', marginTop: '1rem'}} onClick={() => window.open('https://master.d1mjrxfvg9h7zs.amplifyapp.com/')}>Live</Button>
              <Button style={{ width: '8rem', marginLeft: '1rem', marginTop: '1rem'}} onClick={() => window.open('https://github.com/HyungKim0105/restaurant_home')}>Source Code</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default Projects
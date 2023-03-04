import HRK from './Assets/HRK.png'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Home = () => {
  return (
    <Container style={{ width: '100%', display: 'flex', justifyContent: 'center', height: '95vh' }}>
    <Card style={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center', border: 'none'}}>
      <Row >
        <Col>
          <Card.Img src={HRK} />
        </Col>
        <Col style={{display: 'flex', alignItems: 'center'}}>
          <Card.Body>
            <Card.Title as='h1' sytle={{}}>I am a Front End Developer</Card.Title>
            <Card.Text as='p'>
              From employee/business owner in retail and hospitality industry to following my passion into software engineering.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    </Container>
  )
}

export default Home
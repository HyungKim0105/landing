import HRK from './Assets/HRK.png'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Home = () => {
  return (
    <Container style={{ width: '100%', display: 'flex', justifyContent: 'center', height: '100vh' }}>
    <Card style={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center', border: 'none'}}>
      <Row >
        <Col>
          <Card.Img src={HRK} />
        </Col>
        <Col style={{display: 'flex', alignItems: 'center'}}>
          <Card.Body>
            <Card.Title as='h1' sytle={{}}>I am a Front End Developer</Card.Title>
            <Card.Text as='p'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    </Container>
  )
}

export default Home
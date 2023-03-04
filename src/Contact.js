import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const Contact = () => {
  return (
    <Container style={{width:'100%', height:'80vh', justifyContent:'center', display:'flex'}}>
      <Form style={{textAlign:'center'}}>
        <h1 style={{ textAlign:'center' }}>Contact</h1>
        <Form.Group  className="mb-3" controlId="formBasicEmail" style={{width:'50rem', marginTop:'2rem'}}>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{width:'50rem', marginTop:'2rem'}}>
          <Form.Label >Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{width:'50rem', height:'25rem', marginTop:'2rem'}}>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" placeholder="Enter message..." rows={12} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Contact
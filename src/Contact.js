import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9ohwozh', 'template_jztdlyz', form.current, 'IpSbLzWWERc7wltTz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <Container style={{width:'100%', height:'80vh', justifyContent:'center', display:'flex',marginBottom:'3rem'}} id="contact">
      <Form style={{textAlign:'center'}} ref={form} onSubmit={sendEmail} id="contactForm">
        <h1 style={{ textAlign:'center' }}>Contact</h1>
        <Form.Group  className="mb-3" controlId="formBasicEmail" style={{width:'50rem', marginTop:'2rem'}}>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="user_name"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{width:'50rem', marginTop:'2rem'}}>
          <Form.Label >Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="user_email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{width:'50rem', height:'25rem', marginTop:'2rem'}}>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" placeholder="Enter message..." rows={12} name="message"/>
        </Form.Group>
        <Button variant="primary" type="submit" value="Send">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Contact
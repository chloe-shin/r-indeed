import React, {useState} from 'react'
import {Container, Row, Col, Button, Form} from 'react-bootstrap'

export default function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const onSubmit = (e) => {
     e.preventDefault()
     props.onSubmit(email, password)
    }
    console.log ('email', email);
    console.log ('password', password);

    return (
     <Container fluid>
     <Row>
      <Col className= "loginCol">
     <Form className="loginForm">
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
             onChange = {(e)=> setEmail (e.target.value)} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
            onChange = {(e)=> setPassword (e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick= {onSubmit}>
            Submit
        </Button>
        </Form>
      </Col>

     
     </Row>
     
     </Container>
    )
}

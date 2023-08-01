import './SignIn.css'
import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import image from '../img/DRIP_14.png';
import { Col, Container, Row } from 'react-bootstrap';
import Navigbar from './Navigbar';



function SignIn() {
    return (

        <Container fluid style={{ background: 'var(--grad, linear-gradient(135deg, #6D2845 0%, #AC426E 100%)' }}>
            {/* <Navigbar /> */}
            <Row className='align-items-center justify-content-center' style={{ height: '100vh' }} >

                <Col md={5}>
                    <Card style={{ background: 'rgba(213, 183, 243, 0.45)', borderRadius: '20px', padding: '25px', }}>
                        <div>
                            <Card.Body >
                                <Card.Title className='card-title'>Sign In</Card.Title>
                                <Form.Control style={{ padding: '12px' }} type="text" placeholder="Username" />
                                <br></br>
                                <Form.Control style={{ padding: '12px' }}
                                    type="password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    placeholder='Password'
                                />
                                <br></br>
                                <Form.Group className='card-text'>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <Form.Check style={{ fontSize: '15px' }}
                                                required
                                                label="Remember me"
                                                feedback="You must agree before submitting."
                                                feedbackType="invalid"
                                            />
                                        </div>

                                        <div style={{ textDecoration: 'underline', fontSize: '15px' }}>
                                            <a> Forgot password?</a>
                                        </div>
                                    </div>
                                </Form.Group>

                                <br></br>

                                <div className="d-grid gap-2" >

                                    <Button href="dashboard" className='card-button' style={{ padding: '12px' }}>Log in</Button>
                                </div>
                                <br></br>
                            </Card.Body>
                        </div>
                    </Card>

                </Col>

                <Col md={5}>
                    <img className='d-none d-md-block' style={{ width: '600px' }} src={image} />

                </Col>
            </Row>

        </Container>

    )
}

export default SignIn
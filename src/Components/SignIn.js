import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { Col, Container, Row, Button } from 'react-bootstrap';
import Navigation from './Navigation';

const Login = () => {

    return (
        <>
            <Navigation />
            <div className='registerMainDiv'>
                <Container>
                    <Row>
                        <Col lg={{ span:6 }}>
                            <div className=''>
                                <h2 className='heading1'>
                                    Sign In to <br />
                                    Recharge Direct
                                </h2>
                                <h4 >
                                    If you don't have an account<br />
                                    You can <Link to='/login' >Register here!</Link>
                                </h4>
                            </div>
                        </Col>
                        <Col lg={{ offset: 2 }} style={{ textAlign: 'center' }} >
                            {/* <h2>sign in</h2> */}
                            <form >
                                <input className='inputField'
                                    type='text'
                                    id='user_name'
                                    name='username'
                                    placeholder='Enter email or phone number'
                                />
                                <input className='inputField'
                                    type='password'
                                    id='user_password'
                                    name='password'
                                    placeholder='Password'
                                    style={{ marginBottom: 0 }}
                                />
                                <Link>
                                    <p style={{ fontSize: 'small', textAlign: 'end' }} > Recovery Password </p>                                
                                </Link>
                                <Button className='btnSubmit' size="lg" block >
                                    Sign In
                            </Button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Login
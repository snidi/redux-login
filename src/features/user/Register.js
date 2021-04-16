import React, { Fragment, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { signupUser, userSelector, clearState } from './UserSlice'
import { useHistory } from 'react-router-dom'
import Navigation from '../../Components/Navigation';
import { Container, Row, Col, Button } from 'react-bootstrap';
import toast from 'react-hot-toast';

const Register = () => {

    // const dispatch = useDispatch()
    // const { register, errors, handleSubmit } = useForm()

    // const history = useHistory()

    // const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    //     useSelector
    // )
    // const onSubmit = (data) => {
    //     dispatch(signupUser(data))
    // }

    // useEffect(() => {
    //     return () => {
    //         dispatch(clearState())
    //     }
    // }, [])

    // useEffect(() => {
    //     if(isSuccess){
    //         dispatch(clearState())
    //         history.push('/dashboard')
    //     }
    //     if(isError){
    //         toast.error(errorMessage)
    //         dispatch(clearState())
    //     }
    // }, [isSuccess, isError])

    return (
        <>
            <Navigation />
            <div className='registerMainDiv'>
            <Container>
                <Row>
                    <Col >
                        <div className=''>                            
                            <h2 className='heading1'>
                                Register here to see all offers
                            </h2>
                            <h4>
                                Already have an account? <br />
                                <Link to='/login' >Sign In</Link>
                            </h4>
                        </div>
                    </Col>
                    <Col lg={{ span:4, offset: 2 }} style={{ textAlign: 'center' }} >
                        <div>
                            {/* <h2>Register</h2> */}
                            {/* <form onSubmit = {handleSubmit} method = 'POST' > */}
                            <form  >
                                <input className='inputField'
                                    placeholder='Name'
                                    type='text'
                                    id='user_name'
                                    name='userName'
                                /><br />
                                <input className='inputField'
                                    placeholder='Email'
                                    type='email'
                                    id='user_email'
                                    name='userEmail'
                                /><br />
                                <input className='inputField'
                                    placeholder='Password'
                                    type='password'
                                    id='user_password'
                                    name='userPassword'
                                /><br />
                                <Button className='btnSubmit' size="lg" block >
                                    Register
                                </Button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}

export default Register
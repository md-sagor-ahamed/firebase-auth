import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/form';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom';
import { auth } from './utils/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth'


export default function Register() {

    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const user = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            console.log(user)
            navigate('/login')
        }catch (err){
            console.log(err.message)
        }
        console.log(userInfo)
    }

  return (
    <Container>
        <h2 className='text-center mt-2 mb-5'>Registration</h2>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control name="firstName" type="text" onChange={handleChange} placeholder="Enter First Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control name="lastName" type="text" onChange={handleChange} placeholder="Enter Last Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control name="email" type="email" onChange={handleChange} placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control name="password" type="password" onChange={handleChange} placeholder="Password" />
    </Form.Group>
        <Button  variant="primary" type="submit">Submit</Button>
  </Form>
    </Container>
  )
}

import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import { Form, Button, Card, Alert } from "react-bootstrap"
import CenteredContainer from "../CenteredContainer"

const RegisterPage = (props) =>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfrimPassword] = useState('')
    const [error, setError] = useState('')

    useEffect(() =>{
        if(localStorage.getItem('authToken'))
        props.history.push('/')
    },[props.history])

    const registerHandler = async (e) => {
        e.preventDefault();

        const config = {
            header : {"Content-Type" : "appication/json",}
        }

        if(password !== confirmPassword){
            setPassword('')
            setConfrimPassword('')
            setTimeout(() => {
                setError('')
            }, 5000)
            return(setError("Passwords Doesn't Match"))
        }

        try{
            const {data} = await axios.post(
                'api/auth/register' , {
                    name,
                    email,
                    password,
                }, config)

                localStorage.setItem("authToken", data.token)
                props.history.push('/')

        } catch(err){
            setError(err.response.data.error)
            setTimeout(() => {
                setError('')
            }, 5000)
        }
    }

    return(
        <CenteredContainer>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Register</h2>
                {error && <Alert>{error}</Alert>}  
                <Form form method="post" onSubmit={registerHandler}>
                    <Form.Group id = 'name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' required  placeholder="Please Enter Your Name" value={name} onChange = {(e) => setName(e.target.value)}  />
                    </Form.Group>
                    <Form.Group id = 'email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' required  placeholder="Please Enter Your Email" value={email} onChange = {(e) => setEmail(e.target.value)}  />
                    </Form.Group>
                    <Form.Group id = 'password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' required  placeholder="Please Enter Your Password" value={password} onChange = {(e) => setPassword(e.target.value)}  />
                    </Form.Group>
                    <Form.Group id = 'confirmPassword'>
                        <Form.Label>Confrim Password</Form.Label>
                        <Form.Control type='password' required  placeholder="Please Enter Your Password" value={confirmPassword} onChange = {(e) => setConfrimPassword(e.target.value)}  />
                    </Form.Group>
                    <Button className="w-100" type="submit">
                        Log In
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
           Already Have an account? <Link to="/login">Login</Link>
        </div>
        </CenteredContainer>
    )
};

export default RegisterPage;
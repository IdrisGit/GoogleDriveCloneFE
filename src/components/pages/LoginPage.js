import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import { Form, Button, Card, Alert } from "react-bootstrap"
import CenteredContainer from "../CenteredContainer"

const LoginPage = (props) =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    useEffect(() =>{
        if(localStorage.getItem('authToken')){
            props.history.push('/')
        }
    },[props.history])

    const loginHandler = async (e) => {
        e.preventDefault();

        const config = {
            header : {"Content-Type" : "appication/json",}
        }

        try{
            const {data} = await axios.post(
                '/api/auth/login' , {
                    email,
                    password,
                }, config)

                localStorage.setItem("authToken", data.token)
                props.history.push('/')

        } catch(error){
            setError(error)
            setTimeout(() => {
                setError('')
            }, 5000)
        }
    }

    return(
        <CenteredContainer>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                {error && <Alert>{error}</Alert>}  
                <Form form method="post" onSubmit={loginHandler}>
                    <Form.Group id = 'email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' required  placeholder="Please Enter Your Email" value={email} onChange = {(e) => setEmail(e.target.value)}  />
                    </Form.Group>
                    <Form.Group id = 'password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' required  placeholder="Please Enter Your Password" value={password} onChange = {(e) => setPassword(e.target.value)}  />
                    </Form.Group>
                    <Button className="w-100" type="submit">
                        Log In
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Need an account? <Link to="/register">Register</Link>
        </div>
        </CenteredContainer>
    )
};

export default LoginPage;
import React from "react";
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useHistory } from "react-router-dom"

const NavbarComponent = () => {
    const history = useHistory()
    useEffect(() => {
        if(!localStorage.getItem('authToken')){
            history.push('/login')
        }
    }, [history])
    const logoutHandler = () => {
        localStorage.removeItem('authToken')
        history.push('/login')
    }
    return(
        <Navbar bg='light' expand='sm'>
            <Navbar.Brand as={Link} to ='/'>
                Google Drive Clone
            </Navbar.Brand>
            <Nav>
            <button type="button" onClick={logoutHandler}>Log Out</button>
            </Nav>
        </Navbar>
    )
};

export default NavbarComponent;
import React from "react";
import { Container } from "react-bootstrap";
import AddFileButton from "./AddFileButton";
import Navbar from "./Navbar";

const Dashboard = () => {
    return(
    <>
        <Navbar />
        <Container fluid>
        <div className="float-right d-flex align-items-center">
            <AddFileButton />
        </div>

        </Container>
    </>
    );
};

export default Dashboard;
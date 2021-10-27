import React from 'react';
import {Navbar, Nav,NavDropdown,Container,Button } from 'react-bootstrap'
import '../Component2/AbujaNavbar.css';

import { Link } from 'react-router-dom';



const AbujaNavbar = ()=>{


    return(
        <div  className="AbujaNavbar">

<Navbar bg="myLightblue" expand="sm" fixed="top">
  <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto">
        <Nav.Link className="nav-link" href="/abujahome">Home</Nav.Link>
        <Nav.Link className="nav-link" href="/about">About</Nav.Link>
      
        
      </Nav>
    
    </Navbar.Collapse>
    
  </Container>
</Navbar>
        </div>
    );
} 
export default AbujaNavbar;



















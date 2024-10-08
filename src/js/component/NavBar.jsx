import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
	return (
	<div className="container-fluid">
	  <Navbar expand="lg" className="bg-body-tertiary bg-secondary fw-bold">
		<Container>
		  <Navbar.Brand href="#home" className="navbar-brand text-white">Start Bootstrap</Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
		  <Navbar.Collapse id="basic-navbar-nav">
			<Nav className="me-auto">
			  <Nav.Link href="#home">Home</Nav.Link>
			  <Nav.Link href="#about">About</Nav.Link>
			  <Nav.Link href="#service">Service</Nav.Link>
			  <Nav.Link href="#contact">Contact</Nav.Link>
			</Nav>
		  </Navbar.Collapse>
		</Container>
	  </Navbar>
	  </div>	  
	);
  }
  export default NavBar;
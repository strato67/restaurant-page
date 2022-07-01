import React, {Component} from "react";
import { Navbar,Nav, Container} from "react-bootstrap";
import './styles/navbar.css';
import Icon from './imgs/icon.png';

const NavbarComp = ()=>{
    return(
      <Navbar bg="dark" expand="lg" variant="dark" className="py-4 navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Icon} className='icon' height={48}/>
            Pizza Place
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" defaultActiveKey='#home'>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Menu</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

};

export default NavbarComp;
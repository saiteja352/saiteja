import React from "react";
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './h2.css';

class Headers extends React.Component{
    render(){
        return(
            <div id="main">
        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand >F-Tech</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link id="l1" to='/'>Home</Link>
      <Link id="l3" to='/aboutus'>About Us</Link>
      <Link id="l2" to="/contactus">Contact Us</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

            </div>
        )
    }
}

export default Headers
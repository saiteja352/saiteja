import React from "react";
import { Jumbotron,Container } from 'react-bootstrap';
import './h1.css';

class Header extends React.Component{
    render(){
        return(
                 <Jumbotron fluid id="m1">
                     <Container>
                       <h1 id="title">FRIENDS TECHNOLOGIES</h1>
                       <h4 id="sub">
                         started by indolent minds
                       </h4>
                      </Container>
                  </Jumbotron>
        )
    }
}
export default Header
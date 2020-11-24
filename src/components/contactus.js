import React from "react";
import logo from './ccare2.jpg';
import './cus.css'
import { Card,Button} from 'react-bootstrap';
import Nform from './nform';

class Contactus extends React.Component{
    clickhandler=()=>{
        document.write("welcome to chat page")
    }
    render(){
        return(
            <div id="es1">
            <div id="ss">
                <img src={logo} alt="nene" width="100%" />
                <div className="tb">
                    <h1 id="k1">Contact Us</h1>
                    <p id="k2">We Are Here To Help You</p>
                </div>
            </div>
                <Card className="text-center">
                <Card.Body>
                <Card.Text>
                <i className="fas fa-phone-square teja"></i><br/>
                  <h3>BY PHONE</h3>
                  <h5>(monday to Friday, 9am to 6pm)</h5><br/>
                 <h6> Htderabad Toll-Free:
                  +91 7036673128</h6>
                </Card.Text>
                </Card.Body>
                <hr/>
                <Card.Body>
                <Card.Text>
                <i className="fas fa-comments deo"></i><br/>
                <h3>LIVE CHAT</h3>
                  <h5>Just send us your questions or concerns by starting a new case and we will give you the help you need.</h5>
                </Card.Text>
                <Button onClick={this.clickhandler} variant="primary">START CHAT</Button>
                </Card.Body>
                </Card>
                <Nform/>
                <hr/>

            </div>
        )
    }
}

export default Contactus
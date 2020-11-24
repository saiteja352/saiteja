import React from "react";
import { Form,Row,Col,Button } from 'react-bootstrap';
import './nfm.css';


class Nform extends React.Component{
  
  submithandler=()=>{
    alert("you submited successfully")
  }
  render(){
    return(
      <div>
         <h1  id="n1">Contact Us</h1>
                <h5 id="n2">Please fill this form in a decent manner</h5><br/>
      <Form onSubmit={this.submithandler}>
              <Row>
              <Col>
              <Form.Label>FULL NAME:</Form.Label>
              <Form.Control type="text" placeholder="FULL NAME" required />
              </Col>
              <Col>
               <Form.Label>DATE OF BIRTH:</Form.Label>
               <Form.Control type="date" placeholder="DATE OF BIRTH" required/>
             </Col>
               
             </Row>
             <Row>
              <Col>
              <Form.Label>EMAIL:</Form.Label>
              <Form.Control type="email" placeholder="EMAIL" required />
              </Col>
               <Col>
               <Form.Label>MOBILE NUMBER:</Form.Label>
               <Form.Control type="tel" placeholder=" MOBILE NUMBER" required/>
             </Col>
             </Row>
             <Row>
              
              <Col>
               <Form.Label>COLLEGE NAME:</Form.Label>
               <Form.Control type="text" placeholder="COLLEGE NAME" required/>
             </Col>
              <Col>
              <Form.Label>BRANCH:</Form.Label>
                  
                  <Form.Control as="select" required>
                     <option>Choose...</option>
                      <option>MECHANICAL</option>
                     <option>CSE</option>
                     <option>ECE</option>
                     <option>EEE</option>
                      <option>IT</option>
                      <option>CIVIL</option>
                      <option>AERO</option>
                      <option>MAINING</option>
                    </Form.Control >
              </Col>
             </Row>
             <Row>
             <Col>
              <Form.Label>PASSED OUT YEAR:</Form.Label>
                  
                  <Form.Control as="select" required>
                     <option>Choose...</option>
                      <option>2017</option>
                     <option>2018</option>
                     <option>2019</option>
                     <option>2020</option>
                      <option>2021</option>
                    </Form.Control >
              </Col>
              <Col>
              <Form.Label>STATE:</Form.Label>
              <Form.Control type="text" placeholder="STATE" required />
              </Col>
             </Row>
             <Row>
             <Col>
              <Form.Label>CITY:</Form.Label>
              <Form.Control type="text" placeholder="CITY" required />
              </Col>
             <Col>
               
               <Form.Label>PIN CODE:</Form.Label>
               <Form.Control type="postal" placeholder="PIN CODE" required/>
             </Col>
             </Row>
             <Button id="ss" variant="primary" type="submit" >
               Submit
            </Button>
      </Form>
      </div>

    )
  }
}

export default Nform
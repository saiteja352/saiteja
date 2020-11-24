import React from "react";
import sb1 from './digi1.jpeg';
import sb2 from './digi2.jpeg';
import sb3 from './digi3.jpeg';
import {Card,CardColumns} from 'react-bootstrap'
import './hme.css'
class Home extends React.Component{
    render(){
        return(
            <div id="tst">
                <CardColumns>
  <Card>
    <Card.Img variant="top" src={sb1} />
    <Card.Body>
      <Card.Title>FRIENDS TECHNOLOGIES</Card.Title>
      <Card.Text id="nc1">
        Ideate, Design and Develop<br/>
        <br/>
        Powered by Imagination,<br/>
        Inspired by innovation. 
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Any time is a good time to start a company.<br/>
        What is now proved was once only imagined.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Friends Technology <cite title="Source Title">Team</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
    <Card.Img variant="top" src={sb2} />
    <Card.Body>
      <Card.Title>Focous on latest technologies</Card.Title>
      <Card.Text>
        In our team we concentrate on working with latest technologies to satisfy end users.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <pre>-- Friends Technology Team</pre>
    </Card.Footer>
  </Card>
  <Card bg="primary" text="white" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Chase the vision,not the money;the money will end up following you.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted" id="fm">
          Friends Technologies  <cite title="Source Title">Team</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card className="text-center">
    <Card.Body>
      <Card.Title>Inspired!</Card.Title>
      <Card.Text>
        If you don't build your dreams, someone else will hire you to build theirs..{' '}
      </Card.Text>
      <Card.Text>
        <pre>--Friends Technology Team</pre>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img src={sb3} />
  </Card>
  <Card className="text-right">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Quality and intime delivery<br/>
        <br/>
        we are committed to providing you quality product at reasonable and afforable pricing with quality and in-time delivery.
        
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Friends Technologies <cite title="Source Title">Team</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Fullfill customer needs</Card.Title>
      <Card.Text>
        Every member of our team work together to satisy the customer needs and to provide clients with top quality products.
      </Card.Text>
      <Card.Text>
        <pre>--Friends Technologies Team</pre>
      </Card.Text>
    </Card.Body>
  </Card>
</CardColumns>
               
            </div>
        )
    }
}

export default Home
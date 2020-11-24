import React from "react";
import s1 from './f1.jpg';
import s2 from './san1.jpeg';
import rs from './hero1.jpg';
import rs1 from './bro1.jpg';
import rs2 from './bro2.jpg';
import rs3 from './suri.jpg';
import { Card,CardGroup} from 'react-bootstrap';
import "./abt.css";

class Aboutus extends React.Component{
    render(){
        return(
            <div id="es">
                        <Card id="man">
                        <Card.Body>
                            <h1>OUR STORY</h1>
                            <h6>Just over a year ago, we became fascinated by the idea of discoverng the world through someone else's eyes.We form a team and started our startup, the main aim of our company is build a quality websites for both desktop and mobile applications. And we give a chance to every fresher work with us and prove themselves.</h6></Card.Body>
                         </Card>
                      <CardGroup id="prn">
                        <Card>
                        <Card.Img variant="top" src={rs} />
                        <Card.Body>
                        <Card.Title>MEET SAITEJA</Card.Title>
                        <Card.Text>
                        I have 1.5 years of experience in such fields as javascript, html, css, jQuery. Among the js frameworks is React.js(Redux), with i feel very comfortable. i develop websites and web applications.
                        </Card.Text>
                        </Card.Body>
                       </Card>
                       <Card>
                       <Card.Img variant="top" src={s2} />
                       <Card.Body>
                       <Card.Title>MEET SANDEEP</Card.Title>
                       <Card.Text>
                       I have 1.5 years of experience in java and spring framework, i can write well desigined, testable, efficient code, i can design and developing high-volume, low-latency applications for mission-critical systems and delivering high-availability and performance.{' '}
                       </Card.Text>
                       </Card.Body>
                    </Card>
                   <Card>
                   <Card.Img variant="top" src={s1} />
                   <Card.Body>
                   <Card.Title>MEET SRIDHAR</Card.Title>
                   <Card.Text>
                   I have 1 year of experience in data base, i can develop high quality database solutions , implement and optimize stored procedures and functions using T-SQL. I can review and interpret ongoing business report requirements.
                   </Card.Text>
                  </Card.Body>
                 </Card>
                 </CardGroup>
                     <CardGroup>
                      <Card>
                        <Card.Img variant="top" src={rs1} />
                        <Card.Body>
                        <Card.Title>MEET RAVITEJA</Card.Title>
                        <Card.Text>
                        I have 1.5 years of experience in such fields as javascript, html, css, jQuery. Among the js frameworks is React.js(Redux), with i feel very comfortable. i develop websites and web applications.
                        </Card.Text>
                        </Card.Body>
                       </Card>
                       <Card>
                       <Card.Img variant="top" src={rs2} />
                       <Card.Body>
                       <Card.Title>MEET VIVEK</Card.Title>
                       <Card.Text>
                       I have 1.5 years of experience in java and spring framework, i can write well desigined, testable, efficient code, i can design and developing high-volume, low-latency applications for mission-critical systems and delivering high-availability and performance.{' '}
                       </Card.Text>
                       </Card.Body>
                    </Card>
                   <Card>
                   <Card.Img variant="top" src={rs3} />
                   <Card.Body>
                   <Card.Title>MEET SURESH </Card.Title>
                   <Card.Text>
                   I have 1 year of experience in data base, i can develop high quality database solutions , implement and optimize stored procedures and functions using T-SQL. I can review and interpret ongoing business report requirements.
                   </Card.Text>
                  </Card.Body>
                 </Card>
                 </CardGroup>
            </div>
        )
        
    }
    
}

export default Aboutus
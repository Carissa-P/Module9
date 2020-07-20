import React from 'react';
import {CardDeck, Card, Button} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import Find from './Find'
import Help from './Help'
import '../App.css'
import Navigation from './Navigation';
const Advanced = () =>{
    return(
        <div>
      <Navigation/>
        <div className ="container">
        <Find/>
        <div className = "left">
        <Link to="/Beginner" className="btn btn-secondary">Beginner</Link>{' '}
        <Link to="/Advanced" className="btn btn-dark">Advanced</Link>{' '}
        <Link to="/Classes" className="btn btn-secondary">Both</Link>{' '}
        <Help/>

        <p></p>
        <Link to="/AdvancedBallet" className="btn btn-secondary">Ballet</Link>{' '}
        <Link to="/AdvancedLyrical" className="btn btn-secondary">Lyrical</Link>{' '}
        <Link to="/AdvancedAcro" className="btn btn-secondary">Acro</Link>{' '}
        <Link to="/Classes" className="btn btn-dark">All</Link>{' '}
        
        <p></p>
        </div>

        <CardDeck>
        <Card>
        <div className = "pink">
          <Card.Img variant="top" src={require("./images/AdvBallet.png")}  />
          <Card.Body>
            <Card.Title>Advanced Ballet</Card.Title>
            <Card.Text>
            This lesson will teach dancers advanced moves such as the pirouette, grand-plie and saute.{' '}
            </Card.Text>
            <Button variant="secondary">Start Lesson</Button>
          </Card.Body>
          </div>

        </Card>

        <Card>
        <div className = "pink">
          <Card.Img variant="top" src={require("./images/JazzAdv.jpg")} />
          <Card.Body>
            <Card.Title>Advanced Lyrical</Card.Title>
            <Card.Text>
            This lesson will teach dancers advanced moves such as the fan kick, split leap and swish split.{' '}
            </Card.Text>
            <Button variant="secondary">Start Lesson</Button>
          </Card.Body>
          </div>

        </Card>
        
        <Card>
        <div className = "pink">
          <Card.Img variant="top" src={require("./images/AdvAcro.png")}/>
          <Card.Body>
            <Card.Title> Advanced Acro</Card.Title>
            <Card.Text>
            This lesson will teach dancers advanced moves such as the front tuck, hand spring and back tuck.{' '}
            </Card.Text>
            <Button variant="secondary">Start Lesson</Button>
          </Card.Body>
          </div>

        </Card>
      </CardDeck>

        </div>
        </div>
    )
}

export default Advanced;



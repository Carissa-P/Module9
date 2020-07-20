import React from 'react';
import {CardDeck, Card, Button, Popover, OverlayTrigger} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import './button.css'
import Find from './Find'
import '../App.css'
import Navigation from './Navigation';

const Beginner = () =>{
    return(
      <div><Navigation/>
        <div className ="container">
        <Find/>
        <div className = "left">
        
        <Link to="/Beginner" className="btn btn-dark">Beginner</Link>{' '}
        <Link to="/Advanced" className="btn btn-secondary">Advanced</Link>{' '}
        <Link to="/Classes" className="btn btn-secondary">Both</Link>{' '}
        <Help/>

        <p></p>
        <Link to="/BeginnerBallet" className="btn btn-secondary">Ballet</Link>{' '}
        <Link to="/BeginnerLyrical" className="btn btn-secondary">Lyrical</Link>{' '}
        <Link to="/BeginnerAcro" className="btn btn-secondary">Acro</Link>{' '}
        <Link to="/Beginner" className="btn btn-dark">All</Link>{' '}
        
        <p></p>
        </div>

        <CardDeck>
        <Card>
        <div className = "pink">
          <Card.Img variant="top" src={require("./images/BalletBegin.png")} />
          <Card.Body>
            <Card.Title>Beginner Ballet</Card.Title>
            <Card.Text>
            This lesson will teach dancers beginner moves such as the demi-plie, tendu, and 1st through 5th position. {' '}
            </Card.Text>
            <Button variant="secondary">Start Lesson</Button>
          </Card.Body>
          </div>
        </Card>

        <Card>
        <div className = "pink">
          <Card.Img variant="top" src={require("./images/JazzBeginner.png")} />
          <Card.Body>
            <Card.Title>Beginner Lyrical</Card.Title>
<Card.Text>
            This lesson will teach dancers beginner moves such as the sashay, pivot step and the step ball change. {' '}
            </Card.Text>
            <Button variant="secondary">Start Lesson</Button>
          </Card.Body>
          </div>
              
        </Card>
        
        <Card>
        <div className = "pink">
          <Card.Img variant="top" src={require("./images/Acro.png")}/>
          <Card.Body>
            <Card.Title> Beginner Acro</Card.Title>
            <Card.Text>
            TThis lesson will teach dancers beginner moves such as the cartweel, back walkover and round-off.{' '}
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

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Popover right</Popover.Title>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Content>
  </Popover>
);

const Help = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button className ="button button5" variant="outline-dark">?</Button>
  </OverlayTrigger>
);

export default Beginner;



import React from 'react';
import {CardDeck, Card, Button} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import Find from './Find';
import Help from './Help';
import '../App.css'
import Navigation from './Navigation';


const BeginnerBallet = () =>{
    return(
      <div><Navigation/>
        <div className ="container">
        <Find/>
        <div className = "left">
 
        <Link to="/Beginner" className="btn btn-dark">Beginner</Link>{' '}
        <Link to="/AdvancedBallet" className="btn btn-secondary">Advanced</Link>{' '}
        <Link to="/BothBallet" className="btn btn-secondary">Both</Link>{' '}
        <Help/>

        <p></p>
        <Link to="/BeginnerBallet" className="btn btn-dark">Ballet</Link>{' '}
        <Link to="/BeginnerLyrical" className="btn btn-secondary">Lyrical</Link>{' '}
        <Link to="/BeginnerAcro" className="btn btn-secondary">Acro</Link>{' '}
        <Link to="/Beginner" className="btn btn-secondary">All</Link>{' '}
        
        
        <p></p>
        </div>

        
        <Card style={{ width: '18rem' }}>
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
        </div>
        </div>
    )
}

export default BeginnerBallet;



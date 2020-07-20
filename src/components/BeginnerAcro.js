import React from 'react';
import {Card, Button} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import Find from './Find'
import Help from './Help'
import '../App.css'
import Navigation from './Navigation';

const BeginnerAcro = () =>{
    return(
      <div><Navigation/>
        <div className ="container">
        <Find/>
        <div className = "left">

        <Link to="/BeginnerAcro" className="btn btn-dark">Beginner</Link>{' '}
        <Link to="/AdvancedAcro" className="btn btn-secondary">Advanced</Link>{' '}
        <Link to="/BothAcro" className="btn btn-secondary">Both</Link>{' '}
        <Help/>

        <p></p>
        <Link to="/BeginnerBallet" className="btn btn-secondary">Ballet</Link>{' '}
        <Link to="/BeginnerLyrical" className="btn btn-secondary">Lyrical</Link>{' '}
        <Link to="/BeginnerAcro" className="btn btn-dark">Acro</Link>{' '}
        <Link to="/Beginner" className="btn btn-secondary">All</Link>{' '}
        
        <p></p>
        </div>

   
        <Card style={{ width: '18rem' }}>
        <div className = "pink">
          <Card.Img variant="top" src={require("./images/Acro.png")} />
          <Card.Body>
            <Card.Title>Beginner Acro</Card.Title>
            <Card.Text>
            TThis lesson will teach dancers beginner moves such as the cartweel, back walkover and round-off.{' '}
          </Card.Text>
            <Button variant="secondary">Start Lesson</Button>
          </Card.Body>
          </div>
        </Card>  

        </div>
        </div>
    )
}
export default BeginnerAcro;



import React from 'react';
import {Card, Button, CardColumns} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import Find from './Find';
import Help from './Help';
import '../App.css';
import Navigation from './Navigation';

const AdvancedLyrical = () =>{
    return(
        <div><Navigation/>
        <div className ="container">
        <Find/>
        <div className = "left">

        <Link to="/Beginner" className="btn btn-secondary">Beginner</Link>{' '}
        <Link to="/Advanced" className="btn btn-dark">Advanced</Link>{' '}
        <Link to ="/BothLyrical" className="btn btn-secondary">Both</Link>{' '}
        <Help/>

        <p></p>
       
        <Link to="/AdvancedBallet" className="btn btn-secondary">Ballet</Link>{' '}
        <Link to="/AdvancedLyrical" className="btn btn-dark">Lyrical</Link>{' '}
        <Link to="/AdvancedAcro" className="btn btn-secondary">Acro</Link>{' '}
        <Link to="/Classes" className="btn btn-secondary">All</Link>{' '}
        
        <p></p>
        </div>

        <CardColumns>
        <Card style = {{ width: '18rem' }}>
        <div className = "pink">
          <Card.Img variant="top" src={require("./images/AdvJazz.png")}/>
          <Card.Body>
            <Card.Title>Advanced Lyrical</Card.Title>
            <Card.Text>
            This lesson will teach dancers advanced moves such as the fan kick, split leap and swish split.{' '}
            </Card.Text>
            <Button variant="secondary">Start Lesson</Button>
          </Card.Body>
          </div>

        </Card>  

      </CardColumns>

        </div>
        </div>
    )
}

export default AdvancedLyrical;



import React from 'react'
import {CardDeck, Card, Button} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import Find from './Find'
import '../App.css'
import Navigation from './Navigation';

const All = () =>{
    return(
      
        <div className ="container">
        <CardDeck>
        <Card>
        <div className = "pink">
        <Card.Img variant="top" src={require("./images/BalletBegin.png")}  />
      <Card.Body>
        <Card.Title>Beginner Ballet</Card.Title>
    <Card.Text>
            This lesson will teach dancers beginner moves such as the demi-plie, tendu, and 1st through 5th position. {' '}
            </Card.Text>
  
            <Link to="/other" className="btn btn-secondary">Start Lesson</Link>{' '}
          </Card.Body>
          </div>
         
              
        </Card>

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
          <Card.Img variant="top" src={require("./images/JazzBeginner.png")}  />
          <Card.Body>
            <Card.Title> Beginner Lyrcial</Card.Title>
            <Card.Text>
            This lesson will teach dancers beginner moves such as the sashay, pivot step and the step ball change. {' '}
            </Card.Text>
            <Button variant="secondary">Start Lesson</Button>
          </Card.Body>
          </div>

        </Card>
      </CardDeck>
      <br></br>
      <CardDeck>
      <Card>
      <div className = "pink">
        <Card.Img variant="top" src={require("./images/AdvJazz.png")}  />
        <Card.Body>
          <Card.Title>Advanced Lyrcial</Card.Title>
         <Card.Text>
          This lesson will teach dancers advanced moves such as the fan kick, split leap and swish split.{' '}
          </Card.Text>
          <Button variant="secondary">Start Lesson</Button>
        </Card.Body>
        </div>

      </Card>

      <Card>
      <div className = "pink">
        <Card.Img variant="top" src={require("./images/Acro.png")}/>
        <Card.Body>
          <Card.Title>Beginner Acro</Card.Title>
          <Card.Text>
          TThis lesson will teach dancers beginner moves such as the cartweel, back walkover and round-off.{' '}
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
      
    )
}

export default All;
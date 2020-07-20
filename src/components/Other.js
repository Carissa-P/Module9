import React from 'react'
import { Col, Container, Row, Form,Button }from 'react-bootstrap';
import{Link} from 'react-router-dom';
import Testing from './Testing';
import Testing2 from './Testing2';
import FormExample from './FormExample';
import { GrLogin} from 'react-icons/gr';
import { RiAccountCircleLine} from 'react-icons/ri';
import '../App.css'
import Navigation from "./Navigation"

const Other = () =>{
    return(
      <div>
      <Navigation/>
      <br></br>

        <div className ="container">
       
            
        <Row xs={1} md={2}>
            <Col>
            <Row>
            <Col> 
            <div className = "left">
            <br></br>
            <h3> <GrLogin /> Login </h3>
        
            <Testing/>
            <Form>             
            <p> </p>
            <h3> <RiAccountCircleLine/> Create Account </h3>
            <p> Start learning today, its FREE!</p>
          </Form>
          </div></Col>
        </Row>
        <div className = "left">

  
        <Form>
        <Form.Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Form.Row>
        <br></br>

        <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email Address" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      </Form>
      </div>
        <Testing2/>
            </Col>

        </Row>
        <br></br>
        <div className = "left">
        <Link to="/Classes" className="btn btn-secondary">Back to Classes</Link>{' '}
        </div>
        </div>

        </div>
    )
}
export default Other;
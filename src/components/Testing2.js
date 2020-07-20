import React from 'react';
import {Form, Button}from 'react-bootstrap';
// Reference: https://stackoverflow.com/questions/30187781/how-to-disable-a-button-when-an-input-is-empty
class Testing2 extends React.Component {
    constructor() {
      super();
      this.state = {
        email: '',
        password: '',
      };
    }
    
    handleEmailChange = (evt) => {
      this.setState({ email: evt.target.value });
    }
    
    handlePasswordChange = (evt) => {
      this.setState({ password: evt.target.value });
    }
    
    handleSubmit = () => {
      const { email, password } = this.state;
      alert(`Welcome ${email} password: ${password}`);
    }
    
    render() {
      const { email, password } = this.state;
      const enabled =
            email.length > 0 &&
            password.length > 0;
      return (
        
        <form onSubmit={this.handleSubmit}>
        
        <div className = "left">

          <Form.Control  
          type="text"
          placeholder="Username"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />

          <br></br>


          <Form.Control
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <br>
          </br>

            <Button
            disabled={!enabled}
            variant="btn btn-secondary"
            onClick={(e) => {
            e.preventDefault();
            window.location.href='http://localhost:3000/BalletVideo';
            }} >Create Account </Button>

        </div>
        </form>
      )
    }
  }
  
export default Testing2;

import React, { Component} from 'react';
import AllLogin from './AllLogin';
import{Link} from 'react-router-dom';
import './Other';
import './Beginner';
import './Advanced';
import Find from './Find'
import Navigation from './Navigation';


class ClassesTwo extends Component{
    render(){
      return(
        <div>
        <Navigation/>
        
        
        
        <div className ="container">
        <Find/>
        <div className = "left">
        <Link to="/Beginner" className="btn btn-secondary">Beginner</Link>{' '}
        <Link to="/Advanced" className="btn btn-secondary">Advanced</Link>{' '}
        <Link to="/Classes" className="btn btn-dark">Both</Link>{' '}

        <p></p>
       
        <Link to="/BothBallet" className="btn btn-secondary">Ballet</Link>{' '}
        <Link to="/BothLyrical" className="btn btn-secondary">Lyrical</Link>{' '}
        <Link to="/BothAcro" className="btn btn-secondary">Acro</Link>{' '}
        <Link to="/Classes" className="btn btn-dark">All</Link>{' '}

        <p></p>
        </div>

        <AllLogin/>
        </div>
        </div>
     
      );
    }
  } export default ClassesTwo;
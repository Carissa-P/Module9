import React from 'react'
import {Row, Col,Card,Button,Alert} from 'react-bootstrap';
import Help2 from './Help2';
import {FaRegComments} from 'react-icons/fa';
import '../App.css'
class MyCommentBox extends React.Component {

//Reference:  https://codepen.io/Lando726/pen/WxrNyO
  constructor() {
    super();
    
    this.state = {
      showComments: false,
      comments: [
        {id: 1, author: "Rachel", body: "I really enjoyed this class!"},
        {id: 2, author: "Scarlette", body: "Very easy to follow along."},
        {id: 3, author: "Noora", body: "This was the first dance class I took online, will definitely take more!"}
      ]
    };
  }
  
  render () {
    const comments = this._getComments();
    let commentNodes;
    let buttonText = 'Show Comments';
    
    if (this.state.showComments) {
      buttonText = 'Hide Comments';
      commentNodes = <div className="comment-list">{comments}</div>;
    }
    
    return(
      <div className ="container">
      <div className = "left">
      <div className="comment-box">
      <h3> <FaRegComments/> Join the Discussion!</h3>
        <CommentForm addComment={this._addComment.bind(this)}/>
        <br></br>
        <button  className = "button2" id="comment-reveal" onClick={this._handleClick.bind(this)}>
          {buttonText}
        </button>
        <h3>Comments</h3>
        <h4 className="comment-count">
          {this._getCommentsTitle(comments.length)}
        </h4>
        {commentNodes}
      </div>  
      </div> 
      </div> 
    );
  } // end render
  
  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
  }
  
  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }
  
  _getComments() {    
    return this.state.comments.map((comment) => { 
      return (
        <Comment 
          author={comment.author} 
          body={comment.body} 
          key={comment.id} />
      ); 
    });
  }
  
  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  }
  
} // end CommentBox component

class CommentForm extends React.Component {
  render() {
    return (
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <div className="comment-form-fields">
          <input placeholder="Name" required ref={(input) => this._author = input}></input><Help2/>
          
          <br />
          <textarea placeholder="Comment" rows="4" cols ="90"required ref={(textarea) => this._body = textarea}></textarea>
        </div>
        <div className="comment-form-actions">
          <button className = "button2" variant="btn btn-secondary">Post Comment</button>
        </div>
      </form>
    );
  } // end render
  
  _handleSubmit(event) { 
    event.preventDefault();   // prevents page from reloading on submit
    let author = this._author;
    let body = this._body;
    this.props.addComment(author.value, body.value);
    
  }
} // end CommentForm component

class Comment extends React.Component {
  render () {
    return(
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">- {this.props.body}</p>
        <div className="comment-footer">

        </div>
      </div>
    );
  }

}
export default MyCommentBox;




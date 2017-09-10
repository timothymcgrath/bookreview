import './Book.css';
import React, { Component } from 'react';

class Book extends Component {

  constructor(props) {
      super(props);
  }


  render() {
    return (
     <div className="book">
        <div className="bookTitle">{this.props.book.title}</div>
        <div className="bookAuthor">{this.props.book.author}</div>
        <div>
          <span className="bookRating">{this.props.book.rating} out of 5</span>
          <span className="bookFinished">{this.props.book.finishedDate}</span> 
        </div>
        <div className="bookReview">{this.props.book.review}</div>
      </div>
    );
  }
}

export default Book;

import React, { Component } from 'react';
import Book from './Book';
import './Books.css';

class Books extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let items = this.props.books.map((d) => (
      <div>
        <Book book={d} />
        <hr />
      </div>
       ));

    return (<div>{items}</div>);
  }
}

export default Books;

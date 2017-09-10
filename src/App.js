import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Books from './Books';
import BookEntry from './BookEntry';
import { Button } from 'react-bootstrap';

class App extends Component {

  constructor() {
    super();

    this.addBook = this.addBook.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleCancelEntry = this.handleCancelEntry.bind(this);
  }

  state = {
    "entryMode": false,
    "books":
    [{
      "title": "The Hunchback of Notre Dame",
      "author": "Unknown Author",
      "finishedDate": "1/3/2017",
      "rating": 3,
      "review": "A pretty good read, but too many hunchbacks."
    },
    {
      "title": "IT",
      "author": "Stephen King",
      "finishedDate": "6/31/2017",
      "rating": 5,
      "review": "Weird ending, but fantastic book."
    },
    {
      "title": "11/22/63",
      "author": "Stephen King",
      "finishedDate": "6/1/2017",
      "rating": 5,
      "review": "This was fantastic, great history and great story!"
    }]
  };

  addBook(book) {
    let newState = this.state.books.concat(book);
    this.setState({
      "books": newState,
      "entryMode": false
    })
  }

  handleAddClick() {
    this.setState({ "entryMode": true });
  }

  handleCancelEntry() {
    this.setState({ "entryMode": false });
  }

  render() {
    let content;

    if (this.state.entryMode) {
      content = (
        <BookEntry
          onCancelEntry={this.handleCancelEntry}
          onAddBook={this.addBook} />
      );
    }
    else {
      content = (
        <Books
          books={this.state.books} />
      );
    }

    var menu;

    if (this.state.entryMode) {
      menu = (
        <div className="AddButton">
          <Button
            bsStyle="primary"
            disabled
            onClick={this.handleAddClick}>Add New Book
        </Button>
        </div>
      );
    }
    else {
      menu = (
        <div className="AddButton">
          <Button
            bsStyle="primary"
            onClick={this.handleAddClick}>Add New Book
          </Button>
        </div>
      );
    }

    return (
      <div className="App">
        <div className="App-header">
          {menu}
          <h2>I Read That</h2>
        </div>

        <div>
          {content}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Shelf from "./Shelf";

class BookShelf extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  };

  render() {
    const currReading = this.props.books.filter(
      book => book.shelf === "currentlyReading"
    );

    return (
      <div className="list-books-content">
        <div className="bookshelf">
          <Shelf books={this.state.currentlyReading} />
          <Shelf books={this.state.wantToRead} />
          <Shelf books={this.state.read} />
        </div>
      </div>
    );
  }
}

export default BookShelf;

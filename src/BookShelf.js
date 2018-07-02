import React, { Component } from "react";
import Shelf from "./Shelf";

class BookShelf extends Component {
  render() {
    const { currentlyReading, wantToRead, read } = this.props;
    return (
      <div className="list-books-content">
        <div className="bookshelf">
          <Shelf
            title="Currently Reading"
            currentlyReading={currentlyReading}
            wantToRead={wantToRead}
            read={read}
          />
          <Shelf
            title="Want to Read"
            currentlyReading={currentlyReading}
            wantToRead={wantToRead}
            read={read}
          />
          <Shelf
            title="Read"
            currentlyReading={currentlyReading}
            wantToRead={wantToRead}
            read={read}
          />
        </div>
      </div>
    );
  }
}

export default BookShelf;

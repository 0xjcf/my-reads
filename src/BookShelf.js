import React, { Component } from "react";
import Shelf from "./Shelf";

class BookShelf extends Component {
  render() {
    const {
      currentlyReading,
      wantToRead,
      read,
      handleShelfChange
    } = this.props;

    return (
      <div className="list-books-content">
        <div className="bookshelf">
          <Shelf
            title="Currently Reading"
            currentlyReading={currentlyReading}
            wantToRead={wantToRead}
            read={read}
            handleShelfChange={handleShelfChange}
          />
          <Shelf
            title="Want to Read"
            currentlyReading={currentlyReading}
            wantToRead={wantToRead}
            read={read}
            handleShelfChange={handleShelfChange}
          />
          <Shelf
            title="Read"
            currentlyReading={currentlyReading}
            wantToRead={wantToRead}
            read={read}
            handleShelfChange={handleShelfChange}
          />
        </div>
      </div>
    );
  }
}

export default BookShelf;

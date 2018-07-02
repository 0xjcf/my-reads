import React, { Component } from "react";
import Shelf from "./Shelf";

class BookShelf extends Component {
  render() {
    const { currentlyReading } = this.props;
    return (
      <div className="list-books-content">
        <div className="bookshelf">
          <Shelf title="Currently Reading" currentlyReading={currentlyReading} />
        </div>
      </div>
    );
  }
}

export default BookShelf;

import React, { Component } from "react";
import Shelf from "./Shelf";

class BookShelf extends Component {
  render() {
    return (
      <div className="list-books-content">
        <div className="bookshelf">
          <Shelf />
        </div>
      </div>
    );
  }
}

export default BookShelf;

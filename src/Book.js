import React, { Component } from "react";

class Book extends Component {
  changeShelf = (book, shelf) => {
    this.props.handleShelfChange(book, shelf);
  };

  render() {
    const { bookCover, title, authors, book } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${bookCover})`
              }}
            />
            <div className="book-shelf-changer">
              <select onChange={(e) => this.changeShelf(book, e.target.value)}>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    );
  }
}

export default Book;

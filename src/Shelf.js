import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
  render() {
    const {
      currentlyReading,
      wantToRead,
      read,
      handleShelfChange
    } = this.props;

    return (
      <React.Fragment>
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.title === "Currently Reading" &&
              currentlyReading.map((book, i) => (
                <Book
                  key={i}
                  title={book.title}
                  authors={book.authors}
                  bookCover={book.imageLinks.thumbnail}
                  handleShelfChange={handleShelfChange}
                  book={book}
                />
              ))}
            {this.props.title === "Want to Read" &&
              wantToRead.map((book, i) => (
                <Book
                  key={i}
                  title={book.title}
                  authors={book.authors}
                  bookCover={book.imageLinks.thumbnail}
                  handleShelfChange={handleShelfChange}
                  book={book}
                />
              ))}
            {this.props.title === "Read" &&
              read.map((book, i) => (
                <Book
                  key={i}
                  title={book.title}
                  authors={book.authors}
                  bookCover={book.imageLinks.thumbnail}
                  handleShelfChange={handleShelfChange}
                  book={book}
                />
              ))}
          </ol>
        </div>
      </React.Fragment>
    );
  }
}

export default Shelf;

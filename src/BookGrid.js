import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import bookPlaceHolder from "./img/noBookCover.png";

class BookGrid extends Component {
  static propTypes = {
    bookList: PropTypes.array.isRequired,
    handleShelfChange: PropTypes.func.isRequired
  };

  render() {
    const { searchResults, bookList, handleShelfChange } = this.props;
    return (
      <div className="search-books-results">
        <div className="books-grid">
          {searchResults.map((result, i) => {
            const bookOnShelf = bookList.find(
              book => book.id === result.id
            );
            return (
              <Book
                key={i}
                title={result.title}
                authors={result.authors}
                bookCover={
                  result.imageLinks !== undefined
                    ? result.imageLinks["thumbnail"]
                    : bookPlaceHolder
                }
                handleShelfChange={handleShelfChange}
                book={result}
                shelf={
                  bookOnShelf !== undefined ? bookOnShelf.shelf : "none"
                }
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BookGrid;

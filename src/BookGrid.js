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

    console.log(searchResults);

    return (
      <div className="search-books-results">
        <div className="books-grid">
          {bookList.map((result, i) => {
            const bookListBook = result.find(r => bookList.id === r.id);
            return (
              <Book
                key={i}
                title={result.title}
                authors={result.authors}
                shelf={bookListBook.shelf ? bookListBook.shelf : "none"}
                bookCover={
                  result.imageLinks !== undefined
                    ? result.imageLinks["thumbnail"]
                    : bookPlaceHolder
                }
                handleShelfChange={handleShelfChange}
                book={result}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BookGrid;

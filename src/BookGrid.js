import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import bookPlaceHolder from './img/noBookCover.png';

const BookGrid = ({ bookList, handleShelfChange }) => {
  return (
    <div className="search-books-results">
      <div className="books-grid">
        {bookList.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            authors={book.authors}
            bookCover={
              book.imageLinks !== undefined
                ? book.imageLinks["thumbnail"]
                : bookPlaceHolder
            }
            handleShelfChange={handleShelfChange}
            book={book}
          />
        ))}
      </div>
    </div>
  );
};

BookGrid.propTypes = {
  bookList: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default BookGrid;

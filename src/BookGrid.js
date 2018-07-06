import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BookGrid = ({ bookList, handleShelfChange }) => {
  return (
    <div className="search-books-results">
      <div className="books-grid">
        {bookList.map((book, i) => (
          <Book
            style={{ float: "left" }}
            key={i}
            title={book.title}
            authors={book.authors}
            bookCover={
              book.imageLinks !== undefined ? book.imageLinks["thumbnail"] : ""
            }
            handleShelfChang={handleShelfChange}
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

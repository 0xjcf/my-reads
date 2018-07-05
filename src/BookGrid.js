import React from "react";
// import Book from "./Book";
import PropTypes from 'prop-types';

const BookGrid = props => {
  // const {bookList, handleShelfChange} = props;
  return (
    <div className="search-books-results">
      <div className="books-grid">
            {/*<Book
        {props.bookList.map((book, i) => (
              key={i}
              title={book.title}
              authors={book.authors}
              bookCover={book.imageLinks.thumbnail}
              handleShelfChange={handleShelfChange}
              book={book}
          ))}
            />*/}
      </div>
    </div>
  );
};

BookGrid.propTypes = {
  bookList: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
}

export default BookGrid;

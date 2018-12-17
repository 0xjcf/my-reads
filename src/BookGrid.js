import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import bookPlaceHolder from "./img/noBookCover.png";

const BookGrid = (props) => {
  const { searchResults, bookList, handleShelfChange } = props;
  return (
    <div className="search-books-results">
      <div className="books-grid">
        {searchResults.map((result, i) => {
          const bookOnShelf = bookList.find(book => book.id === result.id);
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
              shelf={bookOnShelf !== undefined ? bookOnShelf.shelf : "none"}
            />
          );
        })}
      </div>
    </div>
  );
};

BookGrid.propTypes = {
  bookList: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default BookGrid;

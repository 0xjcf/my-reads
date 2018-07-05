import React from "react";
import Book from "./Book";

const BookGrid = props => {
  return (
    <div className="search-books-results">
      <div className="books-grid">
        {props.bookList.error !== "empty query" &&
          props.bookList.map((book, i) => (
            <Book
              key={i}
              title={book.title}
              authors={book.authors}
              bookCover={book.imageLinks.thumbnail}
              handleShelfChange={props.handleShelfChange}
              book={book}
            />
          ))}
      </div>
    </div>
  );
};

export default BookGrid;

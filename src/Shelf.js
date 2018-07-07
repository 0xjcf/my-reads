import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = props => {
  const {
    books,
    handleShelfChange,
    title
  } = props;

  return (
    <React.Fragment>
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books.map((book, i) => (
              <Book
                key={i}
                title={book.title}
                authors={book.authors}
                bookCover={book.imageLinks.thumbnail}
                shelf={book.shelf}
                handleShelfChange={handleShelfChange}
                book={book}
              />
            ))
          }
        </ol>
      </div>
    </React.Fragment>
  );
};

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default Shelf;

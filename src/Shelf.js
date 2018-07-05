import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = props => {
  const {
    currentlyReading,
    wantToRead,
    read,
    handleShelfChange,
    title
  } = props;

  return (
    <React.Fragment>
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {title === "Currently Reading" &&
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
          {title === "Want to Read" &&
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
          {title === "Read" &&
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
};

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  currentlyReading: PropTypes.array.isRequired,
  wantToRead: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default Shelf;

import React from "react";
import Shelf from "./Shelf";
import PropTypes from 'prop-types';

const BookShelf = props => {
  const { books, handleShelfChange } = props;

  return (
    <div className="list-books-content">
      <div className="bookshelf">
        <Shelf
          title="Currently Reading"
          handleShelfChange={handleShelfChange}
          books={books.filter(book => book.shelf === 'currentlyReading')}
        />
        <Shelf
          title="Want to Read"
          handleShelfChange={handleShelfChange}
          books={books.filter(book => book.shelf === 'wantToRead')}
        />
        <Shelf
          title="Read"
          handleShelfChange={handleShelfChange}
          books={books.filter(book => book.shelf === 'read')}
        />
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
}

export default BookShelf;

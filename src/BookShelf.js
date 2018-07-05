import React from "react";
import Shelf from "./Shelf";
import PropTypes from 'prop-types';

const BookShelf = props => {
  const { currentlyReading, wantToRead, read, handleShelfChange } = props;

  return (
    <div className="list-books-content">
      <div className="bookshelf">
        <Shelf
          title="Currently Reading"
          currentlyReading={currentlyReading}
          wantToRead={wantToRead}
          read={read}
          handleShelfChange={handleShelfChange}
        />
        <Shelf
          title="Want to Read"
          currentlyReading={currentlyReading}
          wantToRead={wantToRead}
          read={read}
          handleShelfChange={handleShelfChange}
        />
        <Shelf
          title="Read"
          currentlyReading={currentlyReading}
          wantToRead={wantToRead}
          read={read}
          handleShelfChange={handleShelfChange}
        />
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  currentlyReading: PropTypes.array.isRequired,
  wantToRead: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
}

export default BookShelf;

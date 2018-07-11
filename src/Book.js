import React from "react";
import PropTypes from "prop-types";

const Book = props => {
  const { bookCover, title, authors, book, shelf, handleShelfChange } = props;

  const changeShelf = (book, shelf) => {
    handleShelfChange(book, shelf);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${bookCover})`
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={e => changeShelf(book, e.target.value)}
              value={book.shelf || shelf}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  bookCover: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.array,
  book: PropTypes.object,
  handleShelfChange: PropTypes.func
};

export default Book;

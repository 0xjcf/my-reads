import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import bookPlaceHolder from "./img/noBookCover.png";

class BookGrid extends Component {
  state = {
    shelf: ""
  };

  static propTypes = {
    bookList: PropTypes.array.isRequired,
    handleShelfChange: PropTypes.func.isRequired
  };

  componentDidMount(){
    this.setState({bookList: []})
  }

  render() {
    const { bookList, handleShelfChange } = this.props;

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
              shelf={this.state.shelf}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BookGrid;

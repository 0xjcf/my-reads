import React, { Component } from "react";
import Book from './Book';

class Shelf extends Component {
  render(){
    const { currentlyReading } = this.props;
    console.log(currentlyReading);
    return(
      <React.Fragment>
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {currentlyReading.map((book, i) => (
              <Book 
                key={i}
                title={book.title}
                authors={book.authors}
                bookCover={book.imageLinks.thumbnail}
              />
            ))}
          </ol>
        </div>
      </React.Fragment>
    );
  }
}

export default Shelf;
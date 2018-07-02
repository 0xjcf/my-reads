import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
  render(){
    return(
      <React.Fragment>
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(books => (
              <Book />
            ))}
          </ol>
        </div>
      </React.Fragment>
    );
  }
}

export default Shelf;
import React, { Component } from "react";

class Shelf extends Component {
  render(){
    return(
      <React.Fragment>
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {JSON.stringify(this.props.books)}
          </ol>
        </div>
      </React.Fragment>
    );
  }
}

export default Shelf;
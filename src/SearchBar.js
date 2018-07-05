import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState({ query });
    this.props.searchBooks(query);
  };

  render() {
    const { query } = this.state;
    return (
      <div className="search-books-bar">
        <Link className="close-search" to="/" />
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={e => this.updateQuery(e.target.value)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;

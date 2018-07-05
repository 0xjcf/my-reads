import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SearchBar = ({ searchBooks }) => {
  const updateQuery = query => {
    searchBooks(query);
  };

  return (
    <div className="search-books-bar">
      <Link className="close-search" to="/" />
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          onChange={e => updateQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchBooks: PropTypes.func.isRequired
};

export default SearchBar;

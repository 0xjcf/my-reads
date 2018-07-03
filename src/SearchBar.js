import React from "react";
import { Link } from 'react-router-dom'

const SearchBar = () => (
  <div className="search-books-bar">
    <Link className="close-search" to="/" />
    <div className="search-books-input-wrapper">
      <input type="text" placeholder="Search by title or author" />
    </div>
  </div>
);

export default SearchBar;

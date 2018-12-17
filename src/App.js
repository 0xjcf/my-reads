import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Header from "./Header";
import BookShelf from "./BookShelf";
import ActivateSearch from "./ActivateSearch";
import SearchBar from "./SearchBar";
import BookGrid from "./BookGrid";

class BooksApp extends React.Component {
  state = {
    bookList: [],
    searchResults: []
  };

  // Sets initial State //
  async componentWillMount() {
    // API call to grab all books
    const response = await BooksAPI.getAll().then(books => books);

    // Passing in responses to state
    this.setState({
      bookList: response
    });
  }

  // MyReads Page //
  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf);
    book.shelf = shelf;
    this.updateShelf(book);
  };

  updateShelf = (book) => {
    this.setState(prevState => ({
      bookList: prevState.bookList.filter(b => b !== book ).concat(book)
    }));
  };

  // Search Page //
  searchBooks = async query => {
    const books = await BooksAPI.search(query).then(books => books);

    this.clearSearch(query, books);

    if (books !== undefined && !books.hasOwnProperty("error")) {
      this.setState({ searchResults: books });
    }
  };

  // Handles "" query or undefined book (object)
  clearSearch = (query, books) => {
    if (query === "" || books.hasOwnProperty("error") || books === undefined) {
      this.setState({ searchResults: [] });
    }
  };

  render() {
    const { bookList, searchResults } = this.state;
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <div className="search-books">
              <SearchBar 
                searchBooks={this.searchBooks} 
                placeholder="Search by title or author"
              />
              <BookGrid
                bookList={bookList}
                searchResults={searchResults}
                handleShelfChange={this.handleShelfChange}
              />
            </div>
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <Header />
              <BookShelf
                books={bookList}
                handleShelfChange={this.handleShelfChange}
              />
              <ActivateSearch />
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;

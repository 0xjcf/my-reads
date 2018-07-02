import React from "react";
import { Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Header from "./Header";
import BookShelf from "./BookShelf";
import ActivateSearch from "./ActivateSearch";

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  };

  async componentWillMount() {
    const response = await BooksAPI.getAll().then(books => books);
    const currentBooks = this.readingNow(response);
    const wantToBooks = this.willRead(response);
    const readBooks = this.haveRead(response);
    this.setState({
      currentlyReading: currentBooks,
      wantToRead: wantToBooks,
      read: readBooks
    });
  }

  readingNow = books => {
    return books.filter(book => book.shelf === "currentlyReading");
  };

  willRead = books => {
    return books.filter(book => book.shelf === "wantToRead");
  };

  haveRead = books => {
    return books.filter(book => book.shelf === "read");
  };

  render() {
    const { currentlyReading, wantToRead, read } = this.state;
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/" />
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid" />
              </div>
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
                currentlyReading={currentlyReading}
                wantToRead={wantToRead}
                read={read}
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

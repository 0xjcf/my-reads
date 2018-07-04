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
    console.log(this.state);
  }

  handleShelfChange = (book, shelf) => {
    // BooksAPI.update(book, shelf);
    switch (shelf) {
      case "currentlyReading":
        this.setState(prevState => ({
          currentlyReading: [...prevState.currentlyReading, book]
        }));
        break;
      case "wantToRead":
        this.setState(prevState => ({
          wantToRead: [...prevState.wantToRead, book]
        }));
        break;
      case "read":
        this.setState(prevState => ({
          read: [...prevState.read, book]
        }));
        break;
      default:
        console.log("No Match!");
    }
  };

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
              <SearchBar />
              <BookGrid />
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

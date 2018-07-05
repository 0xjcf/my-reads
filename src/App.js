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
    read: [],
    none: [],
    bookList: []
  };

  // === Sets initial State === //
  async componentWillMount() {
    // API call to grab all books
    const response = await BooksAPI.getAll().then(books => books);

    const currentBooks = this.readingNow(response); // Filtered currentlyReading
    const wantToBooks = this.willRead(response); // Filtered wantToRead
    const readBooks = this.haveRead(response); // Filtered read

    // Passing in Filtered responses to state
    this.setState({
      currentlyReading: currentBooks,
      wantToRead: wantToBooks,
      read: readBooks
    });
  }

  // === MyReads Page === //

  handleShelfChange = (book, shelf) => {
    this.removeFromShelf(book, shelf);
    this.addToShelf(book, shelf);
  };

  removeFromShelf = (book, shelf) => {
    switch (book.shelf) {
      case "currentlyReading":
        book.shelf = shelf;
        this.setState(prevState => ({
          currentlyReading: prevState.currentlyReading.filter(
            book => book.shelf === "currentlyReading"
          )
        }));
        break;
      case "wantToRead":
        book.shelf = shelf;
        this.setState(prevState => ({
          wantToRead: prevState.wantToRead.filter(
            book => book.shelf === "wantToRead"
          )
        }));
        break;
      case "read":
        book.shelf = shelf;
        this.setState(prevState => ({
          read: prevState.read.filter(book => book.shelf === "read")
        }));
        break;
      case "none":
        book.shelf = shelf;
        this.setState(prevState => ({
          none: prevState.none.filter(book => book.shelf === "none")
        }));
        break;
      default:
        console.log("error removing book...");
    }
  };

  addToShelf = (book, shelf) => {
    switch (shelf) {
      case "currentlyReading":
        if (!this.state.currentlyReading.includes(book)) {
          book.shelf = shelf;
          this.setState(prevState => ({
            currentlyReading: prevState.currentlyReading.concat(book)
          }));
        }
        break;
      case "wantToRead":
        if (!this.state.wantToRead.includes(book)) {
          book.shelf = shelf;
          this.setState(prevState => ({
            wantToRead: prevState.wantToRead.concat(book)
          }));
        }
        break;
      case "read":
        if (!this.state.read.includes(book)) {
          book.shelf = shelf;
          this.setState(prevState => ({
            read: prevState.read.concat(book)
          }));
        }
        break;
      case "none":
        if (!this.state.none.includes(book)) {
          book.shelf = shelf;
          this.setState(prevState => ({
            none: prevState.none.concat(book)
          }));
        }
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

  // === Search Page === //

  searchBooks = async query => {
    const bookList = await BooksAPI.search(query.trim()).then(books => books);
    if (bookList !== undefined && !bookList.hasOwnProperty("error")) {
      this.setState({bookList})
    }
    console.log(this.state.bookList)
  };

  render() {
    const { currentlyReading, wantToRead, read, bookList } = this.state;
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <div className="search-books">
              <SearchBar searchBooks={this.searchBooks} />
              <BookGrid
                bookList={bookList}
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

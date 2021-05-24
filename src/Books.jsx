import React, { Component } from "react";
import SearchArea from "./SearchArea";
import BookList from "./BookList"
import request from "superagent";

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (e) => {
        request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query ({ q: this.state.searchField })
        .then ((data) => {
            this.setState({ books: [...data.body.items]})
        })
    }

    //method a search field event
    handleSearch = (e) => {
        // console.log(e.target.value);
        this.setState({ searchField: e.target.value })
    }

    render() {
    return (
      <div>
          {/* made the method above into a prop */}
          <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
          <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Books;
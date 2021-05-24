import React, { Component } from "react";
import SearchArea from "./SearchArea";

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
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
          <SearchArea handleSearch={this.handleSearch} />
      </div>
    );
  }
}

export default Books;
import React, { Component } from "react";

import BookList from "../container/BookList";
import Header from "../container/Header";

class RootPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <BookList />
      </div>
    );
  }
}

export default RootPage;

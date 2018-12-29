import React, { Component } from "react";
import RandomTitle from "./RandomTitle/RandomTitle";
import BookParams from "./BookParams/BookParams";
import BookId from "./BookId/BookId";

class CreateBook extends Component<any, any> {
  render() {
    return (
      <div className="m-card">
        <BookParams />
        <BookId />
        <RandomTitle />
      </div>
    );
  }
}

export default CreateBook;

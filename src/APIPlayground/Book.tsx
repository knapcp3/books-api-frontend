import React, { Component } from "react";

class Book extends Component<any, any> {
  render() {
    if (this.props.book) {
      const { author, title, id, publish_year } = this.props.book;

      return (
        <div className="m-card">
          <div>ID: {id}</div>
          <div>author: {author}</div>
          <div>title: {title}</div>
          <div>year of publication: {publish_year}</div>
        </div>
      );
    }

    return <div className="m-card">Book Not Found!</div>;
  }
}

export default Book;

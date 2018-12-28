import React, { Component } from "react";
import Book from "../Book";

class BookId extends Component<any, any> {
  render() {
    const { onChangeBookFromId, handleBookFromIdClick, book } = this.props;
    return (
      <div className="flex-hor">
        <div>
          <input
            onChange={onChangeBookFromId}
            value={this.props.id}
            type="number"
            min="1"
            max="10"
          />
          <button type="submit" onClick={handleBookFromIdClick}>
            search with book id
          </button>
        </div>
        {book && <Book book={book} />}
      </div>
    );
  }
}

export default BookId;

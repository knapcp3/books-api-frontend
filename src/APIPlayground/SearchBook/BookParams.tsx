import React, { Component } from "react";
import Book from "./../Book";

class BookParams extends Component<any, any> {
  render() {
    const {
      book,
      param,
      onChangeBookFromParams,
    //   handleBookFromParamsClick
    } = this.props;
    return (
      <div className="flex-hor">
        <div>
          <input onChange={onChangeBookFromParams} value={param} type="text" />
          {/* <button type="submit" onClick={handleBookFromParamsClick}>
            search with book id
          </button> */}
        </div>
        {book && <Book book={book} />}
      </div>
    );
  }
}

export default BookParams;

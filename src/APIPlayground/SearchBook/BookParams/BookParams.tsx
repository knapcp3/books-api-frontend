import React, { Component } from "react";
import Book from "../../Book";
import { IBook } from "./../../../models/API/Book.model";
import { SearchConsumer } from "../../../context/SearchContext";
import SearchFilter from "./SearchFilter";

class BookParams extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      book: undefined,
      books: [],
    };
  }

  handleBookSearchFilterClick = (e: any) => {
    this.setState({
      book: this.state.books[e.target.dataset.index],
      books: []
    });
  };

  handleBooksChange = (results: IBook[]) => {
    this.setState({
      books: results
    });
  }

  render() {
    const { book, books } = this.state;
    const { searchService } = this.props;

    return (
      <div className="flex-hor">
        <SearchFilter
          searchService={searchService}
          handleSearchFilterClick={this.handleBookSearchFilterClick}
          handleResChange={this.handleBooksChange}
          results={books}
        />
        <div>{book !== undefined && <Book book={book} />}</div>
      </div>
    );
  }
}

export default function BookParamsWithContext(props: any) {
  return (
    <SearchConsumer>
      {context => <BookParams {...props} searchService={context} />}
    </SearchConsumer>
  );
}

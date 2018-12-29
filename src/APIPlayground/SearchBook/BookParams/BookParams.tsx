import React, { Component } from "react";
import Book from "../../Book";
import { IBook } from "../../../models/API/Book.model";
import { SearchConsumer } from "../../../context/SearchContext";

class BookParams extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      book: undefined,
      books: [],
      termValue: ""
    };
  }

  componentDidMount() {
    this.props.searchService.getResults().subscribe((b: any) => {
      this.setState({
        books: b.data || []
      });
    });
  }

  onChangeBookFromParams = (e: any) => {
    const term: string = e.target.value;
    this.setState({
      termValue: term
    });
    this.props.searchService.search(term);
  };

  handleBookSearchFilterClick = (e: any) => {
    this.setState({
      book: this.state.books[e.target.dataset.index],
      books: [],
      termValue: ""
    });
  };

  render() {
    const { book, books, termValue } = this.state;

    return (
      <div className="flex-hor">
        <div>
          <p>Search for a book with author or title:</p>
          <input
            onChange={this.onChangeBookFromParams}
            value={termValue}
            type="text"
          />
          <ul className="search-filter-list">
            {books.map((book: IBook, index: number) => (
              <li
                className="search-filter-link"
                onClick={this.handleBookSearchFilterClick}
                key={book.id}
                data-index={index}
              >
                {book.author} - {book.title}
              </li>
            ))}
          </ul>
        </div>
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

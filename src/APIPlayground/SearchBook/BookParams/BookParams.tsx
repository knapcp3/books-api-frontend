import React, { Component } from "react";
import Book from "../../Book";
// import { IBook } from "./../../../models/API/Book.model";
import { SearchConsumer } from "../../../context/SearchContext";
import SearchFilter from "./SearchFilter";

class BookParams extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      book: undefined
    };
  }

  handleSelectedValue = (value: any) => {
    this.setState({
      book: value
    });
  };

  render() {
    const { book } = this.state;
    const { searchService } = this.props;

    return (
      <div className="flex-hor">
        <SearchFilter
          searchService={searchService}
          handleSelectedValue={this.handleSelectedValue}
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

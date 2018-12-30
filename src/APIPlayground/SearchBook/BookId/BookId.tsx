import React, { Component } from "react";
import Book from "../../Book";
import axios from "axios";
import config from "../../../config";

class BookId extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      bookFromId: undefined,
      bookIdValue: "1"
    };
  }

  componentDidMount() {
    this.fetchBookFromId(+this.state.bookIdValue);
  }

  handleBookFromIdClick = () => {
    const id = +this.state.bookIdValue;
    this.fetchBookFromId(id);
  };

  onChangeBookFromId = (e: any) => {
    this.setState({
      bookIdValue: e.target.value
    });
  };

  fetchBookFromId(id: number) {
    axios
      .get(`${config.baseUrl}/api/book/${id}`)
      .then(res => {
        if (res.status > 400) throw new Error("Error Response From Server");
        return res.data;
      })
      .then(book => {
        this.setState({
          bookFromId: book
        });
      })
      .catch(err => {
        this.setState({
          bookFromId: null
        });
        console.log(err);
      });
  }

  render() {
    const { bookFromId, bookIdValue } = this.state;

    return (
      <div className="flex-hor">
        <div>
          <input
            onChange={this.onChangeBookFromId}
            value={bookIdValue}
            type="number"
            min="1"
            max="10"
          />
          <button type="submit" onClick={this.handleBookFromIdClick}>
            search with book id
          </button>
        </div>
        {bookFromId !== undefined && <Book book={bookFromId} />}
      </div>
    );
  }
}

export default BookId;

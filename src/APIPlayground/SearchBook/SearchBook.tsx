import React, { Component } from "react";
import RandomTitle from "./RandomTitle";
import BookParams from "./BookParams";
import BookId from "./BookId";
import axios from "axios";
import config from "../../config";
import ISearchBookState from "./../../models/ISearchBookState";

class CreateBook extends Component<any, ISearchBookState> {
  constructor(props: any) {
    super(props);
    this.state = {
      randomTitle: "",
      bookFromId: undefined,
      bookIdValue: "1",
    };
  }

  componentDidMount() {
    this.fetchBookFromId(+this.state.bookIdValue);
    this.fetchRandomTitle();
  }

  handleRandomTitleClick = () => {
    this.fetchRandomTitle();
  };

  handleBookFromIdClick = () => {
    const id = +this.state.bookIdValue;
    this.fetchBookFromId(id);
  };

  onChangeBookFromId = (e: any) => {
    this.setState({
      bookIdValue: e.target.value
    });
  };

  fetchRandomTitle() {
    axios
      .get(`${config.baseUrl}/api/book/random-title`)
      .then(res => {
        if (res.status > 400) throw new Error("Error Response From Server");
        return res.data;
      })
      .then(book => {
        this.setState({
          randomTitle: book.title
        });
      })
      .catch(err => {
        this.setState({
          randomTitle: undefined
        });
        console.log(err);
      });
  }

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
    const {
      randomTitle,
      bookIdValue,
      bookFromId,
    } = this.state;
    return (
      <div className="m-card">
        <RandomTitle
          randomTitle={randomTitle}
          handleRandomTitleClick={this.handleRandomTitleClick}
        />
        <BookId
          book={bookFromId}
          bookIdValue={bookIdValue}
          handleBookFromIdClick={this.handleBookFromIdClick}
          onChangeBookFromId={this.onChangeBookFromId}
        />
        <BookParams
          // handleBookFromParamsClick={this.handleBookFromParamsClick}
        />
      </div>
    );
  }
}

export default CreateBook;
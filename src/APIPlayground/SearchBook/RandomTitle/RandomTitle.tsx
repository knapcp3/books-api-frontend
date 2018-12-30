import React, { Component } from "react";
import axios from "axios";
import config from "../../../config";

class RandomTitle extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      randomTitle: ""
    };
  }

  handleRandomTitleClick = () => {
    this.fetchRandomTitle();
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
          randomTitle: null
        });
        console.log(err);
      });
  }

  render() {
    return (
      <div className="flex-hor">
        <section>
          <button onClick={this.handleRandomTitleClick}>
            random title from db
          </button>
        </section>
        <section>{this.state.randomTitle}</section>
      </div>
    );
  }
}

export default RandomTitle;

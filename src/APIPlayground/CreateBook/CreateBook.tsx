import React, { Component } from "react";
import axios from "axios";
import config from "./../../config";
import { BookModel } from "./../../models/API/Book.model";
import CreateBookModal from "./CreateBookModal";
import CreateBookForm from "./CreateBookForm";
import "./../../styles/CreateBookModal.css";
import "./../../styles/CreateBookForm.css";

class CreateBook extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      showModal: false,
      title: "",
      author: "",
      publish_year: "",
      info: ""
    };
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  onChangeTitle = (e: any) => {
    this.setState({
      title: e.target.value
    });
  };

  onChangeAuthor = (e: any) => {
    this.setState({
      author: e.target.value
    });
  };

  onChangePublishYear = (e: any) => {
    this.setState({
      publish_year: e.target.value
    });
  };

  onSubmit = (e: any) => {
    e.preventDefault();
    this.postBook();
    this.setState({
      title: "",
      author: "",
      publish_year: ""
    });
    this.toggleModal();
  };

  postBook() {
    const { author, title, publish_year } = this.state;

    if (!author || !title || (!publish_year && publish_year !== 0)) {
      this.setState({
        info: "Incorrect input values"
      });
    } else {
      const bookModel = new BookModel(undefined, title, author, +publish_year);
      axios
        .post(`${config.baseUrl}/api/book`, bookModel)
        .then(res => {
          this.setState({
            info: `Book with id ${res.data} created!`
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  render() {
    const { showModal, info } = this.state;

    return (
      <div className="m-card">
        {showModal ? (
          <CreateBookModal>
            <CreateBookForm
              toggleModal={this.toggleModal}
              onChangeTitle={this.onChangeTitle}
              onChangeAuthor={this.onChangeAuthor}
              onChangePublishYear={this.onChangePublishYear}
              onSubmit={this.onSubmit}
            />
          </CreateBookModal>
        ) : null}

        <div>
          <button onClick={this.toggleModal}>Create a new book!</button>
          {info && <p>{info}</p>}
        </div>
      </div>
    );
  }
}

export default CreateBook;

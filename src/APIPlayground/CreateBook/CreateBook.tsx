import React, { Component } from "react";
import CreateBookModal from "./CreateBookModal";
import "./../../styles/CreateBookModal.css";

class CreateBook extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    const { showModal } = this.state;

    return (
      <div className="m-card">
        {showModal ? (
          <CreateBookModal>
            MODAL!!!
            <button onClick={this.toggleModal}>XD</button>
          </CreateBookModal>
        ) : null}

        <div>
          <button onClick={this.toggleModal}>Create a new book!</button>
        </div>
      </div>
    );
  }
}

export default CreateBook;

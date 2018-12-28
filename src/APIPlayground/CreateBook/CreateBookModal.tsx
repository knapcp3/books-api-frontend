import { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot: HTMLElement = document.getElementById("modal");

class CreateBookModal extends Component<any, any> {
  element: any = undefined;

  constructor(props: any) {
    super(props);

    this.element = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }

  render() {
    return createPortal(this.props.children, this.element);
  }
}

export default CreateBookModal;

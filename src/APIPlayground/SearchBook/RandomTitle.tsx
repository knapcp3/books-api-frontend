import React, { Component } from "react";
import IRandomTitleProps from "../../models/IRandomTitleProps";

class RandomTitle extends Component<IRandomTitleProps, any> {
  render() {
    return (
      <div className="flex-hor">
        <section>
          <button onClick={this.props.handleRandomTitleClick}>
            random title from db
          </button>
        </section>
        <section>{this.props.randomTitle}</section>
      </div>
    );
  }
}

export default RandomTitle;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component<any, any> {
  render() {
    return (
      <nav>
        <ul className="main-nav">
          <li className="nav-elem">
            <Link to="/" className="nav-link">
              Search for books
            </Link>
          </li>
          <li className="nav-elem">
            <Link to="/create-book" className="nav-link">
              Create a book
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;

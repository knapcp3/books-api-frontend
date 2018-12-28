import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import CreateBook from "./CreateBook/CreateBook";
import SearchBook from "./SearchBook/SearchBook";

class APIPlayground extends Component<any, any> {
  render() {
    return (
      <section className="api-playground">
        <header>API Playground</header>
        <Switch>
          <Route exact path="/" component={SearchBook} />
          <Route path="/create-book" component={CreateBook} />
        </Switch>
      </section>
    );
  }
}

export default APIPlayground;
